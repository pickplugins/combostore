/**
 * Template: Nexora Tech.
 *
 * A modern site for an IT startup or software company. Like WonderJoy.js and
 * BikeParts.js it is a complete storefront carrying all sixteen page types -
 * Header, Footer, Home, Shop, Product, the six taxonomy archives, Blog
 * Archive, Blog Single, Account, Thank you and 404 - so applying it replaces
 * every page. The shop sells the company's software, plugins and licenses.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to nx-, palette remapped, copy rewritten), so it
 * uses only blocks and option shapes already proven on the builder and the
 * storefront. Home is built fresh from the same block types. It is plain
 * data: edit freely.
 *
 * DESIGN
 *
 *   indigo  #4F46E5  primary buttons, links, accents       #4338CA hover   #EEF2FF tint
 *   cyan    #06B6D4  secondary accents, gradients           #0891B2 hover   #ECFEFF tint
 *   violet  #8B5CF6  gradient mid-stop, accent
 *   navy    #0B1120  text, dark hero, stats band, featured plan   #070B16 footer
 *   slate   #64748B  muted text                             #F8FAFC banded sections
 *
 * Fonts (template meta): Space Grotesk for headings, Inter for body, both from
 * Google Fonts. Colours are arbitrary Tailwind values, so they compile on the
 * storefront from the blocks themselves (lib/pageStyles.js).
 *
 * HOME
 *
 *   Dark hero with grid backdrop and glow, dashboard mockup
 *   (public/templates/nexora-hero.svg) and two floating stat cards (hidden on
 *   phones) - client logo strip - six services (#services) - product slider
 *   of cmb_product (#products) - stats band - four-step process (#process) -
 *   why-us split with tech chips and a featurebox - three pricing plans
 *   (#pricing) - client stories slider - latest three blog posts
 *   (#insights) - FAQ accordion (#faq) - contact CTA (#contact).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Contact details (+1 (555) 010-2040, hello@example.com, also in the home
 *     CTA's mailto button), social URLs and the Privacy / Terms links (#).
 *   - The client logos (Northwind, Lumora, ...) and the six client stories
 *     are sample copy: replace them with real clients or remove them.
 *   - Hero and stats-band numbers, and the pricing plans, are placeholders.
 *   - There is no contact-form block: "Start a project" buttons go to the
 *     #contact CTA, whose button opens the email client.
 */

var template = [
  {
    "name": "Nexora Tech",
    "description": "Modern IT startup and software company site in indigo, cyan and deep navy: a dark hero with a dashboard mockup, client logos, services, a product slider for software and licenses, process steps, pricing plans, client stories, blog insights, FAQ and a contact CTA. All 16 pages.",
    "thumbnail": "/templates/nexora.svg",
    "meta": {
      "fonts": [
        {
          "family": "Space Grotesk",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Inter",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Space Grotesk",
        "body": "Inter"
      },
      "colors": {
        "primary": "#4F46E5",
        "secondary": "#06B6D4",
        "accent": "#8B5CF6",
        "background": "#F8FAFC",
        "foreground": "#0B1120",
        "muted": "#64748B"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "nx-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl"
              }
            },
            "children": [
              {
                "id": "nx-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#0B1120] px-4 py-2 text-center text-xs font-medium text-slate-300 md:text-sm"
                  }
                },
                "children": [
                  {
                    "id": "nx-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Copilot 2.0 is live: AI code reviews in minutes.",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "nx-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "NEW",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "order-first rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "See what's new",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/shop",
                      "target": "",
                      "icon": "IconArrowRight",
                      "iconSize": 14
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden cursor-pointer items-center gap-1 text-white sm:inline-flex"
                      },
                      "icon": {
                        "classes": "flex shrink-0 items-center"
                      },
                      "label": {
                        "classes": "text-xs font-semibold text-white hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "nx-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 items-center justify-between gap-4 lg:h-[72px]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "N",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5] via-[#8B5CF6] to-[#06B6D4] font-heading font-bold text-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.55)]"
                              }
                            }
                          },
                          {
                            "id": "nx-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Nexora",
                                  "src": "https://placehold.co/200x64?text=Nexora",
                                  "altText": "Nexora Labs",
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
                                    "classes": "font-heading text-xl font-bold tracking-tight text-[#0B1120]"
                                  }
                                }
                              },
                              {
                                "id": "nx-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Software Studio",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64748B]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nx-hdr-menu",
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
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-heading text-[15px] font-medium text-slate-600 transition-colors hover:text-[#4F46E5]"
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
                            "id": "nx-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "Services",
                              "url": "/#services",
                              "icon": "",
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
                            "id": "nx-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "Products",
                              "url": "/shop",
                              "icon": "",
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
                            "id": "nx-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "Process",
                              "url": "/#process",
                              "icon": "",
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
                            "id": "nx-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "Pricing",
                              "url": "/#pricing",
                              "icon": "",
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
                            "id": "nx-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "Get a Quote",
                              "url": "/#contact",
                              "icon": "IconArrowUpRight",
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
                                "classes": "!text-[#4F46E5] font-semibold"
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
                        "id": "nx-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search software & licenses...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-gray-200 bg-[#F8FAFC] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#06B6D4] focus-within:ring-2 focus-within:ring-[#06B6D4]/20 ml-4 hidden max-w-xs flex-1 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#0B1120] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#64748B]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#4F46E5]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#4F46E5]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#4F46E5] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#4338CA]"
                          }
                        }
                      },
                      {
                        "id": "nx-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F8FAFC] text-[#0B1120] transition-colors hover:bg-[#EEF2FF] hover:text-[#4F46E5]"
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
                            "id": "nx-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#06B6D4] text-white shadow-[0_10px_25px_-5px_rgba(6,182,212,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#0891B2]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#4F46E5] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F8FAFC] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#0B1120]"
                              },
                              "title-icon": {
                                "classes": "text-[#4F46E5]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#4F46E5] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4338CA]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#4F46E5] px-4 py-2 text-sm font-medium text-[#4F46E5] transition-colors hover:bg-[#4F46E5] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#4338CA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "nx-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0B1120]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F8FAFC] p-2 text-[#0B1120] transition-colors hover:bg-[#4F46E5] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "N",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-9 w-9 text-lg items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5] via-[#8B5CF6] to-[#06B6D4] font-heading font-bold text-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.55)]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nx-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Nexora",
                                          "src": "https://placehold.co/200x64?text=Nexora",
                                          "altText": "Nexora Labs",
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
                                            "classes": "font-heading text-xl font-bold tracking-tight text-[#0B1120]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nx-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Software Studio",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64748B]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "nx-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search software & licenses...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F8FAFC] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#06B6D4] focus-within:ring-2 focus-within:ring-[#06B6D4]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#0B1120] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#64748B]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#4F46E5]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#4F46E5]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#4F46E5] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#4338CA]"
                                  }
                                }
                              },
                              {
                                "id": "nx-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-slate-100 py-3 font-heading font-medium text-[#0B1120] transition-colors hover:text-[#4F46E5]"
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
                                    "id": "nx-hdr-mm-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Services",
                                      "url": "/#services",
                                      "icon": "",
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
                                    "id": "nx-hdr-mm-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Products",
                                      "url": "/shop",
                                      "icon": "",
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
                                    "id": "nx-hdr-mm-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Process",
                                      "url": "/#process",
                                      "icon": "",
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
                                    "id": "nx-hdr-mm-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Pricing",
                                      "url": "/#pricing",
                                      "icon": "",
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
                                    "id": "nx-hdr-mm-5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Get a Quote",
                                      "url": "/#contact",
                                      "icon": "IconArrowUpRight",
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
                                        "classes": "!text-[#4F46E5] font-semibold"
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
            "id": "nx-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#070B16] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "nx-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "nx-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#4F46E5] via-[#6D28D9] to-[#0E7490] p-8 shadow-[0_30px_80px_-30px_rgba(79,70,229,0.6)] sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Let's build together",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block rounded-full bg-white/15 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Have a product idea? Ship it in weeks, not quarters.",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-bold text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nx-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Tell us what you are building. A senior engineer replies within one business day with a plan, timeline and estimate.",
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
                        "id": "nx-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Start a project",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#contact",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-3.5 shadow-lg transition-all hover:-translate-y-0.5"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#4F46E5]"
                          },
                          "label": {
                            "classes": "whitespace-nowrap font-heading font-semibold text-[#0B1120]"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "nx-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "nx-ftr-grid",
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
                        "id": "nx-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "N",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5] via-[#8B5CF6] to-[#06B6D4] font-heading text-xl font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Nexora",
                                      "src": "https://placehold.co/200x64?text=Nexora",
                                      "altText": "Nexora Labs",
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
                            "id": "nx-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Nexora Labs designs, builds and runs cloud software for startups and growing companies: product engineering, AI, DevOps and security under one roof.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "nx-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-ftr-fb",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://linkedin.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandLinkedin",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4F46E5]"
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
                                "id": "nx-ftr-ig",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://github.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandGithub",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4F46E5]"
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
                                "id": "nx-ftr-yt",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://x.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandX",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4F46E5]"
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
                                "id": "nx-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4F46E5]"
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
                        "id": "nx-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Solutions",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Custom Software",
                                  "icon": "",
                                  "slug": "/#services"
                                },
                                {
                                  "text": "Cloud & DevOps",
                                  "icon": "",
                                  "slug": "/#services"
                                },
                                {
                                  "text": "AI & Data",
                                  "icon": "",
                                  "slug": "/#services"
                                },
                                {
                                  "text": "Software & Licenses",
                                  "icon": "",
                                  "slug": "/shop"
                                },
                                {
                                  "text": "Pricing",
                                  "icon": "",
                                  "slug": "/#pricing"
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
                                "classes": "transition-colors hover:text-white"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-ftr-ll-care",
                            "type": "linkList",
                            "options": {
                              "headerText": "Company",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "How We Work",
                                  "icon": "",
                                  "slug": "/#process"
                                },
                                {
                                  "text": "Insights & Blog",
                                  "icon": "",
                                  "slug": "/blog"
                                },
                                {
                                  "text": "Client Portal",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Privacy Policy",
                                  "icon": "",
                                  "slug": "#"
                                },
                                {
                                  "text": "Terms of Service",
                                  "icon": "",
                                  "slug": "#"
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
                                "classes": "transition-colors hover:text-white"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-ftr-contact-h",
                            "type": "heading",
                            "options": {
                              "text": "Get in Touch",
                              "tag": "h4"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": {
                                "icon": "IconPhone",
                                "label": "Phone",
                                "value": "+1 (555) 010-2040"
                              },
                              "email": {
                                "icon": "IconMail",
                                "label": "Email",
                                "value": "hello@example.com"
                              },
                              "location": {
                                "icon": "IconMapPin",
                                "label": "Office",
                                "value": "Remote-first, worldwide",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-white"
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
                                "classes": "shrink-0 text-[#4F46E5]"
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
                "id": "nx-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "nx-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Nexora Labs. All rights reserved. Built with care by engineers.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "nx-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-ftr-pay-visa",
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
                        "id": "nx-ftr-pay-mc",
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
                        "id": "nx-ftr-pay-apple",
                        "type": "icon",
                        "options": {
                          "iconName": "IconBrandApple",
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
                        "id": "nx-ftr-pay-pp",
                        "type": "icon",
                        "options": {
                          "iconName": "IconBrandPaypal",
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
            "id": "nx-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0B1120] pb-20 pt-14 lg:pb-28 lg:pt-20"
              }
            },
            "children": [
              {
                "id": "nx-hero-grid-bg",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
                  }
                },
                "children": []
              },
              {
                "id": "nx-hero-glow-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-[#4F46E5] opacity-30 blur-[120px]"
                  }
                },
                "children": []
              },
              {
                "id": "nx-hero-glow-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[#06B6D4] opacity-20 blur-[100px]"
                  }
                },
                "children": []
              },
              {
                "id": "nx-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "nx-hero-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-14 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-6 text-center lg:col-span-6 lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-hero-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 backdrop-blur"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-hero-badge-new",
                                "type": "text",
                                "options": {
                                  "text": "New",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-hero-badge-txt",
                                "type": "text",
                                "options": {
                                  "text": "Copilot 2.0: AI-assisted delivery is here",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-medium text-slate-300 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "We Build Software That Scales With Your Ambition",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "nx-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Nexora is a product engineering studio for startups and growing companies. From MVP to millions of users, we design, build and run cloud software, AI features and the infrastructure behind them.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0"
                              }
                            }
                          },
                          {
                            "id": "nx-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Start a Project",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#contact",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#4338CA] w-full sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center text-white"
                                  },
                                  "label": {
                                    "classes": "whitespace-nowrap font-heading text-base font-semibold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Explore Products",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconApps",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 w-full sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center text-white"
                                  },
                                  "label": {
                                    "classes": "whitespace-nowrap font-heading text-base font-semibold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 lg:mx-0"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-hero-stat-0",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-hero-stat-0-v",
                                    "type": "text",
                                    "options": {
                                      "text": "250+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-2xl font-bold text-white sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-hero-stat-0-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Products shipped",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-slate-400"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "99.99%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-2xl font-bold text-white sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-hero-stat-1-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Uptime SLA",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-slate-400"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "4.9/5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-2xl font-bold text-white sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-hero-stat-2-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Client rating",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-slate-400"
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
                        "id": "nx-hero-visual",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex justify-center lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-hero-visual-in",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative w-full max-w-xl"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-hero-art",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_40px_100px_-30px_rgba(79,70,229,0.55)] backdrop-blur"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-hero-art-img",
                                    "type": "image",
                                    "options": {
                                      "src": "/templates/nexora-hero.svg",
                                      "altText": "Analytics dashboard with deployment and performance charts",
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
                                        "classes": "h-auto w-full rounded-2xl"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-hero-float-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute -left-4 top-10 lg:-left-10 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111A33]/90 p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur sm:flex"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-hero-float-1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconRocket",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4F46E5]/20 text-[#A5B4FC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-hero-float-1-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nx-hero-float-1-k",
                                        "type": "text",
                                        "options": {
                                          "text": "Deploys today",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block text-[11px] font-medium uppercase tracking-wider text-slate-400"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nx-hero-float-1-v",
                                        "type": "text",
                                        "options": {
                                          "text": "128 releases",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-semibold text-white"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "nx-hero-float-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute -bottom-6 -right-3 lg:-right-8 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111A33]/90 p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur sm:flex"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-hero-float-2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShieldCheck",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06B6D4]/15 text-[#06B6D4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-hero-float-2-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nx-hero-float-2-k",
                                        "type": "text",
                                        "options": {
                                          "text": "Security",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block text-[11px] font-medium uppercase tracking-wider text-slate-400"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nx-hero-float-2-v",
                                        "type": "text",
                                        "options": {
                                          "text": "SOC 2 Type II",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-semibold text-white"
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
            "id": "nx-logos",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-slate-200/70 bg-white py-10"
              }
            },
            "children": [
              {
                "id": "nx-logos-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6"
                  }
                },
                "children": [
                  {
                    "id": "nx-logos-k",
                    "type": "text",
                    "options": {
                      "text": "Trusted by product teams at fast-growing companies",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]"
                      }
                    }
                  },
                  {
                    "id": "nx-logos-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid w-full grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-logo-0",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-2 text-slate-400 transition-colors hover:text-slate-700"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-logo-0-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconHexagon",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              }
                            }
                          },
                          {
                            "id": "nx-logo-0-t",
                            "type": "text",
                            "options": {
                              "text": "Northwind",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-bold tracking-tight"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-logo-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-2 text-slate-400 transition-colors hover:text-slate-700"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-logo-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCircleDot",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              }
                            }
                          },
                          {
                            "id": "nx-logo-1-t",
                            "type": "text",
                            "options": {
                              "text": "Lumora",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-bold tracking-tight"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-logo-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-2 text-slate-400 transition-colors hover:text-slate-700"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-logo-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTriangle",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              }
                            }
                          },
                          {
                            "id": "nx-logo-2-t",
                            "type": "text",
                            "options": {
                              "text": "Vertexa",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-bold tracking-tight"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-logo-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-2 text-slate-400 transition-colors hover:text-slate-700"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-logo-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSquareRotated",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              }
                            }
                          },
                          {
                            "id": "nx-logo-3-t",
                            "type": "text",
                            "options": {
                              "text": "Quantly",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-bold tracking-tight"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-logo-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-2 text-slate-400 transition-colors hover:text-slate-700"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-logo-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPlanet",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              }
                            }
                          },
                          {
                            "id": "nx-logo-4-t",
                            "type": "text",
                            "options": {
                              "text": "Orbitly",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-bold tracking-tight"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-logo-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-2 text-slate-400 transition-colors hover:text-slate-700"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-logo-5-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconInfinity",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              }
                            }
                          },
                          {
                            "id": "nx-logo-5-t",
                            "type": "text",
                            "options": {
                              "text": "Helixa",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-bold tracking-tight"
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
            "id": "nx-services",
            "type": "section",
            "options": {
              "anchor": "services"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-services-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-services-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-services-k",
                        "type": "text",
                        "options": {
                          "text": "What we do",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-services-h",
                        "type": "heading",
                        "options": {
                          "text": "Full-Stack Engineering, End to End",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nx-services-p",
                        "type": "text",
                        "options": {
                          "text": "One senior team for strategy, design, engineering and operations, so your product moves from idea to production without hand-offs.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-services-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-svc-0",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-svc-0-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCode",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#ECFEFF] text-[#4F46E5] transition-colors group-hover:from-[#4F46E5] group-hover:to-[#8B5CF6] group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-0-h",
                            "type": "heading",
                            "options": {
                              "text": "Custom Software Development",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-0-p",
                            "type": "text",
                            "options": {
                              "text": "Web platforms, SaaS products and internal tools engineered for speed, reliability and clean, maintainable code.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1 text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-0-btn",
                            "type": "button",
                            "options": {
                              "text": "Discuss your project",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group/l inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover/l:translate-x-1"
                              },
                              "label": {
                                "classes": "font-heading text-sm font-semibold text-[#4F46E5]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-svc-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-svc-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCloudComputing",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#ECFEFF] text-[#4F46E5] transition-colors group-hover:from-[#4F46E5] group-hover:to-[#8B5CF6] group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Cloud & DevOps",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-1-p",
                            "type": "text",
                            "options": {
                              "text": "AWS, Azure and GCP architecture, CI/CD pipelines, Kubernetes and infrastructure as code that scales on demand.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1 text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Discuss your project",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group/l inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover/l:translate-x-1"
                              },
                              "label": {
                                "classes": "font-heading text-sm font-semibold text-[#4F46E5]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-svc-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-svc-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBrain",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#ECFEFF] text-[#4F46E5] transition-colors group-hover:from-[#4F46E5] group-hover:to-[#8B5CF6] group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-2-h",
                            "type": "heading",
                            "options": {
                              "text": "AI & Machine Learning",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-2-p",
                            "type": "text",
                            "options": {
                              "text": "LLM copilots, intelligent search, forecasting and automation that turn your data into real product features.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1 text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Discuss your project",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group/l inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover/l:translate-x-1"
                              },
                              "label": {
                                "classes": "font-heading text-sm font-semibold text-[#4F46E5]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-svc-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-svc-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDeviceMobile",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#ECFEFF] text-[#4F46E5] transition-colors group-hover:from-[#4F46E5] group-hover:to-[#8B5CF6] group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Web & Mobile Apps",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-3-p",
                            "type": "text",
                            "options": {
                              "text": "Native-quality iOS, Android and cross-platform apps with fast, accessible web front-ends to match.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1 text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Discuss your project",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group/l inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover/l:translate-x-1"
                              },
                              "label": {
                                "classes": "font-heading text-sm font-semibold text-[#4F46E5]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-svc-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-svc-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShieldLock",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#ECFEFF] text-[#4F46E5] transition-colors group-hover:from-[#4F46E5] group-hover:to-[#8B5CF6] group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-4-h",
                            "type": "heading",
                            "options": {
                              "text": "Cybersecurity",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-4-p",
                            "type": "text",
                            "options": {
                              "text": "Security audits, penetration testing, SOC 2 readiness and secure-by-default engineering practices.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1 text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Discuss your project",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group/l inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover/l:translate-x-1"
                              },
                              "label": {
                                "classes": "font-heading text-sm font-semibold text-[#4F46E5]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-svc-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-svc-5-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPalette",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#ECFEFF] text-[#4F46E5] transition-colors group-hover:from-[#4F46E5] group-hover:to-[#8B5CF6] group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-5-h",
                            "type": "heading",
                            "options": {
                              "text": "UI/UX & Product Design",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-5-p",
                            "type": "text",
                            "options": {
                              "text": "Research, prototyping and design systems that make complex software feel simple and delightful.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1 text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          },
                          {
                            "id": "nx-svc-5-btn",
                            "type": "button",
                            "options": {
                              "text": "Discuss your project",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group/l inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover/l:translate-x-1"
                              },
                              "label": {
                                "classes": "font-heading text-sm font-semibold text-[#4F46E5]"
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
            "id": "nx-products",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-products-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-products-top",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-products-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col items-start gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-products-k",
                            "type": "text",
                            "options": {
                              "text": "Products",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                              }
                            }
                          },
                          {
                            "id": "nx-products-h",
                            "type": "heading",
                            "options": {
                              "text": "Ready-to-Use Software & Licenses",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nx-products-p",
                            "type": "text",
                            "options": {
                              "text": "Battle-tested tools, plugins and starter kits from our studio. Instant delivery, free updates for a year.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-products-all",
                        "type": "button",
                        "options": {
                          "text": "View all products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4F46E5] shrink-0"
                          },
                          "icon": {
                            "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "whitespace-nowrap font-heading text-base font-semibold text-[#0B1120]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-products-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(11,17,32,0.15)] transition-colors hover:!bg-[#4F46E5] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#4F46E5] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-products-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-products-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-products-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-products-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#ECFEFF]"
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
                                    "id": "nx-products-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-sm backdrop-blur-sm"
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
                                "id": "nx-products-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-products-slider-c-rate",
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
                                    "id": "nx-products-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-products-slider-c-ex",
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
                            "id": "nx-products-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-products-slider-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-products-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Buy",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCart",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0B1120] px-4 text-white shadow-sm transition-colors hover:bg-[#4F46E5]"
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
            "id": "nx-stats",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0B1120] py-16"
              }
            },
            "children": [
              {
                "id": "nx-stats-glow",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute left-1/2 top-1/2 h-64 w-[640px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F46E5] opacity-25 blur-[110px]"
                  }
                },
                "children": []
              },
              {
                "id": "nx-stats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "nx-stats-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-8 text-center lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-stat-0",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-stat-0-v",
                            "type": "text",
                            "options": {
                              "text": "12+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "bg-gradient-to-r from-white to-[#A5B4FC] bg-clip-text font-heading text-4xl font-bold text-transparent sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nx-stat-0-l",
                            "type": "text",
                            "options": {
                              "text": "Years building software",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-medium text-slate-400"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-stat-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-stat-1-v",
                            "type": "text",
                            "options": {
                              "text": "250+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "bg-gradient-to-r from-white to-[#A5B4FC] bg-clip-text font-heading text-4xl font-bold text-transparent sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nx-stat-1-l",
                            "type": "text",
                            "options": {
                              "text": "Products launched",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-medium text-slate-400"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-stat-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-stat-2-v",
                            "type": "text",
                            "options": {
                              "text": "80+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "bg-gradient-to-r from-white to-[#A5B4FC] bg-clip-text font-heading text-4xl font-bold text-transparent sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nx-stat-2-l",
                            "type": "text",
                            "options": {
                              "text": "Senior engineers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-medium text-slate-400"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-stat-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-stat-3-v",
                            "type": "text",
                            "options": {
                              "text": "30+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "bg-gradient-to-r from-white to-[#A5B4FC] bg-clip-text font-heading text-4xl font-bold text-transparent sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nx-stat-3-l",
                            "type": "text",
                            "options": {
                              "text": "Countries served",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-medium text-slate-400"
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
            "id": "nx-process",
            "type": "section",
            "options": {
              "anchor": "process"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-process-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-process-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-process-k",
                        "type": "text",
                        "options": {
                          "text": "How we work",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-process-h",
                        "type": "heading",
                        "options": {
                          "text": "From Idea to Production in Four Steps",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nx-process-p",
                        "type": "text",
                        "options": {
                          "text": "A transparent, battle-tested process that keeps you in control and ships value every sprint.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-process-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-step-0",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-step-0-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-step-0-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBulb",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1120] text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-step-0-n",
                                "type": "text",
                                "options": {
                                  "text": "01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-bold text-slate-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-step-0-h",
                            "type": "heading",
                            "options": {
                              "text": "Discover",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-step-0-p",
                            "type": "text",
                            "options": {
                              "text": "Workshops with your team to map goals, users and constraints into a clear, prioritised roadmap.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-step-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-step-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-step-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconVectorBezier2",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1120] text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-step-1-n",
                                "type": "text",
                                "options": {
                                  "text": "02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-bold text-slate-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-step-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Design",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-step-1-p",
                            "type": "text",
                            "options": {
                              "text": "Wireframes, prototypes and a design system, validated with real users before a line of code.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-step-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-step-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-step-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTerminal2",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1120] text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-step-2-n",
                                "type": "text",
                                "options": {
                                  "text": "03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-bold text-slate-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-step-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Build",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-step-2-p",
                            "type": "text",
                            "options": {
                              "text": "Two-week sprints with demos, automated tests and CI/CD, so you see working software early and often.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-step-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-step-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-step-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconChartArrowsVertical",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1120] text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-step-3-n",
                                "type": "text",
                                "options": {
                                  "text": "04",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-bold text-slate-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-step-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Launch & Scale",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-semibold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-step-3-p",
                            "type": "text",
                            "options": {
                              "text": "Zero-downtime releases, monitoring and continuous improvement as your user base grows.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
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
            "id": "nx-why",
            "type": "section",
            "options": {
              "anchor": "why-us"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-why-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                  }
                },
                "children": [
                  {
                    "id": "nx-why-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-start gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-why-k",
                        "type": "text",
                        "options": {
                          "text": "Why Nexora",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-why-h",
                        "type": "heading",
                        "options": {
                          "text": "An Engineering Partner, Not Just a Vendor",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nx-why-p",
                        "type": "text",
                        "options": {
                          "text": "We embed with your team, share ownership of outcomes and measure success by what ships. Modern stacks, honest communication and code you will be proud to maintain.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-base leading-relaxed text-[#64748B] sm:text-lg"
                          }
                        }
                      },
                      {
                        "id": "nx-why-tech",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-2 pt-1"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-why-tech-0",
                            "type": "text",
                            "options": {
                              "text": "React",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          },
                          {
                            "id": "nx-why-tech-1",
                            "type": "text",
                            "options": {
                              "text": "Next.js",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          },
                          {
                            "id": "nx-why-tech-2",
                            "type": "text",
                            "options": {
                              "text": "Node.js",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          },
                          {
                            "id": "nx-why-tech-3",
                            "type": "text",
                            "options": {
                              "text": "Python",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          },
                          {
                            "id": "nx-why-tech-4",
                            "type": "text",
                            "options": {
                              "text": "Go",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          },
                          {
                            "id": "nx-why-tech-5",
                            "type": "text",
                            "options": {
                              "text": "Kubernetes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          },
                          {
                            "id": "nx-why-tech-6",
                            "type": "text",
                            "options": {
                              "text": "AWS",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          },
                          {
                            "id": "nx-why-tech-7",
                            "type": "text",
                            "options": {
                              "text": "PostgreSQL",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-600"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-why-btn",
                        "type": "button",
                        "options": {
                          "text": "Book a free consultation",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#contact",
                          "target": "",
                          "icon": "IconCalendarEvent",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#4338CA] w-full sm:w-auto mt-2"
                          },
                          "icon": {
                            "classes": "flex shrink-0 items-center text-white"
                          },
                          "label": {
                            "classes": "whitespace-nowrap font-heading text-base font-semibold text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-why-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Senior-only teams",
                          "description": "Engineers with 8+ years average experience lead every project.",
                          "icon": "IconUsersGroup",
                          "iconSize": ""
                        },
                        {
                          "title": "Fixed-scope pricing",
                          "description": "Clear estimates and milestones: no surprise invoices.",
                          "icon": "IconReceipt2",
                          "iconSize": ""
                        },
                        {
                          "title": "Security built in",
                          "description": "OWASP practices, code reviews and audits on every release.",
                          "icon": "IconLock",
                          "iconSize": ""
                        },
                        {
                          "title": "You own the code",
                          "description": "Full IP transfer, documentation and a clean hand-over.",
                          "icon": "IconKey",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2"
                      },
                      "loop-item": {
                        "classes": "flex flex-col items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-sm"
                      },
                      "title": {
                        "classes": "font-heading text-base font-semibold text-[#0B1120]"
                      },
                      "description": {
                        "classes": "text-sm leading-relaxed text-[#64748B]"
                      },
                      "icon": {
                        "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#4F46E5]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-why-fb-ic",
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
                        "id": "nx-why-fb-t",
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
                        "id": "nx-why-fb-d",
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
            "id": "nx-pricing",
            "type": "section",
            "options": {
              "anchor": "pricing"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-pricing-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-pricing-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-pricing-k",
                        "type": "text",
                        "options": {
                          "text": "Pricing",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-pricing-h",
                        "type": "heading",
                        "options": {
                          "text": "Simple Engagements, Transparent Pricing",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nx-pricing-p",
                        "type": "text",
                        "options": {
                          "text": "Start small and scale up. Every plan includes senior engineers, code ownership and a 30-day warranty.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-pricing-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-plan-starter",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col gap-6 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-plan-starter-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-plan-starter-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-plan-starter-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Starter",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-lg font-semibold text-[#0B1120]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-plan-starter-price",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-plan-starter-v",
                                    "type": "text",
                                    "options": {
                                      "text": "$2,900",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-4xl font-bold tracking-tight text-[#0B1120]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-plan-starter-per",
                                    "type": "text",
                                    "options": {
                                      "text": "/ sprint",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-medium text-[#64748B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-plan-starter-d",
                                "type": "text",
                                "options": {
                                  "text": "For founders validating an MVP or a focused new feature.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-[#64748B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-plan-starter-sep",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-full bg-slate-200"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nx-plan-starter-feats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-plan-starter-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "2-week sprint, 1 senior engineer",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Product discovery workshop",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Clickable prototype",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Weekly demo & report",
                                      "icon": ""
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3 text-sm text-slate-600"
                                  },
                                  "li": {
                                    "classes": "flex list-none items-start gap-2.5"
                                  },
                                  "icon": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#4F46E5]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-plan-starter-btn",
                            "type": "button",
                            "options": {
                              "text": "Get started",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 transition-colors hover:border-[#0B1120] hover:bg-[#0B1120] group"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#0B1120] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-base font-semibold text-[#0B1120] group-hover:text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-plan-growth",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col gap-6 rounded-3xl bg-[#0B1120] p-8 text-white shadow-[0_30px_80px_-30px_rgba(79,70,229,0.7)] ring-2 ring-[#4F46E5] lg:-my-4 lg:py-12"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-plan-growth-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-plan-growth-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-plan-growth-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Growth",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-lg font-semibold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-plan-growth-pop",
                                    "type": "text",
                                    "options": {
                                      "text": "Most popular",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-plan-growth-price",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-plan-growth-v",
                                    "type": "text",
                                    "options": {
                                      "text": "$9,800",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-4xl font-bold tracking-tight text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-plan-growth-per",
                                    "type": "text",
                                    "options": {
                                      "text": "/ month",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-medium text-slate-400"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-plan-growth-d",
                                "type": "text",
                                "options": {
                                  "text": "A dedicated squad to build and scale your product.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-slate-400"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-plan-growth-sep",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-full bg-white/10"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nx-plan-growth-feats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-plan-growth-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Dedicated team of 3 to 4",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Design, frontend, backend & QA",
                                      "icon": ""
                                    },
                                    {
                                      "text": "CI/CD, cloud setup & monitoring",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Slack channel & 4-hour response",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Monthly roadmap review",
                                      "icon": ""
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3 text-sm text-slate-300"
                                  },
                                  "li": {
                                    "classes": "flex list-none items-start gap-2.5"
                                  },
                                  "icon": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#06B6D4]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-plan-growth-btn",
                            "type": "button",
                            "options": {
                              "text": "Book a call",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 transition-colors hover:bg-[#4338CA]"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-white"
                              },
                              "label": {
                                "classes": "font-heading text-base font-semibold text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-plan-enterprise",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col gap-6 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-plan-enterprise-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-plan-enterprise-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-plan-enterprise-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Enterprise",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-lg font-semibold text-[#0B1120]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-plan-enterprise-price",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-plan-enterprise-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Custom",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-4xl font-bold tracking-tight text-[#0B1120]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-plan-enterprise-d",
                                "type": "text",
                                "options": {
                                  "text": "For complex platforms, compliance and 24/7 operations.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-[#64748B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-plan-enterprise-sep",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-full bg-slate-200"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nx-plan-enterprise-feats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex-1"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-plan-enterprise-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Multiple squads & tech lead",
                                      "icon": ""
                                    },
                                    {
                                      "text": "SOC 2 / HIPAA / GDPR support",
                                      "icon": ""
                                    },
                                    {
                                      "text": "24/7 SRE & incident response",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Dedicated account manager",
                                      "icon": ""
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3 text-sm text-slate-600"
                                  },
                                  "li": {
                                    "classes": "flex list-none items-start gap-2.5"
                                  },
                                  "icon": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#4F46E5]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-plan-enterprise-btn",
                            "type": "button",
                            "options": {
                              "text": "Contact sales",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#contact",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 transition-colors hover:border-[#0B1120] hover:bg-[#0B1120] group"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-[#0B1120] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-base font-semibold text-[#0B1120] group-hover:text-white"
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
            "id": "nx-reviews",
            "type": "section",
            "options": {
              "anchor": "testimonials"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-reviews-k",
                        "type": "text",
                        "options": {
                          "text": "Client stories",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-reviews-h",
                        "type": "heading",
                        "options": {
                          "text": "Teams Ship Faster With Nexora",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(11,17,32,0.15)] transition-colors hover:!bg-[#4F46E5] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#4F46E5] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-gray-300 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#4F46E5]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconQuote",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#4F46E5]"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "Nexora rebuilt our patient platform in four months. Releases went from monthly to daily and our cloud bill dropped 38%.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-slate-700"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-slate-200 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "AK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Aisha Khan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-semibold text-[#0B1120]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "CTO, Lumora Health",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#64748B]"
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
                        "id": "nx-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconQuote",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#06B6D4]"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "They felt like part of our team from day one. Our MVP shipped on time, raised our seed round and has scaled without a rewrite.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-slate-700"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-slate-200 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "DM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Daniel Moreno",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-semibold text-[#0B1120]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Founder, Quantly",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#64748B]"
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
                        "id": "nx-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconQuote",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#8B5CF6]"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "The AI search feature they built lifted conversion by 22%. Clear communication, clean code and zero drama.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-slate-700"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-slate-200 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "SL",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sofia Lindqvist",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-semibold text-[#0B1120]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "VP Engineering, Northwind",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#64748B]"
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
                        "id": "nx-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconQuote",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#4F46E5]"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "Their design sprint saved us months. We validated three concepts with real users before committing a single engineer.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-slate-700"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-slate-200 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "RP",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Raj Patel",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-semibold text-[#0B1120]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Head of Product, Orbitly",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#64748B]"
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
                        "id": "nx-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r5-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconQuote",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#06B6D4]"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "Our SOC 2 audit passed first time thanks to their security work. They documented everything we needed.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-slate-700"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-slate-200 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "EC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Emily Chen",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-semibold text-[#0B1120]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "COO, Vertexa",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#64748B]"
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
                        "id": "nx-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r6-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconQuote",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#8B5CF6]"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "Best engineering partner we have hired. Honest estimates, weekly demos and a product our customers love.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-slate-700"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-slate-200 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "MB",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "nx-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Marcus Bell",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-semibold text-[#0B1120]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "CEO, Helixa",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#64748B]"
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
            "id": "nx-insights",
            "type": "section",
            "options": {
              "anchor": "insights"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-insights-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-insights-top",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-insights-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col items-start gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-insights-k",
                            "type": "text",
                            "options": {
                              "text": "Insights",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                              }
                            }
                          },
                          {
                            "id": "nx-insights-h",
                            "type": "heading",
                            "options": {
                              "text": "Notes From Our Engineering Team",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-insights-all",
                        "type": "button",
                        "options": {
                          "text": "Read the blog",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4F46E5] shrink-0"
                          },
                          "icon": {
                            "classes": "flex shrink-0 items-center text-[#4F46E5] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "whitespace-nowrap font-heading text-base font-semibold text-[#0B1120]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-insights-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-insights-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-insights-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F5F3FF]"
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
                            "id": "nx-insights-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-insights-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                                  }
                                }
                              },
                              {
                                "id": "nx-insights-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                  }
                                }
                              },
                              {
                                "id": "nx-insights-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#4F46E5]"
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
            "id": "nx-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-20 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nx-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-faq-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-faq-k",
                        "type": "text",
                        "options": {
                          "text": "FAQ",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-faq-h",
                        "type": "heading",
                        "options": {
                          "text": "Questions, Answered",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nx-faq-p",
                        "type": "text",
                        "options": {
                          "text": "Everything you need to know before we start working together.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How quickly can you start?",
                          "classes": ""
                        },
                        {
                          "label": "Do we own the source code?",
                          "classes": ""
                        },
                        {
                          "label": "Which technologies do you use?",
                          "classes": ""
                        },
                        {
                          "label": "Can you work with our in-house team?",
                          "classes": ""
                        },
                        {
                          "label": "What happens after launch?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 font-heading text-base font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5]/40"
                      },
                      "accordion-header-open": {
                        "classes": "!rounded-b-none !border-b-0 !border-[#4F46E5]/40 text-[#4F46E5]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#4F46E5]"
                      },
                      "accordion-content": {
                        "classes": "-mt-3 rounded-b-xl border border-t-0 border-[#4F46E5]/40 bg-white px-5 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Most projects kick off within one to two weeks. After a short discovery call we share a proposal, timeline and team within 48 hours.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. You own 100% of the code, designs and documentation from day one, and everything lives in your own repositories and cloud accounts.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "We pick the right tool for the job, most often React, Next.js, Node.js, Python, Go, Flutter, PostgreSQL and AWS, Azure or GCP, plus Kubernetes and Terraform.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Absolutely. We regularly embed alongside internal engineers, follow your workflows and tools, and leave your team stronger than we found it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Every project includes a 30-day warranty. After that, flexible support and SRE plans cover monitoring, updates, security patches and new features.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
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
            "id": "nx-contact",
            "type": "section",
            "options": {
              "anchor": "contact"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-20 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "nx-contact-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-contact-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4F46E5] via-[#6D28D9] to-[#0B1120] px-6 py-14 text-center shadow-[0_40px_100px_-40px_rgba(79,70,229,0.8)] sm:px-12 lg:py-20"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-contact-grid",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "nx-contact-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#06B6D4] opacity-30 blur-[90px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "nx-contact-body",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-contact-k",
                            "type": "text",
                            "options": {
                              "text": "Free 30-minute consultation",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white"
                              }
                            }
                          },
                          {
                            "id": "nx-contact-h",
                            "type": "heading",
                            "options": {
                              "text": "Ready to Build Your Next Product?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nx-contact-p",
                            "type": "text",
                            "options": {
                              "text": "Tell us about your idea. You will get a clear plan, timeline and estimate from a senior engineer within one business day.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-indigo-100 sm:text-lg"
                              }
                            }
                          },
                          {
                            "id": "nx-contact-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-contact-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Email hello@example.com",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "mailto:hello@example.com",
                                  "target": "",
                                  "icon": "IconMail",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 shadow-lg transition-all hover:-translate-y-0.5 sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center text-[#4F46E5]"
                                  },
                                  "label": {
                                    "classes": "whitespace-nowrap font-heading text-base font-semibold text-[#0B1120]"
                                  }
                                }
                              },
                              {
                                "id": "nx-contact-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Browse Products",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 w-full sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center text-white"
                                  },
                                  "label": {
                                    "classes": "whitespace-nowrap font-heading text-base font-semibold text-white"
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
            "id": "nx-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Software & Licenses",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#ECFEFF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                      }
                    }
                  },
                  {
                    "id": "nx-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Tools Built to Ship Faster",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every product, plugin and license we offer, newest first. Open a card for features, requirements and reviews, or add it straight to your cart.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#ECFEFF]"
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
                                    "id": "nx-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-sm backdrop-blur-sm"
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
                                "id": "nx-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-shop-grid-c-rate",
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
                                    "id": "nx-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-shop-grid-c-ex",
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
                            "id": "nx-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-shop-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Buy",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#ECFEFF] px-3.5 text-[#06B6D4] shadow-sm transition-colors hover:bg-[#06B6D4] hover:text-white"
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
                        "id": "nx-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-shop-promise",
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
                "id": "nx-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Instant Delivery",
                          "description": "License keys and downloads by email in seconds",
                          "icon": "IconBolt",
                          "iconSize": ""
                        },
                        {
                          "title": "Secure Checkout",
                          "description": "256-bit TLS and PCI-compliant payments",
                          "icon": "IconLock",
                          "iconSize": ""
                        },
                        {
                          "title": "30-Day Money Back",
                          "description": "Not a fit? Get a full refund, no questions",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Expert Support",
                          "description": "Real engineers on chat and email, 24/5",
                          "icon": "IconHeadset",
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
                        "classes": "font-heading text-base font-bold text-[#0B1120]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFEFF] text-[#06B6D4]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-shop-promise-fb-ic",
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
                        "id": "nx-shop-promise-fb-t",
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
                        "id": "nx-shop-promise-fb-d",
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
            "id": "nx-pd",
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
                "id": "nx-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-pd-grid",
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
                        "id": "nx-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-pd-gallery",
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
                                "classes": "rounded-3xl border-4 border-white bg-gradient-to-tr from-[#ECFEFF] via-white to-[#F5F3FF] p-4 shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#0B1120]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#0B1120]!"
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
                                "classes": "overflow-hidden rounded-xl border-2 border-transparent hover:border-[#4F46E5]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-pd-cats",
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
                                "classes": "rounded-full bg-[#ECFEFF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white"
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
                            "id": "nx-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#0B1120] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nx-pd-rate",
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
                                "classes": "font-heading font-bold text-[#0B1120]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "nx-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF today"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#4F46E5] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "nx-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#64748B]"
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
                            "id": "nx-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#0B1120]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-xl border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#0B1120] transition-colors hover:border-[#06B6D4] hover:bg-[#ECFEFF]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#06B6D4] !bg-[#ECFEFF] !text-[#0891B2]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "nx-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Currently unavailable",
                              "inStockText": "Available: instant delivery",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#4F46E5]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#06B6D4]"
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
                            "id": "nx-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Buy Now",
                              "hideQuantity": false,
                              "hideButton": false,
                              "icon": "IconShoppingCart",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-stretch gap-3"
                              },
                              "quantity-wrapper": {
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-xl border-2 border-gray-200 bg-white px-3 text-[#0B1120]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F8FAFC]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F8FAFC]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-8 text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#4338CA]"
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
                            "id": "nx-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Instant access",
                                  "description": "Key by email",
                                  "icon": "IconBolt",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free updates",
                                  "description": "12 months included",
                                  "icon": "IconRefresh",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Money back",
                                  "description": "30-day guarantee",
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
                                "classes": "font-heading text-base font-bold text-[#0B1120]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFEFF] text-[#06B6D4]"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-perks-ic",
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
                                "id": "nx-pd-perks-t",
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
                                "id": "nx-pd-perks-d",
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
                            "id": "nx-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-sku",
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
                                    "classes": "font-semibold text-[#0B1120]"
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
                                "id": "nx-pd-brands",
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
                                    "classes": "font-semibold text-[#0B1120]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#4F46E5]"
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
                                "id": "nx-pd-tags",
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
                                    "classes": "font-semibold text-[#0B1120]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#4F46E5]"
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
            "id": "nx-pd-tabs-sec",
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
                "id": "nx-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,17,32,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Overview",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Requirements",
                              "icon": "IconCpu"
                            },
                            {
                              "label": "License & Support",
                              "icon": "IconCertificate"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F8FAFC] px-5 py-2.5 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#0B1120] !text-white shadow-md"
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
                            "id": "nx-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#0B1120] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#0B1120] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#4F46E5] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#C7D2FE] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Works on Windows 10+, macOS 12+ and modern Linux distributions",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cloud editions run in any evergreen browser: no install needed",
                                      "icon": ""
                                    },
                                    {
                                      "text": "REST API and webhooks for integrating with your existing stack",
                                      "icon": ""
                                    },
                                    {
                                      "text": "SSO (SAML / OIDC) and role-based access on business plans",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#06B6D4]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "License key and download link delivered by email right after payment",
                                      "icon": ""
                                    },
                                    {
                                      "text": "12 months of updates and security patches included",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Email and chat support from our engineering team, 24/5",
                                      "icon": ""
                                    },
                                    {
                                      "text": "30-day money-back guarantee: full refund if it is not the right fit",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#06B6D4]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nx-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nx-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EEF2FF]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nx-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#0B1120]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nx-pd-reviews-rate",
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
                                        "id": "nx-pd-reviews-co",
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
                                    "id": "nx-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "Share your experience with other teams",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,17,32,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-heading text-sm font-bold text-[#0B1120]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#0B1120] placeholder:text-gray-400 focus:border-[#06B6D4] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#4F46E5] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#4338CA] disabled:opacity-50"
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
            "id": "nx-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-16"
              }
            },
            "children": [
              {
                "id": "nx-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Works Well With",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Teams Also Use",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#0B1120]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#ECFEFF]"
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
                                    "id": "nx-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-sm backdrop-blur-sm"
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
                                "id": "nx-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-pd-rel-c-rate",
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
                                    "id": "nx-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-pd-rel-c-ex",
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
                            "id": "nx-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-pd-rel-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Buy",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#ECFEFF] px-3.5 text-[#06B6D4] shadow-sm transition-colors hover:bg-[#06B6D4] hover:text-white"
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
            "id": "nx-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Explore",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#4F46E5]"
                      }
                    }
                  },
                  {
                    "id": "nx-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "From developer tools to analytics, security and cloud add-ons. Pick a category to start exploring.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-xl bg-[#ECFEFF] transition-transform"
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
                            "id": "nx-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                              }
                            }
                          },
                          {
                            "id": "nx-cat-grid-count",
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
                        "id": "nx-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#4F46E5]"
                      }
                    }
                  },
                  {
                    "id": "nx-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nx-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#06B6D4] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#ECFEFF]"
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
                                    "id": "nx-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-sm backdrop-blur-sm"
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
                                "id": "nx-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-cat1-grid-c-rate",
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
                                    "id": "nx-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-cat1-grid-c-ex",
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
                            "id": "nx-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-cat1-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Buy",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#ECFEFF] px-3.5 text-[#06B6D4] shadow-sm transition-colors hover:bg-[#06B6D4] hover:text-white"
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
                        "id": "nx-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find It Fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#C7D2FE] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#0B1120]"
                      }
                    }
                  },
                  {
                    "id": "nx-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group products across categories by platform, use case and integration.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4F46E5]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4F46E5]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#0B1120] group-hover:text-[#4F46E5]"
                              }
                            }
                          },
                          {
                            "id": "nx-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F8FAFC] px-2 py-0.5 text-[10px] font-bold text-[#64748B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nx-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#C7D2FE] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#0B1120]"
                      }
                    }
                  },
                  {
                    "id": "nx-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nx-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#06B6D4] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#ECFEFF]"
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
                                    "id": "nx-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-sm backdrop-blur-sm"
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
                                "id": "nx-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-tag1-grid-c-rate",
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
                                    "id": "nx-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-tag1-grid-c-ex",
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
                            "id": "nx-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-tag1-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Buy",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#ECFEFF] px-3.5 text-[#06B6D4] shadow-sm transition-colors hover:bg-[#06B6D4] hover:text-white"
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
                        "id": "nx-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Technology Partners",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#ECFEFF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                      }
                    }
                  },
                  {
                    "id": "nx-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Partners & Vendors",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "The platforms and vendors behind the software we build on, resell and support.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-[#F8FAFC] p-3"
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
                            "id": "nx-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#0B1120] group-hover:text-[#4F46E5]"
                              }
                            }
                          },
                          {
                            "id": "nx-brand-grid-count",
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
                        "id": "nx-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#ECFEFF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                      }
                    }
                  },
                  {
                    "id": "nx-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nx-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#06B6D4] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#ECFEFF]"
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
                                    "id": "nx-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-sm backdrop-blur-sm"
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
                                "id": "nx-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-brand1-grid-c-rate",
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
                                    "id": "nx-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-brand1-grid-c-ex",
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
                            "id": "nx-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-brand1-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Buy",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#ECFEFF] px-3.5 text-[#06B6D4] shadow-sm transition-colors hover:bg-[#06B6D4] hover:text-white"
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
                        "id": "nx-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Insights",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#ECFEFF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                      }
                    }
                  },
                  {
                    "id": "nx-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "The Nexora Engineering Blog",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Product engineering, cloud architecture, AI and lessons learned shipping software for growing teams.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F5F3FF]"
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
                            "id": "nx-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                                  }
                                }
                              },
                              {
                                "id": "nx-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                  }
                                }
                              },
                              {
                                "id": "nx-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#4F46E5]"
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
                        "id": "nx-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nx-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-post-k",
                    "type": "text",
                    "options": {
                      "text": "Insights",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#ECFEFF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                      }
                    }
                  },
                  {
                    "id": "nx-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#64748B]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-post-author",
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
                            "classes": "font-heading font-bold text-[#0B1120]"
                          }
                        }
                      },
                      {
                        "id": "nx-post-dot",
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
                        "id": "nx-post-date",
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
                    "id": "nx-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
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
            "id": "nx-post-body",
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
                "id": "nx-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#0B1120] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#0B1120] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#4F46E5] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#C7D2FE] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-16"
              }
            },
            "children": [
              {
                "id": "nx-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#0B1120]"
                      }
                    }
                  },
                  {
                    "id": "nx-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EEF2FF]"
                              }
                            }
                          },
                          {
                            "id": "nx-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#0B1120]"
                              }
                            }
                          },
                          {
                            "id": "nx-post-cmt-co",
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
                        "id": "nx-post-cmt-form",
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
                            "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,17,32,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#0B1120]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#0B1120] placeholder:text-gray-400 focus:border-[#06B6D4] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#4F46E5] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#4338CA] disabled:opacity-50"
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
            "id": "nx-post-more",
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
                "id": "nx-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Insights",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#0B1120]"
                      }
                    }
                  },
                  {
                    "id": "nx-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F5F3FF]"
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
                            "id": "nx-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                                  }
                                }
                              },
                              {
                                "id": "nx-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
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
            "id": "nx-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nx-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Client Portal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#ECFEFF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#06B6D4]"
                      }
                    }
                  },
                  {
                    "id": "nx-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#0B1120] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nx-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Manage licenses, invoices and subscriptions, and update your account details.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#64748B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nx-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-12"
              }
            },
            "children": [
              {
                "id": "nx-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#0B1120] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#C7D2FE]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-xl bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#4F46E5]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#4F46E5]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#4F46E5]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "nx-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nx-acc-3",
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
                                "id": "nx-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,17,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#4338CA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "nx-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,17,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#4338CA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "nx-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "nx-acc-9",
                            "type": "tabs",
                            "options": {
                              "orientation": "",
                              "tabsItems": [
                                {
                                  "label": "Orders",
                                  "icon": "IconReceipt"
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F8FAFC] px-5 py-2.5 font-heading text-sm font-semibold text-[#0B1120] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#0B1120] !text-white shadow-md"
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
                                "id": "nx-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-[#4F46E5]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nx-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#4F46E5] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nx-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-[#4F46E5]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nx-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#4F46E5]/40 hover:bg-[#4F46E5]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-[#4F46E5]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nx-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-[#4F46E5]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#4338CA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "nx-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(11,17,32,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconRocket",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#ECFEFF] text-[#06B6D4]"
                          }
                        }
                      },
                      {
                        "id": "nx-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EEF2FF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#4F46E5]"
                          }
                        }
                      },
                      {
                        "id": "nx-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! Your Order Is Confirmed",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#0B1120] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nx-ty-p",
                        "type": "text",
                        "options": {
                          "text": "A receipt and your access details are on their way to your inbox. You can also find your licenses and invoices in your account at any time.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#64748B] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "nx-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your payment and issue your license",
                              "icon": ""
                            },
                            {
                              "text": "Your keys and download links arrive by email within minutes",
                              "icon": ""
                            },
                            {
                              "text": "Activate, invite your team and reach out if you need a hand",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-2xl bg-[#F8FAFC] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#4F46E5]"
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
                        "id": "nx-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-ty-shop",
                            "type": "button",
                            "options": {
                              "text": "Browse Products",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#4338CA] w-full sm:w-auto"
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
                            "id": "nx-ty-orders",
                            "type": "button",
                            "options": {
                              "text": "My Licenses",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconPackage",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#06B6D4] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#06B6D4] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#06B6D4] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#06B6D4] whitespace-nowrap group-hover:text-white"
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
            "id": "nx-ty-promise",
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
                "id": "nx-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Instant Delivery",
                          "description": "License keys and downloads by email in seconds",
                          "icon": "IconBolt",
                          "iconSize": ""
                        },
                        {
                          "title": "Secure Checkout",
                          "description": "256-bit TLS and PCI-compliant payments",
                          "icon": "IconLock",
                          "iconSize": ""
                        },
                        {
                          "title": "30-Day Money Back",
                          "description": "Not a fit? Get a full refund, no questions",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Expert Support",
                          "description": "Real engineers on chat and email, 24/5",
                          "icon": "IconHeadset",
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
                        "classes": "font-heading text-base font-bold text-[#0B1120]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFEFF] text-[#06B6D4]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-ty-promise-fb-ic",
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
                        "id": "nx-ty-promise-fb-t",
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
                        "id": "nx-ty-promise-fb-d",
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
            "id": "nx-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F3FF] via-white to-[#F8FAFC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nx-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#4F46E5] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "nx-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconRouteOff",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#0B1120]"
                      }
                    }
                  },
                  {
                    "id": "nx-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Returned a 404",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#0B1120] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "nx-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the page has moved. Head back home or browse our software and services.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#64748B] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "nx-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(79,70,229,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#4338CA] w-full sm:w-auto"
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
                        "id": "nx-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Browse Products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#06B6D4] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#06B6D4] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#06B6D4] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#06B6D4] whitespace-nowrap group-hover:text-white"
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
            "id": "nx-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8FAFC] py-16"
              }
            },
            "children": [
              {
                "id": "nx-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nx-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#C7D2FE] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#0B1120]"
                          }
                        }
                      },
                      {
                        "id": "nx-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Products",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#0B1120] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nx-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nx-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,17,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nx-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#ECFEFF]"
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
                                    "id": "nx-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-sm backdrop-blur-sm"
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
                                "id": "nx-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nx-nf-grid-c-rate",
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
                                    "id": "nx-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[#4F46E5]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nx-nf-grid-c-ex",
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
                            "id": "nx-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nx-nf-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#0B1120]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4F46E5]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4F46E5] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nx-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Buy",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#ECFEFF] px-3.5 text-[#06B6D4] shadow-sm transition-colors hover:bg-[#06B6D4] hover:text-white"
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
