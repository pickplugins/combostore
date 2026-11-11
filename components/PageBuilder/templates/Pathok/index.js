/**
 * Template: Pathok Books.
 *
 * A modern-editorial bookshop: Bangla literature, world fiction, non-fiction,
 * children's books and academic / exam prep. Like the other complete
 * templates here it carries all sixteen page types - Header, Footer, Home,
 * Shop, Product, the six taxonomy archives, Blog Archive, Blog Single,
 * Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to pk-, palette remapped, copy rewritten). Home
 * is built fresh from the same block types. Book cards everywhere show the
 * cover at 2:3 with a shaded spine edge and a lift on hover, a round red
 * discount sticker, the title in Newsreader, one italic excerpt line (use
 * the excerpt for the author, e.g. "by Humayun Ahmed"), the price in Plex
 * Mono and an outlined Add button. It is plain data: edit freely.
 *
 * THE HERO
 *
 * A bookshelf: ten genre "spines" (buttons with vertical text via
 * `[writing-mode:vertical-rl] rotate-180`, inset shadows for the spine
 * bands) of different colours and heights stand on a wooden shelf; hovering
 * pulls a book up, the last one leans. Each links to /categories/<slug>.
 * The shelf scrolls sideways on phones. Beside it: headline, a title /
 * author / ISBN search (quickSearch) and two buttons.
 *
 * DESIGN
 *
 *   tomato  #D9432F  primary: links, stickers, rank numerals, promo bar   #B8341F hover  #FBE7E2 tint
 *   ink     #1C1A17  text, buttons, rules, strip, CTA                      #3A3631 hover  #ECE6DA tint
 *   green   #1F4D3A  book-of-the-month band     mustard #E3A93B  quote band, labels
 *   paper   #F6F1E7 / #EFE7D8    muted #6E6659    line #E2D9C8    shelf wood #8A5A34
 *
 * Fonts (template meta): Newsreader (headings, book titles, quotes, FAQ),
 * IBM Plex Sans (body), IBM Plex Mono via `font-['IBM_Plex_Mono']` for
 * metadata, prices and labels, Tiro Bangla for the Bangla spine.
 *
 * HOME
 *
 *   Bookshelf hero - mono info strip - Top 10 this week: a postGrid of the
 *   tag "bestseller" ranked 1-10 with CSS counters
 *   (`[counter-reset:rank]`, `[counter-increment:rank]`,
 *   `before:content-[counter(rank)]`) (#bestsellers) - book of the month
 *   with a cover (public/templates/pathok-book.svg) and metadata
 *   (#book-of-the-month) - new releases, Bangla literature rows - genres as
 *   ruled index cards (#genres) - fiction row - quote band - children's and
 *   academic rows - publishers (#publishers) - reader reviews - reading
 *   notes (#journal) - FAQ (#faq) - reading club CTA (#reading-club).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: fiction, bangla-sahitya, mystery-thriller, poetry,
 *     history, self-help, science, childrens, comics, academic, non-fiction.
 *     Tag slugs: bestseller, book-of-the-month, staff-picks, pre-order.
 *     Publishers are product_brand terms.
 *   - Book of the month ("The River Remembers" by A. Rahman, 384 pages,
 *     ৳650) and its cover art are placeholders: replace them with a real
 *     title and point the buttons at its product page.
 *   - The quote is attributed to Cicero (as is customary; the exact wording
 *     is a later paraphrase).
 *   - Contact details, promo code FIRSTREAD, the 10% offer, "50,000+ titles",
 *     the ৳800 free-delivery threshold, the reading-club reward and the six
 *     reviews are sample copy.
 */

var template = [
  {
    "name": "Pathok Books",
    "description": "Modern-editorial bookshop on paper cream with ink, library green, tomato red and mustard; Newsreader serif, IBM Plex Sans and Plex Mono: a bookshelf hero where genres are coloured book spines, a ranked Top 10 with big counter numerals, book of the month, new releases, Bangla literature, an index-card genre catalogue, a quote band, children and academic rows, publishers, reader reviews, reading notes, FAQ and a reading-club CTA. All 16 pages.",
    "thumbnail": "/templates/pathok.svg",
    "meta": {
      "fonts": [
        {
          "family": "Newsreader",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "IBM Plex Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "IBM Plex Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Tiro Bangla",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Tiro+Bangla&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Newsreader",
        "body": "IBM Plex Sans"
      },
      "colors": {
        "primary": "#D9432F",
        "secondary": "#1C1A17",
        "accent": "#E3A93B",
        "background": "#F6F1E7",
        "foreground": "#1C1A17",
        "muted": "#6E6659"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "pk-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#1C1A17] bg-[#F6F1E7]/95 backdrop-blur"
              }
            },
            "children": [
              {
                "id": "pk-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#D9432F] px-4 py-2 text-center font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.12em] text-white"
                  }
                },
                "children": [
                  {
                    "id": "pk-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery over ৳800 · 10% off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "pk-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "FIRSTREAD",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-2 py-0.5 font-['IBM_Plex_Mono'] text-[11px] font-medium text-[#D9432F]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pk-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Book of the month",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#book-of-the-month",
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
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase text-white underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "pk-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-20 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "P",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-9 text-2xl items-center justify-center rounded-[2px_7px_7px_2px] bg-[#D9432F] font-heading font-medium italic leading-none text-white shadow-[inset_4px_0_0_rgba(0,0,0,0.2)]"
                              }
                            }
                          },
                          {
                            "id": "pk-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "pathok.",
                                  "src": "https://placehold.co/200x64?text=Pathok",
                                  "altText": "Pathok Books",
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
                                    "classes": "font-heading text-[28px] font-medium italic tracking-tight text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Booksellers · Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pk-hdr-menu",
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
                            "classes": "flex items-center gap-6"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-sm font-medium text-[#1C1A17] transition-colors hover:text-[#D9432F]"
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
                            "id": "pk-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Bangla Sahitya",
                              "url": "/categories/bangla-sahitya"
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
                            "id": "pk-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Fiction",
                              "url": "/categories/fiction"
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
                            "id": "pk-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Non-fiction",
                              "url": "/categories/non-fiction"
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
                            "id": "pk-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Children",
                              "url": "/categories/childrens"
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
                            "id": "pk-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Academic",
                              "url": "/categories/academic"
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
                            "id": "pk-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Bestsellers",
                              "url": "/#bestsellers"
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
                            "id": "pk-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Pre-orders",
                              "url": "/tags/pre-order"
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
                        "id": "pk-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Title, author or ISBN",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-4 hidden max-w-xs flex-1 rounded-full border border-[#1C1A17] bg-white py-1 pl-1 pr-3 transition-all focus-within:ring-4 focus-within:ring-[#D9432F]/15 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1C1A17] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#6E6659]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#D9432F] focus:outline-none focus:ring-2 focus:ring-[#D9432F]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#D9432F]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#D9432F]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#D9432F] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#B8341F]"
                          }
                        }
                      },
                      {
                        "id": "pk-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F6F1E7] text-[#1C1A17] transition-colors hover:bg-[#FBE7E2] hover:text-[#D9432F]"
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
                            "id": "pk-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1C1A17] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#3A3631]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#D9432F] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F6F1E7] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#1C1A17]"
                              },
                              "title-icon": {
                                "classes": "text-[#D9432F]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#D9432F] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#D9432F] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B8341F]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9432F]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#D9432F] focus:outline-none focus:ring-2 focus:ring-[#D9432F]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#D9432F] px-4 py-2 text-sm font-medium text-[#D9432F] transition-colors hover:bg-[#D9432F] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#D9432F] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B8341F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9432F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "pk-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F6F1E7] text-[#1C1A17]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F6F1E7] p-2 text-[#1C1A17] transition-colors hover:bg-[#D9432F] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "P",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-8 text-xl items-center justify-center rounded-[2px_7px_7px_2px] bg-[#D9432F] font-heading font-medium italic leading-none text-white shadow-[inset_4px_0_0_rgba(0,0,0,0.2)]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pk-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "pathok.",
                                          "src": "https://placehold.co/200x64?text=Pathok",
                                          "altText": "Pathok Books",
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
                                            "classes": "font-heading text-[28px] font-medium italic tracking-tight text-[#1C1A17]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "pk-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Booksellers · Dhaka",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#1C1A17]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "pk-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search books...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F6F1E7] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#1C1A17] focus-within:ring-2 focus-within:ring-[#1C1A17]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1C1A17] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6E6659]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#D9432F] focus:outline-none focus:ring-2 focus:ring-[#D9432F]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#D9432F]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#D9432F]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#D9432F] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#B8341F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#1C1A17] transition-colors hover:text-[#D9432F]"
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
                                    "id": "pk-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bangla Sahitya",
                                      "url": "/categories/bangla-sahitya"
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
                                    "id": "pk-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Fiction",
                                      "url": "/categories/fiction"
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
                                    "id": "pk-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Non-fiction",
                                      "url": "/categories/non-fiction"
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
                                    "id": "pk-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Children",
                                      "url": "/categories/childrens"
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
                                    "id": "pk-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Academic",
                                      "url": "/categories/academic"
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
                                    "id": "pk-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bestsellers",
                                      "url": "/#bestsellers"
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
                                    "id": "pk-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Pre-orders",
                                      "url": "/tags/pre-order"
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
            "id": "pk-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1C1A17] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "pk-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "pk-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl bg-[#E3A93B] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The Reading Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          },
                          {
                            "id": "pk-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "A free book for every ten you buy",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-medium tracking-tight text-[#1C1A17] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "pk-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Reading points, early access to signed editions and monthly staff picks.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-[#1C1A17]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Join free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconBookmark",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1C1A17] px-6 py-3.5 transition-colors hover:bg-[#D9432F]"
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
                "id": "pk-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "pk-ftr-grid",
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
                        "id": "pk-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "P",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-8 text-xl items-center justify-center rounded-[2px_7px_7px_2px] bg-[#D9432F] font-heading font-medium italic leading-none text-white shadow-[inset_4px_0_0_rgba(0,0,0,0.2)]"
                                  }
                                }
                              },
                              {
                                "id": "pk-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "pathok.",
                                      "src": "https://placehold.co/200x64?text=Pathok",
                                      "altText": "Pathok Books",
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
                                        "classes": "font-heading text-[28px] font-medium italic tracking-tight text-[#1C1A17]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "pk-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "An independent bookshop for Bangla literature, world fiction, children’s books and exam prep. Original books, carefully packed, delivered across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "pk-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9432F]"
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
                                "id": "pk-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9432F]"
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
                                "id": "pk-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9432F]"
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
                                "id": "pk-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9432F]"
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
                        "id": "pk-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shelves",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Bangla Sahitya",
                                  "icon": "",
                                  "slug": "/categories/bangla-sahitya"
                                },
                                {
                                  "text": "Fiction",
                                  "icon": "",
                                  "slug": "/categories/fiction"
                                },
                                {
                                  "text": "Non-fiction",
                                  "icon": "",
                                  "slug": "/categories/non-fiction"
                                },
                                {
                                  "text": "Children’s Books",
                                  "icon": "",
                                  "slug": "/categories/childrens"
                                },
                                {
                                  "text": "Academic & Exam Prep",
                                  "icon": "",
                                  "slug": "/categories/academic"
                                },
                                {
                                  "text": "All Genres",
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
                                "classes": "transition-colors hover:text-[#E3A93B]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E3A93B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-ftr-ll-care",
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
                                  "text": "Pre-orders",
                                  "icon": "",
                                  "slug": "/tags/pre-order"
                                },
                                {
                                  "text": "Delivery & Returns",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Reading Notes",
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
                                "classes": "transition-colors hover:text-[#E3A93B]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E3A93B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-ftr-contact-h",
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
                            "id": "pk-ftr-address",
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
                                "value": "Shop: every day, 10am - 9pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#E3A93B]"
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
                                "classes": "shrink-0 text-[#D9432F]"
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
                "id": "pk-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "pk-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Pathok Books. All rights reserved. Read more, read well.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "pk-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-wider"
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
            "id": "pk-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F6F1E7] pt-10 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "pk-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-end gap-10 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6 pb-4 lg:col-span-5 lg:pb-16"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-hero-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-hero-k",
                                "type": "text",
                                "options": {
                                  "text": "Est. 2026 · Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                                  }
                                }
                              },
                              {
                                "id": "pk-hero-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-1.5 rounded-full bg-[#D9432F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "pk-hero-k2",
                                "type": "text",
                                "options": {
                                  "text": "50,000+ titles",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Find the book you can’t put down.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-medium leading-[1.02] tracking-tight text-[#1C1A17] sm:text-6xl xl:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "pk-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Bangla literature, world fiction, children’s books and exam prep, all in one well-kept shop. Pick a spine from the shelf, or search below.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-lg leading-relaxed text-[#6E6659]"
                              }
                            }
                          },
                          {
                            "id": "pk-hero-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search by title, author or ISBN",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full rounded-full border border-[#1C1A17] bg-white py-1.5 pl-2 pr-4 transition-all focus-within:ring-4 focus-within:ring-[#D9432F]/15"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-2 font-body text-base text-[#1C1A17] placeholder:text-[#6E6659] focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#1C1A17] text-white"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#D9432F] focus:outline-none focus:ring-2 focus:ring-[#D9432F]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#D9432F]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#D9432F]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#D9432F] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#B8341F]"
                              }
                            }
                          },
                          {
                            "id": "pk-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Bestsellers",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#bestsellers",
                                  "target": "",
                                  "icon": "IconTrophy",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1C1A17] px-6 py-3.5 transition-colors hover:bg-[#D9432F]"
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
                                "id": "pk-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "New releases",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#new-releases",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1C1A17] px-6 py-3.5 transition-colors hover:bg-[#1C1A17]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-[#1C1A17] whitespace-nowrap group-hover:text-white"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pk-shelf-wrap",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-shelf-k",
                            "type": "text",
                            "options": {
                              "text": "Pick a genre ↓",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-3 block font-heading text-lg italic text-[#6E6659]"
                              }
                            }
                          },
                          {
                            "id": "pk-shelf",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end gap-1.5 overflow-x-auto px-2 pt-6 [scrollbar-width:none] sm:gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-spine-1",
                                "type": "button",
                                "options": {
                                  "text": "Fiction",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/fiction",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[300px] w-14 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#D9432F] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#FFFFFF]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-2",
                                "type": "button",
                                "options": {
                                  "text": "বাংলা সাহিত্য",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/bangla-sahitya",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[330px] w-16 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#1F4D3A] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-['Tiro_Bangla'] text-xl tracking-wide text-[#E3A93B]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-3",
                                "type": "button",
                                "options": {
                                  "text": "Mystery & Thriller",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/mystery-thriller",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[280px] w-12 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#23395B] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#FFFFFF]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-4",
                                "type": "button",
                                "options": {
                                  "text": "Poetry",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/poetry",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[250px] w-11 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#E3A93B] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-5",
                                "type": "button",
                                "options": {
                                  "text": "History",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/history",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[315px] w-14 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#A64B2A] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#FFFFFF]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-6",
                                "type": "button",
                                "options": {
                                  "text": "Self-Help",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/self-help",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[270px] w-12 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#E3A6A1] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-7",
                                "type": "button",
                                "options": {
                                  "text": "Science",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/science",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[300px] w-[3.25rem] shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#2C7A7B] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#FFFFFF]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-8",
                                "type": "button",
                                "options": {
                                  "text": "Children",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/childrens",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[230px] w-14 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#8FB3C9] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-9",
                                "type": "button",
                                "options": {
                                  "text": "Comics",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/comics",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[260px] w-11 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#6B2D5C] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 "
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#FFFFFF]"
                                  }
                                }
                              },
                              {
                                "id": "pk-spine-10",
                                "type": "button",
                                "options": {
                                  "text": "Academic",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/academic",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-[310px] w-14 shrink-0 cursor-pointer items-center justify-center rounded-t-[4px] bg-[#1C1A17] shadow-[inset_0_14px_0_rgba(255,255,255,0.14),inset_0_-22px_0_rgba(0,0,0,0.14),inset_-3px_0_0_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-4 origin-bottom-left rotate-[8deg] ml-3"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading text-lg font-medium tracking-wide text-[#E3A93B]"
                                  }
                                }
                              },
                              {
                                "id": "pk-bookend",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "ml-2 h-[150px] w-10 shrink-0 rounded-t-xl bg-[#EFE7D8] ring-1 ring-[#E2D9C8]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "pk-plant",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "ml-3 flex shrink-0 flex-col items-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-plant-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconPlant",
                                      "size": 56,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#1F4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-plant-pot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "-mt-1 h-12 w-14 rounded-b-xl bg-[#D9432F]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "pk-shelf-board",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-4 w-full rounded-sm bg-[#8A5A34] shadow-[0_10px_18px_-8px_rgba(28,26,23,0.6)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "pk-shelf-legs",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex justify-between px-8"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-shelf-leg-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-8 w-3 bg-[#8A5A34]/80"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "pk-shelf-leg-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-8 w-3 bg-[#8A5A34]/80"
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
            "id": "pk-strip",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full overflow-hidden bg-[#1C1A17] py-3.5"
              }
            },
            "children": [
              {
                "id": "pk-strip-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-max items-center gap-6 whitespace-nowrap px-4"
                  }
                },
                "children": [
                  {
                    "id": "pk-strip-0",
                    "type": "text",
                    "options": {
                      "text": "Free delivery over ৳800  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-1",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#E3A93B]"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-2",
                    "type": "text",
                    "options": {
                      "text": "50,000+ titles  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-3",
                    "type": "text",
                    "options": {
                      "text": "Free gift wrap  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-4",
                    "type": "text",
                    "options": {
                      "text": "Pre-order new releases  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#E3A93B]"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-5",
                    "type": "text",
                    "options": {
                      "text": "7-day easy return  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-6",
                    "type": "text",
                    "options": {
                      "text": "Free delivery over ৳800  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-7",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#E3A93B]"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-8",
                    "type": "text",
                    "options": {
                      "text": "50,000+ titles  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-9",
                    "type": "text",
                    "options": {
                      "text": "Free gift wrap  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-10",
                    "type": "text",
                    "options": {
                      "text": "Pre-order new releases  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#E3A93B]"
                      }
                    }
                  },
                  {
                    "id": "pk-strip-11",
                    "type": "text",
                    "options": {
                      "text": "7-day easy return  ✳",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-white/85"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-top",
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
                "id": "pk-top-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-top-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-top-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-top-label",
                            "type": "text",
                            "options": {
                              "text": "The chart · updated weekly",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-top-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-top-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-top-h",
                                "type": "heading",
                                "options": {
                                  "text": "Top 10 this week",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-top-sub",
                                "type": "text",
                                "options": {
                                  "text": "What Dhaka is reading right now.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-top-all",
                            "type": "button",
                            "options": {
                              "text": "Full bestseller list",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/bestseller",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-top-grid",
                    "type": "postGrid",
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
                        "classes": "[counter-reset:rank] grid grid-cols-2 gap-x-4 gap-y-10 pt-6 sm:grid-cols-3 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white [counter-increment:rank] before:pointer-events-none before:absolute before:-left-1 before:-top-7 before:z-[4] before:font-heading before:text-7xl before:font-medium before:italic before:leading-none before:text-[#D9432F] before:content-[counter(rank)] before:[text-shadow:3px_3px_0_#F6F1E7]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-top-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "[counter-reset:rank] grid grid-cols-2 gap-x-4 gap-y-10 pt-6 sm:grid-cols-3 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white [counter-increment:rank] before:pointer-events-none before:absolute before:-left-1 before:-top-7 before:z-[4] before:font-heading before:text-7xl before:font-medium before:italic before:leading-none before:text-[#D9432F] before:content-[counter(rank)] before:[text-shadow:3px_3px_0_#F6F1E7]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-top-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-top-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-top-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-top-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-top-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-top-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-top-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-top-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-top-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-top-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-top-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
            "id": "pk-botm",
            "type": "section",
            "options": {
              "anchor": "book-of-the-month"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1F4D3A] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "pk-botm-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "pk-botm-art",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex justify-center lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-botm-halo",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3A93B] opacity-20 blur-3xl"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pk-botm-img",
                        "type": "image",
                        "options": {
                          "src": "/templates/pathok-book.svg",
                          "altText": "Book of the month: a hardcover with a red and mustard abstract cover",
                          "link": "/tags/book-of-the-month",
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
                            "classes": "relative h-auto w-full max-w-[320px] rotate-[-4deg] drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-0"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pk-botm-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-botm-k-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-botm-k",
                            "type": "text",
                            "options": {
                              "text": "Book of the month",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#E3A93B] px-3 py-1 font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          },
                          {
                            "id": "pk-botm-k2",
                            "type": "text",
                            "options": {
                              "text": "Staff pick",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-botm-h",
                        "type": "heading",
                        "options": {
                          "text": "The River Remembers",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl"
                          }
                        }
                      },
                      {
                        "id": "pk-botm-by",
                        "type": "text",
                        "options": {
                          "text": "by A. Rahman",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-2xl italic text-white/80"
                          }
                        }
                      },
                      {
                        "id": "pk-botm-q",
                        "type": "text",
                        "options": {
                          "text": "“A quiet, sweeping novel about three generations of a family on the banks of the Padma. We could not stop passing it around the shop.”",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-lg leading-relaxed text-white/75"
                          }
                        }
                      },
                      {
                        "id": "pk-botm-meta",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-2 gap-4 sm:grid-cols-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-botm-m1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 border-l border-white/20 pl-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-botm-m1-k",
                                "type": "text",
                                "options": {
                                  "text": "Format",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/50"
                                  }
                                }
                              },
                              {
                                "id": "pk-botm-m1-v",
                                "type": "text",
                                "options": {
                                  "text": "Hardcover",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-botm-m2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 border-l border-white/20 pl-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-botm-m2-k",
                                "type": "text",
                                "options": {
                                  "text": "Pages",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/50"
                                  }
                                }
                              },
                              {
                                "id": "pk-botm-m2-v",
                                "type": "text",
                                "options": {
                                  "text": "384",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-botm-m3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 border-l border-white/20 pl-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-botm-m3-k",
                                "type": "text",
                                "options": {
                                  "text": "Language",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/50"
                                  }
                                }
                              },
                              {
                                "id": "pk-botm-m3-v",
                                "type": "text",
                                "options": {
                                  "text": "Bangla",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-botm-m4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 border-l border-white/20 pl-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-botm-m4-k",
                                "type": "text",
                                "options": {
                                  "text": "Price",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/50"
                                  }
                                }
                              },
                              {
                                "id": "pk-botm-m4-v",
                                "type": "text",
                                "options": {
                                  "text": "৳650",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg text-white"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pk-botm-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-botm-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Read more & buy",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/book-of-the-month",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E3A93B] px-6 py-3.5 transition-colors hover:bg-white"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#1C1A17]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#1C1A17] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "pk-botm-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Past picks",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/staff-picks",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 transition-colors hover:bg-white/10"
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
          },
          {
            "id": "pk-row-new-releases",
            "type": "section",
            "options": {
              "anchor": "new-releases"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-row-new-releases-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-row-new-releases-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-new-releases-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-new-releases-label",
                            "type": "text",
                            "options": {
                              "text": "Just in",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-row-new-releases-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-new-releases-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-new-releases-h",
                                "type": "heading",
                                "options": {
                                  "text": "New releases",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-new-releases-sub",
                                "type": "text",
                                "options": {
                                  "text": "Fresh off the press, plus pre-orders for what’s coming next.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-row-new-releases-all",
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
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-row-new-releases-slider",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#1C1A17] !bg-[#F6F1E7] !opacity-100 transition-colors hover:!bg-[#1C1A17] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1C1A17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-new-releases-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-new-releases-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-new-releases-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-new-releases-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-new-releases-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-row-new-releases-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-new-releases-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-row-new-releases-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-new-releases-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-row-new-releases-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-new-releases-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-new-releases-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
            "id": "pk-row-bangla",
            "type": "section",
            "options": {
              "anchor": "bangla"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-row-bangla-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-row-bangla-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-bangla-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-bangla-label",
                            "type": "text",
                            "options": {
                              "text": "বাংলা সাহিত্য",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-row-bangla-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-bangla-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-bangla-h",
                                "type": "heading",
                                "options": {
                                  "text": "Bangla literature",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-bangla-sub",
                                "type": "text",
                                "options": {
                                  "text": "Classics, contemporary novels, poetry and essays.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-row-bangla-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/bangla-sahitya",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-row-bangla-slider",
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
                                  "bangla-sahitya"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#1C1A17] !bg-[#F6F1E7] !opacity-100 transition-colors hover:!bg-[#1C1A17] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1C1A17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-bangla-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-bangla-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-bangla-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-bangla-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-bangla-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-row-bangla-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-bangla-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-row-bangla-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-bangla-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-row-bangla-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-bangla-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-bangla-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
            "id": "pk-genres",
            "type": "section",
            "options": {
              "anchor": "genres"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-genres-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-genres-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-genres-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-genres-label",
                            "type": "text",
                            "options": {
                              "text": "Card catalogue",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-genres-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-genres-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-genres-h",
                                "type": "heading",
                                "options": {
                                  "text": "Browse by genre",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-genres-all",
                            "type": "button",
                            "options": {
                              "text": "All genres",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-genres-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex items-center gap-4 rounded-lg border border-[#E2D9C8] border-t-4 border-t-[#D9432F] bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_26px_-18px_rgba(28,26,23,0.5)] bg-[linear-gradient(transparent_27px,#E2D9C8_28px)] bg-[length:100%_28px]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-genres-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex items-center gap-4 rounded-lg border border-[#E2D9C8] border-t-4 border-t-[#D9432F] bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_26px_-18px_rgba(28,26,23,0.5)] bg-[linear-gradient(transparent_27px,#E2D9C8_28px)] bg-[length:100%_28px]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-genres-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "h-16 w-12 shrink-0 overflow-hidden rounded-[2px_5px_5px_2px] bg-[#EFE7D8] shadow-md"
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
                            "id": "pk-genres-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-medium leading-tight text-[#1C1A17] group-hover:text-[#D9432F]"
                              }
                            }
                          },
                          {
                            "id": "pk-genres-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " books",
                              "singularSuffix": " book",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "ml-auto shrink-0 self-start font-['IBM_Plex_Mono'] text-[11px] text-[#6E6659]"
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
            "id": "pk-row-fiction",
            "type": "section",
            "options": {
              "anchor": "fiction"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-row-fiction-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-row-fiction-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-fiction-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-fiction-label",
                            "type": "text",
                            "options": {
                              "text": "World fiction",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-row-fiction-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-fiction-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-fiction-h",
                                "type": "heading",
                                "options": {
                                  "text": "Fiction in English",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-fiction-sub",
                                "type": "text",
                                "options": {
                                  "text": "Literary fiction, translated classics and book-club favourites.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-row-fiction-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/fiction",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-row-fiction-slider",
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
                                  "fiction"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#1C1A17] !bg-[#F6F1E7] !opacity-100 transition-colors hover:!bg-[#1C1A17] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1C1A17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-fiction-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-fiction-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-fiction-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-fiction-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-fiction-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-row-fiction-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-fiction-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-row-fiction-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-fiction-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-row-fiction-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-fiction-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-fiction-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
            "id": "pk-quote",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#E3A93B] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-quote-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-quote-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconQuote",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex text-[#1C1A17]"
                      }
                    }
                  },
                  {
                    "id": "pk-quote-t",
                    "type": "text",
                    "options": {
                      "text": "A room without books is like a body without a soul.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-4xl font-heading text-4xl font-medium italic leading-tight tracking-tight text-[#1C1A17] sm:text-6xl"
                      }
                    }
                  },
                  {
                    "id": "pk-quote-by",
                    "type": "text",
                    "options": {
                      "text": "Attributed to Cicero",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#1C1A17]/70"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-row-childrens",
            "type": "section",
            "options": {
              "anchor": "childrens"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-row-childrens-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-row-childrens-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-childrens-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-childrens-label",
                            "type": "text",
                            "options": {
                              "text": "Little readers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-row-childrens-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-childrens-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-childrens-h",
                                "type": "heading",
                                "options": {
                                  "text": "Children’s books",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-childrens-sub",
                                "type": "text",
                                "options": {
                                  "text": "Picture books, early readers and middle-grade adventures.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-row-childrens-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/childrens",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-row-childrens-slider",
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
                                  "childrens"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#1C1A17] !bg-[#F6F1E7] !opacity-100 transition-colors hover:!bg-[#1C1A17] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1C1A17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-childrens-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-childrens-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-childrens-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-childrens-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-childrens-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-row-childrens-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-childrens-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-row-childrens-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-childrens-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-row-childrens-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-childrens-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-childrens-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
            "id": "pk-row-academic",
            "type": "section",
            "options": {
              "anchor": "academic"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-row-academic-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-row-academic-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-academic-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-academic-label",
                            "type": "text",
                            "options": {
                              "text": "Study shelf",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-row-academic-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-academic-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-academic-h",
                                "type": "heading",
                                "options": {
                                  "text": "Academic & exam prep",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-academic-sub",
                                "type": "text",
                                "options": {
                                  "text": "Textbooks, admission guides, BCS and job-exam prep.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-row-academic-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/academic",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-row-academic-slider",
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
                                  "academic"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#1C1A17] !bg-[#F6F1E7] !opacity-100 transition-colors hover:!bg-[#1C1A17] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1C1A17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-row-academic-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-row-academic-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-academic-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-academic-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-academic-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-row-academic-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-row-academic-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-row-academic-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-row-academic-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-row-academic-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-row-academic-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-row-academic-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
            "id": "pk-pubsec",
            "type": "section",
            "options": {
              "anchor": "publishers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-pubsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-pubsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-pubsec-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-pubsec-label",
                            "type": "text",
                            "options": {
                              "text": "Imprints",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-pubsec-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-pubsec-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pubsec-h",
                                "type": "heading",
                                "options": {
                                  "text": "Publishers we stock",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-pubsec-sub",
                                "type": "text",
                                "options": {
                                  "text": "From the big houses to independent presses.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-pubsec-all",
                            "type": "button",
                            "options": {
                              "text": "All publishers",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/brands",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-pubs-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#1C1A17] !bg-[#F6F1E7] !opacity-100 transition-colors hover:!bg-[#1C1A17] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1C1A17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-lg border border-[#E2D9C8] bg-white p-4 text-center transition-colors hover:border-[#1C1A17]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-pubs-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-lg border border-[#E2D9C8] bg-white p-4 text-center transition-colors hover:border-[#1C1A17]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-pubs-slider-thumb",
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
                                "classes": "max-h-10 w-auto max-w-full object-contain grayscale transition-all group-hover:grayscale-0"
                              }
                            }
                          },
                          {
                            "id": "pk-pubs-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-medium text-[#1C1A17]"
                              }
                            }
                          },
                          {
                            "id": "pk-pubs-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " titles",
                              "singularSuffix": " title",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#6E6659]"
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
            "id": "pk-reviews",
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
                "id": "pk-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-reviews-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "Reader notes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-reviews-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-reviews-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-reviews-h",
                                "type": "heading",
                                "options": {
                                  "text": "From our readers",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-reviews-sub",
                                "type": "text",
                                "options": {
                                  "text": "Rated 4.9 by 25,000+ book lovers.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6E6659]"
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
                    "id": "pk-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#1C1A17] !bg-[#F6F1E7] !opacity-100 transition-colors hover:!bg-[#1C1A17] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1C1A17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-[#1C1A17]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#D9432F]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-lg border border-[#E2D9C8] bg-[#F6F1E7] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Every book arrives wrapped in brown paper with a little bookmark. It feels like a gift from a friend who reads.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E2D9C8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-9 shrink-0 items-center justify-center rounded-[2px_6px_6px_2px] bg-[#1F4D3A] font-heading text-base text-[#E3A93B] shadow-md"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tahsin Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1C1A17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Bought 6 books",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#6E6659]"
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
                        "id": "pk-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-lg border border-[#E2D9C8] bg-[#F6F1E7] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Finally a shop that stocks both new Bangla fiction and the English novels my book club wants, at fair prices.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E2D9C8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "MR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-9 shrink-0 items-center justify-center rounded-[2px_6px_6px_2px] bg-[#1F4D3A] font-heading text-base text-[#E3A93B] shadow-md"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Maliha Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1C1A17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Book club member",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#6E6659]"
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
                        "id": "pk-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-lg border border-[#E2D9C8] bg-[#F6F1E7] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Admission guides and textbooks delivered in a day, and the prices beat Nilkhet once you count the travel.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E2D9C8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "AD",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-9 shrink-0 items-center justify-center rounded-[2px_6px_6px_2px] bg-[#1F4D3A] font-heading text-base text-[#E3A93B] shadow-md"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Arnob Das",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1C1A17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Student",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#6E6659]"
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
                        "id": "pk-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-lg border border-[#E2D9C8] bg-[#F6F1E7] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“The children’s section is so well picked. My daughter now waits by the door for her monthly book parcel.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E2D9C8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "SK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-9 shrink-0 items-center justify-center rounded-[2px_6px_6px_2px] bg-[#1F4D3A] font-heading text-base text-[#E3A93B] shadow-md"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sabrina Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1C1A17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Parent",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#6E6659]"
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
                        "id": "pk-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-lg border border-[#E2D9C8] bg-[#F6F1E7] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Pre-ordered a new hardcover and got it on release day, corners perfect. They clearly care about books.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E2D9C8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "IH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-9 shrink-0 items-center justify-center rounded-[2px_6px_6px_2px] bg-[#1F4D3A] font-heading text-base text-[#E3A93B] shadow-md"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imran Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1C1A17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Collector",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#6E6659]"
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
                        "id": "pk-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-lg border border-[#E2D9C8] bg-[#F6F1E7] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“The staff picks have never let me down. The Book of the Month introduced me to my new favourite author.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E2D9C8] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "NS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-9 shrink-0 items-center justify-center rounded-[2px_6px_6px_2px] bg-[#1F4D3A] font-heading text-base text-[#E3A93B] shadow-md"
                                  }
                                }
                              },
                              {
                                "id": "pk-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nazia Sultana",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1C1A17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Reads 50 books a year",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#6E6659]"
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
            "id": "pk-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pk-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-journal-head-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-journal-label",
                            "type": "text",
                            "options": {
                              "text": "Reading notes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-journal-head-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-journal-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-journal-h",
                                "type": "heading",
                                "options": {
                                  "text": "Lists, interviews & reviews",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-journal-all",
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
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#D9432F]"
                              },
                              "label": {
                                "classes": "font-heading text-lg italic text-[#1C1A17] whitespace-nowrap underline decoration-1 underline-offset-4 group-hover:text-[#D9432F]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pk-journal-grid",
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
                        "classes": "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-[#E2D9C8] lg:gap-0"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col lg:px-6 lg:first:pl-0 lg:last:pr-0"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-journal-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-[#E2D9C8] lg:gap-0"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col lg:px-6 lg:first:pl-0 lg:last:pr-0"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-journal-date",
                            "type": "postDate",
                            "options": {
                              "dateFormat": "MMM DD, YYYY",
                              "linkTo": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-3 font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                              }
                            }
                          },
                          {
                            "id": "pk-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-md bg-[#EFE7D8]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[3/2] w-full object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
                              }
                            }
                          },
                          {
                            "id": "pk-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-3 font-heading text-2xl font-medium leading-snug tracking-tight text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 20,
                                  "readMoreText": "Continue reading",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6E6659]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-base italic text-[#1C1A17]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#D9432F] transition-transform group-hover/rm:translate-x-1"
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
            "id": "pk-faq",
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
                "id": "pk-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "pk-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-faq-head-rule",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-[#1C1A17] pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "FAQ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#1C1A17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-faq-head-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-end justify-between gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-faq-head-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex max-w-2xl flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-faq-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Good to know",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-medium leading-tight tracking-tight sm:text-5xl text-[#1C1A17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-faq-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Delivery, originals, pre-orders and returns.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-base text-[#6E6659]"
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
                    "id": "pk-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How fast will my books arrive?",
                          "classes": ""
                        },
                        {
                          "label": "Are the books original?",
                          "classes": ""
                        },
                        {
                          "label": "Can I pre-order upcoming books?",
                          "classes": ""
                        },
                        {
                          "label": "Do you gift wrap?",
                          "classes": ""
                        },
                        {
                          "label": "Can I return a book?",
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
                        "classes": "flex flex-col divide-y divide-[#E2D9C8] border-y border-[#1C1A17]"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 px-1 py-5 font-heading text-xl font-medium text-[#1C1A17] transition-colors hover:text-[#D9432F]"
                      },
                      "accordion-header-open": {
                        "classes": "text-[#D9432F]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#D9432F]"
                      },
                      "accordion-content": {
                        "classes": "px-1 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka usually within 24-48 hours, 2-4 days elsewhere. Pre-orders ship on release day.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6659]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. We buy directly from publishers and authorised distributors. No photocopies or pirated prints, ever.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6659]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Pre-order titles are marked on their page; you pay the listed price and we ship as soon as the book is released.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6659]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Every order can be gift-wrapped in brown paper with a hand-written note for free. Add your message at checkout.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6659]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "If a book arrives damaged, misprinted or wrong, tell us within 7 days and we will replace it or refund you.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6659]"
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
            "id": "pk-cta",
            "type": "section",
            "options": {
              "anchor": "reading-club"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-14 lg:pb-20"
              }
            },
            "children": [
              {
                "id": "pk-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl bg-[#1C1A17] p-8 sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-cta-lines",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.05)_32px)] bg-[length:100%_32px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pk-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-cta-k",
                            "type": "text",
                            "options": {
                              "text": "The Reading Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#E3A93B]"
                              }
                            }
                          },
                          {
                            "id": "pk-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Earn a free book for every ten you buy.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "pk-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for reading points, early access to signed editions and a monthly letter of staff picks.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Join the club",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconBookmark",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D9432F] px-6 py-3.5 transition-colors hover:bg-[#B8341F]"
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
                            "id": "pk-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Browse books",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 transition-colors hover:bg-white/10"
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
            "id": "pk-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The whole shop",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Books",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every title on our shelves, newest first. Open a book for the blurb, author, format and page count.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
                        "id": "pk-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-shop-promise",
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
                "id": "pk-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% original",
                          "description": "Direct from publishers",
                          "icon": "IconBook",
                          "iconSize": ""
                        },
                        {
                          "title": "Free gift wrap",
                          "description": "With a hand-written note",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Easy replacement",
                          "description": "Damaged? We replace it",
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
                        "classes": "font-heading text-lg font-medium text-[#1C1A17]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1A17] text-[#1C1A17]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-shop-promise-fb-ic",
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
                        "id": "pk-shop-promise-fb-t",
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
                        "id": "pk-shop-promise-fb-d",
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
            "id": "pk-pd",
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
                "id": "pk-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-pd-grid",
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
                        "id": "pk-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-pd-gallery",
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
                                "classes": "rounded-2xl border-4 border-white bg-gradient-to-tr from-[#ECE6DA] via-white to-[#F6F1E7] p-4 shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1C1A17]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1C1A17]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#D9432F]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-pd-cats",
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
                                "classes": "rounded-full bg-[#ECE6DA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1C1A17] hover:bg-[#1C1A17] hover:text-white"
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
                            "id": "pk-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-medium leading-tight text-[#1C1A17] sm:text-4xl tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "pk-pd-rate",
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
                                "classes": "font-body font-bold text-[#1C1A17]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "pk-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-price",
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
                                    "classes": "font-heading text-3xl font-medium text-[#1C1A17] tracking-tight"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-medium text-[#1C1A17] tracking-tight"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-medium text-[#1C1A17] tracking-tight"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#D9432F] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "pk-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E6659]"
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
                            "id": "pk-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#1C1A17]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#1C1A17] transition-colors hover:border-[#1C1A17] hover:bg-[#ECE6DA]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#1C1A17] !bg-[#ECE6DA] !text-[#3A3631]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "pk-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of print or out of stock · ask us to source it",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#D9432F]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#1C1A17]"
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
                            "id": "pk-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1C1A17]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F6F1E7]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F6F1E7]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#D9432F] px-8 text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#B8341F]"
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
                            "id": "pk-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "100% original",
                                  "description": "From publishers",
                                  "icon": "IconBook",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free gift wrap",
                                  "description": "With a note",
                                  "icon": "IconGift",
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
                                "classes": "font-body text-base font-bold text-[#1C1A17]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECE6DA] text-[#1C1A17]"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-perks-ic",
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
                                "id": "pk-pd-perks-t",
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
                                "id": "pk-pd-perks-d",
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
                            "id": "pk-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-sku",
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
                                    "classes": "font-semibold text-[#1C1A17]"
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
                                "id": "pk-pd-brands",
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
                                    "classes": "font-semibold text-[#1C1A17]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#D9432F]"
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
                                "id": "pk-pd-tags",
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
                                    "classes": "font-semibold text-[#1C1A17]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#D9432F]"
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
            "id": "pk-pd-tabs-sec",
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
                "id": "pk-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,23,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "About the book",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Details",
                              "icon": "IconBook2"
                            },
                            {
                              "label": "Delivery & Returns",
                              "icon": "IconTruckDelivery"
                            },
                            {
                              "label": "Reader reviews",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F6F1E7] px-5 py-2.5 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1C1A17] !text-white shadow-md"
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
                            "id": "pk-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-[#1C1A17] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-[#1C1A17] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#D9432F] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#E3A93B] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconBook2",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Author, publisher, ISBN, language, format and page count are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Original copies only, bought from the publisher or its distributor",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Pre-order titles ship on release day",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cover designs may differ slightly between print runs",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#1C1A17]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-ship-list",
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
                                      "text": "Free delivery on orders over ৳800, free gift wrap on request",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged, misprinted or wrong book? Replacement within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#1C1A17]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pk-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F6F1E7] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F6F1E7] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pk-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FBE7E2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "pk-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#1C1A17]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "pk-pd-reviews-rate",
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
                                        "id": "pk-pd-reviews-co",
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
                                    "id": "pk-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "What did you think of the book? (No spoilers, please.)",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,23,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A17]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F6F1E7] px-4 py-3 text-sm text-[#1C1A17] placeholder:text-gray-400 focus:border-[#1C1A17] focus:outline-none focus:ring-2 focus:ring-[#1C1A17]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#D9432F] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#B8341F] disabled:opacity-50"
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
            "id": "pk-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-16"
              }
            },
            "children": [
              {
                "id": "pk-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Readers also bought",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FBE7E2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#D9432F]"
                          }
                        }
                      },
                      {
                        "id": "pk-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-medium text-[#1C1A17] tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pk-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
            "id": "pk-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Card catalogue",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Genres",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Bangla literature, fiction, non-fiction, children’s books and academic. Pick a shelf.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#ECE6DA] transition-transform"
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
                            "id": "pk-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                              }
                            }
                          },
                          {
                            "id": "pk-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " books",
                              "singularSuffix": " book",
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
                        "id": "pk-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "pk-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " books",
                      "singularSuffix": " book"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#1C1A17] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
                        "id": "pk-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group books by theme, award and list: bestsellers, staff picks, pre-orders and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D9432F]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D9432F]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1C1A17] group-hover:text-[#D9432F]"
                              }
                            }
                          },
                          {
                            "id": "pk-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F6F1E7] px-2 py-0.5 text-[10px] font-bold text-[#6E6659]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pk-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "pk-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " books",
                      "singularSuffix": " book"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#1C1A17] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
                        "id": "pk-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Imprints",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Publishers",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every publisher and imprint on our shelves.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F6F1E7] p-3"
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
                            "id": "pk-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1C1A17] group-hover:text-[#D9432F]"
                              }
                            }
                          },
                          {
                            "id": "pk-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " books",
                              "singularSuffix": " book",
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
                        "id": "pk-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "pk-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " books",
                      "singularSuffix": " book"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#1C1A17] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
                        "id": "pk-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Reading notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Lists, Interviews & Reviews",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "What to read next, author interviews and honest reviews from our booksellers.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F6F1E7]"
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
                            "id": "pk-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                  }
                                }
                              },
                              {
                                "id": "pk-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Continue reading",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#D9432F]"
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
                        "id": "pk-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:border-[#D9432F] hover:text-[#D9432F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#D9432F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pk-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F6F1E7] via-white to-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-post-k",
                    "type": "text",
                    "options": {
                      "text": "Reading notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#ECE6DA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1C1A17]"
                      }
                    }
                  },
                  {
                    "id": "pk-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-medium leading-tight text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6E6659]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-post-author",
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
                            "classes": "font-body font-bold text-[#1C1A17]"
                          }
                        }
                      },
                      {
                        "id": "pk-post-dot",
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
                        "id": "pk-post-date",
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
                    "id": "pk-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
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
            "id": "pk-post-body",
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
                "id": "pk-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-[#1C1A17] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-[#1C1A17] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#D9432F] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#E3A93B] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-16"
              }
            },
            "children": [
              {
                "id": "pk-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-medium text-[#1C1A17] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F6F1E7] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F6F1E7] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FBE7E2]"
                              }
                            }
                          },
                          {
                            "id": "pk-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1C1A17]"
                              }
                            }
                          },
                          {
                            "id": "pk-post-cmt-co",
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
                        "id": "pk-post-cmt-form",
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
                            "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,23,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1C1A17]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F6F1E7] px-4 py-3 text-sm text-[#1C1A17] placeholder:text-gray-400 focus:border-[#1C1A17] focus:outline-none focus:ring-2 focus:ring-[#1C1A17]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#D9432F] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#B8341F] disabled:opacity-50"
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
            "id": "pk-post-more",
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
                "id": "pk-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Reading Notes",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-medium text-[#1C1A17] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F6F1E7]"
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
                            "id": "pk-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#1C1A17]"
                                  }
                                }
                              },
                              {
                                "id": "pk-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
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
            "id": "pk-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#1C1A17] bg-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pk-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back, reader",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#6E6659]"
                      }
                    }
                  },
                  {
                    "id": "pk-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-medium text-[#1C1A17] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders and pre-orders, and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6659] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pk-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-12"
              }
            },
            "children": [
              {
                "id": "pk-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#1C1A17] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#E3A93B]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-medium text-white tracking-tight"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#D9432F]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#D9432F]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#D9432F]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "pk-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pk-acc-3",
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
                                "id": "pk-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,23,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#D9432F] focus:outline-none focus:ring-2 focus:ring-[#D9432F]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#D9432F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B8341F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9432F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "pk-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,23,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#D9432F] focus:outline-none focus:ring-2 focus:ring-[#D9432F]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#D9432F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B8341F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9432F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "pk-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "pk-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F6F1E7] px-5 py-2.5 font-body text-sm font-semibold text-[#1C1A17] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1C1A17] !text-white shadow-md"
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
                                "id": "pk-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9432F]/10 text-[#D9432F]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pk-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#D9432F] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "pk-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9432F]/10 text-[#D9432F]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "pk-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#D9432F]/40 hover:bg-[#D9432F]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9432F]/10 text-[#D9432F]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "pk-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D9432F]/10 text-[#D9432F]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#D9432F] focus:outline-none focus:ring-2 focus:ring-[#D9432F]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#D9432F] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B8341F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9432F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9432F]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "pk-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F6F1E7] via-white to-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(28,26,23,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#ECE6DA] text-[#1C1A17]"
                          }
                        }
                      },
                      {
                        "id": "pk-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FBE7E2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#D9432F]"
                          }
                        }
                      },
                      {
                        "id": "pk-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You. Happy Reading!",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-medium text-[#1C1A17] sm:text-4xl tracking-tight"
                          }
                        }
                      },
                      {
                        "id": "pk-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your books are being wrapped. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6E6659] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "pk-ty-steps",
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
                              "text": "Your books are checked and wrapped (with your note, if you added one)",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-2xl bg-[#F6F1E7] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#D9432F]"
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
                        "id": "pk-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-ty-shop",
                            "type": "button",
                            "options": {
                              "text": "Keep Browsing",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D9432F] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#B8341F] w-full sm:w-auto"
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
                            "id": "pk-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#1C1A17] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#1C1A17] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#1C1A17] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#1C1A17] whitespace-nowrap group-hover:text-white"
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
            "id": "pk-ty-promise",
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
                "id": "pk-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% original",
                          "description": "Direct from publishers",
                          "icon": "IconBook",
                          "iconSize": ""
                        },
                        {
                          "title": "Free gift wrap",
                          "description": "With a hand-written note",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Easy replacement",
                          "description": "Damaged? We replace it",
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
                        "classes": "font-heading text-lg font-medium text-[#1C1A17]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1A17] text-[#1C1A17]"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-ty-promise-fb-ic",
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
                        "id": "pk-ty-promise-fb-t",
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
                        "id": "pk-ty-promise-fb-d",
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
            "id": "pk-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F6F1E7] via-white to-[#F6F1E7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pk-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-medium text-[#D9432F] sm:text-9xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6F1E7] text-[#1C1A17]"
                      }
                    }
                  },
                  {
                    "id": "pk-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Is Missing From the Shelf",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-medium text-[#1C1A17] sm:text-4xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "pk-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the book may be out of print. Head back home or browse the shelves.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6E6659] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "pk-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D9432F] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(217,67,47,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#B8341F] w-full sm:w-auto"
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
                        "id": "pk-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Browse All Books",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#1C1A17] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#1C1A17] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1C1A17] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#1C1A17] whitespace-nowrap group-hover:text-white"
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
            "id": "pk-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F1E7] py-16"
              }
            },
            "children": [
              {
                "id": "pk-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pk-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3A93B] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1C1A17]"
                          }
                        }
                      },
                      {
                        "id": "pk-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-medium text-[#1C1A17] sm:text-4xl tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pk-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "pk-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-xl p-2 transition-colors duration-300 hover:bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "pk-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[3px_8px_8px_3px] bg-[#EFE7D8] shadow-[0_16px_26px_-16px_rgba(28,26,23,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1.5 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-2.5 before:bg-gradient-to-r before:from-black/25 before:to-transparent before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[2/3] w-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-1 top-1 z-[3] flex h-12 w-12 rotate-12 flex-col items-center justify-center rounded-full bg-[#D9432F] font-['IBM_Plex_Mono'] text-[10px] font-medium leading-none text-white shadow-md"
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
                                "id": "pk-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pk-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E3A93B]"
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
                                    "id": "pk-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-[17px] font-medium leading-snug text-[#1C1A17] transition-colors group-hover:text-[#D9432F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pk-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 text-[13px] italic text-[#6E6659]"
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
                            "id": "pk-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pk-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['IBM_Plex_Mono'] text-xs text-[#6E6659] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-['IBM_Plex_Mono'] text-base font-medium text-[#1C1A17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#D9432F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#D9432F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pk-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-[#1C1A17] px-3 text-[#1C1A17] transition-colors hover:bg-[#1C1A17] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-semibold whitespace-nowrap"
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
