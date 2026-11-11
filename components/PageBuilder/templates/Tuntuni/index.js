/**
 * Template: Tuntuni Kids.
 *
 * A playful-modern kidswear store (tuntuni is the tailorbird, the bird that
 * sews, from the Bangla children's tales) for babies to 14-year-olds. Like
 * the other complete templates here it carries all sixteen page types -
 * Header, Footer, Home, Shop, Product, the six taxonomy archives, Blog
 * Archive, Blog Single, Account, Thank you and 404 - so applying it replaces
 * every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to tt-, palette remapped, copy
 * rewritten); the Header is rearranged and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * A butter promo bar, then a three-column row - search (and the mobile menu
 * button, whose drawer opens from the left) | the centred logo with a
 * stitched "t" mark | account and cart - then a clothesline: a striped rope
 * across the full width (tt-hdr-line) with the menu hanging from it. Each
 * menu item is a stitched clothing tag on a wooden peg (`menu-item`
 * `before:`), with its own colour and tilt in its own `link` classes; it
 * straightens and drops on hover. Below lg the clothesline is hidden and the
 * drawer holds the same menu.
 *
 * DESIGN
 *
 *   cobalt     #3550DC  primary: buttons, prices, links      #2A41B8 hover  #E6EAFD tint
 *   tangerine  #FF7A3D  secondary: kickers, stickers, sale    #E8652A hover  #FFE9DD tint
 *   butter     #FFC93C  accent: promo bar, tape, add buttons  #E3AC1C shade  #FFF2CC tint
 *   tag pastels  pink #FFB3C7  mint #8FD9C0  lilac #C9B6FF  sky #A9D3FF  peach #FFD0B0
 *   ink #23214A   cream #FFF8EE / #FBEEDC   muted #6B6785   line #EEE2CF   peg #B9855A
 *
 * Fonts (template meta): Bagel Fat One (display: it has one weight, so
 * headings carry font-normal), Nunito (body), Gochi Hand via
 * `font-['Gochi_Hand']` for handwritten kickers and notes. Recurring motifs:
 * dashed "stitch" outlines, pressable buttons with a hard ink shadow, a
 * scalloped footer edge.
 *
 * Product cards: a 4:5 photo on cream that gets a stitched inner border on
 * hover, a tilted tangerine discount sticker, the name in Nunito, one
 * handwritten excerpt line (use the excerpt for the age range or fabric,
 * e.g. "Ages 2-6 · 100% cotton"), the price in Bagel Fat One and a round
 * butter "+" add-to-bag button.
 *
 * HOME
 *
 *   Hero: headline, buttons and an age "measuring tape" (/tags/age-...) beside
 *   a flat-lay illustration (public/templates/tuntuni-hero.svg) with stickers -
 *   perk strip - shop for: baby / girls / boys / twinning patches (#shop-for) -
 *   new in - round category stickers (#categories) - parents' favourites
 *   (#bestsellers) - festive and back-to-school edits (#edits) - baby
 *   essentials - fabric promise (#why-us) - girls - size guide growth chart
 *   (#size-guide) - boys - brands (#brands) - reviews - parent notes
 *   (#journal) - FAQ (#faq) - birthday-club CTA (#club).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: baby, girls, boys, matching-sets, school-wear, nightwear.
 *     Tag slugs: bestseller, festive, sale, and the age tags age-0-12m,
 *     age-1-3y, age-4-6y, age-7-10y, age-11-14y. Brands are product_brand terms.
 *   - The size chart is a general height-based guide (EU-style sizes); replace
 *     it with your own if your labels size differently.
 *   - Contact details, promo code LITTLE10, the 10% offer, the ৳1,500
 *     free-delivery threshold, free size exchanges, the birthday-club reward,
 *     "18,000+ families" and the six reviews are sample copy.
 */

var template = [
  {
    "name": "Tuntuni Kids",
    "description": "Playful-modern kidswear store on cream with cobalt, tangerine, butter and pastel tags; Bagel Fat One display, Nunito body and Gochi Hand notes: a clothesline header where the menu hangs as stitched clothing tags on pegs around a centred logo, a flat-lay hero with an age \"measuring tape\", stitched shop-for patches, new in, round category stickers, parents’ favourites, festive and school edits, a height-based size chart, baby, girls and boys rows, brands, reviews, parent notes, FAQ and a birthday-club CTA. All 16 pages.",
    "thumbnail": "/templates/tuntuni.svg",
    "meta": {
      "fonts": [
        {
          "family": "Bagel Fat One",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Nunito",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Gochi Hand",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Bagel Fat One",
        "body": "Nunito"
      },
      "colors": {
        "primary": "#3550DC",
        "secondary": "#FF7A3D",
        "accent": "#FFC93C",
        "background": "#FFF8EE",
        "foreground": "#23214A",
        "muted": "#6B6785"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "tt-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE]/95 backdrop-blur"
              }
            },
            "children": [
              {
                "id": "tt-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 border-b-2 border-[#23214A] bg-[#FFC93C] px-4 py-2 text-center font-body text-xs font-bold text-[#23214A] md:text-sm"
                  }
                },
                "children": [
                  {
                    "id": "tt-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery over ৳1,500 · 10% off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "tt-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "LITTLE10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#23214A] px-2.5 py-0.5 font-body text-xs font-extrabold tracking-wider text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-hdr-promo-btn",
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
                        "classes": "font-body text-xs font-extrabold text-[#23214A] underline decoration-wavy underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "tt-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid h-[76px] grid-cols-[1fr_auto_1fr] items-center gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-hdr-left",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-hdr-mobile",
                            "type": "popoverButton",
                            "options": {
                              "buttonLabel": "",
                              "buttonIcon": "IconMenu2",
                              "position": "fixedLeft"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative lg:hidden"
                              },
                              "button": {
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-white text-[#23214A]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FFF8EE] p-2 text-[#23214A] transition-colors hover:bg-[#FF7A3D] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "t",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-full bg-[#FFC93C] font-heading font-normal leading-none text-[#23214A] outline-dashed outline-2 outline-offset-2 outline-[#FF7A3D] transition-transform group-hover:-rotate-12"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "tt-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "tuntuni",
                                          "src": "https://placehold.co/200x64?text=Tuntuni",
                                          "altText": "Tuntuni Kids",
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
                                            "classes": "font-heading font-normal text-[30px] leading-none text-[#3550DC]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "tt-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "kidswear for 0–14",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-0.5 block font-['Gochi_Hand'] text-sm leading-none text-[#FF7A3D]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "tt-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search kidswear...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FFF8EE] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#3550DC] focus-within:ring-2 focus-within:ring-[#3550DC]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#23214A] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6B6785]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#FF7A3D]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#FF7A3D]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#FF7A3D] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#E8652A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#23214A] transition-colors hover:text-[#FF7A3D]"
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
                                    "id": "tt-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New In",
                                      "url": "/shop"
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
                                    "id": "tt-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Baby",
                                      "url": "/categories/baby"
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
                                    "id": "tt-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Girls",
                                      "url": "/categories/girls"
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
                                    "id": "tt-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Boys",
                                      "url": "/categories/boys"
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
                                    "id": "tt-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Festive",
                                      "url": "/tags/festive"
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
                                    "id": "tt-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "School",
                                      "url": "/categories/school-wear"
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
                                    "id": "tt-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Nightwear",
                                      "url": "/categories/nightwear"
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
                                    "id": "tt-hdr-m-menu-i8",
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
                          },
                          {
                            "id": "tt-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search frocks, rompers...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden w-full max-w-[260px] rounded-full border-2 border-[#23214A] bg-white py-1 pl-1 pr-3 transition-all focus-within:ring-4 focus-within:ring-[#FFC93C]/50 md:block"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#23214A] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#6B6785]"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#FF7A3D]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#FF7A3D]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#FF7A3D] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#E8652A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2.5 justify-self-center"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "t",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 text-2xl items-center justify-center rounded-full bg-[#FFC93C] font-heading font-normal leading-none text-[#23214A] outline-dashed outline-2 outline-offset-2 outline-[#FF7A3D] transition-transform group-hover:-rotate-12"
                              }
                            }
                          },
                          {
                            "id": "tt-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "tuntuni",
                                  "src": "https://placehold.co/200x64?text=Tuntuni",
                                  "altText": "Tuntuni Kids",
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
                                    "classes": "font-heading font-normal text-[30px] leading-none text-[#3550DC]"
                                  }
                                }
                              },
                              {
                                "id": "tt-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "kidswear for 0–14",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block font-['Gochi_Hand'] text-[15px] leading-none text-[#FF7A3D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "tt-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-end gap-2.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-hdr-account",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-white text-[#23214A] transition-colors hover:bg-[#FFB3C7]"
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
                            "id": "tt-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#3550DC] text-white shadow-[0_10px_25px_-5px_rgba(53,80,220,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#2A41B8]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#FF7A3D] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FFF8EE] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-heading text-xl font-normal text-[#23214A]"
                              },
                              "title-icon": {
                                "classes": "text-[#FF7A3D]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#FF7A3D] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#FF7A3D] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#E8652A]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A3D]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#FF7A3D] px-4 py-2 text-sm font-medium text-[#FF7A3D] transition-colors hover:bg-[#FF7A3D] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF7A3D] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E8652A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A3D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
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
                "id": "tt-hdr-line",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative hidden w-full pb-4 lg:block before:pointer-events-none before:absolute before:inset-x-0 before:top-[9px] before:h-[3px] before:bg-[repeating-linear-gradient(135deg,#C9A47A_0_3px,#EFDDC2_3px_6px)] before:content-['']"
                  }
                },
                "children": [
                  {
                    "id": "tt-hdr-line-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-hdr-menu",
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
                            "classes": "flex items-start justify-center gap-3 xl:gap-5"
                          },
                          "menu-item": {
                            "classes": "relative pt-2.5 before:absolute before:left-1/2 before:top-0 before:z-10 before:h-[18px] before:w-2.5 before:-translate-x-1/2 before:rounded-[3px] before:bg-[#B9855A] before:shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)] before:content-['']"
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "relative flex origin-top items-center gap-1.5 whitespace-nowrap rounded-[10px_10px_16px_16px] px-4 pb-2.5 pt-3.5 font-body text-sm font-extrabold shadow-[0_6px_14px_-8px_rgba(35,33,74,0.5)] outline-dashed outline-1 outline-offset-[-4px] outline-[#23214A]/30 transition-transform duration-300 hover:translate-y-1 hover:rotate-0"
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
                            "id": "tt-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "New In",
                              "url": "/shop"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "bg-[#FFB3C7] text-[#23214A] -rotate-3"
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
                            "id": "tt-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Baby",
                              "url": "/categories/baby"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "bg-[#8FD9C0] text-[#23214A] rotate-2"
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
                            "id": "tt-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Girls",
                              "url": "/categories/girls"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "bg-[#C9B6FF] text-[#23214A] -rotate-2"
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
                            "id": "tt-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Boys",
                              "url": "/categories/boys"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "bg-[#A9D3FF] text-[#23214A] rotate-3"
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
                            "id": "tt-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Festive",
                              "url": "/tags/festive"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "bg-[#FFC93C] text-[#23214A] -rotate-[1.5deg]"
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
                            "id": "tt-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "School",
                              "url": "/categories/school-wear"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "bg-[#FFD0B0] text-[#23214A] rotate-[2.5deg]"
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
                            "id": "tt-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Nightwear",
                              "url": "/categories/nightwear"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "bg-[#3550DC] text-[#FFFFFF] -rotate-[2.5deg]"
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
                            "id": "tt-hdr-menu-i8",
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
                                "classes": "bg-[#FF7A3D] text-[#FFFFFF] rotate-[1.5deg]"
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
            "id": "tt-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#23214A] pb-12 pt-20 text-white before:absolute before:inset-x-0 before:top-0 before:h-4 before:bg-[radial-gradient(circle_at_12px_0,#FFF8EE_11px,transparent_11.5px)] before:bg-[length:24px_16px] before:content-['']"
              }
            },
            "children": [
              {
                "id": "tt-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "tt-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] border-2 border-[#23214A] bg-[#FFC93C] p-8 outline-dashed outline-2 outline-offset-[-10px] outline-[#23214A]/25 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The Tuntuni Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['Gochi_Hand'] text-xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "A birthday gift, every year",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#23214A] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "tt-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for a birthday voucher, early sale access and size-up reminders.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm font-semibold text-[#23214A]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Join free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconGift",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#23214A] bg-[#3550DC] px-7 py-3.5 shadow-[0_5px_0_#23214A] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_#23214A] active:translate-y-[5px] active:shadow-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
                          },
                          "label": {
                            "classes": "font-body text-base font-extrabold text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "tt-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "tt-ftr-grid",
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
                        "id": "tt-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "t",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-full bg-[#FFC93C] font-heading font-normal leading-none text-[#23214A] outline-dashed outline-2 outline-offset-2 outline-[#FF7A3D] transition-transform group-hover:-rotate-12"
                                  }
                                }
                              },
                              {
                                "id": "tt-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "tuntuni",
                                      "src": "https://placehold.co/200x64?text=Tuntuni",
                                      "altText": "Tuntuni Kids",
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
                                        "classes": "font-heading font-normal text-[30px] leading-none text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "tt-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Soft, well-made clothes for babies to big kids: everyday cotton, festive outfits and school basics, sized by height and delivered across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "tt-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A3D]"
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
                                "id": "tt-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A3D]"
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
                                "id": "tt-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A3D]"
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
                                "id": "tt-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A3D]"
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
                        "id": "tt-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Baby (0–2)",
                                  "icon": "",
                                  "slug": "/categories/baby"
                                },
                                {
                                  "text": "Girls",
                                  "icon": "",
                                  "slug": "/categories/girls"
                                },
                                {
                                  "text": "Boys",
                                  "icon": "",
                                  "slug": "/categories/boys"
                                },
                                {
                                  "text": "Twinning Sets",
                                  "icon": "",
                                  "slug": "/categories/matching-sets"
                                },
                                {
                                  "text": "School Wear",
                                  "icon": "",
                                  "slug": "/categories/school-wear"
                                },
                                {
                                  "text": "Festive",
                                  "icon": "",
                                  "slug": "/tags/festive"
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
                                "classes": "transition-colors hover:text-[#FFC93C]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC93C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-ftr-ll-care",
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
                                  "text": "Parent Notes",
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
                                "classes": "transition-colors hover:text-[#FFC93C]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC93C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-ftr-contact-h",
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
                            "id": "tt-ftr-address",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFC93C]"
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
                                "classes": "shrink-0 text-[#FF7A3D]"
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
                "id": "tt-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "tt-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Tuntuni Kids. All rights reserved. Stitched with love in Dhaka.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "tt-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-body text-xs font-bold tracking-wide"
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
            "id": "tt-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] pb-14 pt-10 lg:pb-20 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "tt-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-hero-k",
                            "type": "text",
                            "options": {
                              "text": "New season, new sizes!",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-2xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Little clothes for big adventures.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-5xl leading-[0.98] text-[#23214A] sm:text-6xl xl:text-[5.25rem]"
                              }
                            }
                          },
                          {
                            "id": "tt-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Soft cotton everyday wear, festive outfits and school-ready basics for babies to big kids, sized by height so they fit the first time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-[#6B6785]"
                              }
                            }
                          },
                          {
                            "id": "tt-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop new in",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#23214A] bg-[#3550DC] px-7 py-3.5 shadow-[0_5px_0_#23214A] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_#23214A] active:translate-y-[5px] active:shadow-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-extrabold text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "tt-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Find their size",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#size-guide",
                                  "target": "",
                                  "icon": "IconRulerMeasure",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#23214A] bg-white px-7 py-3.5 shadow-[0_5px_0_#23214A] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_#23214A] active:translate-y-[5px] active:shadow-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#23214A]"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-extrabold text-[#23214A] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-tape",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-2 w-fit max-w-full rounded-2xl border-2 border-[#23214A] bg-[#FFC93C] px-4 pb-4 pt-7 shadow-[0_6px_0_#E3AC1C] before:pointer-events-none before:absolute before:inset-x-4 before:top-2 before:h-3 before:bg-[repeating-linear-gradient(90deg,rgba(35,33,74,0.6)_0_1.5px,transparent_1.5px_12px)] before:content-['']"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-tape-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap items-center gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-tape-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Shop by age:",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] mr-1 text-lg text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-age-1",
                                    "type": "button",
                                    "options": {
                                      "text": "0–12m",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-0-12m",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#23214A] bg-white px-3.5 py-1.5 transition-all hover:-translate-y-0.5 hover:bg-[#FFB3C7]"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading font-normal text-base text-[#23214A] whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-age-2",
                                    "type": "button",
                                    "options": {
                                      "text": "1–3y",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-1-3y",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#23214A] bg-white px-3.5 py-1.5 transition-all hover:-translate-y-0.5 hover:bg-[#8FD9C0]"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading font-normal text-base text-[#23214A] whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-age-3",
                                    "type": "button",
                                    "options": {
                                      "text": "4–6y",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-4-6y",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#23214A] bg-white px-3.5 py-1.5 transition-all hover:-translate-y-0.5 hover:bg-[#C9B6FF]"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading font-normal text-base text-[#23214A] whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-age-4",
                                    "type": "button",
                                    "options": {
                                      "text": "7–10y",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-7-10y",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#23214A] bg-white px-3.5 py-1.5 transition-all hover:-translate-y-0.5 hover:bg-[#A9D3FF]"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading font-normal text-base text-[#23214A] whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-age-5",
                                    "type": "button",
                                    "options": {
                                      "text": "11–14y",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-11-14y",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#23214A] bg-white px-3.5 py-1.5 transition-all hover:-translate-y-0.5 hover:bg-[#FFD0B0]"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading font-normal text-base text-[#23214A] whitespace-nowrap"
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
                        "id": "tt-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-hero-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mx-auto w-full max-w-[560px] rounded-[44%_56%_52%_48%/48%_44%_56%_52%] bg-[#C9B6FF]/45 outline-dashed outline-2 outline-offset-[-16px] outline-[#3550DC]/30"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-hero-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/tuntuni-hero.svg",
                                  "altText": "A flat-lay of kids clothes: a yellow tee with a bird print, blue dungarees, a pink dress, mint sneakers, an orange cap and lilac socks",
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
                                    "classes": "relative h-auto w-full p-4 sm:p-8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-hero-st1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-1 top-6 flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FF7A3D] text-center shadow-[0_5px_0_#23214A] outline-dashed outline-2 outline-offset-[-7px] outline-white/70 sm:h-28 sm:w-28"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-hero-st1-t",
                                "type": "text",
                                "options": {
                                  "text": "100% cotton",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal px-2 text-base leading-tight text-white sm:text-lg"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-hero-st2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-2 left-0 flex rotate-[-3deg] items-center gap-3 rounded-2xl border-2 border-[#23214A] bg-white px-4 py-3 shadow-[0_5px_0_#23214A] sm:left-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-hero-st2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFeather",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-xl bg-[#8FD9C0] text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-hero-st2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-hero-st2-a",
                                    "type": "text",
                                    "options": {
                                      "text": "No scratchy tags",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-hero-st2-b",
                                    "type": "text",
                                    "options": {
                                      "text": "Flat seams, kid-tested",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "tt-hero-st3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-0 top-0 rotate-6 rounded-full border-2 border-[#23214A] bg-[#FFC93C] px-4 py-2 shadow-[0_4px_0_#23214A] sm:right-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-hero-st3-t",
                                "type": "text",
                                "options": {
                                  "text": "Sizes 0–14 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-sm text-[#23214A]"
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
            "id": "tt-strip",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full overflow-hidden border-y-2 border-[#23214A] bg-[#3550DC] py-3.5"
              }
            },
            "children": [
              {
                "id": "tt-strip-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-max items-center gap-6 whitespace-nowrap px-4"
                  }
                },
                "children": [
                  {
                    "id": "tt-strip-0",
                    "type": "text",
                    "options": {
                      "text": "Free delivery over ৳1,500  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-1",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-[#FFC93C]"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-2",
                    "type": "text",
                    "options": {
                      "text": "Free size exchange  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-3",
                    "type": "text",
                    "options": {
                      "text": "Soft cotton only  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-4",
                    "type": "text",
                    "options": {
                      "text": "Free gift wrap  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-[#FFC93C]"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-5",
                    "type": "text",
                    "options": {
                      "text": "New styles every Friday  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-6",
                    "type": "text",
                    "options": {
                      "text": "Free delivery over ৳1,500  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-7",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-[#FFC93C]"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-8",
                    "type": "text",
                    "options": {
                      "text": "Free size exchange  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-9",
                    "type": "text",
                    "options": {
                      "text": "Soft cotton only  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-10",
                    "type": "text",
                    "options": {
                      "text": "Free gift wrap  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-[#FFC93C]"
                      }
                    }
                  },
                  {
                    "id": "tt-strip-11",
                    "type": "text",
                    "options": {
                      "text": "New styles every Friday  ✿",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-base text-white"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-who",
            "type": "section",
            "options": {
              "anchor": "shop-for"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-who-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-who-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-who-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-who-label",
                            "type": "text",
                            "options": {
                              "text": "Who are we dressing today?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-who-h",
                            "type": "heading",
                            "options": {
                              "text": "Shop for",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "tt-who-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-who-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[270px] flex-col justify-end gap-4 overflow-hidden rounded-[32px] bg-[#FFB3C7] p-7 outline-dashed outline-2 outline-offset-[-10px] outline-[#23214A]/20 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-who-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBabyCarriage",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-4 -top-4 flex rotate-12 text-[#23214A]/15 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "tt-who-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-who-1-h",
                                "type": "heading",
                                "options": {
                                  "text": "Baby",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-who-1-p",
                                "type": "text",
                                "options": {
                                  "text": "0–2 years · rompers, bodysuits & swaddles",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm font-semibold text-[#23214A]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-who-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop baby",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/baby",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#23214A] px-5 py-2.5 transition-colors hover:bg-[#3550DC]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-who-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[270px] flex-col justify-end gap-4 overflow-hidden rounded-[32px] bg-[#C9B6FF] p-7 outline-dashed outline-2 outline-offset-[-10px] outline-[#23214A]/20 transition-transform duration-300 hover:-translate-y-1 hover:rotate-1"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-who-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconFlower",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-4 -top-4 flex rotate-12 text-[#23214A]/15 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "tt-who-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-who-2-h",
                                "type": "heading",
                                "options": {
                                  "text": "Girls",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-who-2-p",
                                "type": "text",
                                "options": {
                                  "text": "2–14 years · frocks, tops & co-ord sets",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm font-semibold text-[#23214A]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-who-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop girls",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/girls",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#23214A] px-5 py-2.5 transition-colors hover:bg-[#3550DC]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-who-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[270px] flex-col justify-end gap-4 overflow-hidden rounded-[32px] bg-[#A9D3FF] p-7 outline-dashed outline-2 outline-offset-[-10px] outline-[#23214A]/20 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-who-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShirt",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-4 -top-4 flex rotate-12 text-[#23214A]/15 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "tt-who-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-who-3-h",
                                "type": "heading",
                                "options": {
                                  "text": "Boys",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-who-3-p",
                                "type": "text",
                                "options": {
                                  "text": "2–14 years · tees, shorts & panjabi",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm font-semibold text-[#23214A]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-who-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop boys",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/boys",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#23214A] px-5 py-2.5 transition-colors hover:bg-[#3550DC]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-who-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[270px] flex-col justify-end gap-4 overflow-hidden rounded-[32px] bg-[#FFC93C] p-7 outline-dashed outline-2 outline-offset-[-10px] outline-[#23214A]/20 transition-transform duration-300 hover:-translate-y-1 hover:rotate-1"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-who-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconHeart",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-4 -top-4 flex rotate-12 text-[#23214A]/15 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "tt-who-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-who-4-h",
                                "type": "heading",
                                "options": {
                                  "text": "Twinning",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-who-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Matching sets for siblings & cousins",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm font-semibold text-[#23214A]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-who-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop sets",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/matching-sets",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#23214A] px-5 py-2.5 transition-colors hover:bg-[#3550DC]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
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
            "id": "tt-row-new-in",
            "type": "section",
            "options": {
              "anchor": "new-in"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-row-new-in-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-row-new-in-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-new-in-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-new-in-label",
                            "type": "text",
                            "options": {
                              "text": "Fresh from the sewing table",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-new-in-h",
                            "type": "heading",
                            "options": {
                              "text": "New in",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-new-in-sub",
                            "type": "text",
                            "options": {
                              "text": "New styles land every Friday.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-row-new-in-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-row-new-in-slider",
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border-2 !border-[#23214A] !bg-white !opacity-100 !shadow-[0_3px_0_#23214A] transition-colors hover:!bg-[#FFC93C] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#23214A] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-new-in-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-new-in-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-new-in-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-new-in-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-row-new-in-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-row-new-in-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-new-in-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-row-new-in-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-row-new-in-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-row-new-in-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-new-in-slider-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-row-new-in-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
            "id": "tt-cats",
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
                "id": "tt-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-cats-label",
                            "type": "text",
                            "options": {
                              "text": "Everything they wear",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "Shop by category",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-cats-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-cats-grid",
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
                        "classes": "grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-cats-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full overflow-hidden rounded-full bg-[#FBEEDC] ring-4 ring-white shadow-[0_10px_24px_-14px_rgba(35,33,74,0.5)] outline-dashed outline-2 outline-offset-4 outline-[#23214A]/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:outline-[#FF7A3D]"
                              },
                              "link": {
                                "classes": "block h-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "tt-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-lg leading-tight text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                              }
                            }
                          },
                          {
                            "id": "tt-cats-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " styles",
                              "singularSuffix": " style",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
            "id": "tt-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-best-label",
                            "type": "text",
                            "options": {
                              "text": "Worn, washed & loved",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Parents’ favourites",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-best-sub",
                            "type": "text",
                            "options": {
                              "text": "Our most re-ordered pieces this month.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-best-grid",
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
                        "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-best-grid-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
            "id": "tt-edits",
            "type": "section",
            "options": {
              "anchor": "edits"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-edits-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
                  }
                },
                "children": [
                  {
                    "id": "tt-edit-festive",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group relative flex min-h-[340px] flex-col justify-end gap-4 overflow-hidden rounded-[36px] border-2 border-[#23214A] bg-[#FF7A3D] p-8 shadow-[0_8px_0_#23214A] outline-dashed outline-2 outline-offset-[-12px] outline-white/40 sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-edit-festive-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconSparkles",
                          "size": 160,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-6 -top-6 flex rotate-12 text-white/20 transition-transform duration-500 group-hover:rotate-0"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-festive-k",
                        "type": "text",
                        "options": {
                          "text": "The festive edit",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-['Gochi_Hand'] text-2xl text-[#FFC93C]"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-festive-h",
                        "type": "heading",
                        "options": {
                          "text": "Eid outfits, mini sized.",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md font-heading font-normal text-4xl leading-[1.02] sm:text-5xl text-white"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-festive-p",
                        "type": "text",
                        "options": {
                          "text": "Panjabi sets, frocks and lehengas for little ones, in sizes 1 to 14 years.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md text-base text-white/80"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-festive-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop festive",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/festive",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-[#23214A] bg-white px-6 py-3 shadow-[0_4px_0_#23214A] transition-all hover:translate-y-0.5 hover:shadow-[0_2px_0_#23214A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#23214A]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold text-[#23214A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-edit-school",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group relative flex min-h-[340px] flex-col justify-end gap-4 overflow-hidden rounded-[36px] border-2 border-[#23214A] bg-[#3550DC] p-8 shadow-[0_8px_0_#23214A] outline-dashed outline-2 outline-offset-[-12px] outline-white/40 sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-edit-school-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconBackpack",
                          "size": 160,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-6 -top-6 flex rotate-12 text-white/20 transition-transform duration-500 group-hover:rotate-0"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-school-k",
                        "type": "text",
                        "options": {
                          "text": "Back to school",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-['Gochi_Hand'] text-2xl text-[#FFC93C]"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-school-h",
                        "type": "heading",
                        "options": {
                          "text": "Uniform-ready, playground-proof.",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md font-heading font-normal text-4xl leading-[1.02] sm:text-5xl text-white"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-school-p",
                        "type": "text",
                        "options": {
                          "text": "School shirts, trousers, socks and backpacks that survive recess.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md text-base text-white/80"
                          }
                        }
                      },
                      {
                        "id": "tt-edit-school-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop school wear",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/school-wear",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-[#23214A] bg-white px-6 py-3 shadow-[0_4px_0_#23214A] transition-all hover:translate-y-0.5 hover:shadow-[0_2px_0_#23214A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#23214A]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold text-[#23214A] whitespace-nowrap"
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
            "id": "tt-row-baby",
            "type": "section",
            "options": {
              "anchor": "baby"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-row-baby-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-row-baby-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-baby-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-baby-label",
                            "type": "text",
                            "options": {
                              "text": "Softest of the soft",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-baby-h",
                            "type": "heading",
                            "options": {
                              "text": "Baby essentials",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-baby-sub",
                            "type": "text",
                            "options": {
                              "text": "Rompers, bodysuits, swaddles and sleepsuits for 0–24 months.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-row-baby-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/baby",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-row-baby-slider",
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
                                  "baby"
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border-2 !border-[#23214A] !bg-white !opacity-100 !shadow-[0_3px_0_#23214A] transition-colors hover:!bg-[#FFC93C] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#23214A] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-baby-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-baby-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-baby-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-baby-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-row-baby-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-row-baby-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-baby-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-row-baby-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-row-baby-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-row-baby-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-baby-slider-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-row-baby-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
            "id": "tt-promise",
            "type": "section",
            "options": {
              "anchor": "why-us"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-promise-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-promise-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-promise-label",
                            "type": "text",
                            "options": {
                              "text": "Why parents pick us",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-h",
                            "type": "heading",
                            "options": {
                              "text": "Made soft, made to last",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "tt-promise-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-promise-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-[28px] border-2 border-[#EEE2CF] bg-[#FFF8EE] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-promise-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconLeaf",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8FD9C0] text-[#23214A] outline-dashed outline-2 outline-offset-[-5px] outline-[#23214A]/25"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Soft, breathable cotton",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-1-p",
                            "type": "text",
                            "options": {
                              "text": "Combed cotton and muslin that’s gentle on sensitive skin.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-promise-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-[28px] border-2 border-[#EEE2CF] bg-[#FFF8EE] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-promise-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconFeather",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFB3C7] text-[#23214A] outline-dashed outline-2 outline-offset-[-5px] outline-[#23214A]/25"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-2-h",
                            "type": "heading",
                            "options": {
                              "text": "No scratchy tags",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-2-p",
                            "type": "text",
                            "options": {
                              "text": "Printed labels and flat seams, so nothing itches.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-promise-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-[28px] border-2 border-[#EEE2CF] bg-[#FFF8EE] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-promise-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconWashMachine",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A9D3FF] text-[#23214A] outline-dashed outline-2 outline-offset-[-5px] outline-[#23214A]/25"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Wash after wash",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-3-p",
                            "type": "text",
                            "options": {
                              "text": "Pre-shrunk fabric and colours that don’t fade at the first wash.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-promise-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-[28px] border-2 border-[#EEE2CF] bg-[#FFF8EE] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-promise-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRulerMeasure",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC93C] text-[#23214A] outline-dashed outline-2 outline-offset-[-5px] outline-[#23214A]/25"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-4-h",
                            "type": "heading",
                            "options": {
                              "text": "Room to grow",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-promise-4-p",
                            "type": "text",
                            "options": {
                              "text": "Adjustable waists and roll-up cuffs buy you an extra season.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6785]"
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
            "id": "tt-row-girls",
            "type": "section",
            "options": {
              "anchor": "girls"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-row-girls-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-row-girls-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-girls-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-girls-label",
                            "type": "text",
                            "options": {
                              "text": "Twirl-tested",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-girls-h",
                            "type": "heading",
                            "options": {
                              "text": "For girls",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-girls-sub",
                            "type": "text",
                            "options": {
                              "text": "Frocks, tops, leggings and co-ord sets, 2–14 years.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-row-girls-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/girls",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-row-girls-slider",
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
                                  "girls"
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border-2 !border-[#23214A] !bg-white !opacity-100 !shadow-[0_3px_0_#23214A] transition-colors hover:!bg-[#FFC93C] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#23214A] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-girls-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-girls-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-girls-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-girls-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-row-girls-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-row-girls-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-girls-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-row-girls-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-row-girls-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-row-girls-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-girls-slider-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-row-girls-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
            "id": "tt-size",
            "type": "section",
            "options": {
              "anchor": "size-guide"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF2CC] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-size-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "tt-size-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-size-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-size-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-label",
                                "type": "text",
                                "options": {
                                  "text": "Grows with them",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-h",
                                "type": "heading",
                                "options": {
                                  "text": "Find their size in a minute",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "tt-size-p",
                        "type": "text",
                        "options": {
                          "text": "Go by height, not age. Measure your child standing against a wall, barefoot, and match it to the chart. In between two sizes? Size up, they grow fast.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-md text-base leading-relaxed text-[#6B6785]"
                          }
                        }
                      },
                      {
                        "id": "tt-size-tips",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-size-tip-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-tip-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconRuler2",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#23214A] bg-white text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-tip-1-t",
                                "type": "text",
                                "options": {
                                  "text": "Each product page has its own size chart",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-tip-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-tip-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArrowBackUp",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#23214A] bg-white text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-tip-2-t",
                                "type": "text",
                                "options": {
                                  "text": "Wrong size? Exchange it free inside Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "tt-size-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pt-2"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-size-btn",
                            "type": "button",
                            "options": {
                              "text": "Still unsure? Ask us",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#faq",
                              "target": "",
                              "icon": "IconMessageCircle",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#23214A] bg-white px-7 py-3.5 shadow-[0_5px_0_#23214A] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_#23214A] active:translate-y-[5px] active:shadow-none"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#23214A]"
                              },
                              "label": {
                                "classes": "font-body text-base font-extrabold text-[#23214A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "tt-size-chart",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative overflow-hidden rounded-[28px] border-2 border-[#23214A] bg-white shadow-[0_8px_0_#23214A] lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-size-ruler",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-y-0 left-0 w-3 bg-[#FFC93C] bg-[repeating-linear-gradient(180deg,rgba(35,33,74,0.55)_0_1.5px,transparent_1.5px_10px)]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "tt-size-th",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 border-b-2 border-dashed border-[#EEE2CF] bg-[#23214A] px-5 py-3"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-size-th-a",
                            "type": "text",
                            "options": {
                              "text": "Age",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-sm text-white"
                              }
                            }
                          },
                          {
                            "id": "tt-size-th-h",
                            "type": "text",
                            "options": {
                              "text": "Height",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-sm text-white"
                              }
                            }
                          },
                          {
                            "id": "tt-size-th-s",
                            "type": "text",
                            "options": {
                              "text": "Size",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "min-w-12 text-center font-heading font-normal text-sm text-[#FFC93C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-size-rows",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col pl-3"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-size-r1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-[#FFF8EE]"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r1-a",
                                "type": "text",
                                "options": {
                                  "text": "0–3 months",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r1-h",
                                "type": "text",
                                "options": {
                                  "text": "56–62 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r1-s",
                                "type": "text",
                                "options": {
                                  "text": "62",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#FFB3C7] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-white"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r2-a",
                                "type": "text",
                                "options": {
                                  "text": "3–6 months",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r2-h",
                                "type": "text",
                                "options": {
                                  "text": "62–68 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r2-s",
                                "type": "text",
                                "options": {
                                  "text": "68",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#8FD9C0] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-[#FFF8EE]"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r3-a",
                                "type": "text",
                                "options": {
                                  "text": "6–12 months",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r3-h",
                                "type": "text",
                                "options": {
                                  "text": "68–80 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r3-s",
                                "type": "text",
                                "options": {
                                  "text": "80",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#C9B6FF] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-white"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r4-a",
                                "type": "text",
                                "options": {
                                  "text": "1–2 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r4-h",
                                "type": "text",
                                "options": {
                                  "text": "80–92 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r4-s",
                                "type": "text",
                                "options": {
                                  "text": "92",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#A9D3FF] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-[#FFF8EE]"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r5-a",
                                "type": "text",
                                "options": {
                                  "text": "2–3 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r5-h",
                                "type": "text",
                                "options": {
                                  "text": "92–98 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r5-s",
                                "type": "text",
                                "options": {
                                  "text": "98",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#FFD0B0] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r6",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-white"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r6-a",
                                "type": "text",
                                "options": {
                                  "text": "3–4 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r6-h",
                                "type": "text",
                                "options": {
                                  "text": "98–104 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r6-s",
                                "type": "text",
                                "options": {
                                  "text": "104",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#FFC93C] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r7",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-[#FFF8EE]"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r7-a",
                                "type": "text",
                                "options": {
                                  "text": "5–6 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r7-h",
                                "type": "text",
                                "options": {
                                  "text": "110–116 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r7-s",
                                "type": "text",
                                "options": {
                                  "text": "116",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#FFB3C7] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r8",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-white"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r8-a",
                                "type": "text",
                                "options": {
                                  "text": "7–8 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r8-h",
                                "type": "text",
                                "options": {
                                  "text": "122–128 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r8-s",
                                "type": "text",
                                "options": {
                                  "text": "128",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#8FD9C0] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r9",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-[#FFF8EE]"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r9-a",
                                "type": "text",
                                "options": {
                                  "text": "9–10 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r9-h",
                                "type": "text",
                                "options": {
                                  "text": "134–140 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r9-s",
                                "type": "text",
                                "options": {
                                  "text": "140",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#C9B6FF] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r10",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-white"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r10-a",
                                "type": "text",
                                "options": {
                                  "text": "11–12 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r10-h",
                                "type": "text",
                                "options": {
                                  "text": "146–152 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r10-s",
                                "type": "text",
                                "options": {
                                  "text": "152",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#A9D3FF] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-size-r11",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-5 py-2.5 bg-[#FFF8EE]"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-size-r11-a",
                                "type": "text",
                                "options": {
                                  "text": "13–14 years",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r11-h",
                                "type": "text",
                                "options": {
                                  "text": "158–164 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6785]"
                                  }
                                }
                              },
                              {
                                "id": "tt-size-r11-s",
                                "type": "text",
                                "options": {
                                  "text": "164",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-12 rounded-full bg-[#FFD0B0] px-3 py-0.5 text-center font-heading font-normal text-sm text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "tt-size-note",
                        "type": "text",
                        "options": {
                          "text": "A general guide: brands vary, so check the chart on each product.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "block border-t-2 border-dashed border-[#EEE2CF] px-5 py-3 pl-8 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
            "id": "tt-row-boys",
            "type": "section",
            "options": {
              "anchor": "boys"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-row-boys-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-row-boys-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-boys-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-boys-label",
                            "type": "text",
                            "options": {
                              "text": "Built for running",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-boys-h",
                            "type": "heading",
                            "options": {
                              "text": "For boys",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-row-boys-sub",
                            "type": "text",
                            "options": {
                              "text": "Tees, shorts, joggers and panjabi, 2–14 years.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-row-boys-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/boys",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-row-boys-slider",
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
                                  "boys"
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border-2 !border-[#23214A] !bg-white !opacity-100 !shadow-[0_3px_0_#23214A] transition-colors hover:!bg-[#FFC93C] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#23214A] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-row-boys-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-row-boys-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-boys-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-boys-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-row-boys-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-row-boys-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-row-boys-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-row-boys-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-row-boys-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-row-boys-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-row-boys-slider-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-row-boys-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
            "id": "tt-brandsec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-brandsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-brandsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-brandsec-label",
                            "type": "text",
                            "options": {
                              "text": "Little labels, big names",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-brandsec-h",
                            "type": "heading",
                            "options": {
                              "text": "Brands we love",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-brandsec-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-brands-slider",
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
                        "gap": "0.75rem",
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
                        "classes": "!h-11 !w-11 !rounded-full !border-2 !border-[#23214A] !bg-white !opacity-100 !shadow-[0_3px_0_#23214A] transition-colors hover:!bg-[#FFC93C] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#23214A] disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[22px] border-2 border-dashed border-[#EEE2CF] bg-white p-4 text-center transition-colors hover:border-[#3550DC]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-brands-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[22px] border-2 border-dashed border-[#EEE2CF] bg-white p-4 text-center transition-colors hover:border-[#3550DC]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-brands-slider-thumb",
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
                            "id": "tt-brands-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-extrabold text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-brands-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " styles",
                              "singularSuffix": " style",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
            "id": "tt-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "Straight from the school gate",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Happy parents, comfy kids",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 18,000+ families.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "tt-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border-2 !border-[#23214A] !bg-white !opacity-100 !shadow-[0_3px_0_#23214A] transition-colors hover:!bg-[#FFC93C] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#23214A] disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#23214A]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#FF7A3D]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF8EE] p-7 outline-dashed outline-2 outline-offset-[-8px] outline-[#23214A]/15"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The cotton is so soft my baby actually sleeps in the rompers. Washed twenty times and still like new.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE2CF] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "FA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFB3C7] font-heading font-normal text-base text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Farzana Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Mum of two",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
                        "id": "tt-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF8EE] p-7 outline-dashed outline-2 outline-offset-[-8px] outline-[#23214A]/15"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered the Eid panjabi set in two sizes to check the fit; exchanging one was quick and free.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE2CF] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "RH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#23214A] bg-[#8FD9C0] font-heading font-normal text-base text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rakib Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dad of a 5-year-old",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
                        "id": "tt-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF8EE] p-7 outline-dashed outline-2 outline-offset-[-8px] outline-[#23214A]/15"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“The twinning sets are adorable and the size chart is spot on. Everyone at the dawat asked where they were from.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE2CF] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "NJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#23214A] bg-[#C9B6FF] font-heading font-normal text-base text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusrat Jahan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Mum of twins",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
                        "id": "tt-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF8EE] p-7 outline-dashed outline-2 outline-offset-[-8px] outline-[#23214A]/15"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Gift-wrapped beautifully with a little card. My niece wore the dress the day it arrived.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE2CF] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#23214A] bg-[#A9D3FF] font-heading font-normal text-base text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tanvir Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Uncle & gift-giver",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
                        "id": "tt-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF8EE] p-7 outline-dashed outline-2 outline-offset-[-8px] outline-[#23214A]/15"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“No scratchy tags, snaps that don’t pinch and the colours didn’t run. Finally!”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE2CF] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "SS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFD0B0] font-heading font-normal text-base text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sharmin Sultana",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Mum of a toddler",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
                        "id": "tt-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF8EE] p-7 outline-dashed outline-2 outline-offset-[-8px] outline-[#23214A]/15"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“School shirts that survive football at recess. Delivery inside Dhaka was next day.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#23214A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE2CF] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "MK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] font-heading font-normal text-base text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mehedi Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#23214A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dad of three",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Gochi_Hand'] text-sm text-[#6B6785]"
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
            "id": "tt-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-journal-label",
                            "type": "text",
                            "options": {
                              "text": "Parent notes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Sizing tips, care guides & outfit ideas",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-dashed border-[#23214A]/25 bg-white px-5 py-2.5 text-[#23214A] transition-colors hover:border-[#3550DC] hover:text-[#3550DC]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-journal-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border-2 border-[#EEE2CF] bg-white transition-all hover:-translate-y-1 hover:border-[#23214A]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-journal-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border-2 border-[#EEE2CF] bg-white transition-all hover:-translate-y-1 hover:border-[#23214A]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FBEEDC]"
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
                            "id": "tt-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Gochi_Hand'] text-base text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading font-normal text-xl leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                  }
                                }
                              },
                              {
                                "id": "tt-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read the note",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6B6785]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-extrabold text-[#3550DC]"
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
            "id": "tt-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "tt-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "tt-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "Questions, answered",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-3xl leading-[1.05] sm:text-5xl text-[#23214A]"
                                  }
                                }
                              },
                              {
                                "id": "tt-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Sizes, exchanges, fabrics and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6B6785]"
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
                    "id": "tt-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How do I pick the right size?",
                          "classes": ""
                        },
                        {
                          "label": "Can I exchange a size?",
                          "classes": ""
                        },
                        {
                          "label": "Are the fabrics safe for babies?",
                          "classes": ""
                        },
                        {
                          "label": "How fast is delivery?",
                          "classes": ""
                        },
                        {
                          "label": "Do you gift wrap?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-2xl border-2 border-[#23214A] bg-[#FFF8EE] px-5 py-4 font-body text-base font-extrabold text-[#23214A] transition-colors hover:bg-[#FFF2CC]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#FFC93C]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#23214A]"
                      },
                      "accordion-content": {
                        "classes": "px-5 pb-2 pt-3"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Go by height, not age: measure your child and match it to the size chart on the product page. In between sizes? Size up, kids grow fast.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Unworn items with their tags can be exchanged within 7 days. Size exchanges are free inside Dhaka.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Our baby range is soft cotton or muslin with nickel-free snaps and no loose buttons. Every product page lists its fabric.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka 24-48 hours, 2-4 days elsewhere in Bangladesh, with cash on delivery everywhere.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, for free. Tick gift wrap at checkout and add a note; we leave the price out of the parcel.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6785]"
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
            "id": "tt-cta",
            "type": "section",
            "options": {
              "anchor": "club"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-14 lg:pb-20"
              }
            },
            "children": [
              {
                "id": "tt-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[36px] border-2 border-[#23214A] bg-[#23214A] p-8 shadow-[0_8px_0_#FF7A3D] sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-cta-dots",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,201,60,0.18)_2px,transparent_2px)] bg-[length:26px_26px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "tt-cta-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCake",
                          "size": 180,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-8 right-6 flex -rotate-12 text-[#FFC93C]/15"
                          }
                        }
                      },
                      {
                        "id": "tt-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-cta-k",
                            "type": "text",
                            "options": {
                              "text": "The Tuntuni Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Gochi_Hand'] text-2xl text-[#FFC93C]"
                              }
                            }
                          },
                          {
                            "id": "tt-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "A birthday gift on us, every year.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "tt-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Join free, tell us your little one’s birthday and size, and get a birthday voucher, early sale access and size-up reminders.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-4 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Join the club",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconGift",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#23214A] bg-[#FFC93C] px-7 py-3.5 shadow-[0_5px_0_#FF7A3D] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_#FF7A3D]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#23214A]"
                              },
                              "label": {
                                "classes": "font-body text-base font-extrabold text-[#23214A] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "tt-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Shop new in",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 transition-colors hover:bg-white/10"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-base font-extrabold text-white whitespace-nowrap"
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
            "id": "tt-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The whole wardrobe",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every style for babies to big kids, newest first. Filter by category, or open a product for its fabric and size chart.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-shop-grid-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
                        "id": "tt-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-shop-promise",
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
                "id": "tt-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Soft cotton",
                          "description": "Gentle on little skin",
                          "icon": "IconLeaf",
                          "iconSize": ""
                        },
                        {
                          "title": "Free size exchange",
                          "description": "Inside Dhaka, 7 days",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Free gift wrap",
                          "description": "With a hand-written note",
                          "icon": "IconGift",
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
                        "classes": "font-heading font-normal text-lg text-[#23214A]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2CC] text-[#23214A] outline-dashed outline-2 outline-offset-[-5px] outline-[#FF7A3D]/50"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-shop-promise-fb-ic",
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
                        "id": "tt-shop-promise-fb-t",
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
                        "id": "tt-shop-promise-fb-d",
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
            "id": "tt-pd",
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
                "id": "tt-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-pd-grid",
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
                        "id": "tt-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#E6EAFD] via-white to-[#FFF8EE] p-4 shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#23214A]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#23214A]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#FF7A3D]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-pd-cats",
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
                                "classes": "rounded-full bg-[#E6EAFD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#3550DC] hover:bg-[#3550DC] hover:text-white"
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
                            "id": "tt-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#23214A] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "tt-pd-rate",
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
                                "classes": "font-body font-bold text-[#23214A]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "tt-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#23214A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#23214A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#23214A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#FF7A3D] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "tt-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6785]"
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
                            "id": "tt-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#23214A]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#23214A] transition-colors hover:border-[#3550DC] hover:bg-[#E6EAFD]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#3550DC] !bg-[#E6EAFD] !text-[#2A41B8]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "tt-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out in this size · try another size",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#FF7A3D]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#3550DC]"
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
                            "id": "tt-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#23214A]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8EE]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8EE]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#FF7A3D] px-8 text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#E8652A]"
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
                            "id": "tt-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Soft cotton",
                                  "description": "Gentle on skin",
                                  "icon": "IconLeaf",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free size exchange",
                                  "description": "Within 7 days",
                                  "icon": "IconArrowBackUp",
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
                                "classes": "font-body text-base font-bold text-[#23214A]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6EAFD] text-[#3550DC]"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-perks-ic",
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
                                "id": "tt-pd-perks-t",
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
                                "id": "tt-pd-perks-d",
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
                            "id": "tt-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-sku",
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
                                    "classes": "font-semibold text-[#23214A]"
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
                                "id": "tt-pd-brands",
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
                                    "classes": "font-semibold text-[#23214A]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#FF7A3D]"
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
                                "id": "tt-pd-tags",
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
                                    "classes": "font-semibold text-[#23214A]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#FF7A3D]"
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
            "id": "tt-pd-tabs-sec",
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
                "id": "tt-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,33,74,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Fabric & Care",
                              "icon": "IconWashMachine"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8EE] px-5 py-2.5 font-body text-sm font-semibold text-[#23214A] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#23214A] !text-white shadow-md"
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
                            "id": "tt-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#23214A] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#23214A] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#FF7A3D] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC93C] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconLeaf",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Fabric, fit and size chart are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Wash inside out in cold water with similar colours",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Baby pieces use nickel-free snaps and no loose buttons",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Colours may look slightly different on screen",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#3550DC]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-ship-list",
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
                                      "text": "Free delivery on orders over ৳1,500, free gift wrap on request",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Wrong size? Exchange unworn items with tags within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#3550DC]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "tt-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8EE] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8EE] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "tt-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFE9DD]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "tt-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#23214A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "tt-pd-reviews-rate",
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
                                        "id": "tt-pd-reviews-co",
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
                                    "id": "tt-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How was the fit and fabric? Which size did you buy, and for what age?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,33,74,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#23214A]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8EE] px-4 py-3 text-sm text-[#23214A] placeholder:text-gray-400 focus:border-[#3550DC] focus:outline-none focus:ring-2 focus:ring-[#3550DC]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#FF7A3D] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#E8652A] disabled:opacity-50"
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
            "id": "tt-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16"
              }
            },
            "children": [
              {
                "id": "tt-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Complete the look",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFE9DD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#FF7A3D]"
                          }
                        }
                      },
                      {
                        "id": "tt-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#23214A]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-pd-rel-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
            "id": "tt-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Everything they wear",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Baby, girls, boys, twinning sets, school wear and nightwear. Pick a rail.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E6EAFD] transition-transform group-hover:-rotate-6"
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
                            "id": "tt-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#23214A] transition-colors group-hover:text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-cat-grid-count",
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
                        "id": "tt-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "tt-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " styles",
                      "singularSuffix": " style"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#3550DC] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-cat1-grid-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
                        "id": "tt-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group styles by age, season and occasion: festive, bestsellers, sale and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF7A3D]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF7A3D]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#23214A] group-hover:text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FFF8EE] px-2 py-0.5 text-[10px] font-bold text-[#6B6785]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "tt-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "tt-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " styles",
                      "singularSuffix": " style"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#3550DC] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-tag1-grid-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
                        "id": "tt-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Little labels",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every kidswear label on our rails.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FFF8EE] p-3"
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
                            "id": "tt-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#23214A] group-hover:text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "tt-brand-grid-count",
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
                        "id": "tt-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "tt-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " styles",
                      "singularSuffix": " style"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#3550DC] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-brand1-grid-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
                        "id": "tt-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Parent notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Sizing Tips, Care Guides & Outfit Ideas",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "How to measure, how to wash, and what to pack for Eid, school and holidays.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF8EE]"
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
                            "id": "tt-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#3550DC]"
                                  }
                                }
                              },
                              {
                                "id": "tt-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-normal text-[#23214A] transition-colors group-hover:text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "tt-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read the note",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#FF7A3D]"
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
                        "id": "tt-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#23214A] transition-colors hover:border-[#FF7A3D] hover:text-[#FF7A3D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF7A3D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "tt-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8EE] via-white to-[#FFF8EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-post-k",
                    "type": "text",
                    "options": {
                      "text": "Parent notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E6EAFD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#3550DC]"
                      }
                    }
                  },
                  {
                    "id": "tt-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6B6785]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-post-author",
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
                            "classes": "font-body font-bold text-[#23214A]"
                          }
                        }
                      },
                      {
                        "id": "tt-post-dot",
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
                        "id": "tt-post-date",
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
                    "id": "tt-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
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
            "id": "tt-post-body",
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
                "id": "tt-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#23214A] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#23214A] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#FF7A3D] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC93C] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16"
              }
            },
            "children": [
              {
                "id": "tt-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#23214A]"
                      }
                    }
                  },
                  {
                    "id": "tt-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8EE] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8EE] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFE9DD]"
                              }
                            }
                          },
                          {
                            "id": "tt-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#23214A]"
                              }
                            }
                          },
                          {
                            "id": "tt-post-cmt-co",
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
                        "id": "tt-post-cmt-form",
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
                            "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,33,74,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#23214A]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8EE] px-4 py-3 text-sm text-[#23214A] placeholder:text-gray-400 focus:border-[#3550DC] focus:outline-none focus:ring-2 focus:ring-[#3550DC]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#FF7A3D] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#E8652A] disabled:opacity-50"
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
            "id": "tt-post-more",
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
                "id": "tt-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Parent Notes",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#23214A]"
                      }
                    }
                  },
                  {
                    "id": "tt-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,33,74,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF8EE]"
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
                            "id": "tt-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#3550DC]"
                                  }
                                }
                              },
                              {
                                "id": "tt-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#23214A] transition-colors group-hover:text-[#FF7A3D]"
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
            "id": "tt-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-dashed border-[#23214A]/15 bg-[#FFF8EE] bg-[radial-gradient(rgba(53,80,220,0.09)_1.5px,transparent_1.5px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "tt-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back!",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Gochi_Hand'] text-xl text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "tt-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#23214A] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "tt-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders and exchanges, and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6785] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "tt-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "tt-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#23214A] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#FFC93C]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#FF7A3D]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#FF7A3D]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#FF7A3D]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "tt-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "tt-acc-3",
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
                                "id": "tt-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,33,74,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF7A3D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E8652A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A3D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "tt-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,33,74,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF7A3D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E8652A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A3D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "tt-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "tt-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8EE] px-5 py-2.5 font-body text-sm font-semibold text-[#23214A] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#23214A] !text-white shadow-md"
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
                                "id": "tt-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7A3D]/10 text-[#FF7A3D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "tt-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#FF7A3D] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "tt-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7A3D]/10 text-[#FF7A3D]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "tt-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#FF7A3D]/40 hover:bg-[#FF7A3D]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7A3D]/10 text-[#FF7A3D]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "tt-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF7A3D]/10 text-[#FF7A3D]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF7A3D] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E8652A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A3D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A3D]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "tt-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8EE] via-white to-[#FFF8EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(35,33,74,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E6EAFD] text-[#3550DC]"
                          }
                        }
                      },
                      {
                        "id": "tt-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFE9DD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#FF7A3D]"
                          }
                        }
                      },
                      {
                        "id": "tt-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Yay! Thank You for Your Order",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#23214A] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "tt-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re folding and wrapping your little ones’ new clothes. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6B6785] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "tt-ty-steps",
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
                              "text": "Each piece is checked, folded and wrapped (with your note, if you added one)",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-3xl bg-[#FFF8EE] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#FF7A3D]"
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
                        "id": "tt-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF7A3D] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#E8652A] w-full sm:w-auto"
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
                            "id": "tt-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#3550DC] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#3550DC] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#3550DC] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#3550DC] whitespace-nowrap group-hover:text-white"
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
            "id": "tt-ty-promise",
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
                "id": "tt-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Soft cotton",
                          "description": "Gentle on little skin",
                          "icon": "IconLeaf",
                          "iconSize": ""
                        },
                        {
                          "title": "Free size exchange",
                          "description": "Inside Dhaka, 7 days",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Free gift wrap",
                          "description": "With a hand-written note",
                          "icon": "IconGift",
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
                        "classes": "font-heading font-normal text-lg text-[#23214A]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2CC] text-[#23214A] outline-dashed outline-2 outline-offset-[-5px] outline-[#FF7A3D]/50"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-ty-promise-fb-ic",
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
                        "id": "tt-ty-promise-fb-t",
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
                        "id": "tt-ty-promise-fb-d",
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
            "id": "tt-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8EE] via-white to-[#FFF8EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "tt-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#FF7A3D] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "tt-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF8EE] text-[#23214A]"
                      }
                    }
                  },
                  {
                    "id": "tt-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Oops! This Page Outgrew Its Link",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#23214A] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "tt-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the style may have sold out. Head back home or browse the whole wardrobe.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6B6785] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "tt-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF7A3D] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(255,122,61,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#E8652A] w-full sm:w-auto"
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
                        "id": "tt-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Kidswear",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#3550DC] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#3550DC] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#3550DC] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#3550DC] whitespace-nowrap group-hover:text-white"
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
            "id": "tt-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16"
              }
            },
            "children": [
              {
                "id": "tt-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "tt-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#23214A]"
                          }
                        }
                      },
                      {
                        "id": "tt-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#23214A] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "tt-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "tt-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-2.5 ring-1 ring-[#EEE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(35,33,74,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "tt-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEEDC] after:pointer-events-none after:absolute after:inset-2 after:rounded-[14px] after:border-2 after:border-dashed after:border-white/90 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
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
                                    "id": "tt-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold uppercase text-white shadow-[0_3px_0_#23214A]"
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
                                "id": "tt-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "tt-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC93C]"
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
                                    "id": "tt-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#23214A] transition-colors group-hover:text-[#3550DC]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "tt-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Gochi_Hand'] text-[15px] text-[#6B6785]"
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
                            "id": "tt-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-2 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "tt-nf-grid-c-price",
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
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs font-semibold text-[#6B6785] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-normal text-lg leading-none text-[#3550DC]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF7A3D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF7A3D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "tt-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#23214A] bg-[#FFC93C] text-[#23214A] shadow-[0_3px_0_#23214A] transition-all hover:translate-y-0.5 hover:bg-[#FF7A3D] hover:text-white hover:shadow-[0_1px_0_#23214A]"
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
