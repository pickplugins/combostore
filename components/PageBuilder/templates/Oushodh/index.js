/**
 * Template: Oushodh Pharmacy.
 *
 * A clean, calm and accessible online pharmacy: everyday (OTC) medicines,
 * prescription medicines, vitamins, diabetes care, health devices, personal
 * care and baby & mother. Like the other complete templates here it carries
 * all sixteen page types - Header, Footer, Home, Shop, Product, the six
 * taxonomy archives, Blog Archive, Blog Single, Account, Thank you and 404 -
 * so applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to os-, palette remapped, copy rewritten). The
 * header is reshaped: brand, search and cart on one row; the category menu
 * (Deals in coral) plus a navy "Upload prescription" button on a second.
 * Home is built fresh from the same block types. Product cards everywhere
 * show the pack contained on mint, a coral discount tag, the product name
 * in bold, one excerpt line (use it for generic name, strength and pack
 * size, e.g. "Paracetamol 500 mg · 10 tablets"), the price in navy and a
 * teal Add button. It is plain data: edit freely.
 *
 * DESIGN
 *
 *   teal   #0E8A7E  primary: buttons, icons, links, refill band   #0A6E64 hover  #E3F4F2 tint
 *   navy   #12305A  prices, prescription card and band, CTA       #1C4176 hover  #E9EEF6 tint
 *   coral  #E8553A  deals panel and discount tags                 #FDECE8 tint
 *   mint   #F4F9F8  page bands    ink #122033   muted #586577   line #DCE6E8
 *
 * Fonts (template meta): Lexend (semibold, tight) for headings and Atkinson
 * Hyperlegible for body - both chosen for readability, since many pharmacy
 * customers are older or reading on small screens. Body text is a little
 * larger and bolder than in the other templates.
 *
 * HOME
 *
 *   Hero: headline, a large medicine search (quickSearch) and eight
 *   "popular needs" chips, beside a navy "order with your prescription"
 *   card with art (public/templates/oushodh-hero.svg) and three steps -
 *   trust bar - eight health-concern tiles (#health-concerns) - health deals
 *   (#deals) - live categories (#categories) - everyday medicines and
 *   vitamins rows - prescription how-it-works band (#prescriptions) -
 *   diabetes and devices rows - refill-reminder banner (#refill) - personal
 *   care and baby rows - manufacturers (#manufacturers) - reviews - health
 *   hub (#health-hub) - FAQ with a pharmacist contact card (#faq) - CTA and
 *   a medical disclaimer (#join).
 *
 * BEFORE GOING LIVE (IMPORTANT)
 *
 *   - There is no file-upload block: "Upload prescription" and "Call a
 *     pharmacist" link to # . Point them at your WhatsApp, a contact form
 *     page, or a phone link (tel:...).
 *   - The footer shows "Drug licence no. 000000": put your real licence
 *     number there, and make sure the shop meets local rules for selling
 *     medicines online, including prescription-only drugs.
 *   - Check every policy line: prescription checks, cold-chain, delivery
 *     times, the return rules for medicines (no returns unless damaged,
 *     expired or wrong) and the 10% discount (excludes prescription items).
 *   - Category slugs: otc-medicines, vitamins-supplements, diabetes-care,
 *     health-devices, personal-care, baby-mother, fever-pain, cold-flu,
 *     heart-bp, skin-care, first-aid, digestive-health, respiratory,
 *     womens-health, bone-joint, eye-ear. Tag slug: deals. The chips and
 *     concern tiles are static links: re-point them to your categories.
 *   - Contact details, promo code CARE10, "80,000+ families", 4.8 and the six
 *     reviews are sample copy.
 */

var template = [
  {
    "name": "Oushodh Pharmacy",
    "description": "Clean, accessible online pharmacy in teal and navy on mint with Lexend and Atkinson Hyperlegible: a medicine-search hero with need chips beside an \"order with prescription\" card, trust bar, health-concern tiles, weekly deals, categories, medicine / vitamin / diabetes / device / care / baby rows, a prescription how-it-works band, refill reminders, manufacturers, reviews, health hub, FAQ and a medical disclaimer. All 16 pages.",
    "thumbnail": "/templates/oushodh.svg",
    "meta": {
      "fonts": [
        {
          "family": "Lexend",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Atkinson Hyperlegible",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Lexend",
        "body": "Atkinson Hyperlegible"
      },
      "colors": {
        "primary": "#0E8A7E",
        "secondary": "#12305A",
        "accent": "#E8553A",
        "background": "#F4F9F8",
        "foreground": "#122033",
        "muted": "#586577"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "os-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#DCE6E8] bg-white"
              }
            },
            "children": [
              {
                "id": "os-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#12305A] px-4 py-2 text-center text-xs font-bold text-white/90"
                  }
                },
                "children": [
                  {
                    "id": "os-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "os-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Genuine medicines · Pharmacist-checked prescriptions · 10% off health products with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "os-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "CARE10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-md bg-[#0E8A7E] px-2 py-0.5 font-mono text-xs font-bold text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Upload prescription",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#prescriptions",
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
                        "classes": "text-xs font-bold text-[#7FD1C5] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "os-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 items-center justify-between gap-4 lg:h-[76px]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "os-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 text-3xl items-center justify-center rounded-xl bg-[#0E8A7E] pb-0.5 font-heading font-semibold leading-none text-white"
                              }
                            }
                          },
                          {
                            "id": "os-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Oushodh",
                                  "src": "https://placehold.co/200x64?text=Oushodh",
                                  "altText": "Oushodh Online Pharmacy",
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
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#12305A]"
                                  }
                                }
                              },
                              {
                                "id": "os-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Online pharmacy",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A6E64]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search medicines, generics, health products...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-4 hidden max-w-2xl flex-1 rounded-xl border-2 border-[#DCE6E8] bg-[#F4F9F8] py-1 pl-1 pr-3 transition-all focus-within:border-[#0E8A7E] focus-within:bg-white md:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#122033] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#586577]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0E8A7E] focus:outline-none focus:ring-2 focus:ring-[#0E8A7E]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0E8A7E]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#0E8A7E]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0E8A7E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A6E64]"
                          }
                        }
                      },
                      {
                        "id": "os-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F4F9F8] text-[#122033] transition-colors hover:bg-[#E3F4F2] hover:text-[#0E8A7E]"
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
                            "id": "os-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#12305A] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#1C4176]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#0E8A7E] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F4F9F8] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#122033]"
                              },
                              "title-icon": {
                                "classes": "text-[#0E8A7E]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#0E8A7E] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#0E8A7E] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0A6E64]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A7E]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#0E8A7E] focus:outline-none focus:ring-2 focus:ring-[#0E8A7E]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#0E8A7E] px-4 py-2 text-sm font-medium text-[#0E8A7E] transition-colors hover:bg-[#0E8A7E] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0E8A7E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A6E64] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A7E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "os-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F4F9F8] text-[#122033]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F4F9F8] p-2 text-[#122033] transition-colors hover:bg-[#0E8A7E] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "os-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 text-2xl items-center justify-center rounded-xl bg-[#0E8A7E] pb-0.5 font-heading font-semibold leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "os-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Oushodh",
                                          "src": "https://placehold.co/200x64?text=Oushodh",
                                          "altText": "Oushodh Online Pharmacy",
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
                                            "classes": "font-heading text-2xl font-semibold tracking-tight text-[#12305A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "os-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Online pharmacy",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#12305A]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "os-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search medicines...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F4F9F8] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#12305A] focus-within:ring-2 focus-within:ring-[#12305A]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#122033] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#586577]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0E8A7E] focus:outline-none focus:ring-2 focus:ring-[#0E8A7E]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0E8A7E]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#0E8A7E]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0E8A7E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#122033] transition-colors hover:text-[#0E8A7E]"
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
                                    "id": "os-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Medicines",
                                      "url": "/categories/otc-medicines"
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
                                    "id": "os-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Vitamins",
                                      "url": "/categories/vitamins-supplements"
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
                                    "id": "os-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Diabetes",
                                      "url": "/categories/diabetes-care"
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
                                    "id": "os-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Devices",
                                      "url": "/categories/health-devices"
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
                                    "id": "os-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Personal care",
                                      "url": "/categories/personal-care"
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
                                    "id": "os-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Baby & mother",
                                      "url": "/categories/baby-mother"
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
                                    "id": "os-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Deals",
                                      "url": "/#deals"
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
                    "id": "os-hdr-nav",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden border-t border-[#DCE6E8] lg:flex lg:items-center lg:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "os-hdr-menu",
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
                            "classes": "flex h-12 items-center gap-7"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-[15px] font-bold text-[#122033] transition-colors hover:text-[#0E8A7E]"
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
                            "id": "os-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Medicines",
                              "url": "/categories/otc-medicines"
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
                            "id": "os-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Vitamins",
                              "url": "/categories/vitamins-supplements"
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
                            "id": "os-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Diabetes",
                              "url": "/categories/diabetes-care"
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
                            "id": "os-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Devices",
                              "url": "/categories/health-devices"
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
                            "id": "os-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Personal care",
                              "url": "/categories/personal-care"
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
                            "id": "os-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Baby & mother",
                              "url": "/categories/baby-mother"
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
                            "id": "os-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Deals",
                              "url": "/#deals"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "text-[#E8553A]"
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
                        "id": "os-hdr-rx",
                        "type": "button",
                        "options": {
                          "text": "Upload prescription",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#prescriptions",
                          "target": "",
                          "icon": "IconPrescription",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#12305A] px-3.5 py-2 transition-colors hover:bg-[#1C4176]"
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
        ],
        "meta": ""
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "os-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#122033] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "os-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "os-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-[#0E8A7E] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "os-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "os-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Monthly refills",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-body text-xs font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "os-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Never run out of regular medicines",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-semibold tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "os-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account to save prescriptions and get a reminder before your medicines run low.",
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
                        "id": "os-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Create account",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconBell",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 transition-colors hover:bg-white/90"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#0A6E64]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "os-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "os-ftr-grid",
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
                        "id": "os-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "os-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "os-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "+",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 text-2xl items-center justify-center rounded-xl bg-[#0E8A7E] pb-0.5 font-heading font-semibold leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "os-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Oushodh",
                                      "src": "https://placehold.co/200x64?text=Oushodh",
                                      "altText": "Oushodh Online Pharmacy",
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
                                        "classes": "font-heading text-2xl font-semibold tracking-tight text-[#12305A]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "os-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "A licensed online pharmacy delivering genuine medicines, vitamins and health essentials, with every prescription checked by a registered pharmacist.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "os-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "os-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E8A7E]"
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
                                "id": "os-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E8A7E]"
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
                                "id": "os-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E8A7E]"
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
                                "id": "os-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E8A7E]"
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
                        "id": "os-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Everyday Medicines",
                                  "icon": "",
                                  "slug": "/categories/otc-medicines"
                                },
                                {
                                  "text": "Vitamins & Supplements",
                                  "icon": "",
                                  "slug": "/categories/vitamins-supplements"
                                },
                                {
                                  "text": "Diabetes Care",
                                  "icon": "",
                                  "slug": "/categories/diabetes-care"
                                },
                                {
                                  "text": "Health Devices",
                                  "icon": "",
                                  "slug": "/categories/health-devices"
                                },
                                {
                                  "text": "Baby & Mother",
                                  "icon": "",
                                  "slug": "/categories/baby-mother"
                                },
                                {
                                  "text": "All Categories",
                                  "icon": "",
                                  "slug": "/categories"
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
                                "classes": "transition-colors hover:text-[#7FD1C5]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#7FD1C5]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-ftr-ll-care",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Care",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Upload Prescription",
                                  "icon": "",
                                  "slug": "/#prescriptions"
                                },
                                {
                                  "text": "Track Your Order",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Delivery & Returns",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Health Hub",
                                  "icon": "",
                                  "slug": "/blog"
                                },
                                {
                                  "text": "My Account",
                                  "icon": "",
                                  "slug": "/account"
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
                                "classes": "transition-colors hover:text-[#7FD1C5]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#7FD1C5]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-ftr-contact-h",
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
                            "id": "os-ftr-address",
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
                                "value": "Pharmacist on call: 8am - 11pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#7FD1C5]"
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
                                "classes": "shrink-0 text-[#0E8A7E]"
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
                "id": "os-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "os-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Oushodh. All rights reserved. Drug licence no. 000000 (update before going live).",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "os-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "os-ftr-pay-txt",
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
            "id": "os-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] pb-12 pt-10 lg:pb-16 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "os-hero-cross",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -right-10 -top-10 h-72 w-72 rotate-12 bg-[radial-gradient(circle,rgba(14,138,126,0.10)_2px,transparent_2px)] bg-[length:18px_18px]"
                  }
                },
                "children": []
              },
              {
                "id": "os-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "os-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "os-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "os-hero-badges",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "os-hero-b1",
                                "type": "text",
                                "options": {
                                  "text": "Licensed online pharmacy",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-hero-b2",
                                "type": "text",
                                "options": {
                                  "text": "Genuine medicines only",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#12305A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Your medicines, delivered with care.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#122033] sm:text-5xl lg:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "os-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Order medicines, vitamins and health essentials from a pharmacy you can trust. Every prescription is checked by a registered pharmacist before it ships.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-lg leading-relaxed text-[#586577]"
                              }
                            }
                          },
                          {
                            "id": "os-hero-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search by medicine, generic name or health product",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full rounded-2xl border-2 border-[#0E8A7E] bg-white py-2 pl-2 pr-4 shadow-[0_18px_40px_-20px_rgba(14,138,126,0.55)] transition-all focus-within:ring-4 focus-within:ring-[#0E8A7E]/15"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-2.5 font-body text-base text-[#122033] placeholder:text-[#586577] focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E8A7E] text-white"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0E8A7E] focus:outline-none focus:ring-2 focus:ring-[#0E8A7E]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0E8A7E]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#0E8A7E]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0E8A7E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A6E64]"
                              }
                            }
                          },
                          {
                            "id": "os-hero-needs",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "os-hero-needs-k",
                                "type": "text",
                                "options": {
                                  "text": "Popular needs",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-bold uppercase tracking-wider text-[#586577]"
                                  }
                                }
                              },
                              {
                                "id": "os-hero-chips",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-need-1",
                                    "type": "button",
                                    "options": {
                                      "text": "Fever & pain",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/fever-pain",
                                      "target": "",
                                      "icon": "IconTemperature",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-need-2",
                                    "type": "button",
                                    "options": {
                                      "text": "Cold & flu",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/cold-flu",
                                      "target": "",
                                      "icon": "IconVirus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-need-3",
                                    "type": "button",
                                    "options": {
                                      "text": "Diabetes care",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/diabetes-care",
                                      "target": "",
                                      "icon": "IconDroplet",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-need-4",
                                    "type": "button",
                                    "options": {
                                      "text": "Heart & BP",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/heart-bp",
                                      "target": "",
                                      "icon": "IconHeartbeat",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-need-5",
                                    "type": "button",
                                    "options": {
                                      "text": "Vitamins",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/vitamins-supplements",
                                      "target": "",
                                      "icon": "IconPill",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-need-6",
                                    "type": "button",
                                    "options": {
                                      "text": "Baby & mother",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/baby-mother",
                                      "target": "",
                                      "icon": "IconBabyCarriage",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-need-7",
                                    "type": "button",
                                    "options": {
                                      "text": "Skin care",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/skin-care",
                                      "target": "",
                                      "icon": "IconLeaf",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-need-8",
                                    "type": "button",
                                    "options": {
                                      "text": "First aid",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/first-aid",
                                      "target": "",
                                      "icon": "IconFirstAidKit",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#DCE6E8] bg-white px-3.5 py-2 transition-colors hover:border-[#0E8A7E] hover:bg-[#E3F4F2]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0E8A7E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033] whitespace-nowrap group-hover:text-[#0A6E64]"
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
                        "id": "os-rx",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-5 overflow-hidden rounded-3xl bg-[#12305A] p-7 sm:p-8 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "os-rx-glow",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#0E8A7E] opacity-40 blur-3xl"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "os-rx-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative -mx-2 -mt-2 overflow-hidden rounded-2xl bg-white/[0.06]"
                              }
                            },
                            "children": [
                              {
                                "id": "os-rx-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/oushodh-hero.svg",
                                  "altText": "A prescription, a pill bottle, a blister pack and a stethoscope",
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
                            "id": "os-rx-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "os-rx-k-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-rx-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconPrescription",
                                      "size": 18,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-8 w-8 items-center justify-center rounded-lg bg-[#0E8A7E] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-rx-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Have a prescription?",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#7FD1C5]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "os-rx-h",
                                "type": "heading",
                                "options": {
                                  "text": "Order with your prescription in 3 steps",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-rx-steps",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "os-rx-s1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-rx-s1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "1",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 font-body text-sm font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-rx-s1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Send a clear photo of your prescription",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm text-white/85"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "os-rx-s2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-rx-s2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "2",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 font-body text-sm font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-rx-s2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Our pharmacist checks it and calls you",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm text-white/85"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "os-rx-s3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-rx-s3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "3",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 font-body text-sm font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-rx-s3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Medicines delivered to your door",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm text-white/85"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "os-rx-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-rx-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Upload prescription",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "#",
                                  "target": "",
                                  "icon": "IconUpload",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 transition-colors hover:bg-white/90"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#12305A]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#12305A] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "os-rx-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Call a pharmacist",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "#",
                                  "target": "",
                                  "icon": "IconPhoneCall",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 transition-colors hover:bg-white/10"
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
            ]
          },
          {
            "id": "os-trust",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-[#DCE6E8] bg-white py-6"
              }
            },
            "children": [
              {
                "id": "os-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-trust-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% genuine",
                          "description": "From licensed distributors only",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Pharmacist checked",
                          "description": "Every prescription verified",
                          "icon": "IconUserCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cold-chain delivery",
                          "description": "For insulin and vaccines",
                          "icon": "IconSnowflake",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast & COD",
                          "description": "24h in Dhaka · pay on delivery",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-5 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "grid grid-cols-[auto_1fr] items-center gap-x-3 text-left"
                      },
                      "title": {
                        "classes": "font-body text-sm font-bold text-[#122033]"
                      },
                      "description": {
                        "classes": "text-xs text-[#586577]"
                      },
                      "icon": {
                        "classes": "row-span-2 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-trust-fb-ic",
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
                        "id": "os-trust-fb-t",
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
                        "id": "os-trust-fb-d",
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
            "id": "os-concerns",
            "type": "section",
            "options": {
              "anchor": "health-concerns"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-concerns-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-concerns-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-concerns-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-concerns-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconStethoscope",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-concerns-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-concerns-h",
                                "type": "heading",
                                "options": {
                                  "text": "Shop by health concern",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-concerns-sub",
                                "type": "text",
                                "options": {
                                  "text": "Medicines and care products, grouped the way you think about them",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-concerns-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-concerns-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
                      }
                    },
                    "children": [
                      {
                        "id": "os-concern-1",
                        "type": "button",
                        "options": {
                          "text": "Diabetes",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/diabetes-care",
                          "target": "",
                          "icon": "IconDroplet",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9EEF6] text-[#12305A] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-concern-2",
                        "type": "button",
                        "options": {
                          "text": "Heart & BP",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/heart-bp",
                          "target": "",
                          "icon": "IconHeartbeat",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDECE8] text-[#E8553A] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-concern-3",
                        "type": "button",
                        "options": {
                          "text": "Stomach & digestion",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/digestive-health",
                          "target": "",
                          "icon": "IconMedicineSyrup",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4DE] text-[#B7791F] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-concern-4",
                        "type": "button",
                        "options": {
                          "text": "Respiratory",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/respiratory",
                          "target": "",
                          "icon": "IconLungs",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E3F4F2] text-[#0E8A7E] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-concern-5",
                        "type": "button",
                        "options": {
                          "text": "Skin & hair",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/skin-care",
                          "target": "",
                          "icon": "IconLeaf",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF6E6] text-[#4F7A28] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-concern-6",
                        "type": "button",
                        "options": {
                          "text": "Women’s health",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/womens-health",
                          "target": "",
                          "icon": "IconGenderFemale",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7EAF3] text-[#A63D84] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-concern-7",
                        "type": "button",
                        "options": {
                          "text": "Bone & joint",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/bone-joint",
                          "target": "",
                          "icon": "IconBone",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1EFEA] text-[#6B6455] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-concern-8",
                        "type": "button",
                        "options": {
                          "text": "Eye & ear",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/eye-ear",
                          "target": "",
                          "icon": "IconEye",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(18,32,51,0.3)]"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F2FA] text-[#1D6FA5] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold leading-tight text-[#122033]"
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
            "id": "os-deals",
            "type": "section",
            "options": {
              "anchor": "deals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-deals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-deals-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-3xl bg-[#FDECE8] p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "os-deals-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-deals-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-deals-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDiscount",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8553A] text-white"
                                  }
                                }
                              },
                              {
                                "id": "os-deals-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-deals-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Health deals of the week",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-deals-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Savings on vitamins, devices and personal care",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#586577]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "os-deals-all",
                            "type": "button",
                            "options": {
                              "text": "All deals",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/deals",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#E8553A] px-4 py-2.5 transition-opacity hover:opacity-90"
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
                      },
                      {
                        "id": "os-deals-slider",
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
                            "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-5 [&_.splide__track]:!pt-1"
                          },
                          "arrows-wrap": {
                            "classes": ""
                          },
                          "arrow-item": {
                            "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-deals-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                              }
                            },
                            "children": [
                              {
                                "id": "os-deals-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-deals-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "os-deals-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "os-deals-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                    "id": "os-deals-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-3 flex flex-col gap-1 px-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "os-deals-slider-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "hidden"
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
                                        "id": "os-deals-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "os-deals-slider-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 8,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-1 text-xs text-[#586577]"
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
                                "id": "os-deals-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-deals-slider-c-price",
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
                                        "classes": "font-body text-lg font-bold text-[#12305A]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "text-xs text-[#586577] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-body text-lg font-bold text-[#12305A]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-body text-lg font-bold text-[#12305A]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#0E8A7E]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-deals-slider-c-add",
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
                                        "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            ]
          },
          {
            "id": "os-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-12 lg:pb-16"
              }
            },
            "children": [
              {
                "id": "os-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-cats-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPills",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-cats-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-cats-h",
                                "type": "heading",
                                "options": {
                                  "text": "Browse categories",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-cats-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-cats-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-colors hover:border-[#0E8A7E]/50 hover:bg-[#E3F4F2]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "os-cats-grid-loop",
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
                            "classes": "group flex items-center gap-3 rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-colors hover:border-[#0E8A7E]/50 hover:bg-[#E3F4F2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "os-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#F4F9F8]"
                              },
                              "link": {
                                "classes": "block h-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-contain p-1.5 mix-blend-multiply"
                              }
                            }
                          },
                          {
                            "id": "os-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 font-body text-sm font-bold leading-tight text-[#122033] group-hover:text-[#0A6E64]"
                              }
                            }
                          },
                          {
                            "id": "os-cats-grid-count",
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
            "id": "os-row-otc-medicines",
            "type": "section",
            "options": {
              "anchor": "otc-medicines"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-row-otc-medicines-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-row-otc-medicines-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-otc-medicines-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-otc-medicines-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPill",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-row-otc-medicines-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-otc-medicines-h",
                                "type": "heading",
                                "options": {
                                  "text": "Everyday medicines",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-row-otc-medicines-sub",
                                "type": "text",
                                "options": {
                                  "text": "Pain relief, cold & flu, allergy and digestion",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-row-otc-medicines-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/otc-medicines",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-row-otc-medicines-slider",
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
                                  "otc-medicines"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-5 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-otc-medicines-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-otc-medicines-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-otc-medicines-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-otc-medicines-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-otc-medicines-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-row-otc-medicines-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-otc-medicines-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-row-otc-medicines-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-otc-medicines-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-row-otc-medicines-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-otc-medicines-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-row-otc-medicines-slider-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            "id": "os-row-vitamins-supplements",
            "type": "section",
            "options": {
              "anchor": "vitamins-supplements"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-row-vitamins-supplements-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-row-vitamins-supplements-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-vitamins-supplements-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-vitamins-supplements-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconActivityHeartbeat",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-row-vitamins-supplements-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-vitamins-supplements-h",
                                "type": "heading",
                                "options": {
                                  "text": "Vitamins & supplements",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-row-vitamins-supplements-sub",
                                "type": "text",
                                "options": {
                                  "text": "Immunity, energy, bones and daily wellness",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-row-vitamins-supplements-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/vitamins-supplements",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-row-vitamins-supplements-slider",
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
                                  "vitamins-supplements"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-5 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-vitamins-supplements-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-vitamins-supplements-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-vitamins-supplements-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-vitamins-supplements-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-vitamins-supplements-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-row-vitamins-supplements-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-vitamins-supplements-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-row-vitamins-supplements-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-vitamins-supplements-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-row-vitamins-supplements-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-vitamins-supplements-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-row-vitamins-supplements-slider-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            "id": "os-how",
            "type": "section",
            "options": {
              "anchor": "prescriptions"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#12305A] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "os-how-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-how-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "os-how-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-how-k",
                            "type": "text",
                            "options": {
                              "text": "Prescription medicines",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#0E8A7E] px-3 py-1 font-body text-xs font-bold text-white self-start"
                              }
                            }
                          },
                          {
                            "id": "os-how-h",
                            "type": "heading",
                            "options": {
                              "text": "Safe, checked and confidential, every time.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "os-how-p",
                            "type": "text",
                            "options": {
                              "text": "Prescription-only medicines are dispensed against a valid prescription from a registered doctor. Your details are kept private.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-how-btn",
                        "type": "button",
                        "options": {
                          "text": "Upload prescription",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "#",
                          "target": "",
                          "icon": "IconFileUpload",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 transition-colors hover:bg-white/90"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#12305A]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#12305A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-how-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "os-how-s1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "os-how-s1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "os-how-s1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFileUpload",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E8A7E] text-white"
                                  }
                                }
                              },
                              {
                                "id": "os-how-s1-n",
                                "type": "text",
                                "options": {
                                  "text": "Step 1",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-white/45"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-how-s1-h",
                            "type": "heading",
                            "options": {
                              "text": "Upload",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "os-how-s1-p",
                            "type": "text",
                            "options": {
                              "text": "Send a photo of your prescription, or order and attach it later.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-how-s2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "os-how-s2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "os-how-s2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconClipboardCheck",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E8A7E] text-white"
                                  }
                                }
                              },
                              {
                                "id": "os-how-s2-n",
                                "type": "text",
                                "options": {
                                  "text": "Step 2",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-white/45"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-how-s2-h",
                            "type": "heading",
                            "options": {
                              "text": "Pharmacist review",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "os-how-s2-p",
                            "type": "text",
                            "options": {
                              "text": "A registered pharmacist checks the medicine, strength and dosage.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-how-s3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "os-how-s3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "os-how-s3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPhoneCall",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E8A7E] text-white"
                                  }
                                }
                              },
                              {
                                "id": "os-how-s3-n",
                                "type": "text",
                                "options": {
                                  "text": "Step 3",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-white/45"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-how-s3-h",
                            "type": "heading",
                            "options": {
                              "text": "Confirm",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "os-how-s3-p",
                            "type": "text",
                            "options": {
                              "text": "We call to confirm your order, answer questions and suggest generics.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-how-s4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "os-how-s4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "os-how-s4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E8A7E] text-white"
                                  }
                                }
                              },
                              {
                                "id": "os-how-s4-n",
                                "type": "text",
                                "options": {
                                  "text": "Step 4",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-white/45"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-how-s4-h",
                            "type": "heading",
                            "options": {
                              "text": "Delivered",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "os-how-s4-p",
                            "type": "text",
                            "options": {
                              "text": "Sealed, labelled and delivered; cold-chain for insulin and vaccines.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/70"
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
            "id": "os-row-diabetes-care",
            "type": "section",
            "options": {
              "anchor": "diabetes-care"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-row-diabetes-care-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-row-diabetes-care-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-diabetes-care-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-diabetes-care-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDroplet",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-row-diabetes-care-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-diabetes-care-h",
                                "type": "heading",
                                "options": {
                                  "text": "Diabetes care",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-row-diabetes-care-sub",
                                "type": "text",
                                "options": {
                                  "text": "Glucometers, strips, lancets and sugar-free nutrition",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-row-diabetes-care-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/diabetes-care",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-row-diabetes-care-slider",
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
                                  "diabetes-care"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-5 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-diabetes-care-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-diabetes-care-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-diabetes-care-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-diabetes-care-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-diabetes-care-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-row-diabetes-care-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-diabetes-care-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-row-diabetes-care-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-diabetes-care-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-row-diabetes-care-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-diabetes-care-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-row-diabetes-care-slider-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            "id": "os-row-health-devices",
            "type": "section",
            "options": {
              "anchor": "health-devices"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-row-health-devices-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-row-health-devices-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-health-devices-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-health-devices-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconThermometer",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-row-health-devices-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-health-devices-h",
                                "type": "heading",
                                "options": {
                                  "text": "Health devices",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-row-health-devices-sub",
                                "type": "text",
                                "options": {
                                  "text": "BP monitors, thermometers, nebulisers and oximeters",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-row-health-devices-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/health-devices",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-row-health-devices-slider",
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
                                  "health-devices"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-5 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-health-devices-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-health-devices-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-health-devices-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-health-devices-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-health-devices-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-row-health-devices-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-health-devices-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-row-health-devices-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-health-devices-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-row-health-devices-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-health-devices-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-row-health-devices-slider-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            "id": "os-refill",
            "type": "section",
            "options": {
              "anchor": "refill"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-refill-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-refill-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl bg-[#0E8A7E] p-8 sm:p-10 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-refill-ring",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-white/10"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "os-refill-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 md:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "os-refill-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "os-refill-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCalendarRepeat",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-white"
                                  }
                                }
                              },
                              {
                                "id": "os-refill-k",
                                "type": "text",
                                "options": {
                                  "text": "Monthly refills",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-white/85"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-refill-h",
                            "type": "heading",
                            "options": {
                              "text": "Never run out of regular medicines.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "os-refill-p",
                            "type": "text",
                            "options": {
                              "text": "Create an account and we will remind you before your regular medicines run low, so reordering takes one tap.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-refill-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 md:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "os-refill-btn",
                            "type": "button",
                            "options": {
                              "text": "Set up refill reminders",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconBell",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 transition-colors hover:bg-white/90"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0A6E64]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap"
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
            "id": "os-row-personal-care",
            "type": "section",
            "options": {
              "anchor": "personal-care"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-row-personal-care-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-row-personal-care-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-personal-care-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-personal-care-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconLeaf",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-row-personal-care-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-personal-care-h",
                                "type": "heading",
                                "options": {
                                  "text": "Personal care & hygiene",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-row-personal-care-sub",
                                "type": "text",
                                "options": {
                                  "text": "Oral care, skincare, sanitary and hygiene essentials",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-row-personal-care-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/personal-care",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-row-personal-care-slider",
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
                                  "personal-care"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-5 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-personal-care-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-personal-care-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-personal-care-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-personal-care-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-personal-care-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-row-personal-care-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-personal-care-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-row-personal-care-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-personal-care-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-row-personal-care-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-personal-care-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-row-personal-care-slider-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            "id": "os-row-baby-mother",
            "type": "section",
            "options": {
              "anchor": "baby-mother"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-row-baby-mother-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-row-baby-mother-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-baby-mother-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-baby-mother-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBabyCarriage",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-row-baby-mother-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-baby-mother-h",
                                "type": "heading",
                                "options": {
                                  "text": "Baby & mother",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-row-baby-mother-sub",
                                "type": "text",
                                "options": {
                                  "text": "Diapers, formula, baby skincare and maternity care",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-row-baby-mother-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/baby-mother",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-row-baby-mother-slider",
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
                                  "baby-mother"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-5 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-row-baby-mother-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-row-baby-mother-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-baby-mother-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-baby-mother-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-baby-mother-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-row-baby-mother-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-row-baby-mother-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-row-baby-mother-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-row-baby-mother-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-row-baby-mother-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-row-baby-mother-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-row-baby-mother-slider-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            "id": "os-mfrsec",
            "type": "section",
            "options": {
              "anchor": "manufacturers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-mfrsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-mfrsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-mfrsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-mfrsec-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCertificate",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-mfrsec-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-mfrsec-h",
                                "type": "heading",
                                "options": {
                                  "text": "Trusted manufacturers",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-mfrsec-sub",
                                "type": "text",
                                "options": {
                                  "text": "Sourced only from licensed manufacturers and distributors",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-mfrsec-all",
                        "type": "button",
                        "options": {
                          "text": "All brands",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-mfr-slider",
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
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#DCE6E8] bg-white p-3 text-center transition-colors hover:border-[#0E8A7E]/50"
                      }
                    },
                    "children": [
                      {
                        "id": "os-mfr-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#DCE6E8] bg-white p-3 text-center transition-colors hover:border-[#0E8A7E]/50"
                          }
                        },
                        "children": [
                          {
                            "id": "os-mfr-slider-thumb",
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
                                "classes": "max-h-10 w-auto max-w-full object-contain"
                              }
                            }
                          },
                          {
                            "id": "os-mfr-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-1 font-body text-xs font-bold text-[#122033]"
                              }
                            }
                          },
                          {
                            "id": "os-mfr-slider-count",
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
            "id": "os-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-reviews-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMoodHappy",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-reviews-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-reviews-h",
                                "type": "heading",
                                "options": {
                                  "text": "Trusted by 80,000+ families",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-reviews-sub",
                                "type": "text",
                                "options": {
                                  "text": "Rated 4.8 for genuine medicines and caring service",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
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
                    "id": "os-reviews-slider",
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
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#DCE6E8] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0E8A7E] hover:!border-[#0E8A7E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#122033] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#122033]/15 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#0E8A7E]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#DCE6E8] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "os-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r1-stars",
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
                                "id": "os-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“I order my father’s heart medicines every month. The pharmacist called to confirm the dose and suggested a cheaper generic. Very caring.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#122033]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#DCE6E8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "MA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F4F2] font-body text-sm font-bold text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mahbub Alam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#122033]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified customer • Mirpur",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold text-[#0A6E64]"
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
                        "id": "os-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#DCE6E8] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "os-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r2-stars",
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
                                "id": "os-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Insulin arrived in a cold box with ice packs, the same day. As a type 1 diabetic, that matters a lot to me.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#122033]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#DCE6E8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "SN",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F4F2] font-body text-sm font-bold text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sharmin Nahar",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#122033]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified customer • Dhanmondi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold text-[#0A6E64]"
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
                        "id": "os-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#DCE6E8] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "os-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r3-stars",
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
                                "id": "os-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Sealed boxes, proper batch and expiry dates, and the price was lower than my local shop. Paid cash at the door.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#122033]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#DCE6E8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "RU",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F4F2] font-body text-sm font-bold text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rafiq Uddin",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#122033]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified customer • Narayanganj",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold text-[#0A6E64]"
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
                        "id": "os-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#DCE6E8] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "os-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r4-stars",
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
                                "id": "os-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Uploaded my child’s prescription at 9 pm and the medicines came the next morning. The refill reminder is so useful.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#122033]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#DCE6E8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "NJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F4F2] font-body text-sm font-bold text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusrat Jahan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#122033]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified customer • Uttara",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold text-[#0A6E64]"
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
                        "id": "os-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#DCE6E8] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "os-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r5-stars",
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
                                "id": "os-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Bought a BP monitor and glucometer. They explained how to use both over the phone. Honest and helpful service.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#122033]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#DCE6E8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "AK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F4F2] font-body text-sm font-bold text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Abdul Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#122033]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified customer • Chattogram",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold text-[#0A6E64]"
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
                        "id": "os-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#DCE6E8] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "os-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r6-stars",
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
                                "id": "os-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“At my age it is hard to go to the pharmacy. Now my grandson orders for me and everything arrives correctly.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#122033]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#DCE6E8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "os-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "FB",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F4F2] font-body text-sm font-bold text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Fatema Begum",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#122033]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified customer • Sylhet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold text-[#0A6E64]"
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
            "id": "os-journal",
            "type": "section",
            "options": {
              "anchor": "health-hub"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "os-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-journal-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMicroscope",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-journal-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "os-journal-h",
                                "type": "heading",
                                "options": {
                                  "text": "Health hub",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "os-journal-sub",
                                "type": "text",
                                "options": {
                                  "text": "Simple, reliable health information from our pharmacists",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#586577]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "os-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0A6E64] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap group-hover:underline"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-journal-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white transition-all hover:border-[#0E8A7E]/50"
                      }
                    },
                    "children": [
                      {
                        "id": "os-journal-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white transition-all hover:border-[#0E8A7E]/50"
                          }
                        },
                        "children": [
                          {
                            "id": "os-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#E3F4F2]"
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
                            "id": "os-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "os-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-bold uppercase tracking-wider text-[#0A6E64]"
                                  }
                                }
                              },
                              {
                                "id": "os-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-semibold leading-snug tracking-tight text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                  }
                                }
                              },
                              {
                                "id": "os-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read article",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#586577]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#0A6E64]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex transition-transform group-hover/rm:translate-x-0.5"
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
            "id": "os-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "os-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-4 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "os-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-7 flex flex-wrap items-end justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-faq-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHelpCircle",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                                  }
                                }
                              },
                              {
                                "id": "os-faq-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-faq-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Questions & answers",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-semibold tracking-tight text-[#122033] sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-faq-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "About prescriptions, delivery and safety",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#586577]"
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
                        "id": "os-faq-card",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-[#DCE6E8]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-card-h",
                            "type": "heading",
                            "options": {
                              "text": "Talk to a pharmacist",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-bold text-[#122033]"
                              }
                            }
                          },
                          {
                            "id": "os-faq-card-p",
                            "type": "text",
                            "options": {
                              "text": "Questions about a medicine or your order? We are available every day, 8 am to 11 pm.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#586577]"
                              }
                            }
                          },
                          {
                            "id": "os-faq-card-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "os-faq-card-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Call us",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "#",
                                  "target": "",
                                  "icon": "IconPhoneCall",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0E8A7E] px-6 py-3.5 transition-colors hover:bg-[#0A6E64] !px-4 !py-2.5"
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
                                "id": "os-faq-card-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "WhatsApp",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "#",
                                  "target": "",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-[#0E8A7E] px-6 py-3 transition-colors hover:bg-[#E3F4F2] !px-4 !py-2"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#0A6E64]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#0A6E64] whitespace-nowrap"
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
                    "id": "os-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Do I need a prescription?",
                          "classes": ""
                        },
                        {
                          "label": "Are your medicines genuine?",
                          "classes": ""
                        },
                        {
                          "label": "How fast is delivery?",
                          "classes": ""
                        },
                        {
                          "label": "Can I return medicines?",
                          "classes": ""
                        },
                        {
                          "label": "Which payment methods do you accept?",
                          "classes": ""
                        },
                        {
                          "label": "Can your pharmacist give medical advice?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-[#DCE6E8] bg-white px-5 py-4 font-body text-base font-bold text-[#122033] transition-colors hover:border-[#0E8A7E]/50"
                      },
                      "accordion-header-open": {
                        "classes": "!rounded-b-none !border-b-0 !border-[#0E8A7E]/50 text-[#0A6E64]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#0E8A7E]"
                      },
                      "accordion-content": {
                        "classes": "-mt-3 rounded-b-2xl border border-t-0 border-[#0E8A7E]/50 bg-white px-5 pb-5 pt-1"
                      }
                    },
                    "children": [
                      {
                        "id": "os-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Prescription-only medicines are dispensed only against a valid prescription from a registered doctor, checked by our pharmacist. Over-the-counter medicines, vitamins and health products can be ordered without one.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#586577]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. We buy only from licensed manufacturers and their authorised distributors. Every pack is sealed with its batch number and expiry date clearly printed.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#586577]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka usually within 24 hours, 48-72 hours elsewhere. Insulin, vaccines and other cold-chain items are packed with ice packs.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#586577]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "For safety, medicines cannot be returned once delivered unless they are damaged, expired or not what you ordered. Tell us within 48 hours and we will replace or refund them. Unopened devices and personal care products follow our 7-day return policy.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#586577]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Cash on delivery, bKash, Nagad and Visa / Mastercard.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#586577]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-faq-i6",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-faq-i6-a",
                            "type": "text",
                            "options": {
                              "text": "Our pharmacists can explain how to take a medicine, possible side effects and generic alternatives. For diagnosis or treatment decisions, please consult your doctor.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#586577]"
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
            "id": "os-cta",
            "type": "section",
            "options": {
              "anchor": "join"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "os-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6"
                  }
                },
                "children": [
                  {
                    "id": "os-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-[#12305A] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "os-cta-dots",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1.5px,transparent_1.5px)] bg-[length:20px_20px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "os-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex max-w-xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-cta-k",
                            "type": "text",
                            "options": {
                              "text": "First order",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#0E8A7E] px-3 py-1 font-body text-xs font-bold text-white self-start"
                              }
                            }
                          },
                          {
                            "id": "os-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Get 10% off health products on your first order.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "os-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account to save prescriptions, track orders and set refill reminders. Discount excludes prescription medicines.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "os-cta-btn-1",
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
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0E8A7E] px-6 py-3.5 transition-colors hover:bg-[#0A6E64]"
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
                            "id": "os-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Shop health products",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 transition-colors hover:bg-white/10"
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
                  },
                  {
                    "id": "os-disclaimer",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex items-start gap-3 rounded-2xl bg-[#F4F9F8] p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "os-disclaimer-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconStethoscope",
                          "size": 18,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-0.5 flex shrink-0 text-[#0E8A7E]"
                          }
                        }
                      },
                      {
                        "id": "os-disclaimer-t",
                        "type": "text",
                        "options": {
                          "text": "Information on this website is for general guidance and is not a substitute for advice from your doctor. Always read the label and follow your doctor’s or pharmacist’s instructions.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-xs leading-relaxed text-[#586577]"
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
            "id": "os-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "All products",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Medicines & Health Products",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Everyday medicines, vitamins, devices and personal care. Prescription-only medicines require a valid prescription.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-shop-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-shop-grid-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
                        "id": "os-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-shop-promise",
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
                "id": "os-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% genuine",
                          "description": "From licensed distributors only",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Pharmacist checked",
                          "description": "Every prescription verified",
                          "icon": "IconUserCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cold-chain delivery",
                          "description": "For insulin and vaccines",
                          "icon": "IconSnowflake",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast & COD",
                          "description": "24h in Dhaka · pay on delivery",
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
                        "classes": "font-body text-sm font-bold text-[#122033]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-shop-promise-fb-ic",
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
                        "id": "os-shop-promise-fb-t",
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
                        "id": "os-shop-promise-fb-d",
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
            "id": "os-pd",
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
                "id": "os-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-pd-grid",
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
                        "id": "os-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "os-pd-gallery",
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
                                "classes": "rounded-3xl border-4 border-white bg-gradient-to-tr from-[#E9EEF6] via-white to-[#F4F9F8] p-4 shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#122033]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#122033]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#0E8A7E]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "os-pd-cats",
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
                                "classes": "rounded-full bg-[#E9EEF6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#12305A] hover:bg-[#12305A] hover:text-white"
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
                            "id": "os-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold leading-tight text-[#122033] sm:text-4xl tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "os-pd-rate",
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
                                "classes": "font-body font-bold text-[#122033]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "os-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-price",
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
                                    "classes": "font-heading text-3xl font-semibold text-[#122033] tracking-tight"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-semibold text-[#122033] tracking-tight"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-semibold text-[#122033] tracking-tight"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#0E8A7E] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "os-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#586577]"
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
                            "id": "os-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#122033]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#122033] transition-colors hover:border-[#12305A] hover:bg-[#E9EEF6]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#12305A] !bg-[#E9EEF6] !text-[#1C4176]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "os-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock · ask our pharmacist for an alternative",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#0E8A7E]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#12305A]"
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
                            "id": "os-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#122033]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4F9F8]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4F9F8]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#0E8A7E] px-8 text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#0A6E64]"
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
                            "id": "os-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "100% genuine",
                                  "description": "Licensed sources",
                                  "icon": "IconCertificate",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Pharmacist checked",
                                  "description": "Every Rx order",
                                  "icon": "IconUserCheck",
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
                                "classes": "font-body text-base font-bold text-[#122033]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9EEF6] text-[#12305A]"
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-perks-ic",
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
                                "id": "os-pd-perks-t",
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
                                "id": "os-pd-perks-d",
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
                            "id": "os-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-sku",
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
                                    "classes": "font-semibold text-[#122033]"
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
                                "id": "os-pd-brands",
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
                                    "classes": "font-semibold text-[#122033]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0E8A7E]"
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
                                "id": "os-pd-tags",
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
                                    "classes": "font-semibold text-[#122033]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0E8A7E]"
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
            "id": "os-pd-tabs-sec",
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
                "id": "os-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,32,51,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "os-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Usage & Safety",
                              "icon": "IconFirstAidKit"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4F9F8] px-5 py-2.5 font-body text-sm font-semibold text-[#122033] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#122033] !text-white shadow-md"
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
                            "id": "os-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-[#122033] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#122033] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#0E8A7E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#7FD1C5] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconFirstAidKit",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Generic name, strength, pack size and manufacturer are listed in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Prescription-only medicines are dispensed against a valid prescription",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Read the leaflet and follow your doctor’s or pharmacist’s instructions",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Store as directed on the pack, out of reach of children",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#12305A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-ship-list",
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
                                      "text": "Cold-chain packing for insulin and vaccines",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged, expired or wrong item? Tell us within 48 hours",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#12305A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "os-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F4F9F8] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F4F9F8] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "os-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E3F4F2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "os-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#122033]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "os-pd-reviews-rate",
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
                                        "id": "os-pd-reviews-co",
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
                                    "id": "os-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "Share your experience with this product",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,32,51,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#122033]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F4F9F8] px-4 py-3 text-sm text-[#122033] placeholder:text-gray-400 focus:border-[#12305A] focus:outline-none focus:ring-2 focus:ring-[#12305A]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#0E8A7E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A6E64] disabled:opacity-50"
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
            "id": "os-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-16"
              }
            },
            "children": [
              {
                "id": "os-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "os-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Often bought together",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3F4F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0E8A7E]"
                          }
                        }
                      },
                      {
                        "id": "os-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Related Products",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-semibold text-[#122033] tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-pd-rel-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-pd-rel-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
            "id": "os-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Browse",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Medicines, vitamins, devices, personal care and baby care. Choose a category.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E9EEF6] transition-transform"
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
                            "id": "os-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-cat-grid-count",
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
                        "id": "os-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "os-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#12305A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-cat1-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
                        "id": "os-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group products by need: sugar-free, kids, elderly care, deals and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0E8A7E]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#122033] group-hover:text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F4F9F8] px-2 py-0.5 text-[10px] font-bold text-[#586577]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "os-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "os-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#12305A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-tag1-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
                        "id": "os-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Licensed sources",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Manufacturers & Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every manufacturer and brand we stock, sourced through licensed distributors.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F4F9F8] p-3"
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
                            "id": "os-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#122033] group-hover:text-[#0E8A7E]"
                              }
                            }
                          },
                          {
                            "id": "os-brand-grid-count",
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
                        "id": "os-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "os-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#12305A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-brand1-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
                        "id": "os-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "From our pharmacists",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Health Hub",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Simple, reliable health information. Not a substitute for advice from your doctor.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F4F9F8]"
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
                            "id": "os-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "os-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#12305A]"
                                  }
                                }
                              },
                              {
                                "id": "os-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                  }
                                }
                              },
                              {
                                "id": "os-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#0E8A7E]"
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
                        "id": "os-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#122033] transition-colors hover:border-[#0E8A7E] hover:text-[#0E8A7E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E8A7E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "os-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F4F9F8] via-white to-[#F4F9F8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "os-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-post-k",
                    "type": "text",
                    "options": {
                      "text": "Health Hub",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E9EEF6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#12305A]"
                      }
                    }
                  },
                  {
                    "id": "os-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-semibold leading-tight text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#586577]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-post-author",
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
                            "classes": "font-body font-bold text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-post-dot",
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
                        "id": "os-post-date",
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
                    "id": "os-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-3xl border-4 border-white shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
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
            "id": "os-post-body",
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
                "id": "os-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-[#122033] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#122033] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#0E8A7E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#7FD1C5] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-16"
              }
            },
            "children": [
              {
                "id": "os-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-semibold text-[#122033] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F4F9F8] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "os-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F4F9F8] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "os-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E3F4F2]"
                              }
                            }
                          },
                          {
                            "id": "os-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#122033]"
                              }
                            }
                          },
                          {
                            "id": "os-post-cmt-co",
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
                        "id": "os-post-cmt-form",
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
                            "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,32,51,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#122033]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F4F9F8] px-4 py-3 text-sm text-[#122033] placeholder:text-gray-400 focus:border-[#12305A] focus:outline-none focus:ring-2 focus:ring-[#12305A]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#0E8A7E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A6E64] disabled:opacity-50"
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
            "id": "os-post-more",
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
                "id": "os-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From the Health Hub",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-semibold text-[#122033] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,32,51,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F4F9F8]"
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
                            "id": "os-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "os-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#12305A]"
                                  }
                                }
                              },
                              {
                                "id": "os-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
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
            "id": "os-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#DCE6E8] bg-gradient-to-b from-[#E3F4F2] to-[#F4F9F8] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "os-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "os-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-body text-xs font-bold text-[#0A6E64]"
                      }
                    }
                  },
                  {
                    "id": "os-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#122033] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, reorder regular medicines and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#586577] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "os-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-12"
              }
            },
            "children": [
              {
                "id": "os-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-3xl bg-[#122033] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#7FD1C5]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-semibold text-white tracking-tight"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#0E8A7E]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#0E8A7E]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#0E8A7E]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "os-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "os-acc-3",
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
                                "id": "os-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,32,51,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0E8A7E] focus:outline-none focus:ring-2 focus:ring-[#0E8A7E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0E8A7E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A6E64] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A7E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "os-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,32,51,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0E8A7E] focus:outline-none focus:ring-2 focus:ring-[#0E8A7E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0E8A7E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A6E64] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A7E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "os-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "os-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4F9F8] px-5 py-2.5 font-body text-sm font-semibold text-[#122033] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#122033] !text-white shadow-md"
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
                                "id": "os-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E8A7E]/10 text-[#0E8A7E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "os-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#0E8A7E] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "os-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E8A7E]/10 text-[#0E8A7E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "os-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#0E8A7E]/40 hover:bg-[#0E8A7E]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E8A7E]/10 text-[#0E8A7E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "os-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0E8A7E]/10 text-[#0E8A7E]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0E8A7E] focus:outline-none focus:ring-2 focus:ring-[#0E8A7E]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#0E8A7E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A6E64] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A7E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A7E]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "os-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F4F9F8] via-white to-[#F4F9F8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "os-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(18,32,51,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "os-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E9EEF6] text-[#12305A]"
                          }
                        }
                      },
                      {
                        "id": "os-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3F4F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0E8A7E]"
                          }
                        }
                      },
                      {
                        "id": "os-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You. Your Order Is Confirmed.",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-semibold text-[#122033] sm:text-4xl tracking-tight"
                          }
                        }
                      },
                      {
                        "id": "os-ty-p",
                        "type": "text",
                        "options": {
                          "text": "If your order includes prescription medicines, our pharmacist will contact you to verify it. You can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#586577] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "os-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order; prescription items are checked by our pharmacist",
                              "icon": ""
                            },
                            {
                              "text": "Your medicines are packed sealed, with cold-chain packing where needed",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-2xl bg-[#F4F9F8] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#0E8A7E]"
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
                        "id": "os-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "os-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E8A7E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A6E64] w-full sm:w-auto"
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
                            "id": "os-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#12305A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#12305A] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#12305A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#12305A] whitespace-nowrap group-hover:text-white"
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
            "id": "os-ty-promise",
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
                "id": "os-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% genuine",
                          "description": "From licensed distributors only",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Pharmacist checked",
                          "description": "Every prescription verified",
                          "icon": "IconUserCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cold-chain delivery",
                          "description": "For insulin and vaccines",
                          "icon": "IconSnowflake",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast & COD",
                          "description": "24h in Dhaka · pay on delivery",
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
                        "classes": "font-body text-sm font-bold text-[#122033]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3F4F2] text-[#0E8A7E]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-ty-promise-fb-ic",
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
                        "id": "os-ty-promise-fb-t",
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
                        "id": "os-ty-promise-fb-d",
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
            "id": "os-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F4F9F8] via-white to-[#F4F9F8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "os-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-semibold text-[#0E8A7E] sm:text-9xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4F9F8] text-[#122033]"
                      }
                    }
                  },
                  {
                    "id": "os-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Page Not Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-semibold text-[#122033] sm:text-4xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "os-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the product may no longer be available. Search above or browse all products.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#586577] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "os-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "os-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E8A7E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(14,138,126,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A6E64] w-full sm:w-auto"
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
                        "id": "os-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Browse All Products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#12305A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#12305A] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#12305A] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#12305A] whitespace-nowrap group-hover:text-white"
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
            "id": "os-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F9F8] py-16"
              }
            },
            "children": [
              {
                "id": "os-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "os-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "os-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#7FD1C5] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#122033]"
                          }
                        }
                      },
                      {
                        "id": "os-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-semibold text-[#122033] sm:text-4xl tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "os-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "os-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE6E8] bg-white p-3 transition-all duration-200 hover:border-[#0E8A7E]/50 hover:shadow-[0_16px_32px_-18px_rgba(14,138,126,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "os-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "os-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F4F9F8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-0.5 rounded-lg bg-[#E8553A] px-2 py-1 text-[11px] font-bold text-white"
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
                                "id": "os-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "os-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "os-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-[15px] font-bold leading-snug text-[#122033] transition-colors group-hover:text-[#0E8A7E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "os-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-xs text-[#586577]"
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
                            "id": "os-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-[#DCE6E8] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "os-nf-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#586577] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#12305A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E8A7E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E8A7E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "os-nf-grid-c-add",
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
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#0E8A7E] px-3.5 text-white transition-colors hover:bg-[#0A6E64]"
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
