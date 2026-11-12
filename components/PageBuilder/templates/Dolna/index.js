/**
 * Template: Dolna Baby Essentials.
 *
 * A soft, trustworthy baby essentials shop (dolna: "cradle"): diapers,
 * wipes, formula, baby food, feeding, bath and skin care, newborn kits and
 * mum care, with auto-refill, a diaper size finder, formula by stage and a
 * newborn checklist. Like the other complete templates here it carries all
 * sixteen page types - Header, Footer, Home, Shop, Product, the six
 * taxonomy archives, Blog Archive, Blog Single, Account, Thank you and 404
 * - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to dl-, palette remapped,
 * copy rewritten); the Header is restyled and Home is built fresh from the
 * same block types. It is plain data: edit freely.
 *
 * THE LOOK
 *
 * Nursery things, drawn in CSS: clouds (three overlapping circles,
 * CLOUD_BG), scallops like a cot bumper or a bib's edge (under the header,
 * after the hero, at the foot of every other page's hero), dashed stitched
 * seams just inside cards (the size finder, the need cards, the refill box,
 * the checklist, the reviews, and a product photo on hover), a butter
 * moon, and a night-sky band for the 3 am helpline.
 *
 * DESIGN
 *
 *   lullaby blue  #4A8FE7  primary: buttons, links, size M     #2F6FC4 deep  #EAF3FF tint
 *   peach         #FF9F7A  secondary: cart, sale, newborn      #F07D52 deep  #FFF0E9 tint
 *   butter        #FFD77A  accent: moon, stars, ratings        #E9B23A deep  #FFF8E3 tint
 *   mint #5CC8A8  lavender #A78BFA (need and stage colours)
 *   milk #FBFAF7 (page)  ink #1F2A44  muted #6B7489  line #ECE8E1
 *
 * Fonts (template meta): Quicksand (headings: rounded and soft), Nunito
 * Sans (body), Hind Siliguri via `font-['Hind_Siliguri']` for the Bangla
 * line in the hero.
 *
 * Product cards: a pale blue photo well that gets a white stitched seam on
 * hover, a peach "% OFF" pill, the name in Quicksand, one mint line from
 * the excerpt (use it for pack size and weight range, e.g. "52 pants ·
 * 6-11 kg"), the rating, the price and a blue "+ Add" pill.
 *
 * HOME
 *
 *   Hero with the diaper size finder: five packs stacked by weight (NB to
 *   XL), size M picked, each size linking to its tag (#size-finder) -
 *   shop by need (#shop-by-need) - formula by stage, four steps on a dotted
 *   line (#formula-stages) - parents' favourites (#bestsellers) -
 *   auto-refill with an example box (#auto-refill) - diapers - the newborn
 *   checklist (#newborn-checklist) - formula & baby food - bundles
 *   (#bundles) - genuine brands, live product_brand terms (#brands) -
 *   wipes, bath & skin - ask the baby care team (#help) - reviews - guides
 *   (#guides) - FAQ (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: diapers, wipes, formula, baby-food, feeding,
 *     bath-skincare, newborn, mom-care. Tag slugs: bestseller, new, bundle,
 *     size-nb, size-s, size-m, size-l, size-xl, stage-1 to stage-4. Brands
 *     are product_brand terms; give each a logo.
 *   - The size finder and the refill box are visuals, not forms: the sizes
 *     link to their tags, "Ayaan's monthly box" is labelled as an example.
 *   - Auto-refill (10% off), the 12-month expiry promise, the 24/7
 *     WhatsApp team, the hotline 09612-000000, the bundle savings, code
 *     BABY10, the ৳1,500 free-delivery threshold and the reviews are sample
 *     copy: offer only what you actually run. The WhatsApp link is
 *     https://wa.me/ - add your number.
 */

var template = [
  {
    "name": "Dolna Baby Essentials",
    "description": "Soft, trustworthy baby essentials shop in lullaby blue, peach and butter on milk-white, with clouds, scalloped edges and stitched seams; Quicksand, Nunito Sans and Hind Siliguri: a cloud-and-moon logo, scallops under the header, a diaper size-finder hero (packs stacked by weight), shop by need, formula by stage, favourites, auto-refill with an example box, diapers, the newborn checklist, formula and baby food, bundles, genuine brands, wipes and bath, a night-sky \"ask our baby care team\" band, parent reviews, guides and FAQ. All 16 pages.",
    "thumbnail": "/templates/dolna.svg",
    "meta": {
      "fonts": [
        {
          "family": "Quicksand",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Nunito Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Hind Siliguri",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500;600&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Quicksand",
        "body": "Nunito Sans"
      },
      "colors": {
        "primary": "#4A8FE7",
        "secondary": "#FF9F7A",
        "accent": "#FFD77A",
        "background": "#FBFAF7",
        "foreground": "#1F2A44",
        "muted": "#6B7489"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "dl-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full"
              }
            },
            "children": [
              {
                "id": "dl-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#4A8FE7] px-4 py-2 text-center font-body text-xs font-semibold text-white"
                  }
                },
                "children": [
                  {
                    "id": "dl-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery over ৳1,500 · Auto-refill & save 10% · First order 10% off with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "dl-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "BABY10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-2.5 py-0.5 font-body text-[11px] font-extrabold tracking-wider text-[#2F6FC4]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Size finder",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#size-finder",
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
                        "classes": "font-body text-xs font-bold text-[#FFD77A] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "dl-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-white"
                  }
                },
                "children": [
                  {
                    "id": "dl-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-[78px] items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2.5"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative h-11 w-11 shrink-0 rounded-full bg-[#4A8FE7] bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:absolute after:-right-0.5 after:-top-0.5 after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#FFD77A] after:content-[''] transition-transform duration-500 group-hover:-rotate-12"
                              }
                            }
                          },
                          {
                            "id": "dl-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "dolna",
                                  "src": "https://placehold.co/200x64?text=Dolna",
                                  "altText": "Dolna Baby Essentials",
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
                                    "classes": "font-heading text-[28px] font-bold leading-none tracking-[-0.03em] text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Baby essentials",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-hdr-menu",
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
                            "classes": "flex items-center gap-0.5 xl:gap-1"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "!gap-1.5 whitespace-nowrap rounded-full px-3 py-2 font-heading text-[15px] font-bold text-[#1F2A44] transition-colors"
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
                            "id": "dl-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Diapers",
                              "url": "/categories/diapers",
                              "icon": "IconBabyCarriage",
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
                                "classes": "hover:!bg-[#EAF3FF] hover:!text-[#1F2A44]"
                              },
                              "icon": {
                                "classes": "!text-[#4A8FE7]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Wipes",
                              "url": "/categories/wipes",
                              "icon": "IconDroplet",
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
                                "classes": "hover:!bg-[#E4F7F1] hover:!text-[#1F2A44]"
                              },
                              "icon": {
                                "classes": "!text-[#2FA584]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Formula",
                              "url": "/categories/formula",
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
                                "classes": "hover:!bg-[#FFF0E9] hover:!text-[#1F2A44]"
                              },
                              "icon": {
                                "classes": "!text-[#F07D52]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Feeding",
                              "url": "/categories/feeding",
                              "icon": "IconMilk",
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
                                "classes": "hover:!bg-[#F1EDFF] hover:!text-[#1F2A44]"
                              },
                              "icon": {
                                "classes": "!text-[#7C5CE6]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Bath & Skin",
                              "url": "/categories/bath-skincare",
                              "icon": "IconBath",
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
                                "classes": "hover:!bg-[#EAF3FF] hover:!text-[#1F2A44]"
                              },
                              "icon": {
                                "classes": "!text-[#4A8FE7]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Newborn",
                              "url": "/categories/newborn",
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
                                "classes": "hover:!bg-[#FFF0E9] hover:!text-[#1F2A44]"
                              },
                              "icon": {
                                "classes": "!text-[#F07D52]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Mum Care",
                              "url": "/categories/mom-care",
                              "icon": "IconHeartHandshake",
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
                                "classes": "hover:!bg-[#E4F7F1] hover:!text-[#1F2A44]"
                              },
                              "icon": {
                                "classes": "!text-[#2FA584]"
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
                        "id": "dl-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search diapers, formula, wipes...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden w-60 rounded-full bg-[#FBFAF7] py-1 pl-1 pr-3 ring-1 ring-[#ECE8E1] transition-all focus-within:ring-[#4A8FE7] md:block lg:hidden 2xl:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-body text-sm text-[#1F2A44] placeholder:text-[#6B7489] focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex h-8 w-8 items-center justify-center rounded-full bg-[#4A8FE7] text-white"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#4A8FE7] focus:outline-none focus:ring-2 focus:ring-[#4A8FE7]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#4A8FE7]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#4A8FE7]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#4A8FE7] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#2F6FC4]"
                          }
                        }
                      },
                      {
                        "id": "dl-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-hdr-account",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FBFAF7] text-[#1F2A44] ring-1 ring-[#ECE8E1] transition-colors hover:bg-[#EAF3FF]"
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
                            "id": "dl-hdr-cart",
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
                              "crossSellsTitle": "Parents also add",
                              "crossSellsLimit": 4
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative"
                              },
                              "trigger-icon": {
                                "classes": "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FF9F7A] text-white shadow-[0_8px_18px_-8px_#F07D52] transition-colors hover:bg-[#F07D52]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#4A8FE7] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FBFAF7] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#1F2A44]"
                              },
                              "title-icon": {
                                "classes": "text-[#4A8FE7]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#4A8FE7] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#4A8FE7] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#2F6FC4]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FE7]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#4A8FE7] focus:outline-none focus:ring-2 focus:ring-[#4A8FE7]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#4A8FE7] px-4 py-2 text-sm font-medium text-[#4A8FE7] transition-colors hover:bg-[#4A8FE7] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#4A8FE7] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2F6FC4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FE7]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "dl-hdr-mobile",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FBFAF7] text-[#1F2A44] ring-1 ring-[#ECE8E1]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FBFAF7] p-2 text-[#1F2A44] transition-colors hover:bg-[#4A8FE7] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative h-11 w-11 shrink-0 rounded-full bg-[#4A8FE7] bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:absolute after:-right-0.5 after:-top-0.5 after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#FFD77A] after:content-[''] transition-transform duration-500 group-hover:-rotate-12"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "dolna",
                                          "src": "https://placehold.co/200x64?text=Dolna",
                                          "altText": "Dolna Baby Essentials",
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
                                            "classes": "font-heading text-[28px] font-bold leading-none tracking-[-0.03em] text-[#1F2A44]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Baby essentials",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-[#F07D52]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "dl-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search diapers, formula, wipes...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FBFAF7] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#FF9F7A] focus-within:ring-2 focus-within:ring-[#FF9F7A]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1F2A44] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6B7489]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#4A8FE7] focus:outline-none focus:ring-2 focus:ring-[#4A8FE7]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#4A8FE7]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#4A8FE7]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#4A8FE7] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#2F6FC4]"
                                  }
                                }
                              },
                              {
                                "id": "dl-hdr-m-menu",
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
                                    "classes": "!justify-start !gap-3 border-b border-dashed border-[#ECE8E1] py-3 font-heading text-base font-bold text-[#1F2A44]"
                                  },
                                  "link-label": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#FBFAF7]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Diapers",
                                      "url": "/categories/diapers",
                                      "icon": "IconBabyCarriage",
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
                                        "classes": "!text-[#4A8FE7]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Wipes",
                                      "url": "/categories/wipes",
                                      "icon": "IconDroplet",
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
                                        "classes": "!text-[#2FA584]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Formula",
                                      "url": "/categories/formula",
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
                                        "classes": "!text-[#F07D52]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Feeding",
                                      "url": "/categories/feeding",
                                      "icon": "IconMilk",
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
                                        "classes": "!text-[#7C5CE6]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bath & Skin",
                                      "url": "/categories/bath-skincare",
                                      "icon": "IconBath",
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
                                        "classes": "!text-[#4A8FE7]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Newborn",
                                      "url": "/categories/newborn",
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
                                        "classes": "!text-[#F07D52]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Mum Care",
                                      "url": "/categories/mom-care",
                                      "icon": "IconHeartHandshake",
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
                                        "classes": "!text-[#2FA584]"
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
                "id": "dl-hdr-scallop",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none h-4 w-full bg-[transparent] bg-[radial-gradient(circle_at_14px_0,#FFFFFF_13px,transparent_14px)] bg-[length:28px_16px] bg-repeat-x drop-shadow-[0_3px_2px_rgba(31,42,68,0.06)]"
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
            "id": "dl-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1F2A44] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "dl-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "dl-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[36px] bg-[#4A8FE7] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The Dolna club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD77A]"
                              }
                            }
                          },
                          {
                            "id": "dl-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "10% off your first order",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "dl-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account for your welcome code, size-change reminders and month-by-month baby guides.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Create account",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconGift",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:ring-[#4A8FE7]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#FF9F7A]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "dl-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "dl-ftr-grid",
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
                        "id": "dl-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-11 w-11 shrink-0 rounded-full bg-[#4A8FE7] bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:absolute after:-right-0.5 after:-top-0.5 after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#FFD77A] after:content-[''] transition-transform duration-500 group-hover:-rotate-12"
                                  }
                                }
                              },
                              {
                                "id": "dl-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "dolna",
                                      "src": "https://placehold.co/200x64?text=Dolna",
                                      "altText": "Dolna Baby Essentials",
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
                                        "classes": "font-heading text-[28px] font-bold leading-none tracking-[-0.03em] text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "dl-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Diapers, wipes, formula, feeding, bath and newborn care from genuine importers, with auto-refill and delivery across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "dl-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A8FE7]"
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
                                "id": "dl-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A8FE7]"
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
                                "id": "dl-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A8FE7]"
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
                                "id": "dl-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A8FE7]"
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
                        "id": "dl-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Diapers",
                                  "icon": "",
                                  "slug": "/categories/diapers"
                                },
                                {
                                  "text": "Wipes",
                                  "icon": "",
                                  "slug": "/categories/wipes"
                                },
                                {
                                  "text": "Formula",
                                  "icon": "",
                                  "slug": "/categories/formula"
                                },
                                {
                                  "text": "Feeding",
                                  "icon": "",
                                  "slug": "/categories/feeding"
                                },
                                {
                                  "text": "Newborn",
                                  "icon": "",
                                  "slug": "/categories/newborn"
                                },
                                {
                                  "text": "Mum Care",
                                  "icon": "",
                                  "slug": "/categories/mom-care"
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
                                "classes": "transition-colors hover:text-[#FFD77A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD77A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-ftr-ll-care",
                            "type": "linkList",
                            "options": {
                              "headerText": "Help",
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
                                  "text": "My Auto-refill",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Diaper Size Finder",
                                  "icon": "",
                                  "slug": "/#size-finder"
                                },
                                {
                                  "text": "Newborn Checklist",
                                  "icon": "",
                                  "slug": "/#newborn-checklist"
                                },
                                {
                                  "text": "Parenting Guides",
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
                                "classes": "transition-colors hover:text-[#FFD77A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD77A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-ftr-contact-h",
                            "type": "heading",
                            "options": {
                              "text": "Contact Us",
                              "tag": "h4"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "dl-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": {
                                "icon": "IconPhone",
                                "label": "Phone",
                                "value": "+880 9612-000000"
                              },
                              "email": {
                                "icon": "IconMail",
                                "label": "Email",
                                "value": "hello@example.com"
                              },
                              "location": {
                                "icon": "IconMapPin",
                                "label": "Store",
                                "value": "Dhaka, Bangladesh",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFD77A]"
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
                                "classes": "shrink-0 text-[#4A8FE7]"
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
                "id": "dl-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "dl-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Dolna Baby Essentials. All rights reserved.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "dl-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-ftr-pay-txt",
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
            "id": "dl-hero",
            "type": "section",
            "options": {
              "anchor": "size-finder"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FBFAF7] pb-16 pt-10 lg:pb-20 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "dl-hero-cloud-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-10 top-10 h-40 w-72 opacity-80 bg-[radial-gradient(circle_at_30%_62%,#EAF3FF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#EAF3FF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#EAF3FF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#EAF3FF_96%,transparent_100%)]"
                  }
                },
                "children": []
              },
              {
                "id": "dl-hero-cloud-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute bottom-6 right-[44%] hidden h-28 w-52 lg:block bg-[radial-gradient(circle_at_30%_62%,#FFF0E9_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFF0E9_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFF0E9_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFF0E9_96%,transparent_100%)]"
                  }
                },
                "children": []
              },
              {
                "id": "dl-hero-moon",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute right-3 top-5 hidden h-12 w-12 xl:right-6 rounded-full bg-[#FFD77A] shadow-[inset_-14px_-6px_0_#E9B23A] lg:block"
                  }
                },
                "children": []
              },
              {
                "id": "dl-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-start gap-6 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-hero-chip",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 ring-1 ring-[#ECE8E1]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-hero-chip-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMoonStars",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2A44] text-[#FFD77A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-hero-chip-t",
                                "type": "text",
                                "options": {
                                  "text": "For the first 1,000 days",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#1F2A44]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "ছোট্ট সোনার সব দরকারি জিনিস",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Hind_Siliguri'] text-xl font-semibold text-[#F07D52]"
                              }
                            }
                          },
                          {
                            "id": "dl-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Everything baby needs, refilled on time.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-5xl leading-[1.04] text-[#1F2A44] sm:text-6xl xl:text-[72px]"
                              }
                            }
                          },
                          {
                            "id": "dl-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Diapers, wipes, formula and newborn care from genuine importers, with expiry dates you can see. Set up auto-refill and the next pack arrives before the last one runs out.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop diapers",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/diapers",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#4A8FE7] px-7 py-3.5 shadow-[0_10px_24px_-10px_#2F6FC4] transition-all hover:-translate-y-0.5 hover:bg-[#2F6FC4] flex-row-reverse"
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
                                "id": "dl-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Build a refill box",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#auto-refill",
                                  "target": "",
                                  "icon": "IconRefresh",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-0.5 hover:ring-[#4A8FE7]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#FF9F7A]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-hero-proof",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-x-5 gap-y-2 pt-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-hero-proof-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-hero-proof-1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShieldCheck",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#2FA584]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-hero-proof-1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Genuine imported",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1F2A44]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-hero-proof-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-hero-proof-2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconHourglass",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#2FA584]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-hero-proof-2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Expiry 12+ months",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1F2A44]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-hero-proof-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-hero-proof-3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCash",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#2FA584]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-hero-proof-3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Cash on delivery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1F2A44]"
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
                        "id": "dl-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-hero-finder",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative rounded-[36px] bg-white p-6 pt-11 shadow-[0_40px_80px_-48px_rgba(31,42,68,0.55)] ring-1 ring-[#ECE8E1] sm:p-8 outline-dashed outline-2 outline-offset-[-9px] outline-[#EAF3FF]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-finder-h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap items-start justify-between gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-finder-h-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-finder-k",
                                        "type": "text",
                                        "options": {
                                          "text": "Diaper size finder",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#4A8FE7]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-finder-h2",
                                        "type": "heading",
                                        "options": {
                                          "text": "Tap your baby’s weight",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading font-bold tracking-[-0.02em] text-2xl text-[#1F2A44]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-finder-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconScale",
                                      "size": 22,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF3FF] text-[#4A8FE7]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-finder-bars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-7 grid h-52 grid-cols-5 items-end gap-2.5 sm:h-60 sm:gap-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-size-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-full flex-col justify-end"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-size-1-bar",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full h-[34%] rounded-[16px] bg-[repeating-linear-gradient(0deg,#F1EDFF_0_15px,#FFFFFF_15px_17px)] ring-1 ring-[#ECE8E1] transition-transform duration-300 hover:-translate-y-1"
                                          }
                                        },
                                        "children": []
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-size-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-full flex-col justify-end"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-size-2-bar",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full h-[50%] rounded-[16px] bg-[repeating-linear-gradient(0deg,#E4F7F1_0_15px,#FFFFFF_15px_17px)] ring-1 ring-[#ECE8E1] transition-transform duration-300 hover:-translate-y-1"
                                          }
                                        },
                                        "children": []
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-size-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-full flex-col justify-end"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-size-3-pop",
                                        "type": "text",
                                        "options": {
                                          "text": "Most picked",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "absolute -top-1 left-1/2 z-[2] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1F2A44] px-2.5 py-1 font-body text-[10px] font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-size-3-bar",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full h-[68%] rounded-[16px] bg-[repeating-linear-gradient(0deg,#4A8FE7_0_15px,rgba(255,255,255,0.45)_15px_17px)] shadow-[0_14px_24px_-12px_#4A8FE7] transition-transform duration-300 hover:-translate-y-1"
                                          }
                                        },
                                        "children": []
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-size-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-full flex-col justify-end"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-size-4-bar",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full h-[84%] rounded-[16px] bg-[repeating-linear-gradient(0deg,#FFF0E9_0_15px,#FFFFFF_15px_17px)] ring-1 ring-[#ECE8E1] transition-transform duration-300 hover:-translate-y-1"
                                          }
                                        },
                                        "children": []
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-size-5",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-full flex-col justify-end"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-size-5-bar",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full h-full rounded-[16px] bg-[repeating-linear-gradient(0deg,#FFF8E3_0_15px,#FFFFFF_15px_17px)] ring-1 ring-[#ECE8E1] transition-transform duration-300 hover:-translate-y-1"
                                          }
                                        },
                                        "children": []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "dl-finder-labels",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 grid grid-cols-5 gap-2.5 sm:gap-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-sizel-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col items-center text-center"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-sizel-1-btn",
                                        "type": "button",
                                        "options": {
                                          "text": "NB",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/size-nb",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "inline-flex cursor-pointer items-center"
                                          },
                                          "icon": {
                                            "classes": "flex items-center shrink-0"
                                          },
                                          "label": {
                                            "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44] hover:text-[#A78BFA]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-sizel-1-w",
                                        "type": "text",
                                        "options": {
                                          "text": "up to 5 kg",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold leading-tight text-[#6B7489] sm:text-[11px]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-sizel-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col items-center text-center"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-sizel-2-btn",
                                        "type": "button",
                                        "options": {
                                          "text": "S",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/size-s",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "inline-flex cursor-pointer items-center"
                                          },
                                          "icon": {
                                            "classes": "flex items-center shrink-0"
                                          },
                                          "label": {
                                            "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44] hover:text-[#5CC8A8]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-sizel-2-w",
                                        "type": "text",
                                        "options": {
                                          "text": "3-8 kg",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold leading-tight text-[#6B7489] sm:text-[11px]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-sizel-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col items-center text-center"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-sizel-3-btn",
                                        "type": "button",
                                        "options": {
                                          "text": "M",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/size-m",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "inline-flex cursor-pointer items-center"
                                          },
                                          "icon": {
                                            "classes": "flex items-center shrink-0"
                                          },
                                          "label": {
                                            "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#4A8FE7] hover:text-[#4A8FE7]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-sizel-3-w",
                                        "type": "text",
                                        "options": {
                                          "text": "6-11 kg",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold leading-tight text-[#6B7489] sm:text-[11px]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-sizel-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col items-center text-center"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-sizel-4-btn",
                                        "type": "button",
                                        "options": {
                                          "text": "L",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/size-l",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "inline-flex cursor-pointer items-center"
                                          },
                                          "icon": {
                                            "classes": "flex items-center shrink-0"
                                          },
                                          "label": {
                                            "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44] hover:text-[#FF9F7A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-sizel-4-w",
                                        "type": "text",
                                        "options": {
                                          "text": "9-14 kg",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold leading-tight text-[#6B7489] sm:text-[11px]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-sizel-5",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col items-center text-center"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-sizel-5-btn",
                                        "type": "button",
                                        "options": {
                                          "text": "XL",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/size-xl",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "inline-flex cursor-pointer items-center"
                                          },
                                          "icon": {
                                            "classes": "flex items-center shrink-0"
                                          },
                                          "label": {
                                            "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44] hover:text-[#E9B23A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-sizel-5-w",
                                        "type": "text",
                                        "options": {
                                          "text": "12-17 kg",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold leading-tight text-[#6B7489] sm:text-[11px]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "dl-finder-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[20px] bg-[#EAF3FF] px-4 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-finder-foot-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-finder-foot-k",
                                        "type": "text",
                                        "options": {
                                          "text": "Baby is 8 kg?",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs text-[#6B7489]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-finder-foot-v",
                                        "type": "text",
                                        "options": {
                                          "text": "Size M · 52 diapers lasts ~10 days",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#1F2A44]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-finder-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop size M",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/size-m",
                                      "target": "",
                                      "icon": "IconArrowRight",
                                      "iconSize": 15
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#4A8FE7] px-7 py-3.5 shadow-[0_10px_24px_-10px_#2F6FC4] transition-all hover:-translate-y-0.5 hover:bg-[#2F6FC4] !px-5 !py-2.5 flex-row-reverse"
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
                            "id": "dl-hero-c1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -top-5 left-2 sm:-left-6 z-10 flex items-center gap-2.5 rounded-[18px] bg-white py-2 pl-2 pr-4 shadow-[0_16px_34px_-16px_rgba(31,42,68,0.45)]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-hero-c1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconRefresh",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#FF9F7A] text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-hero-c1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-hero-c1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Auto-refill",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-extrabold text-[#1F2A44] whitespace-nowrap sm:text-sm"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-hero-c1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Save 10% on every box",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] text-[#6B7489] whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "dl-hero-c2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -bottom-6 right-2 sm:-right-5 z-10 flex items-center gap-2.5 rounded-[18px] bg-white py-2 pl-2 pr-4 shadow-[0_16px_34px_-16px_rgba(31,42,68,0.45)]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-hero-c2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCalendarEvent",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#5CC8A8] text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-hero-c2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-hero-c2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Next box in 6 days",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-extrabold text-[#1F2A44] whitespace-nowrap sm:text-sm"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-hero-c2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Skip or change any time",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] text-[#6B7489] whitespace-nowrap"
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
            "id": "dl-hero-scallop",
            "type": "container",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "h-4 w-full bg-[#FFFFFF] bg-[radial-gradient(circle_at_14px_0,#FBFAF7_13px,transparent_14px)] bg-[length:28px_16px] bg-repeat-x"
              }
            },
            "children": []
          },
          {
            "id": "dl-needs",
            "type": "section",
            "options": {
              "anchor": "shop-by-need"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-16 pt-12 lg:pb-20"
              }
            },
            "children": [
              {
                "id": "dl-needs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-needs-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-needs-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-needs-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-needs-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#F07D52_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#F07D52_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#F07D52_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#F07D52_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-needs-label",
                                "type": "text",
                                "options": {
                                  "text": "Shop by need",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-needs-h",
                            "type": "heading",
                            "options": {
                              "text": "What are we stocking up on?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-needs-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-needs-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-need-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#EAF3FF] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-1-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBabyCarriage",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#4A8FE7] shadow-[0_8px_16px_-10px_#4A8FE7]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Diapers",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/diapers",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#4A8FE7] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Tape & pant, NB to XXL",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-need-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#E4F7F1] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-2-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDroplet",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5CC8A8] shadow-[0_8px_16px_-10px_#5CC8A8]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Wipes",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/wipes",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#5CC8A8] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Water, sensitive, travel",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-need-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#FFF0E9] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-3-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBabyBottle",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#FF9F7A] shadow-[0_8px_16px_-10px_#FF9F7A]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Formula",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/formula",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#FF9F7A] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Stage 1 to growing-up",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-need-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#FFF8E3] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-4-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBowl",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#E9B23A] shadow-[0_8px_16px_-10px_#E9B23A]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Baby food",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/baby-food",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#E9B23A] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Cereals, purees, snacks",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-need-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#F1EDFF] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-5-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-5-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMilk",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#A78BFA] shadow-[0_8px_16px_-10px_#A78BFA]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "Feeding",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/feeding",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#A78BFA] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-5-p",
                                "type": "text",
                                "options": {
                                  "text": "Bottles, teats, sterilisers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-need-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#EAF3FF] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-6-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-6-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBath",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#4A8FE7] shadow-[0_8px_16px_-10px_#4A8FE7]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-6-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-6-btn",
                                "type": "button",
                                "options": {
                                  "text": "Bath & skin",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/bath-skincare",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#4A8FE7] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-6-p",
                                "type": "text",
                                "options": {
                                  "text": "Wash, lotion, rash cream",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-need-7",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#FFF0E9] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-7-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-7-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMoodKid",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#FF9F7A] shadow-[0_8px_16px_-10px_#FF9F7A]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-7-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-7-btn",
                                "type": "button",
                                "options": {
                                  "text": "Newborn",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/newborn",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#FF9F7A] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-7-p",
                                "type": "text",
                                "options": {
                                  "text": "Swaddles, mittens, kits",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-need-8",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[168px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#E4F7F1] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFFFFF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-need-8-cloud",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-8 h-24 w-40 opacity-70 transition-transform duration-500 group-hover:translate-x-2 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dl-need-8-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconHeartHandshake",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5CC8A8] shadow-[0_8px_16px_-10px_#5CC8A8]"
                              }
                            }
                          },
                          {
                            "id": "dl-need-8-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-need-8-btn",
                                "type": "button",
                                "options": {
                                  "text": "Mum care",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/mom-care",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#5CC8A8] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-need-8-p",
                                "type": "text",
                                "options": {
                                  "text": "Nursing, recovery, pumps",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B7489]"
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
            "id": "dl-stages",
            "type": "section",
            "options": {
              "anchor": "formula-stages"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-stages-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-stages-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-stages-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-stages-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-stages-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#4A8FE7_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#4A8FE7_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#4A8FE7_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#4A8FE7_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-stages-label",
                                "type": "text",
                                "options": {
                                  "text": "Formula by stage",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#4A8FE7]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-stages-h",
                            "type": "heading",
                            "options": {
                              "text": "The right tin for every month.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stages-sub",
                            "type": "text",
                            "options": {
                              "text": "Pick your baby’s stage. Every tin shows its batch and expiry date, and we never ship anything with less than 12 months left.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "dl-stages-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:before:absolute lg:before:left-[12%] lg:before:right-[12%] lg:before:top-9 lg:before:border-t-[3px] lg:before:border-dotted lg:before:border-[#ECE8E1] lg:before:content-['']"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-stage-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-start gap-3 rounded-[28px] bg-white p-6 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#4A8FE7]/50 lg:items-center lg:bg-transparent lg:p-4 lg:text-center lg:ring-0 lg:hover:bg-white lg:hover:ring-1"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-stage-1-n",
                            "type": "text",
                            "options": {
                              "text": "1",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-3xl font-bold text-white shadow-[0_0_0_8px_#EAF3FF] transition-transform duration-300 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-1-age",
                            "type": "text",
                            "options": {
                              "text": "0-6 months",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#EAF3FF] px-3 py-1 font-body text-xs font-bold text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Stage 1 · Infant formula",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-lg text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-1-p",
                            "type": "text",
                            "options": {
                              "text": "Closest to breast milk, for newborns and young babies.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop stage 1",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/stage-1",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#4A8FE7] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A8FE7] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-stage-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-start gap-3 rounded-[28px] bg-white p-6 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#5CC8A8]/50 lg:items-center lg:bg-transparent lg:p-4 lg:text-center lg:ring-0 lg:hover:bg-white lg:hover:ring-1"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-stage-2-n",
                            "type": "text",
                            "options": {
                              "text": "2",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#5CC8A8] font-heading text-3xl font-bold text-white shadow-[0_0_0_8px_#E4F7F1] transition-transform duration-300 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-2-age",
                            "type": "text",
                            "options": {
                              "text": "6-12 months",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#E4F7F1] px-3 py-1 font-body text-xs font-bold text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Stage 2 · Follow-on",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-lg text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-2-p",
                            "type": "text",
                            "options": {
                              "text": "Extra iron and vitamins as solids begin.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop stage 2",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/stage-2",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#5CC8A8] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#5CC8A8] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-stage-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-start gap-3 rounded-[28px] bg-white p-6 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#FF9F7A]/50 lg:items-center lg:bg-transparent lg:p-4 lg:text-center lg:ring-0 lg:hover:bg-white lg:hover:ring-1"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-stage-3-n",
                            "type": "text",
                            "options": {
                              "text": "3",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FF9F7A] font-heading text-3xl font-bold text-white shadow-[0_0_0_8px_#FFF0E9] transition-transform duration-300 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-3-age",
                            "type": "text",
                            "options": {
                              "text": "1-3 years",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FFF0E9] px-3 py-1 font-body text-xs font-bold text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Stage 3 · Growing-up milk",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-lg text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-3-p",
                            "type": "text",
                            "options": {
                              "text": "For toddlers moving on from formula.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop stage 3",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/stage-3",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#FF9F7A] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#FF9F7A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-stage-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-start gap-3 rounded-[28px] bg-white p-6 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#A78BFA]/50 lg:items-center lg:bg-transparent lg:p-4 lg:text-center lg:ring-0 lg:hover:bg-white lg:hover:ring-1"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-stage-4-n",
                            "type": "text",
                            "options": {
                              "text": "4",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#A78BFA] font-heading text-3xl font-bold text-white shadow-[0_0_0_8px_#F1EDFF] transition-transform duration-300 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-4-age",
                            "type": "text",
                            "options": {
                              "text": "3 years +",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F1EDFF] px-3 py-1 font-body text-xs font-bold text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-4-h",
                            "type": "heading",
                            "options": {
                              "text": "Stage 4 · Kids milk",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-lg text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-4-p",
                            "type": "text",
                            "options": {
                              "text": "Calcium and DHA for busy little ones.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-stage-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop stage 4",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/stage-4",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#A78BFA] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#A78BFA] whitespace-nowrap"
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
            "id": "dl-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-best-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#2FA584_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#2FA584_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#2FA584_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#2FA584_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Parents’ favourites",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#2FA584]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Restocked every week",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The essentials parents reorder most.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-best-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-best-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
            "id": "dl-refill",
            "type": "section",
            "options": {
              "anchor": "auto-refill"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EAF3FF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dl-refill-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "dl-refill-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2 lg:col-span-6"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-refill-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-refill-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "dl-refill-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-refill-k-cloud",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#4A8FE7_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#4A8FE7_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#4A8FE7_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#4A8FE7_96%,transparent_100%)]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-refill-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Auto-refill",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#4A8FE7]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-refill-h",
                                "type": "heading",
                                "options": {
                                  "text": "Never run out at 2 am again.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-refill-sub",
                                "type": "text",
                                "options": {
                                  "text": "Tell us what baby uses and how often. We send it on schedule and take 10% off every box.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base leading-relaxed text-[#6B7489]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-refill-steps",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-step-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[22px] bg-white/70 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-step-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPackages",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#4A8FE7] text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-step-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-step-1-h",
                                    "type": "text",
                                    "options": {
                                      "text": "1. Choose your essentials",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-base font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-step-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Diapers, wipes, formula: whatever runs out.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B7489]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "dl-step-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[22px] bg-white/70 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-step-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCalendarRepeat",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#4A8FE7] text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-step-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-step-2-h",
                                    "type": "text",
                                    "options": {
                                      "text": "2. Pick how often",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-base font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-step-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Every 2, 4 or 6 weeks. Change sizes as baby grows.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B7489]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "dl-step-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[22px] bg-white/70 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-step-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#4A8FE7] text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-step-3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-step-3-h",
                                    "type": "text",
                                    "options": {
                                      "text": "3. We deliver, 10% off",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-base font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-step-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Skip, pause or cancel from your account any time.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B7489]"
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
                        "id": "dl-refill-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-3 pt-5"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-refill-btn",
                            "type": "button",
                            "options": {
                              "text": "Start auto-refill",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconRefresh",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#4A8FE7] px-7 py-3.5 shadow-[0_10px_24px_-10px_#2F6FC4] transition-all hover:-translate-y-0.5 hover:bg-[#2F6FC4]"
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
                    "id": "dl-refill-box",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col gap-4 rounded-[32px] bg-white p-6 shadow-[0_40px_80px_-50px_rgba(31,42,68,0.6)] sm:p-8 lg:col-span-6 outline-dashed outline-2 outline-offset-[-9px] outline-[#EAF3FF]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-box-h",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-box-h-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-box-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPackage",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFF0E9] text-[#F07D52]"
                                  }
                                }
                              },
                              {
                                "id": "dl-box-h-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-box-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Ayaan’s monthly box",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-box-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Example · every 4 weeks",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6B7489]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "dl-box-save",
                            "type": "text",
                            "options": {
                              "text": "Save 10%",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#E4F7F1] px-3 py-1 font-body text-xs font-extrabold text-[#2FA584]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-box-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col divide-y divide-dashed divide-[#ECE8E1]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-box-i1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-3 py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-box-i1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-box-i1-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-3 w-3 shrink-0 rounded-full bg-[#4A8FE7]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-box-i1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Pant diapers, size M",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1F2A44]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-box-i1-q",
                                "type": "text",
                                "options": {
                                  "text": "2 packs",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0 rounded-full bg-[#FBFAF7] px-2.5 py-0.5 font-body text-xs font-bold text-[#6B7489] ring-1 ring-[#ECE8E1]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-box-i2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-3 py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-box-i2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-box-i2-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-3 w-3 shrink-0 rounded-full bg-[#5CC8A8]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-box-i2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Water wipes (80)",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1F2A44]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-box-i2-q",
                                "type": "text",
                                "options": {
                                  "text": "4 packs",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0 rounded-full bg-[#FBFAF7] px-2.5 py-0.5 font-body text-xs font-bold text-[#6B7489] ring-1 ring-[#ECE8E1]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-box-i3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-3 py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-box-i3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-box-i3-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-3 w-3 shrink-0 rounded-full bg-[#FF9F7A]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-box-i3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Stage 2 formula, 800 g",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1F2A44]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-box-i3-q",
                                "type": "text",
                                "options": {
                                  "text": "2 tins",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0 rounded-full bg-[#FBFAF7] px-2.5 py-0.5 font-body text-xs font-bold text-[#6B7489] ring-1 ring-[#ECE8E1]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-box-i4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-3 py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-box-i4-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-box-i4-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-3 w-3 shrink-0 rounded-full bg-[#A78BFA]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-box-i4-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Baby wash, 400 ml",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1F2A44]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-box-i4-q",
                                "type": "text",
                                "options": {
                                  "text": "1 bottle",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0 rounded-full bg-[#FBFAF7] px-2.5 py-0.5 font-body text-xs font-bold text-[#6B7489] ring-1 ring-[#ECE8E1]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dl-box-next",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 rounded-[20px] bg-[#FFF8E3] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-box-next-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCalendarEvent",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#E9B23A]"
                              }
                            }
                          },
                          {
                            "id": "dl-box-next-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-box-next-k",
                                "type": "text",
                                "options": {
                                  "text": "Next delivery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-[#6B7489]"
                                  }
                                }
                              },
                              {
                                "id": "dl-box-next-v",
                                "type": "text",
                                "options": {
                                  "text": "In 6 days · skip, swap sizes or pause",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#1F2A44]"
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
            "id": "dl-row-diapers",
            "type": "section",
            "options": {
              "anchor": "diapers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-row-diapers-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-row-diapers-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-row-diapers-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-row-diapers-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-diapers-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#4A8FE7_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#4A8FE7_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#4A8FE7_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#4A8FE7_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-row-diapers-label",
                                "type": "text",
                                "options": {
                                  "text": "Dry nights",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#4A8FE7]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-row-diapers-h",
                            "type": "heading",
                            "options": {
                              "text": "Diapers & pants",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-row-diapers-sub",
                            "type": "text",
                            "options": {
                              "text": "Tape and pant styles from newborn to XXL, in single packs and value boxes.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-row-diapers-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/diapers",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-row-diapers-slider",
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
                                  "diapers"
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
                        "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-[0_8px_20px_-8px_rgba(31,42,68,0.35)] transition-colors hover:!bg-[#4A8FE7] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1F2A44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-row-diapers-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-row-diapers-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-diapers-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-row-diapers-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-row-diapers-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-row-diapers-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-row-diapers-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-row-diapers-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-row-diapers-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-row-diapers-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-diapers-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-row-diapers-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
            "id": "dl-checklist",
            "type": "section",
            "options": {
              "anchor": "newborn-checklist"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-checklist-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-checklist-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 gap-10 overflow-hidden rounded-[40px] bg-[#FFF0E9] p-7 sm:p-10 lg:grid-cols-12 lg:p-14"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-checklist-cloud",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-10 -top-6 h-40 w-72 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "dl-checklist-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col items-start gap-4 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-checklist-head",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-checklist-head-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex max-w-2xl flex-col gap-3 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-checklist-head-k",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-checklist-k-cloud",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#F07D52_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#F07D52_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#F07D52_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#F07D52_96%,transparent_100%)]"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "dl-checklist-label",
                                        "type": "text",
                                        "options": {
                                          "text": "Expecting?",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "dl-checklist-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "The newborn checklist",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-checklist-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Everything for the hospital bag and the first month home, in one list. Buy the kit or tick off what you need.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-base leading-relaxed text-[#6B7489]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "dl-checklist-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop the newborn kit",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/newborn",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FF9F7A] px-7 py-3.5 shadow-[0_10px_24px_-10px_#F07D52] transition-all hover:-translate-y-0.5 hover:bg-[#F07D52] flex-row-reverse"
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
                        "id": "dl-checklist-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative grid grid-cols-1 gap-x-6 gap-y-1 rounded-[28px] bg-white p-5 sm:grid-cols-2 sm:p-7 lg:col-span-7 outline-dashed outline-2 outline-offset-[-9px] outline-[#FFF0E9]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-check-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#5CC8A8]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-1-t",
                                "type": "text",
                                "options": {
                                  "text": "Newborn diapers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#6B7489] line-through decoration-[#5CC8A8]/60"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-1-q",
                                "type": "text",
                                "options": {
                                  "text": "2 packs",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-check-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#5CC8A8]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-2-t",
                                "type": "text",
                                "options": {
                                  "text": "Sensitive water wipes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#6B7489] line-through decoration-[#5CC8A8]/60"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-2-q",
                                "type": "text",
                                "options": {
                                  "text": "4 packs",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-check-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#5CC8A8]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-3-t",
                                "type": "text",
                                "options": {
                                  "text": "Swaddles & wraps",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#6B7489] line-through decoration-[#5CC8A8]/60"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-3-q",
                                "type": "text",
                                "options": {
                                  "text": "3",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-check-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#5CC8A8]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-4-t",
                                "type": "text",
                                "options": {
                                  "text": "Bottles, teats & brush",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#6B7489] line-through decoration-[#5CC8A8]/60"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-4-q",
                                "type": "text",
                                "options": {
                                  "text": "1 set",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-check-5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-5-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#5CC8A8]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-5-t",
                                "type": "text",
                                "options": {
                                  "text": "Baby wash & lotion",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#6B7489] line-through decoration-[#5CC8A8]/60"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-5-q",
                                "type": "text",
                                "options": {
                                  "text": "1 each",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-check-6",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-6-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#ECE8E1]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-6-t",
                                "type": "text",
                                "options": {
                                  "text": "Nail clipper & thermometer",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-6-q",
                                "type": "text",
                                "options": {
                                  "text": "1 kit",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-check-7",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-7-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#ECE8E1]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-7-t",
                                "type": "text",
                                "options": {
                                  "text": "Muslin cloths",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-7-q",
                                "type": "text",
                                "options": {
                                  "text": "6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-check-8",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-b border-dashed border-[#ECE8E1] py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-check-8-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCircleCheckFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 text-[#ECE8E1]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-8-t",
                                "type": "text",
                                "options": {
                                  "text": "Nursing pads (for mum)",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-check-8-q",
                                "type": "text",
                                "options": {
                                  "text": "1 box",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
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
            "id": "dl-row-formula",
            "type": "section",
            "options": {
              "anchor": "formula"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-row-formula-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-row-formula-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-row-formula-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-row-formula-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-formula-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#F07D52_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#F07D52_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#F07D52_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#F07D52_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-row-formula-label",
                                "type": "text",
                                "options": {
                                  "text": "Feeding time",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-row-formula-h",
                            "type": "heading",
                            "options": {
                              "text": "Formula & baby food",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-row-formula-sub",
                            "type": "text",
                            "options": {
                              "text": "Infant formula, follow-on milk, cereals and first purees.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-row-formula-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/formula",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-row-formula-slider",
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
                                  "formula"
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
                        "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-[0_8px_20px_-8px_rgba(31,42,68,0.35)] transition-colors hover:!bg-[#4A8FE7] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1F2A44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-row-formula-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-row-formula-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-formula-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-row-formula-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-row-formula-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-row-formula-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-row-formula-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-row-formula-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-row-formula-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-row-formula-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-formula-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-row-formula-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
            "id": "dl-bundles",
            "type": "section",
            "options": {
              "anchor": "bundles"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-bundles-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-bundles-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-bundles-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-bundles-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-bundles-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#7C5CE6_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#7C5CE6_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#7C5CE6_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#7C5CE6_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-bundles-label",
                                "type": "text",
                                "options": {
                                  "text": "Bundles",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#7C5CE6]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-bundles-h",
                            "type": "heading",
                            "options": {
                              "text": "Boxes that save you time",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-bundles-sub",
                            "type": "text",
                            "options": {
                              "text": "Put together by our baby care team, priced lower than buying each item.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-bundles-all",
                        "type": "button",
                        "options": {
                          "text": "All bundles",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/bundle",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-bundles-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-bundle-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-4 overflow-hidden rounded-[30px] bg-white p-6 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#FF9F7A]/50 sm:p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-bundle-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-36 items-center justify-center overflow-hidden rounded-[22px] bg-[#FFF0E9]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-bundle-1-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -left-6 bottom-0 h-20 w-40 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-bundle-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconGift",
                                  "size": 56,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#FF9F7A] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "dl-bundle-1-save",
                                "type": "text",
                                "options": {
                                  "text": "Save 15%",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute right-3 top-3 rounded-full bg-[#FF9F7A] px-3 py-1 font-body text-xs font-extrabold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-bundle-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Newborn starter kit",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-bundle-1-p",
                            "type": "text",
                            "options": {
                              "text": "Diapers, wipes, swaddles, bottles and a bath set for the first weeks.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-bundle-1-btn",
                            "type": "button",
                            "options": {
                              "text": "View bundle",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/bundle",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#FF9F7A] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#FF9F7A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-bundle-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-4 overflow-hidden rounded-[30px] bg-white p-6 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#4A8FE7]/50 sm:p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-bundle-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-36 items-center justify-center overflow-hidden rounded-[22px] bg-[#EAF3FF]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-bundle-2-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -left-6 bottom-0 h-20 w-40 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-bundle-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPackages",
                                  "size": 56,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#4A8FE7] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "dl-bundle-2-save",
                                "type": "text",
                                "options": {
                                  "text": "Save 12%",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute right-3 top-3 rounded-full bg-[#4A8FE7] px-3 py-1 font-body text-xs font-extrabold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-bundle-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Monthly diaper box",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-bundle-2-p",
                            "type": "text",
                            "options": {
                              "text": "Four packs of your size plus wipes, on auto-refill.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-bundle-2-btn",
                            "type": "button",
                            "options": {
                              "text": "View bundle",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/bundle",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#4A8FE7] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A8FE7] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-bundle-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-4 overflow-hidden rounded-[30px] bg-white p-6 ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#5CC8A8]/50 sm:p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-bundle-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-36 items-center justify-center overflow-hidden rounded-[22px] bg-[#E4F7F1]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-bundle-3-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -left-6 bottom-0 h-20 w-40 bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-bundle-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBabyCarriage",
                                  "size": 56,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#5CC8A8] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "dl-bundle-3-save",
                                "type": "text",
                                "options": {
                                  "text": "Save 10%",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute right-3 top-3 rounded-full bg-[#5CC8A8] px-3 py-1 font-body text-xs font-extrabold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-bundle-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Travel & outing kit",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-xl text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-bundle-3-p",
                            "type": "text",
                            "options": {
                              "text": "Travel wipes, changing mat, bottle and a pack of pants.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
                              }
                            }
                          },
                          {
                            "id": "dl-bundle-3-btn",
                            "type": "button",
                            "options": {
                              "text": "View bundle",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/bundle",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto inline-flex w-fit cursor-pointer items-center gap-1 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#5CC8A8] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#5CC8A8] whitespace-nowrap"
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
            "id": "dl-brands",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-brands-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-brands-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-brands-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-brands-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-brands-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#2FA584_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#2FA584_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#2FA584_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#2FA584_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-brands-label",
                                "type": "text",
                                "options": {
                                  "text": "Genuine brands",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#2FA584]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-brands-h",
                            "type": "heading",
                            "options": {
                              "text": "Brands parents trust",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-brands-sub",
                            "type": "text",
                            "options": {
                              "text": "Bought from brands and their official importers only: never grey-market stock.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-brands-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-br-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-2 rounded-[24px] bg-white p-4 text-center ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#4A8FE7]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-br-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-2 rounded-[24px] bg-white p-4 text-center ring-1 ring-[#ECE8E1] transition-all hover:-translate-y-1 hover:ring-[#4A8FE7]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-br-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-[18px] bg-[#FBFAF7]"
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
                            "id": "dl-br-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                              }
                            }
                          },
                          {
                            "id": "dl-br-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " products",
                              "singularSuffix": " product",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold text-[#6B7489]"
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
            "id": "dl-row-bath",
            "type": "section",
            "options": {
              "anchor": "bath"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-row-bath-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-row-bath-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-row-bath-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-row-bath-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-bath-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#2FA584_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#2FA584_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#2FA584_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#2FA584_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-row-bath-label",
                                "type": "text",
                                "options": {
                                  "text": "Bath time",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#2FA584]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-row-bath-h",
                            "type": "heading",
                            "options": {
                              "text": "Wipes, bath & skin care",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-row-bath-sub",
                            "type": "text",
                            "options": {
                              "text": "Fragrance-free wipes, gentle washes, lotions and rash creams.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-row-bath-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/bath-skincare",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-row-bath-slider",
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
                        "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-[0_8px_20px_-8px_rgba(31,42,68,0.35)] transition-colors hover:!bg-[#4A8FE7] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1F2A44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-row-bath-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-row-bath-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-bath-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-row-bath-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-row-bath-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-row-bath-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-row-bath-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-row-bath-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-row-bath-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-row-bath-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-row-bath-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-row-bath-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
            "id": "dl-expert",
            "type": "section",
            "options": {
              "anchor": "help"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-expert-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-expert-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[40px] bg-[#1F2A44] p-8 sm:p-12 lg:grid-cols-12 lg:p-14"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-expert-stars",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1.5px),radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1.5px)] bg-[length:90px_70px,53px_41px] bg-[position:0_0,24px_18px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "dl-expert-moon",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[#FFD77A] shadow-[inset_-34px_-14px_0_#E9B23A] opacity-90"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "dl-expert-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col items-start gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-expert-k",
                            "type": "text",
                            "options": {
                              "text": "Up at 3 am?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD77A]"
                              }
                            }
                          },
                          {
                            "id": "dl-expert-h",
                            "type": "heading",
                            "options": {
                              "text": "Ask our baby care team, any hour.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-4xl leading-[1.08] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "dl-expert-p",
                            "type": "text",
                            "options": {
                              "text": "Not sure which size, which stage or why the rash won’t clear? Our team of nurses and trained advisors answers on WhatsApp, day and night.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-white/75"
                              }
                            }
                          },
                          {
                            "id": "dl-expert-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-expert-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Chat on WhatsApp",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://wa.me/",
                                  "target": "",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#5CC8A8] px-7 py-3.5 shadow-[0_10px_24px_-10px_#2FA584] transition-all hover:-translate-y-0.5 hover:bg-[#2FA584]"
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
                                "id": "dl-expert-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Call 09612-000000",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "tel:09612000000",
                                  "target": "",
                                  "icon": "IconPhoneCall",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 ring-1 ring-white/25 transition-colors hover:bg-white/20"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#FFD77A]"
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
                        "id": "dl-expert-stats",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative grid grid-cols-2 gap-3 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-expert-s1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[24px] bg-white/[0.07] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-expert-s1-v",
                                "type": "text",
                                "options": {
                                  "text": "24/7",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-expert-s1-k",
                                "type": "text",
                                "options": {
                                  "text": "Chat support",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/65 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-expert-s2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[24px] bg-white/[0.07] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-expert-s2-v",
                                "type": "text",
                                "options": {
                                  "text": "4 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-expert-s2-k",
                                "type": "text",
                                "options": {
                                  "text": "Average reply",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/65 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-expert-s3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[24px] bg-white/[0.07] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-expert-s3-v",
                                "type": "text",
                                "options": {
                                  "text": "12+ mo",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-expert-s3-k",
                                "type": "text",
                                "options": {
                                  "text": "Expiry, every order",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/65 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-expert-s4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[24px] bg-white/[0.07] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-expert-s4-v",
                                "type": "text",
                                "options": {
                                  "text": "7 days",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-expert-s4-k",
                                "type": "text",
                                "options": {
                                  "text": "Easy returns",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/65 sm:text-sm"
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
            "id": "dl-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-reviews-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#F07D52_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#F07D52_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#F07D52_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#F07D52_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Happy parents",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Fewer late-night runs to the shop",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 30,000+ parents.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "dl-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-[0_8px_20px_-8px_rgba(31,42,68,0.35)] transition-colors hover:!bg-[#4A8FE7] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1F2A44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#1F2A44]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#4A8FE7]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FBFAF7] p-7 outline-dashed outline-2 outline-offset-[-9px] outline-[#ECE8E1]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#E9B23A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Auto-refill is a lifesaver. Diapers and wipes just turn up every four weeks, and I switched to size L in one tap.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-[16px] font-medium leading-relaxed text-[#1F2A44]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "NR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nadia R.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Mum of Ayaan, 8 months",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#6B7489]"
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
                        "id": "dl-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FBFAF7] p-7 outline-dashed outline-2 outline-offset-[-9px] outline-[#ECE8E1]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#E9B23A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Twins go through a box a week. The monthly bundle saves us real money, and delivery has never been late.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-[16px] font-medium leading-relaxed text-[#1F2A44]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "TH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF9F7A] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tanvir H.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dad of twins",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#6B7489]"
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
                        "id": "dl-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FBFAF7] p-7 outline-dashed outline-2 outline-offset-[-9px] outline-[#ECE8E1]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#E9B23A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Used the newborn checklist for my hospital bag. Everything arrived in one parcel two days later.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-[16px] font-medium leading-relaxed text-[#1F2A44]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "SK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5CC8A8] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sumaiya K.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "First-time mum",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#6B7489]"
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
                        "id": "dl-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FBFAF7] p-7 outline-dashed outline-2 outline-offset-[-9px] outline-[#ECE8E1]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#E9B23A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“I check the expiry date on every formula tin. Always a year or more left. That trust matters.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-[16px] font-medium leading-relaxed text-[#1F2A44]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "FA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A78BFA] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Farzana A.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Mum of Zara, 2 years",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#6B7489]"
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
                        "id": "dl-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FBFAF7] p-7 outline-dashed outline-2 outline-offset-[-9px] outline-[#ECE8E1]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#E9B23A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Messaged at 3 am about a rash. The team replied in minutes and the cream they suggested worked.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-[16px] font-medium leading-relaxed text-[#1F2A44]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "IS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9B23A] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imran S.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dad of Rayan, 4 months",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#6B7489]"
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
                        "id": "dl-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FBFAF7] p-7 outline-dashed outline-2 outline-offset-[-9px] outline-[#ECE8E1]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#E9B23A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Prices match the shops near me, but I don’t have to carry 3 packs home with a baby on my hip.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-[16px] font-medium leading-relaxed text-[#1F2A44]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "LM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F6FC4] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dl-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Lubna M.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Mum of Inaya, 1 year",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#6B7489]"
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
            "id": "dl-journal",
            "type": "section",
            "options": {
              "anchor": "guides"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dl-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-journal-k-cloud",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#4A8FE7_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#4A8FE7_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#4A8FE7_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#4A8FE7_96%,transparent_100%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dl-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "Parenting guides",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#4A8FE7]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Answers for the first year",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#ECE8E1] transition-colors hover:ring-[#4A8FE7] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A8FE7] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1F2A44] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-journal-grid",
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
                        "classes": "group flex flex-col"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-journal-loop",
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
                            "classes": "group flex flex-col"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[28px] bg-[#EAF3FF]"
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
                            "id": "dl-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#F07D52]"
                                  }
                                }
                              },
                              {
                                "id": "dl-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                  }
                                }
                              },
                              {
                                "id": "dl-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read guide",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6B7489]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex flex-row-reverse items-center justify-end gap-1.5 font-body text-sm font-bold text-[#2F6FC4]"
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
            "id": "dl-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "dl-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "dl-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-9 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "dl-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-faq-k-cloud",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-5 w-8 bg-[radial-gradient(circle_at_30%_62%,#7C5CE6_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#7C5CE6_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#7C5CE6_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#7C5CE6_96%,transparent_100%)]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "dl-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#7C5CE6]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.02em] text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] text-[#1F2A44]"
                                  }
                                }
                              },
                              {
                                "id": "dl-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Freshness, auto-refill, sizes and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base leading-relaxed text-[#6B7489]"
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
                    "id": "dl-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Are the products genuine?",
                          "classes": ""
                        },
                        {
                          "label": "How fresh is the formula?",
                          "classes": ""
                        },
                        {
                          "label": "How does auto-refill work?",
                          "classes": ""
                        },
                        {
                          "label": "What if the diaper size is wrong?",
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
                        "classes": "flex flex-col gap-3"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[22px] bg-[#FBFAF7] px-6 py-5 font-heading text-base font-bold text-[#1F2A44] ring-1 ring-[#ECE8E1] transition-colors hover:bg-[#EAF3FF]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#EAF3FF] !ring-[#4A8FE7]/40"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#4A8FE7]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. We buy only from brands and their official importers, store everything away from heat and damp, and never sell grey-market stock.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Every tin and box shows its batch and expiry date on the listing, and we never ship formula or baby food with less than 12 months left.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Choose products and a schedule (every 2, 4 or 6 weeks). We deliver automatically with 10% off; skip, change sizes or cancel from your account any time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Unopened packs can be swapped for another size within 7 days of delivery, free of charge.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Same day inside Dhaka for orders before 2 pm, next day in most cities and 2-4 days nationwide, with cash on delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B7489]"
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
            "id": "dl-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Everything baby needs",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Diapers, wipes, formula, feeding and newborn care, newest first. Tap a card for sizes, expiry and reviews, or add it straight to your bag.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
                        "id": "dl-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-shop-promise",
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
                "id": "dl-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% genuine",
                          "description": "From official importers only",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Fresh stock",
                          "description": "12+ months to expiry",
                          "icon": "IconHourglass",
                          "iconSize": ""
                        },
                        {
                          "title": "Auto-refill",
                          "description": "10% off every box",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Same day in Dhaka",
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
                        "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF3FF] text-[#4A8FE7]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-shop-promise-fb-ic",
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
                        "id": "dl-shop-promise-fb-t",
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
                        "id": "dl-shop-promise-fb-d",
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
            "id": "dl-pd",
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
                "id": "dl-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-pd-grid",
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
                        "id": "dl-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FFF0E9] via-white to-[#FFF8E3] p-4 shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-[28px] bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1F2A44]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1F2A44]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#4A8FE7]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-pd-cats",
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
                                "classes": "rounded-full bg-[#FFF0E9] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF9F7A] hover:bg-[#FF9F7A] hover:text-white"
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
                            "id": "dl-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#1F2A44] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "dl-pd-rate",
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
                                "classes": "font-heading font-bold text-[#1F2A44]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "dl-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF today"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#4A8FE7] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "dl-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B7489]"
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
                            "id": "dl-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#1F2A44]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#1F2A44] transition-colors hover:border-[#FF9F7A] hover:bg-[#FFF0E9]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#FF9F7A] !bg-[#FFF0E9] !text-[#F07D52]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "dl-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock · back in a few days",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#4A8FE7]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#FF9F7A]"
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
                            "id": "dl-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1F2A44]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FBFAF7]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FBFAF7]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#4A8FE7] px-8 text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#2F6FC4]"
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
                            "id": "dl-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Genuine",
                                  "description": "Official importer",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Fresh",
                                  "description": "12+ months expiry",
                                  "icon": "IconHourglass",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Auto-refill",
                                  "description": "Save 10%",
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
                                "classes": "font-heading text-base font-bold text-[#1F2A44]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0E9] text-[#FF9F7A]"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-perks-ic",
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
                                "id": "dl-pd-perks-t",
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
                                "id": "dl-pd-perks-d",
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
                            "id": "dl-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-sku",
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
                                    "classes": "font-semibold text-[#1F2A44]"
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
                                "id": "dl-pd-brands",
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
                                    "classes": "font-semibold text-[#1F2A44]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#4A8FE7]"
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
                                "id": "dl-pd-tags",
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
                                    "classes": "font-semibold text-[#1F2A44]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#4A8FE7]"
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
            "id": "dl-pd-tabs-sec",
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
                "id": "dl-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(31,42,68,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Size & usage",
                              "icon": "IconShieldHeart"
                            },
                            {
                              "label": "Shipping & Returns",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FBFAF7] px-5 py-2.5 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1F2A44] !text-white shadow-md"
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
                            "id": "dl-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1F2A44] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1F2A44] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#4A8FE7] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD77A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconShieldCheck",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Batch number and expiry date are printed on every pack",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Check the weight range on the pack, not just the age",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Formula: follow the scoop and water guide exactly",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Store in a cool, dry place away from sunlight",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#FF9F7A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Free delivery on orders over ৳1,500",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Same day inside Dhaka for orders before 2 pm",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Unopened packs can be swapped for another size within 7 days",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Formula and food are not returnable once opened",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#FF9F7A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dl-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FBFAF7] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FBFAF7] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dl-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EAF3FF]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dl-pd-reviews-rate",
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
                                        "id": "dl-pd-reviews-co",
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
                                    "id": "dl-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How did it work for your baby? Tell other parents.",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(31,42,68,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FBFAF7] px-4 py-3 text-sm text-[#1F2A44] placeholder:text-gray-400 focus:border-[#FF9F7A] focus:outline-none focus:ring-2 focus:ring-[#FF9F7A]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#4A8FE7] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#2F6FC4] disabled:opacity-50"
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
            "id": "dl-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16"
              }
            },
            "children": [
              {
                "id": "dl-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Parents also buy",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EAF3FF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#4A8FE7]"
                          }
                        }
                      },
                      {
                        "id": "dl-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You might also need",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1F2A44]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
            "id": "dl-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Shop by need",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Diapers, wipes, formula, feeding, bath, newborn and mum care.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FFF0E9] transition-transform group-hover:rotate-6"
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
                            "id": "dl-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1F2A44] transition-colors group-hover:text-[#4A8FE7]"
                              }
                            }
                          },
                          {
                            "id": "dl-cat-grid-count",
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
                        "id": "dl-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "dl-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF9F7A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
                        "id": "dl-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group products by size, stage and need: size M, stage 2, sensitive skin, bundles and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4A8FE7]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4A8FE7]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1F2A44] group-hover:text-[#4A8FE7]"
                              }
                            }
                          },
                          {
                            "id": "dl-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FBFAF7] px-2 py-0.5 text-[10px] font-bold text-[#6B7489]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dl-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "dl-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF9F7A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
                        "id": "dl-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Genuine brands",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Brands Parents Trust",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Bought from brands and their official importers only.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FBFAF7] p-3"
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
                            "id": "dl-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1F2A44] group-hover:text-[#4A8FE7]"
                              }
                            }
                          },
                          {
                            "id": "dl-brand-grid-count",
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
                        "id": "dl-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "dl-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF9F7A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
                        "id": "dl-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Parenting guides",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Guides for the First Years",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Feeding, sleep, diapering, skin care and the newborn weeks.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF8E3]"
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
                            "id": "dl-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#FF9F7A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#1F2A44] transition-colors group-hover:text-[#4A8FE7]"
                                  }
                                }
                              },
                              {
                                "id": "dl-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read guide",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#4A8FE7]"
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
                        "id": "dl-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:border-[#4A8FE7] hover:text-[#4A8FE7]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A8FE7] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dl-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8E3] via-white to-[#FBFAF7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "dl-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-post-k",
                    "type": "text",
                    "options": {
                      "text": "Parenting guide",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFF0E9] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF9F7A]"
                      }
                    }
                  },
                  {
                    "id": "dl-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6B7489]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-post-author",
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
                            "classes": "font-heading font-bold text-[#1F2A44]"
                          }
                        }
                      },
                      {
                        "id": "dl-post-dot",
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
                        "id": "dl-post-date",
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
                    "id": "dl-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
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
            "id": "dl-post-body",
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
                "id": "dl-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1F2A44] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1F2A44] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#4A8FE7] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD77A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16"
              }
            },
            "children": [
              {
                "id": "dl-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1F2A44]"
                      }
                    }
                  },
                  {
                    "id": "dl-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FBFAF7] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FBFAF7] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EAF3FF]"
                              }
                            }
                          },
                          {
                            "id": "dl-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                              }
                            }
                          },
                          {
                            "id": "dl-post-cmt-co",
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
                        "id": "dl-post-cmt-form",
                        "type": "commentsForm",
                        "options": {
                          "showRate": false,
                          "rateLabel": "Your rating",
                          "commentLabel": "Leave a comment",
                          "placeholder": "",
                          "submitLabel": "Post comment",
                          "loadingLabel": "Please wait.",
                          "loginRequiredText": "Please log in to leave a review.",
                          "successText": "Thank you! Your review has been received."
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(31,42,68,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#1F2A44]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FBFAF7] px-4 py-3 text-sm text-[#1F2A44] placeholder:text-gray-400 focus:border-[#FF9F7A] focus:outline-none focus:ring-2 focus:ring-[#FF9F7A]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#4A8FE7] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#2F6FC4] disabled:opacity-50"
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
            "id": "dl-post-more",
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
                "id": "dl-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Guides",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1F2A44]"
                      }
                    }
                  },
                  {
                    "id": "dl-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF8E3]"
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
                            "id": "dl-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#FF9F7A]"
                                  }
                                }
                              },
                              {
                                "id": "dl-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#1F2A44] transition-colors group-hover:text-[#4A8FE7]"
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
            "id": "dl-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EAF3FF] pb-16 pt-14 sm:pb-20 sm:pt-16 before:pointer-events-none before:absolute before:-right-16 before:top-6 before:h-40 before:w-80 before:opacity-80 before:content-[''] before:bg-[radial-gradient(circle_at_30%_62%,#FFFFFF_22%,transparent_23%),radial-gradient(circle_at_52%_46%,#FFFFFF_27%,transparent_28%),radial-gradient(circle_at_73%_62%,#FFFFFF_20%,transparent_21%),radial-gradient(ellipse_44%_14%_at_51%_70%,#FFFFFF_96%,transparent_100%)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:content-[''] after:bg-[radial-gradient(circle_at_14px_100%,#FBFAF7_13px,transparent_14px)] after:bg-[length:28px_16px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "dl-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dl-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome Back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-extrabold uppercase tracking-[0.16em] text-[#F07D52]"
                      }
                    }
                  },
                  {
                    "id": "dl-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1F2A44] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dl-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage auto-refill boxes and keep addresses up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B7489] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dl-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-12"
              }
            },
            "children": [
              {
                "id": "dl-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#1F2A44] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#FFD77A]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#4A8FE7]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#4A8FE7]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#4A8FE7]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "dl-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dl-acc-3",
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
                                "id": "dl-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(31,42,68,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4A8FE7] focus:outline-none focus:ring-2 focus:ring-[#4A8FE7]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4A8FE7] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2F6FC4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FE7]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "dl-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(31,42,68,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4A8FE7] focus:outline-none focus:ring-2 focus:ring-[#4A8FE7]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4A8FE7] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2F6FC4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FE7]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "dl-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "dl-acc-9",
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
                                  "label": "Auto-refill",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FBFAF7] px-5 py-2.5 font-heading text-sm font-semibold text-[#1F2A44] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1F2A44] !text-white shadow-md"
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
                                "id": "dl-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4A8FE7]/10 text-[#4A8FE7]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dl-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#4A8FE7] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dl-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4A8FE7]/10 text-[#4A8FE7]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dl-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#4A8FE7]/40 hover:bg-[#4A8FE7]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4A8FE7]/10 text-[#4A8FE7]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dl-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4A8FE7]/10 text-[#4A8FE7]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4A8FE7] focus:outline-none focus:ring-2 focus:ring-[#4A8FE7]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#4A8FE7] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2F6FC4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FE7]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A8FE7]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "dl-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8E3] via-white to-[#FBFAF7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "dl-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(31,42,68,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0E9] text-[#FF9F7A]"
                          }
                        }
                      },
                      {
                        "id": "dl-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EAF3FF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#4A8FE7]"
                          }
                        }
                      },
                      {
                        "id": "dl-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! Your Order Is Confirmed",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1F2A44] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "dl-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re packing it now. A confirmation is on its way by SMS, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6B7489] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "dl-ty-steps",
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
                              "text": "Packed with care, dates checked on every item",
                              "icon": ""
                            },
                            {
                              "text": "Delivered the same day in Dhaka: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[28px] bg-[#FBFAF7] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#4A8FE7]"
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
                        "id": "dl-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4A8FE7] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#2F6FC4] w-full sm:w-auto"
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
                            "id": "dl-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF9F7A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#FF9F7A] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#FF9F7A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#FF9F7A] whitespace-nowrap group-hover:text-white"
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
            "id": "dl-ty-promise",
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
                "id": "dl-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% genuine",
                          "description": "From official importers only",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Fresh stock",
                          "description": "12+ months to expiry",
                          "icon": "IconHourglass",
                          "iconSize": ""
                        },
                        {
                          "title": "Auto-refill",
                          "description": "10% off every box",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Same day in Dhaka",
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
                        "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF3FF] text-[#4A8FE7]"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-ty-promise-fb-ic",
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
                        "id": "dl-ty-promise-fb-t",
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
                        "id": "dl-ty-promise-fb-d",
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
            "id": "dl-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8E3] via-white to-[#FBFAF7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "dl-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#4A8FE7] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "dl-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF8E3] text-[#1F2A44]"
                      }
                    }
                  },
                  {
                    "id": "dl-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Is Having a Nap",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#1F2A44] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "dl-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the product may have moved. Head back home or browse everything in the shop.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6B7489] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "dl-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4A8FE7] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(74,143,231,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#2F6FC4] w-full sm:w-auto"
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
                        "id": "dl-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF9F7A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#FF9F7A] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#FF9F7A] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#FF9F7A] whitespace-nowrap group-hover:text-white"
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
            "id": "dl-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBFAF7] py-16"
              }
            },
            "children": [
              {
                "id": "dl-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dl-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFD77A] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1F2A44]"
                          }
                        }
                      },
                      {
                        "id": "dl-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1F2A44] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dl-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "dl-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#ECE8E1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(31,42,68,0.45)] hover:ring-[#4A8FE7]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "dl-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#EAF3FF] outline-dashed outline-2 outline-offset-[-7px] outline-transparent transition-[outline-color] duration-300 group-hover:outline-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#FF9F7A] px-2.5 py-1 font-body text-[11px] font-extrabold text-white"
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
                                "id": "dl-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dl-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6B7489]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E9B23A]"
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
                                    "id": "dl-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[15px] font-bold leading-snug text-[#1F2A44] transition-colors group-hover:text-[#2F6FC4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dl-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-semibold text-[#2FA584]"
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
                            "id": "dl-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dl-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B7489] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1F2A44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6B7489]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A8FE7]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A8FE7] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dl-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#4A8FE7] pl-2.5 pr-3.5 text-white transition-colors hover:bg-[#2F6FC4]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold"
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
