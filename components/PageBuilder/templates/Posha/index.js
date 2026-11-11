/**
 * Template: Posha Pet Shop.
 *
 * A playful, modern pet shop (posha: "pet", as in posha prani): food,
 * treats, toys, litter, medicine and gear for dogs, cats, birds, fish and
 * small pets, with autoship, a free vet chat and grooming. Like the other
 * complete templates here it carries all sixteen page types - Header,
 * Footer, Home, Shop, Product, the six taxonomy archives, Blog Archive, Blog
 * Single, Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to ps-, palette remapped, copy
 * rewritten); the Header is restyled and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * A cobalt promo line (code PAW10, food-finder link); a white row with the
 * logo - a white paw print on a tangerine blob, drawn with radial gradients
 * (PAW_BG) - the pet switcher (Dogs, Cats, Birds, Fish, Small pets,
 * Pharmacy, Deals: each pill tints to its pet's colour on hover, with the
 * icon in that colour from xl up), search, account and a cart shaped like a
 * food bowl (flat top, deep round bottom, a pressable shadow); and a trail
 * of paw prints walking along its foot (ps-hdr-trail, PAW_TRAIL).
 *
 * A COLOUR FOR EVERY PET
 *
 *   dogs tangerine #FF7A3D   cats mint #3DBB94   birds sunshine #E6A800
 *   fish sky #3FA4E8          small pets lilac #9B7FEA   pharmacy cobalt
 *
 * used in the menu, the shop-by-pet cards, the reviews and the care cards.
 * Blobs (an organic border-radius) recur for the hero, the pet cards, the
 * logo and the promise icons; buttons sit on a solid drop shadow and press
 * down on hover.
 *
 * DESIGN
 *
 *   cobalt     #2B4BD8  primary: promo, buttons, food finder        #1E37A8 deep  #E7ECFD tint
 *   tangerine  #FF7A3D  secondary: logo, cart, badges, dog things   #E8601F deep  #FFEADF tint
 *   sunshine   #FFD23F  accent: stars, highlights                   #FFF6D6 tint
 *   cream #FFF9F1   ink #1D2140   muted #6B6F86   line #EEE8DE
 *
 * Fonts (template meta): Grandstander (headings: rounded and playful),
 * Golos Text (body), Mina via `font-['Mina']` for the Bangla line.
 *
 * Product cards: a cream photo well where a cobalt paw print appears on
 * hover, a tilted tangerine discount sticker, the rating on top, the name,
 * one excerpt line (use it for pet, life stage and size, e.g. "Adult dog ·
 * 3 kg"), the price in Grandstander and a round cobalt add button.
 *
 * HOME
 *
 *   Blob hero with the dog and cat (public/templates/posha-pets.svg) and
 *   three floating chips - shop by pet (#pets) - food finder, a pet profile in
 *   choice chips (#food-finder) - new arrivals - trusted brands, live
 *   product_brand terms (#brands) - favourites (#bestsellers) - autoship with
 *   bowls emptying between deliveries (#autoship) - dog food - vet, pharmacy
 *   and grooming (#vet-care) - cat food & litter - toys, beds & accessories -
 *   adopt, don't shop (#adopt) - reviews signed by humans and their pets -
 *   pet care tips (#journal) - FAQ (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: dogs, cats, birds, fish, small-pets, pharmacy,
 *     grooming, dog-food, cat-food, toys. Tag slugs: new, bestseller, deals.
 *     Brands are product_brand terms; give each a logo.
 *   - The food finder is a visual: its chips are not a form, and its button
 *     links to /categories/dog-food. Point it where you like.
 *   - Autoship (10% off), the free vet chat, grooming at home, same-day
 *     delivery, the 1% shelter donation and the food-swap rule are sample
 *     policy: offer only what you actually run.
 *   - Promo code PAW10, the ৳1,500 free-delivery threshold, "25,000+ happy
 *     pets", the shelter stats, contact details and the six reviews are
 *     sample copy.
 */

var template = [
  {
    "name": "Posha Pet Shop",
    "description": "Playful modern pet shop in cobalt, tangerine and sunshine on cream with a colour for every pet; Grandstander, Golos Text and Mina: a paw-print logo, a pet-switcher menu, a food-bowl cart and a trail of paw prints along the header, a blob hero with a dog and a cat, shop by pet, a food finder, new arrivals, trusted brands, favourites, autoship with filling bowls, dog food, vet and care services, cat food, toys, an adopt-don’t-shop band, reviews from pets and their humans, care tips and FAQ. All 16 pages.",
    "thumbnail": "/templates/posha.svg",
    "meta": {
      "fonts": [
        {
          "family": "Grandstander",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Grandstander:wght@600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Golos Text",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Mina",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Mina:wght@400;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Grandstander",
        "body": "Golos Text"
      },
      "colors": {
        "primary": "#2B4BD8",
        "secondary": "#FF7A3D",
        "accent": "#FFD23F",
        "background": "#FFF9F1",
        "foreground": "#1D2140",
        "muted": "#6B6F86"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "ps-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-white"
              }
            },
            "children": [
              {
                "id": "ps-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#2B4BD8] px-4 py-2 text-center font-body text-xs font-semibold text-white"
                  }
                },
                "children": [
                  {
                    "id": "ps-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Same-day delivery in Dhaka · Free vet chat with every order · 10% off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "ps-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "PAW10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#FFD23F] px-2.5 py-0.5 font-body text-[11px] font-extrabold tracking-wider text-[#1D2140]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Food finder",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#food-finder",
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
                        "classes": "font-body text-xs font-bold text-[#FFD23F] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "ps-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[76px] items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2.5"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "h-11 w-11 shrink-0 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#FF7A3D] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)] transition-transform duration-500 group-hover:rotate-12"
                              }
                            }
                          },
                          {
                            "id": "ps-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "posha",
                                  "src": "https://placehold.co/200x64?text=Posha",
                                  "altText": "Posha Pet Shop",
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
                                    "classes": "font-heading text-[28px] font-extrabold leading-none text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Pet shop & care",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-[#FF7A3D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ps-hdr-menu",
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
                            "classes": "!gap-1.5 whitespace-nowrap rounded-full px-3 py-2 font-body text-sm font-bold text-[#1D2140] transition-colors"
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
                            "id": "ps-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Dogs",
                              "url": "/categories/dogs",
                              "icon": "IconDog",
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
                                "classes": "hover:!bg-[#FFEADF] hover:!text-[#FF7A3D]"
                              },
                              "icon": {
                                "classes": "!text-[#FF7A3D]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Cats",
                              "url": "/categories/cats",
                              "icon": "IconCat",
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
                                "classes": "hover:!bg-[#DFF5EC] hover:!text-[#3DBB94]"
                              },
                              "icon": {
                                "classes": "!text-[#3DBB94]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Birds",
                              "url": "/categories/birds",
                              "icon": "IconFeather",
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
                                "classes": "hover:!bg-[#FFF6D6] hover:!text-[#E6A800]"
                              },
                              "icon": {
                                "classes": "!text-[#E6A800]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Fish",
                              "url": "/categories/fish",
                              "icon": "IconFish",
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
                                "classes": "hover:!bg-[#E2F2FC] hover:!text-[#3FA4E8]"
                              },
                              "icon": {
                                "classes": "!text-[#3FA4E8]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Small pets",
                              "url": "/categories/small-pets",
                              "icon": "IconCarrot",
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
                                "classes": "hover:!bg-[#EFE9FD] hover:!text-[#9B7FEA]"
                              },
                              "icon": {
                                "classes": "!text-[#9B7FEA]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Pharmacy",
                              "url": "/categories/pharmacy",
                              "icon": "IconPill",
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
                                "classes": "hover:!bg-[#E7ECFD] hover:!text-[#2B4BD8]"
                              },
                              "icon": {
                                "classes": "!text-[#2B4BD8]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Deals",
                              "url": "/tags/deals",
                              "icon": "IconDiscount",
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
                                "classes": "hover:!bg-[#FFEADF] hover:!text-[#E8601F]"
                              },
                              "icon": {
                                "classes": "!text-[#E8601F]"
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
                        "id": "ps-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search food, toys, brands...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden w-56 rounded-full bg-[#FFF9F1] py-1 pl-1 pr-3 ring-2 ring-[#EEE8DE] transition-all focus-within:ring-[#2B4BD8]/40 md:block lg:hidden 2xl:block"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-body text-sm text-[#1D2140] placeholder:text-[#6B6F86] focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 items-center justify-center rounded-full bg-[#2B4BD8] text-white"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#2B4BD8] focus:outline-none focus:ring-2 focus:ring-[#2B4BD8]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#2B4BD8]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#2B4BD8]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#2B4BD8] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1E37A8]"
                              }
                            }
                          },
                          {
                            "id": "ps-hdr-account",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE] transition-colors hover:bg-[#E7ECFD]"
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
                            "id": "ps-hdr-cart",
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
                                "classes": "relative flex h-11 w-12 cursor-pointer items-center justify-center rounded-b-[24px] rounded-t-[8px] bg-[#FF7A3D] text-white shadow-[0_4px_0_#E8601F] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#E8601F]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#2B4BD8] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FFF9F1] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#1D2140]"
                              },
                              "title-icon": {
                                "classes": "text-[#2B4BD8]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#2B4BD8] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#2B4BD8] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1E37A8]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4BD8]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#2B4BD8] focus:outline-none focus:ring-2 focus:ring-[#2B4BD8]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#2B4BD8] px-4 py-2 text-sm font-medium text-[#2B4BD8] transition-colors hover:bg-[#2B4BD8] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2B4BD8] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E37A8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4BD8]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "ps-hdr-mobile",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FFF9F1] p-2 text-[#1D2140] transition-colors hover:bg-[#2B4BD8] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-11 w-11 shrink-0 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#FF7A3D] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)] transition-transform duration-500 group-hover:rotate-12"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ps-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "posha",
                                          "src": "https://placehold.co/200x64?text=Posha",
                                          "altText": "Posha Pet Shop",
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
                                            "classes": "font-heading text-[28px] font-extrabold leading-none text-[#1D2140]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ps-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Pet shop & care",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-[#FF7A3D]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "ps-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search the pet shop...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FFF9F1] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#FF7A3D] focus-within:ring-2 focus-within:ring-[#FF7A3D]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1D2140] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6B6F86]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#2B4BD8] focus:outline-none focus:ring-2 focus:ring-[#2B4BD8]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#2B4BD8]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#2B4BD8]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#2B4BD8] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1E37A8]"
                                  }
                                }
                              },
                              {
                                "id": "ps-hdr-m-menu",
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
                                    "classes": "!justify-start !gap-3 border-b-2 border-dashed border-[#EEE8DE] py-3 font-body text-base font-bold text-[#1D2140]"
                                  },
                                  "link-label": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF9F1]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Dogs",
                                      "url": "/categories/dogs",
                                      "icon": "IconDog",
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
                                        "classes": "!text-[#FF7A3D]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ps-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Cats",
                                      "url": "/categories/cats",
                                      "icon": "IconCat",
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
                                        "classes": "!text-[#3DBB94]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ps-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Birds",
                                      "url": "/categories/birds",
                                      "icon": "IconFeather",
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
                                        "classes": "!text-[#E6A800]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ps-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Fish",
                                      "url": "/categories/fish",
                                      "icon": "IconFish",
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
                                        "classes": "!text-[#3FA4E8]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ps-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Small pets",
                                      "url": "/categories/small-pets",
                                      "icon": "IconCarrot",
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
                                        "classes": "!text-[#9B7FEA]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ps-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Pharmacy",
                                      "url": "/categories/pharmacy",
                                      "icon": "IconPill",
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
                                        "classes": "!text-[#2B4BD8]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ps-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Deals",
                                      "url": "/tags/deals",
                                      "icon": "IconDiscount",
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
                                        "classes": "!text-[#E8601F]"
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
                "id": "ps-hdr-trail",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none h-6 w-full border-b-2 border-[#EEE8DE] bg-white bg-[radial-gradient(ellipse_5px_4px_at_14px_19px,#2B4BD82E_96%,transparent_100%),radial-gradient(circle_2px_at_9px_13px,#2B4BD82E_96%,transparent_100%),radial-gradient(circle_2px_at_14px_11px,#2B4BD82E_96%,transparent_100%),radial-gradient(circle_2px_at_19px_13px,#2B4BD82E_96%,transparent_100%),radial-gradient(ellipse_5px_4px_at_50px_13px,#2B4BD82E_96%,transparent_100%),radial-gradient(circle_2px_at_45px_7px,#2B4BD82E_96%,transparent_100%),radial-gradient(circle_2px_at_50px_5px,#2B4BD82E_96%,transparent_100%),radial-gradient(circle_2px_at_55px_7px,#2B4BD82E_96%,transparent_100%)] bg-[length:72px_24px] bg-repeat-x"
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
            "id": "ps-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1D2140] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "ps-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "ps-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[#2B4BD8] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The pet post",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FFD23F]"
                              }
                            }
                          },
                          {
                            "id": "ps-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Treats, tips and deals, weekly",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "ps-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Care tips from our vets, new arrivals and members-only deals.",
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
                        "id": "ps-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Subscribe",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconPaw",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FF7A3D] px-6 py-3.5 shadow-[0_6px_0_#E8601F] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_#E8601F]"
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
                "id": "ps-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "ps-ftr-grid",
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
                        "id": "ps-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#FF7A3D] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              },
                              {
                                "id": "ps-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "posha",
                                      "src": "https://placehold.co/200x64?text=Posha",
                                      "altText": "Posha Pet Shop",
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
                                        "classes": "font-heading text-[28px] font-extrabold leading-none text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Food, treats, toys, litter, medicine and care for dogs, cats, birds, fish and small pets, delivered across Bangladesh with a free vet chat on every order.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "ps-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2B4BD8]"
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
                                "id": "ps-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2B4BD8]"
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
                                "id": "ps-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2B4BD8]"
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
                                "id": "ps-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2B4BD8]"
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
                        "id": "ps-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop by pet",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Dogs",
                                  "icon": "",
                                  "slug": "/categories/dogs"
                                },
                                {
                                  "text": "Cats",
                                  "icon": "",
                                  "slug": "/categories/cats"
                                },
                                {
                                  "text": "Birds",
                                  "icon": "",
                                  "slug": "/categories/birds"
                                },
                                {
                                  "text": "Fish",
                                  "icon": "",
                                  "slug": "/categories/fish"
                                },
                                {
                                  "text": "Small Pets",
                                  "icon": "",
                                  "slug": "/categories/small-pets"
                                },
                                {
                                  "text": "Pet Pharmacy",
                                  "icon": "",
                                  "slug": "/categories/pharmacy"
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
                        "id": "ps-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-ftr-ll-care",
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
                                  "text": "My Autoship",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Food Finder",
                                  "icon": "",
                                  "slug": "/#food-finder"
                                },
                                {
                                  "text": "Vet & Grooming",
                                  "icon": "",
                                  "slug": "/#vet-care"
                                },
                                {
                                  "text": "Pet Care Tips",
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
                        "id": "ps-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-ftr-contact-h",
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
                            "id": "ps-ftr-address",
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
                                "classes": "shrink-0 text-[#2B4BD8]"
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
                "id": "ps-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "ps-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Posha Pet Shop. All rights reserved. Made with love for every paw.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "ps-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-ftr-pay-txt",
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
            "id": "ps-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-16 pt-10 lg:pb-24 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "ps-hero-trail",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-6 top-6 hidden h-6 w-[60%] rotate-[-4deg] opacity-60 lg:block bg-[radial-gradient(ellipse_5px_4px_at_14px_19px,#2B4BD826_96%,transparent_100%),radial-gradient(circle_2px_at_9px_13px,#2B4BD826_96%,transparent_100%),radial-gradient(circle_2px_at_14px_11px,#2B4BD826_96%,transparent_100%),radial-gradient(circle_2px_at_19px_13px,#2B4BD826_96%,transparent_100%),radial-gradient(ellipse_5px_4px_at_50px_13px,#2B4BD826_96%,transparent_100%),radial-gradient(circle_2px_at_45px_7px,#2B4BD826_96%,transparent_100%),radial-gradient(circle_2px_at_50px_5px,#2B4BD826_96%,transparent_100%),radial-gradient(circle_2px_at_55px_7px,#2B4BD826_96%,transparent_100%)] bg-[length:72px_24px] bg-repeat-x"
                  }
                },
                "children": []
              },
              {
                "id": "ps-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-start gap-6 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-hero-for",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-1.5 rounded-full bg-white p-1.5 pr-4 ring-2 ring-[#EEE8DE]"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hero-for-1",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDog",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7A3D] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-hero-for-2",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCat",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#3DBB94] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-hero-for-3",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFeather",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD23F] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-hero-for-4",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFish",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#3FA4E8] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-hero-for-t",
                                "type": "text",
                                "options": {
                                  "text": "For dogs, cats, birds & fish",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pl-1 font-body text-xs font-bold text-[#1D2140]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "আপনার পোষা প্রাণীর যত্নে",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Mina'] text-xl font-semibold text-[#FF7A3D]"
                              }
                            }
                          },
                          {
                            "id": "ps-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Happy pets, sorted.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-6xl leading-[0.95] text-[#1D2140] sm:text-7xl xl:text-[96px]"
                              }
                            }
                          },
                          {
                            "id": "ps-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Vet-approved food, treats, toys, litter and medicine for every pet in the house, delivered to your door and on autoship so the bowl is never empty.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-[#6B6F86]"
                              }
                            }
                          },
                          {
                            "id": "ps-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-4 pb-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop for my dog",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/dogs",
                                  "target": "",
                                  "icon": "IconDog",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FF7A3D] px-6 py-3.5 shadow-[0_6px_0_#E8601F] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_#E8601F]"
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
                                "id": "ps-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Shop for my cat",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/cats",
                                  "target": "",
                                  "icon": "IconCat",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2B4BD8] px-6 py-3.5 shadow-[0_6px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_#1E37A8]"
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
                            "id": "ps-hero-proof",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hero-proof-paws",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-10 w-10 shrink-0 rounded-full bg-[#FFD23F] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#1D2140_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#1D2140_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#1D2140_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#1D2140_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#1D2140_10%,transparent_11%)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ps-hero-proof-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-hero-proof-v",
                                    "type": "text",
                                    "options": {
                                      "text": "25,000+ happy pets",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-hero-proof-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Rated 4.9 by their humans",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6B6F86]"
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
                        "id": "ps-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-hero-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute inset-x-[6%] bottom-[2%] top-[10%] rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#2B4BD8] transition-[border-radius] duration-1000 hover:rounded-[54%_46%_44%_56%/46%_56%_44%_54%]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hero-sun",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute right-[6%] top-[4%] h-20 w-20 rounded-full bg-[#FFD23F]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-hero-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/posha-pets.svg",
                              "altText": "A happy golden dog and a grey tabby cat sitting side by side",
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
                                "classes": "h-auto w-full"
                              }
                            }
                          },
                          {
                            "id": "ps-hero-c1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-0 top-[18%] sm:-left-2 z-10 flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_10px_24px_-10px_rgba(29,33,64,0.35)]"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hero-c1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconStethoscope",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-8 w-8 items-center justify-center rounded-full bg-[#3DBB94] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-hero-c1-t",
                                "type": "text",
                                "options": {
                                  "text": "Vet-approved food",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#1D2140] whitespace-nowrap sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-hero-c2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -bottom-3 right-0 sm:-right-2 z-10 flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_10px_24px_-10px_rgba(29,33,64,0.35)]"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hero-c2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A3D] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-hero-c2-t",
                                "type": "text",
                                "options": {
                                  "text": "Same-day in Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#1D2140] whitespace-nowrap sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-hero-c3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -bottom-3 left-0 sm:left-[4%] z-10 flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_10px_24px_-10px_rgba(29,33,64,0.35)]"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-hero-c3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconRepeat",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-8 w-8 items-center justify-center rounded-full bg-[#2B4BD8] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-hero-c3-t",
                                "type": "text",
                                "options": {
                                  "text": "Autoship & save 10%",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#1D2140] whitespace-nowrap sm:text-sm"
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
            "id": "ps-pets",
            "type": "section",
            "options": {
              "anchor": "pets"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-pets-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-pets-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-pets-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pets-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pets-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FF7A3D] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-pets-label",
                                "type": "text",
                                "options": {
                                  "text": "Shop by pet",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-pets-h",
                            "type": "heading",
                            "options": {
                              "text": "Who are we shopping for?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-pets-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-pets-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-pet-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[28px] sm:min-h-[220px] bg-[#FFEADF] p-5 transition-transform duration-300 hover:-translate-y-1.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pet-1-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#FF7A3D] opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-pet-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDog",
                              "size": 56,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute bottom-5 right-5 flex text-white transition-transform duration-500 group-hover:-rotate-12"
                              }
                            }
                          },
                          {
                            "id": "ps-pet-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pet-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Dogs",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/dogs",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center gap-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#FF7A3D] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-2xl text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-pet-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Food, treats, beds, leashes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[11rem] text-sm text-[#6B6F86]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ps-pet-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[28px] sm:min-h-[220px] bg-[#DFF5EC] p-5 transition-transform duration-300 hover:-translate-y-1.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pet-2-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#3DBB94] opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-pet-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCat",
                              "size": 56,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute bottom-5 right-5 flex text-white transition-transform duration-500 group-hover:-rotate-12"
                              }
                            }
                          },
                          {
                            "id": "ps-pet-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pet-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Cats",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/cats",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center gap-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#3DBB94] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-2xl text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-pet-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Food, litter, scratchers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[11rem] text-sm text-[#6B6F86]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ps-pet-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[28px] sm:min-h-[220px] bg-[#FFF6D6] p-5 transition-transform duration-300 hover:-translate-y-1.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pet-3-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#E6A800] opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-pet-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconFeather",
                              "size": 56,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute bottom-5 right-5 flex text-white transition-transform duration-500 group-hover:-rotate-12"
                              }
                            }
                          },
                          {
                            "id": "ps-pet-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pet-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Birds",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/birds",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center gap-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#E6A800] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-2xl text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-pet-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Seed mixes, cages, perches",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[11rem] text-sm text-[#6B6F86]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ps-pet-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[28px] sm:min-h-[220px] bg-[#E2F2FC] p-5 transition-transform duration-300 hover:-translate-y-1.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pet-4-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#3FA4E8] opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-pet-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconFish",
                              "size": 56,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute bottom-5 right-5 flex text-white transition-transform duration-500 group-hover:-rotate-12"
                              }
                            }
                          },
                          {
                            "id": "ps-pet-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pet-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Fish",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/fish",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center gap-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#3FA4E8] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-2xl text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-pet-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Flakes, tanks, filters",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[11rem] text-sm text-[#6B6F86]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ps-pet-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[28px] sm:min-h-[220px] bg-[#EFE9FD] p-5 transition-transform duration-300 hover:-translate-y-1.5 col-span-2 lg:col-span-1"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pet-5-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#9B7FEA] opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-pet-5-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCarrot",
                              "size": 56,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute bottom-5 right-5 flex text-white transition-transform duration-500 group-hover:-rotate-12"
                              }
                            }
                          },
                          {
                            "id": "ps-pet-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pet-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "Small pets",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/small-pets",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center gap-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#9B7FEA] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-2xl text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-pet-5-p",
                                "type": "text",
                                "options": {
                                  "text": "Rabbits, hamsters, guinea pigs",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[11rem] text-sm text-[#6B6F86]"
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
            "id": "ps-finder",
            "type": "section",
            "options": {
              "anchor": "food-finder"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-finder-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-finder-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 gap-10 overflow-hidden rounded-[36px] bg-[#2B4BD8] p-7 sm:p-10 lg:grid-cols-12 lg:p-14"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-finder-trail",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-0 bottom-4 h-6 opacity-40 bg-[radial-gradient(ellipse_5px_4px_at_14px_19px,#FFFFFF33_96%,transparent_100%),radial-gradient(circle_2px_at_9px_13px,#FFFFFF33_96%,transparent_100%),radial-gradient(circle_2px_at_14px_11px,#FFFFFF33_96%,transparent_100%),radial-gradient(circle_2px_at_19px_13px,#FFFFFF33_96%,transparent_100%),radial-gradient(ellipse_5px_4px_at_50px_13px,#FFFFFF33_96%,transparent_100%),radial-gradient(circle_2px_at_45px_7px,#FFFFFF33_96%,transparent_100%),radial-gradient(circle_2px_at_50px_5px,#FFFFFF33_96%,transparent_100%),radial-gradient(circle_2px_at_55px_7px,#FFFFFF33_96%,transparent_100%)] bg-[length:72px_24px] bg-repeat-x"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ps-finder-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-5 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-finder-head",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-finder-head-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex max-w-2xl flex-col gap-2.5 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-head-k",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ps-finder-k-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconPaw",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD23F] text-[#1D2140]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ps-finder-label",
                                        "type": "text",
                                        "options": {
                                          "text": "Food finder",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FFD23F]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "ps-finder-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "The right bowl for your pet.",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Tell us about them and we’ll match the food our vets recommend, with the daily portion worked out.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-base text-white/70"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-finder-bowl",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDogBowl",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden text-[#FFD23F] lg:flex"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-finder-form",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-5 rounded-[28px] bg-white p-6 sm:p-8 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-finder-q1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "ps-finder-q1-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "1",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#E7ECFD] font-body text-xs font-bold text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "My pet is a",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-finder-q1-opts",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q1-o1",
                                    "type": "text",
                                    "options": {
                                      "text": "Dog",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FF7A3D] text-white shadow-[0_3px_0_#E8601F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q1-o2",
                                    "type": "text",
                                    "options": {
                                      "text": "Cat",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-finder-q2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-finder-q2-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "2",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#E7ECFD] font-body text-xs font-bold text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Age",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-finder-q2-opts",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q2-o1",
                                    "type": "text",
                                    "options": {
                                      "text": "Puppy / kitten",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q2-o2",
                                    "type": "text",
                                    "options": {
                                      "text": "Adult",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FF7A3D] text-white shadow-[0_3px_0_#E8601F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q2-o3",
                                    "type": "text",
                                    "options": {
                                      "text": "Senior",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-finder-q3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-finder-q3-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "3",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#E7ECFD] font-body text-xs font-bold text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Size",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-finder-q3-opts",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q3-o1",
                                    "type": "text",
                                    "options": {
                                      "text": "Small",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q3-o2",
                                    "type": "text",
                                    "options": {
                                      "text": "Medium",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FF7A3D] text-white shadow-[0_3px_0_#E8601F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q3-o3",
                                    "type": "text",
                                    "options": {
                                      "text": "Large",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-finder-q4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-finder-q4-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q4-n",
                                    "type": "text",
                                    "options": {
                                      "text": "4",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#E7ECFD] font-body text-xs font-bold text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Special needs",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-finder-q4-opts",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-q4-o1",
                                    "type": "text",
                                    "options": {
                                      "text": "Sensitive tummy",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FF7A3D] text-white shadow-[0_3px_0_#E8601F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q4-o2",
                                    "type": "text",
                                    "options": {
                                      "text": "Weight control",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q4-o3",
                                    "type": "text",
                                    "options": {
                                      "text": "Skin & coat",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-q4-o4",
                                    "type": "text",
                                    "options": {
                                      "text": "None",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full px-4 py-2 font-body text-sm font-semibold bg-[#FFF9F1] text-[#1D2140] ring-2 ring-[#EEE8DE]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-finder-go",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-[#FFF6D6] p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-finder-go-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-finder-go-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Our match",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-finder-go-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Adult · medium · sensitive tummy",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-finder-btn",
                                "type": "button",
                                "options": {
                                  "text": "Show my food",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/dog-food",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2B4BD8] px-6 py-3.5 shadow-[0_6px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_#1E37A8]"
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
            "id": "ps-row-new",
            "type": "section",
            "options": {
              "anchor": "new"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-row-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-row-new-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-new-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-new-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-new-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#2B4BD8] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-new-label",
                                "type": "text",
                                "options": {
                                  "text": "Just in",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#2B4BD8]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-row-new-h",
                            "type": "heading",
                            "options": {
                              "text": "New arrivals",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-row-new-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh treats, toys and gear this week.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-row-new-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/new",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-row-new-slider",
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
                                  "new"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B4BD8] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1D2140] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-new-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-new-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-new-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-new-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-row-new-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-row-new-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-new-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-row-new-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-row-new-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-row-new-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-new-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-new-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
            "id": "ps-brands",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-brands-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-brands-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-brands-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-brands-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-brands-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#3DBB94] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-brands-label",
                                "type": "text",
                                "options": {
                                  "text": "Trusted brands",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#3DBB94]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-brands-h",
                            "type": "heading",
                            "options": {
                              "text": "Brands vets recommend",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-brands-sub",
                            "type": "text",
                            "options": {
                              "text": "Genuine stock straight from the brands and their official importers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-brands-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-br-grid",
                    "type": "termsGrid",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "10",
                        "per_page": "10",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-2 rounded-[24px] bg-white p-5 text-center ring-2 ring-[#EEE8DE] transition-all hover:-translate-y-1 hover:ring-[#2B4BD8]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-br-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-2 rounded-[24px] bg-white p-5 text-center ring-2 ring-[#EEE8DE] transition-all hover:-translate-y-1 hover:ring-[#2B4BD8]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-br-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-16 w-full items-center justify-center overflow-hidden rounded-[16px] bg-[#FFF9F1] p-3"
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
                            "id": "ps-br-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                              }
                            }
                          },
                          {
                            "id": "ps-br-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " products",
                              "singularSuffix": " product",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold text-[#6B6F86]"
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
            "id": "ps-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-best-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FF7A3D] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Tail-wagging favourites",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Most loved this month",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The food, treats and toys pets keep coming back for.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-best-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-best-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
            "id": "ps-autoship",
            "type": "section",
            "options": {
              "anchor": "autoship"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-autoship-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "ps-autoship-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-autoship-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-autoship-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "ps-autoship-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-autoship-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconPaw",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#2B4BD8] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-autoship-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Autoship",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#2B4BD8]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-autoship-h",
                                "type": "heading",
                                "options": {
                                  "text": "Never run out of food again.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-autoship-sub",
                                "type": "text",
                                "options": {
                                  "text": "Pick the food and how often. We deliver on schedule and take 10% off every order. Skip, swap or cancel any time.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6B6F86]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ps-autoship-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-4 pb-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-autoship-btn",
                            "type": "button",
                            "options": {
                              "text": "Set up autoship",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconRepeat",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2B4BD8] px-6 py-3.5 shadow-[0_6px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_#1E37A8]"
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
                    "id": "ps-autoship-chart",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 rounded-[32px] bg-white p-6 ring-2 ring-[#EEE8DE] sm:p-8 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-autoship-chart-h",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-autoship-chart-t",
                            "type": "text",
                            "options": {
                              "text": "Bruno’s food, every 4 weeks",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-xl text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-autoship-chart-k",
                            "type": "text",
                            "options": {
                              "text": "Save 10%",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#DFF5EC] px-3 py-1 font-body text-xs font-bold text-[#3DBB94]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-autoship-bowls",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-4 gap-3 sm:gap-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-bowl-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-bowl-1-b",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-28 w-full items-end overflow-hidden rounded-b-[40px] rounded-t-[12px] bg-[#FFF9F1] ring-2 ring-[#EEE8DE]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-1-fill",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "w-full h-[90%] bg-[radial-gradient(circle_at_30%_30%,#C9874A_3px,transparent_3.5px),radial-gradient(circle_at_70%_60%,#B5733A_3px,transparent_3.5px)] bg-[length:14px_12px] bg-[#D89A5B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ps-bowl-1-tag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#2B4BD8] text-white px-2.5 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconTruckDelivery",
                                      "size": 12,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-bowl-1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Today",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-bold whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-bowl-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-bowl-2-b",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-28 w-full items-end overflow-hidden rounded-b-[40px] rounded-t-[12px] bg-[#FFF9F1] ring-2 ring-[#EEE8DE]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-2-fill",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "w-full h-[70%] bg-[radial-gradient(circle_at_30%_30%,#C9874A_3px,transparent_3.5px),radial-gradient(circle_at_70%_60%,#B5733A_3px,transparent_3.5px)] bg-[length:14px_12px] bg-[#D89A5B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ps-bowl-2-tag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#E7ECFD] text-[#2B4BD8] px-2.5 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconTruckDelivery",
                                      "size": 12,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-bowl-2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Week 4",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-bold whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-bowl-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-bowl-3-b",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-28 w-full items-end overflow-hidden rounded-b-[40px] rounded-t-[12px] bg-[#FFF9F1] ring-2 ring-[#EEE8DE]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-3-fill",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "w-full h-[50%] bg-[radial-gradient(circle_at_30%_30%,#C9874A_3px,transparent_3.5px),radial-gradient(circle_at_70%_60%,#B5733A_3px,transparent_3.5px)] bg-[length:14px_12px] bg-[#D89A5B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ps-bowl-3-tag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#E7ECFD] text-[#2B4BD8] px-2.5 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconTruckDelivery",
                                      "size": 12,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-bowl-3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Week 8",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-bold whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ps-bowl-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-bowl-4-b",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-28 w-full items-end overflow-hidden rounded-b-[40px] rounded-t-[12px] bg-[#FFF9F1] ring-2 ring-[#EEE8DE]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-4-fill",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "w-full h-[30%] bg-[radial-gradient(circle_at_30%_30%,#C9874A_3px,transparent_3.5px),radial-gradient(circle_at_70%_60%,#B5733A_3px,transparent_3.5px)] bg-[length:14px_12px] bg-[#D89A5B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ps-bowl-4-tag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#E7ECFD] text-[#2B4BD8] px-2.5 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-bowl-4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconTruckDelivery",
                                      "size": 12,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-bowl-4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Week 12",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-bold whitespace-nowrap"
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
                        "id": "ps-autoship-note",
                        "type": "text",
                        "options": {
                          "text": "Bowls show how the bag empties between deliveries: the next bag arrives before the last one runs out.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-sm text-[#6B6F86]"
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
            "id": "ps-row-dog-food",
            "type": "section",
            "options": {
              "anchor": "dog-food"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-row-dog-food-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-row-dog-food-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-dog-food-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-dog-food-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-dog-food-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FF7A3D] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-dog-food-label",
                                "type": "text",
                                "options": {
                                  "text": "For the good boys & girls",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-row-dog-food-h",
                            "type": "heading",
                            "options": {
                              "text": "Dog food & treats",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-row-dog-food-sub",
                            "type": "text",
                            "options": {
                              "text": "Dry, wet and grain-free food, chews and training treats.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-row-dog-food-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/dog-food",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-row-dog-food-slider",
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
                                  "dog-food"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B4BD8] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1D2140] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-dog-food-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-dog-food-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-dog-food-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-dog-food-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-row-dog-food-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-row-dog-food-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-dog-food-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-row-dog-food-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-row-dog-food-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-row-dog-food-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-dog-food-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-dog-food-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
            "id": "ps-care",
            "type": "section",
            "options": {
              "anchor": "vet-care"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#1D2140] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-care-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-care-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-care-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-care-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-care-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD23F] text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-care-label",
                                "type": "text",
                                "options": {
                                  "text": "Health & care",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FFD23F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-care-h",
                            "type": "heading",
                            "options": {
                              "text": "More than a pet shop.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-white"
                              }
                            }
                          },
                          {
                            "id": "ps-care-sub",
                            "type": "text",
                            "options": {
                              "text": "Care for when they’re poorly, itchy or just a bit scruffy.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-white/70"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ps-care-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-care-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-4 overflow-hidden rounded-[28px] bg-[#DFF5EC] p-6 sm:p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-care-1-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#3DBB94]/25 transition-transform duration-500 group-hover:scale-125"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-care-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconStethoscope",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#3DBB94] text-white"
                              }
                            }
                          },
                          {
                            "id": "ps-care-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Vet on call",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] relative text-2xl text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-care-1-p",
                            "type": "text",
                            "options": {
                              "text": "Free video chat with a vet, 9 am to 9 pm, with any order.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-base text-[#6B6F86]"
                              }
                            }
                          },
                          {
                            "id": "ps-care-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Talk to a vet",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#faq",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#3DBB94] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#1D2140] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-care-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-4 overflow-hidden rounded-[28px] bg-[#FFEADF] p-6 sm:p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-care-2-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#FF7A3D]/25 transition-transform duration-500 group-hover:scale-125"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-care-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPill",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#FF7A3D] text-white"
                              }
                            }
                          },
                          {
                            "id": "ps-care-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Pet pharmacy",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] relative text-2xl text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-care-2-p",
                            "type": "text",
                            "options": {
                              "text": "Dewormers, flea & tick, vitamins and prescription food.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-base text-[#6B6F86]"
                              }
                            }
                          },
                          {
                            "id": "ps-care-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop pharmacy",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/pharmacy",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#FF7A3D] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#1D2140] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-care-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-4 overflow-hidden rounded-[28px] bg-[#EFE9FD] p-6 sm:p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-care-3-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#9B7FEA]/25 transition-transform duration-500 group-hover:scale-125"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ps-care-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconScissors",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#9B7FEA] text-white"
                              }
                            }
                          },
                          {
                            "id": "ps-care-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Grooming at home",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] relative text-2xl text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-care-3-p",
                            "type": "text",
                            "options": {
                              "text": "Bath, trim and nail clipping by groomers who come to you.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-base text-[#6B6F86]"
                              }
                            }
                          },
                          {
                            "id": "ps-care-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Book grooming",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/grooming",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#9B7FEA] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#1D2140] whitespace-nowrap"
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
            "id": "ps-row-cat-food",
            "type": "section",
            "options": {
              "anchor": "cat-food"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-row-cat-food-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-row-cat-food-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-cat-food-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-cat-food-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-cat-food-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#3DBB94] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-cat-food-label",
                                "type": "text",
                                "options": {
                                  "text": "For the purr-fectionists",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#3DBB94]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-row-cat-food-h",
                            "type": "heading",
                            "options": {
                              "text": "Cat food & litter",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-row-cat-food-sub",
                            "type": "text",
                            "options": {
                              "text": "Kibble, wet pouches, litter and scratchers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-row-cat-food-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/cat-food",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-row-cat-food-slider",
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
                                  "cat-food"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B4BD8] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1D2140] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-cat-food-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-cat-food-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-cat-food-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-cat-food-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-row-cat-food-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-row-cat-food-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-cat-food-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-row-cat-food-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-row-cat-food-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-row-cat-food-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-cat-food-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-cat-food-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
            "id": "ps-row-toys",
            "type": "section",
            "options": {
              "anchor": "toys"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-row-toys-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-row-toys-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-toys-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-toys-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-toys-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#2B4BD8] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-toys-label",
                                "type": "text",
                                "options": {
                                  "text": "Play time",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#2B4BD8]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-row-toys-h",
                            "type": "heading",
                            "options": {
                              "text": "Toys, beds & accessories",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-row-toys-sub",
                            "type": "text",
                            "options": {
                              "text": "Balls, ropes, feathers, cosy beds, collars and carriers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-row-toys-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/toys",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-row-toys-slider",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B4BD8] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1D2140] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-row-toys-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-row-toys-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-toys-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-toys-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-row-toys-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-row-toys-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-row-toys-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-row-toys-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-row-toys-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-row-toys-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-row-toys-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-row-toys-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
            "id": "ps-adopt",
            "type": "section",
            "options": {
              "anchor": "adopt"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-adopt-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-adopt-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[36px] bg-[#FF7A3D] p-8 sm:p-12 lg:grid-cols-12 lg:p-14"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-adopt-paw-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-8 right-10 hidden h-40 w-40 rotate-12 opacity-20 lg:block bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ps-adopt-paw-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute right-56 top-6 hidden h-20 w-20 -rotate-12 opacity-20 lg:block bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ps-adopt-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-adopt-k",
                            "type": "text",
                            "options": {
                              "text": "Adopt, don’t shop",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FFF6D6]"
                              }
                            }
                          },
                          {
                            "id": "ps-adopt-h",
                            "type": "heading",
                            "options": {
                              "text": "Every order helps a street dog or cat.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-4xl leading-[1.05] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "ps-adopt-p",
                            "type": "text",
                            "options": {
                              "text": "1% of every order goes to our partner shelters for food, vaccines and neutering. Thinking of a new friend? Meet the pets waiting for a home.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/85"
                              }
                            }
                          },
                          {
                            "id": "ps-adopt-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-4 pb-1.5 pt-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-adopt-btn",
                                "type": "button",
                                "options": {
                                  "text": "Meet the shelters",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/blog",
                                  "target": "",
                                  "icon": "IconHeartHandshake",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 shadow-[0_6px_0_#E8601F] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_#E8601F]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#FF7A3D]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1D2140] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ps-adopt-stats",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative grid grid-cols-2 gap-3 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-adopt-stat-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[22px] bg-white/15 p-5 ring-1 ring-white/25"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-adopt-stat-1-v",
                                "type": "text",
                                "options": {
                                  "text": "3,200+",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-adopt-stat-1-k",
                                "type": "text",
                                "options": {
                                  "text": "Meals donated this year",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/80 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-adopt-stat-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[22px] bg-white/15 p-5 ring-1 ring-white/25"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-adopt-stat-2-v",
                                "type": "text",
                                "options": {
                                  "text": "410",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-adopt-stat-2-k",
                                "type": "text",
                                "options": {
                                  "text": "Vaccines funded",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/80 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-adopt-stat-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[22px] bg-white/15 p-5 ring-1 ring-white/25"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-adopt-stat-3-v",
                                "type": "text",
                                "options": {
                                  "text": "86",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-adopt-stat-3-k",
                                "type": "text",
                                "options": {
                                  "text": "Pets rehomed",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/80 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-adopt-stat-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[22px] bg-white/15 p-5 ring-1 ring-white/25"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-adopt-stat-4-v",
                                "type": "text",
                                "options": {
                                  "text": "6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-adopt-stat-4-k",
                                "type": "text",
                                "options": {
                                  "text": "Partner shelters",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/80 sm:text-sm"
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
            "id": "ps-reviews",
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
                "id": "ps-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-reviews-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FF7A3D] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Happy humans",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Approved by the pets",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 25,000+ pet parents.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ps-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B4BD8] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1D2140] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#1D2140]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#2B4BD8]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF9F1] p-7 ring-2 ring-[#EEE8DE]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFD23F]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Autoship means Bruno’s food just turns up every month. One less thing to remember, and 10% cheaper.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#1D2140]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-full bg-[#FF7A3D] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rakib & Bruno",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Labrador, 4 years",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#FF7A3D]"
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
                        "id": "ps-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF9F1] p-7 ring-2 ring-[#EEE8DE]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFD23F]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“The food finder picked a sensitive-tummy food and her upset stomach settled in a week.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#1D2140]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-full bg-[#3DBB94] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tania & Mishti",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Persian cat, 2 years",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#3DBB94]"
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
                        "id": "ps-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF9F1] p-7 ring-2 ring-[#EEE8DE]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFD23F]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Rescued Tiger from the street. The vet chat helped me with deworming and his first vaccines.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#1D2140]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-full bg-[#2B4BD8] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Arif & Tiger",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Deshi dog, 6 years",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B4BD8]"
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
                        "id": "ps-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF9F1] p-7 ring-2 ring-[#EEE8DE]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFD23F]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Finally a shop with proper bird food and toys. Kiwi destroys a perch a month, happily.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#1D2140]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-full bg-[#E6A800] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusrat & Kiwi",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Budgie, 1 year",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#E6A800]"
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
                        "id": "ps-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF9F1] p-7 ring-2 ring-[#EEE8DE]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFD23F]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Got the whole tank set-up delivered with a guide. The fish are thriving.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#1D2140]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-full bg-[#3FA4E8] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mehedi & Nemo",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Goldfish & guppies",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#3FA4E8]"
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
                        "id": "ps-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#FFF9F1] p-7 ring-2 ring-[#EEE8DE]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFD23F]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Hay, pellets and a big cage, all in one order. Coco approves. Delivery was same day.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#1D2140]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#EEE8DE] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-full bg-[#9B7FEA] bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#FFFFFF_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#FFFFFF_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#FFFFFF_10%,transparent_11%)]"
                                  }
                                }
                              },
                              {
                                "id": "ps-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sadia & Coco",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1D2140]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Rabbit, 3 years",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#9B7FEA]"
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
            "id": "ps-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ps-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ps-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-journal-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#3DBB94] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ps-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "Pet care tips",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#3DBB94]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "From our vets & trainers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E7ECFD] px-4 py-2 transition-colors hover:bg-[#2B4BD8]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2B4BD8] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B4BD8] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-journal-grid",
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
                        "id": "ps-journal-loop",
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
                            "id": "ps-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[28px] bg-[#E7ECFD]"
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
                            "id": "ps-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "ps-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-extrabold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                  }
                                }
                              },
                              {
                                "id": "ps-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6B6F86]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#2B4BD8]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#FF7A3D] transition-transform group-hover/rm:translate-x-1"
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
            "id": "ps-faq",
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
                "id": "ps-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "ps-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "ps-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-faq-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconPaw",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FF7A3D] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.01em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#1D2140]"
                                  }
                                }
                              },
                              {
                                "id": "ps-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Food, autoship, vets, delivery and swaps.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6B6F86]"
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
                    "id": "ps-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Is the food genuine and fresh?",
                          "classes": ""
                        },
                        {
                          "label": "How does autoship work?",
                          "classes": ""
                        },
                        {
                          "label": "Can I talk to a vet?",
                          "classes": ""
                        },
                        {
                          "label": "How fast is delivery?",
                          "classes": ""
                        },
                        {
                          "label": "What if my pet doesn’t like the food?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[22px] bg-[#FFF9F1] px-6 py-5 font-body text-base font-bold text-[#1D2140] ring-2 ring-[#EEE8DE] transition-colors hover:bg-[#E7ECFD]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#2B4BD8] !text-white !ring-[#2B4BD8]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#FF7A3D]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. We buy from the brands and their official importers only, store food away from heat and print the expiry on every listing.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Choose a product and a schedule (every 2, 4 or 6 weeks). We deliver automatically with 10% off; skip, change or cancel from your account any time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Every order includes a free video chat with our partner vets, 9 am to 9 pm. For emergencies, please visit a clinic straight away.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Same day inside Dhaka for orders before 2 pm, next day in most cities and 2-4 days nationwide, with cash on delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Opened bags of food under 2 kg can be swapped once for a different recipe. Tell us within 14 days of delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B6F86]"
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
            "id": "ps-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Everything for every pet",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Food, treats, toys, litter, medicine and gear for dogs, cats, birds, fish and small pets.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
                        "id": "ps-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-shop-promise",
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
                "id": "ps-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Genuine brands",
                          "description": "From official importers",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Autoship & save",
                          "description": "10% off every delivery",
                          "icon": "IconRepeat",
                          "iconSize": ""
                        },
                        {
                          "title": "Free vet chat",
                          "description": "With every order",
                          "icon": "IconStethoscope",
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
                        "classes": "font-heading text-lg font-extrabold text-[#1D2140]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#E7ECFD] text-[#2B4BD8]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-shop-promise-fb-ic",
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
                        "id": "ps-shop-promise-fb-t",
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
                        "id": "ps-shop-promise-fb-d",
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
            "id": "ps-pd",
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
                "id": "ps-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-pd-grid",
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
                        "id": "ps-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FFEADF] via-white to-[#FFF9F1] p-4 shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1D2140]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1D2140]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#2B4BD8]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pd-cats",
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
                                "classes": "rounded-full bg-[#FFEADF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF7A3D] hover:bg-[#FF7A3D] hover:text-white"
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
                            "id": "ps-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#1D2140] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "ps-pd-rate",
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
                                "classes": "font-heading font-bold text-[#1D2140]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "ps-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#2B4BD8] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "ps-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6F86]"
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
                            "id": "ps-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#1D2140]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#1D2140] transition-colors hover:border-[#FF7A3D] hover:bg-[#FFEADF]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#FF7A3D] !bg-[#FFEADF] !text-[#E8601F]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "ps-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock · back soon",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#2B4BD8]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#FF7A3D]"
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
                            "id": "ps-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1D2140]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF9F1]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF9F1]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#2B4BD8] px-8 text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#1E37A8]"
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
                            "id": "ps-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Autoship & save",
                                  "description": "10% off",
                                  "icon": "IconRepeat",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Genuine brand",
                                  "description": "Official importer",
                                  "icon": "IconShieldCheck",
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
                                "classes": "font-heading text-base font-bold text-[#1D2140]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFEADF] text-[#FF7A3D]"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-perks-ic",
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
                                "id": "ps-pd-perks-t",
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
                                "id": "ps-pd-perks-d",
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
                            "id": "ps-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-sku",
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
                                    "classes": "font-semibold text-[#1D2140]"
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
                                "id": "ps-pd-brands",
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
                                    "classes": "font-semibold text-[#1D2140]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#2B4BD8]"
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
                                "id": "ps-pd-tags",
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
                                    "classes": "font-semibold text-[#1D2140]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#2B4BD8]"
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
            "id": "ps-pd-tabs-sec",
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
                "id": "ps-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,33,64,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Feeding guide",
                              "icon": "IconDogBowl"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF9F1] px-5 py-2.5 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1D2140] !text-white shadow-md"
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
                            "id": "ps-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1D2140] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1D2140] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#2B4BD8] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD23F] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconDogBowl",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Life stage, breed size and ingredients are listed in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Feed by your pet’s weight: see the daily portion table on the pack",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Switch foods gradually over 7 days to avoid upset tummies",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Always keep fresh water out, and ask our vets if you’re unsure",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#FF7A3D]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Same day inside Dhaka for orders before 2 pm",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Next day in most cities, 2-4 days nationwide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free delivery on orders over ৳1,500",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Opened food bags under 2 kg can be swapped once",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#FF7A3D]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ps-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FFF9F1] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FFF9F1] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ps-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E7ECFD]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ps-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#1D2140]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ps-pd-reviews-rate",
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
                                        "id": "ps-pd-reviews-co",
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
                                    "id": "ps-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "Did your pet love it? Tell other pet parents.",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,33,64,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-heading text-sm font-bold text-[#1D2140]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF9F1] px-4 py-3 text-sm text-[#1D2140] placeholder:text-gray-400 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#2B4BD8] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1E37A8] disabled:opacity-50"
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
            "id": "ps-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-16"
              }
            },
            "children": [
              {
                "id": "ps-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Pets also love",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E7ECFD] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#2B4BD8]"
                          }
                        }
                      },
                      {
                        "id": "ps-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D2140]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
            "id": "ps-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Shop by pet",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Dogs, cats, birds, fish and small pets: food, treats, toys, care and gear.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FFEADF] transition-transform group-hover:rotate-6"
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
                            "id": "ps-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                              }
                            }
                          },
                          {
                            "id": "ps-cat-grid-count",
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
                        "id": "ps-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ps-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF7A3D] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
                        "id": "ps-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group products by need: puppy, senior, grain-free, sensitive tummy, new arrivals and deals.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2B4BD8]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2B4BD8]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1D2140] group-hover:text-[#2B4BD8]"
                              }
                            }
                          },
                          {
                            "id": "ps-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FFF9F1] px-2 py-0.5 text-[10px] font-bold text-[#6B6F86]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ps-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ps-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF7A3D] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
                        "id": "ps-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Trusted brands",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Brand",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Genuine stock from the brands vets recommend.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FFF9F1] p-3"
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
                            "id": "ps-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1D2140] group-hover:text-[#2B4BD8]"
                              }
                            }
                          },
                          {
                            "id": "ps-brand-grid-count",
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
                        "id": "ps-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ps-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF7A3D] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
                        "id": "ps-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Pet care tips",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "From Our Vets & Trainers",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Feeding, training, grooming, health and adoption stories.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF9F1]"
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
                            "id": "ps-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "ps-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                  }
                                }
                              },
                              {
                                "id": "ps-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#2B4BD8]"
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
                        "id": "ps-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:border-[#2B4BD8] hover:text-[#2B4BD8]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2B4BD8] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ps-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9F1] via-white to-[#FFF9F1] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ps-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-post-k",
                    "type": "text",
                    "options": {
                      "text": "Pet care tips",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFEADF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6B6F86]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-post-author",
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
                            "classes": "font-heading font-bold text-[#1D2140]"
                          }
                        }
                      },
                      {
                        "id": "ps-post-dot",
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
                        "id": "ps-post-date",
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
                    "id": "ps-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
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
            "id": "ps-post-body",
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
                "id": "ps-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1D2140] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1D2140] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#2B4BD8] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD23F] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-16"
              }
            },
            "children": [
              {
                "id": "ps-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1D2140]"
                      }
                    }
                  },
                  {
                    "id": "ps-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FFF9F1] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#FFF9F1] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E7ECFD]"
                              }
                            }
                          },
                          {
                            "id": "ps-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1D2140]"
                              }
                            }
                          },
                          {
                            "id": "ps-post-cmt-co",
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
                        "id": "ps-post-cmt-form",
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
                            "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,33,64,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#1D2140]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF9F1] px-4 py-3 text-sm text-[#1D2140] placeholder:text-gray-400 focus:border-[#FF7A3D] focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#2B4BD8] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1E37A8] disabled:opacity-50"
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
            "id": "ps-post-more",
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
                "id": "ps-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Pet Care Tips",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1D2140]"
                      }
                    }
                  },
                  {
                    "id": "ps-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,33,64,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF9F1]"
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
                            "id": "ps-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#FF7A3D]"
                                  }
                                }
                              },
                              {
                                "id": "ps-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
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
            "id": "ps-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF9F1] pb-14 pt-14 sm:pb-16 sm:pt-16 before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-48 before:w-48 before:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] before:bg-[#FFD23F]/40 before:content-[''] after:pointer-events-none after:absolute after:-bottom-12 after:-left-10 after:h-40 after:w-40 after:rounded-[46%_54%_52%_48%/54%_44%_56%_46%] after:bg-[#E7ECFD] after:content-['']"
              }
            },
            "children": [
              {
                "id": "ps-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ps-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A3D]"
                      }
                    }
                  },
                  {
                    "id": "ps-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D2140] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ps-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage autoship, and keep your pets’ details and addresses up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6F86] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ps-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-12"
              }
            },
            "children": [
              {
                "id": "ps-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#1D2140] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#FFD23F]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#2B4BD8]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#2B4BD8]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#2B4BD8]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "ps-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ps-acc-3",
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
                                "id": "ps-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,33,64,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2B4BD8] focus:outline-none focus:ring-2 focus:ring-[#2B4BD8]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2B4BD8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E37A8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4BD8]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "ps-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,33,64,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2B4BD8] focus:outline-none focus:ring-2 focus:ring-[#2B4BD8]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2B4BD8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E37A8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4BD8]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "ps-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "ps-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF9F1] px-5 py-2.5 font-heading text-sm font-semibold text-[#1D2140] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1D2140] !text-white shadow-md"
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
                                "id": "ps-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2B4BD8]/10 text-[#2B4BD8]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ps-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#2B4BD8] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ps-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2B4BD8]/10 text-[#2B4BD8]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ps-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#2B4BD8]/40 hover:bg-[#2B4BD8]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2B4BD8]/10 text-[#2B4BD8]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ps-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2B4BD8]/10 text-[#2B4BD8]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2B4BD8] focus:outline-none focus:ring-2 focus:ring-[#2B4BD8]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#2B4BD8] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E37A8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4BD8]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4BD8]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "ps-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9F1] via-white to-[#FFF9F1] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ps-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(29,33,64,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FFEADF] text-[#FF7A3D]"
                          }
                        }
                      },
                      {
                        "id": "ps-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E7ECFD] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#2B4BD8]"
                          }
                        }
                      },
                      {
                        "id": "ps-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! Tails Are Wagging",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D2140] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "ps-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re packing your order (with a treat inside). A confirmation is on its way, and you can follow it from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6B6F86] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "ps-ty-steps",
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
                              "text": "Your order is packed with a treat for your pet",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[28px] bg-[#FFF9F1] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#2B4BD8]"
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
                        "id": "ps-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2B4BD8] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#1E37A8] w-full sm:w-auto"
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
                            "id": "ps-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF7A3D] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#FF7A3D] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#FF7A3D] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#FF7A3D] whitespace-nowrap group-hover:text-white"
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
            "id": "ps-ty-promise",
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
                "id": "ps-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Genuine brands",
                          "description": "From official importers",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Autoship & save",
                          "description": "10% off every delivery",
                          "icon": "IconRepeat",
                          "iconSize": ""
                        },
                        {
                          "title": "Free vet chat",
                          "description": "With every order",
                          "icon": "IconStethoscope",
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
                        "classes": "font-heading text-lg font-extrabold text-[#1D2140]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[46%_54%_52%_48%/54%_44%_56%_46%] bg-[#E7ECFD] text-[#2B4BD8]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-ty-promise-fb-ic",
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
                        "id": "ps-ty-promise-fb-t",
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
                        "id": "ps-ty-promise-fb-d",
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
            "id": "ps-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9F1] via-white to-[#FFF9F1] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ps-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#2B4BD8] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "ps-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF9F1] text-[#1D2140]"
                      }
                    }
                  },
                  {
                    "id": "ps-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Ran Off Chasing a Ball",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#1D2140] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "ps-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this product may have sold out. Head back home and we’ll find something they’ll love.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6B6F86] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "ps-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2B4BD8] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(43,75,216,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#1E37A8] w-full sm:w-auto"
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
                        "id": "ps-nf-shop",
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
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF7A3D] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#FF7A3D] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#FF7A3D] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#FF7A3D] whitespace-nowrap group-hover:text-white"
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
            "id": "ps-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF9F1] py-16"
              }
            },
            "children": [
              {
                "id": "ps-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ps-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFD23F] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1D2140]"
                          }
                        }
                      },
                      {
                        "id": "ps-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D2140] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ps-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                      }
                    },
                    "children": [
                      {
                        "id": "ps-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-2 ring-[#EEE8DE] transition-all duration-300 hover:-translate-y-1 hover:ring-[#2B4BD8]/40 hover:shadow-[0_18px_0_-10px_#E7ECFD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ps-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FFF9F1] after:pointer-events-none after:absolute after:bottom-2 after:right-2 after:h-7 after:w-7 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[radial-gradient(ellipse_32%_26%_at_50%_66%,#2B4BD8_96%,transparent_100%),radial-gradient(circle_at_24%_40%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_40%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_60%_24%,#2B4BD8_10%,transparent_11%),radial-gradient(circle_at_76%_40%,#2B4BD8_10%,transparent_11%)]"
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
                                    "id": "ps-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-6 items-center gap-1 rounded-full bg-[#FF7A3D] px-2.5 py-1 font-body text-[11px] font-extrabold text-white shadow-[0_3px_0_#E8601F]"
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
                                "id": "ps-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ps-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFD23F]"
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
                                    "id": "ps-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1D2140] transition-colors group-hover:text-[#2B4BD8]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ps-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#6B6F86]"
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
                            "id": "ps-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ps-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6F86] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-extrabold text-[#1D2140]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2B4BD8]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2B4BD8] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ps-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B4BD8] text-white shadow-[0_4px_0_#1E37A8] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#1E37A8]"
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
