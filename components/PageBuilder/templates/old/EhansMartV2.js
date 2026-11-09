/**
 * Template: Ehans Mart V2.
 *
 * Built from the live store at https://ehansmart.com (a Shopify theme), read on
 * 2026-11-02. EhansMart.js is the earlier copy of the old static site at
 * ehans-mart.vercel.app and is left as it was; the header, home page and footer
 * here are new, and the inner pages (shop, product, archives, account) are
 * carried over from it with the fonts below applied.
 *
 * Every value is from the theme's stylesheets or measured from the rendered
 * page at 1920px, so the breakpoints are the theme's own (1360, 1200, 992, 767,
 * 749 and 575), written as max-[...] variants rather than Tailwind's scale.
 *
 *   #ff5554  brand: section titles, badge, ADD TO CART, struck-through price
 *   #211913  all text; All Categories button
 *   #fcf7f5  page background and hover tint
 *   #2119131a / #21191380  10% and 50% ink, for hairlines and the search border
 *   #fff8f7 -> #fde9e8  footer gradient, over a 1px #ed20242e rule
 *
 *   header 106px: 10 + 38 search row + 10 + 48 nav row; container 1360/20
 *   hero   1320x495 radius 20, section padding 20
 *   tiles  151px, gap 10, radius 8, label 14/18 medium
 *   promos 747fr/433fr, gap 20, radius 10, section padding 24
 *   cards  slider 256px gap 10; grid five columns gap 16; radius 8
 *
 * FONTS. DM Sans (body), Figtree (headings, buttons) and Hind Siliguri (Bengali
 * product titles) are declared in app/layout.jsx as --font-dm-sans,
 * --font-figtree and --font-hind-siliguri, and picked up here through
 * font-[family-name:var(...)].
 *
 * THE MENUS ARE CSS. All Categories opens on hover through group/all, and its
 * tabs through group/tab; the :has() variants on `allcat-menu` show the first
 * tab while none is hovered. There is no script, so the `em2-cat*` classes must
 * stay on those blocks.
 *
 * THE PRODUCT ROWS query post_type `cmb_product`, the store's real type; `product`
 * returns nothing from get_posts.
 *
 * The cart block uses `triggerStyle: 'icon'`, which keeps it visible while empty
 * and applies the button selectors below.
 *
 * WHAT DIFFERS FROM THE LIVE SITE
 *
 *   - The header stays pinned; the site hides it on scroll down.
 *   - All Categories opens on hover, not click.
 *   - The search placeholder is static; the site's text rolls.
 *   - Cards show one image; the site swaps to a second on hover, and the
 *     postThumbnail block has no second image.
 *   - Show more links to /shop; the site loads more in place.
 *   - The hamburger links to /categories and the mobile search icon to /shop;
 *     the site opens drawers. Footer columns stay open on mobile.
 *   - The search-results, cart and quick-add overlays are the builder's own.
 *
 * BEFORE THIS GOES TO ANOTHER STORE
 *
 * The logo, hero, promos, category tiles and mega-menu images are hotlinked
 * from ehansmart.com, and the footer holds that store's address, phone, email
 * and credit line. They are Ehans Mart's own, and a hotlink dies if the file
 * is replaced there, so swap them for uploaded copies.
 *
 * Tile and menu links use the site's handles as /categories/<slug>, so those
 * terms must exist. The two product rows have no category filter: they show the
 * newest products, as the site's rows are not scoped to their headings either.
 */

var template = [
  {
    "name": "Ehans Mart V2",
    "description": "The current ehansmart.com storefront: a two-row white header with a dark All Categories mega menu on warm blush, a rounded family hero, a 25-tile category strip, a Home & Kitchen promo trio, a five-up product slider, a five-column Trending Items grid and a four-column blush footer.",
    "thumbnail": "/templates/ehans-mart.svg",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "em2-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] sticky top-0 z-50 w-full bg-white pt-[10px] text-[#211913] max-[992px]:pb-[10px]"
              }
            },
            "children": [
              {
                "id": "em2-hdr-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-5 max-[992px]:px-[10px]"
                  }
                },
                "children": [
                  {
                    "id": "em2-hdr-row",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-[max-content_minmax(320px,520px)_max-content] items-center justify-between gap-x-5 gap-y-[10px] max-[992px]:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-hdr-brand",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-hdr-burger",
                            "type": "button",
                            "options": {
                              "text": "",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "IconMenu2",
                              "iconSize": 24
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-7 items-center justify-center text-[#211913] min-[993px]:hidden"
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
                            "id": "em2-hdr-logo",
                            "type": "logo",
                            "options": {
                              "logoType": "image",
                              "logoText": "Ehans Mart",
                              "src": "https://ehansmart.com/cdn/shop/files/Ehans_Mart_Logo.webp?v=1793472527&width=300",
                              "link": "/"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              },
                              "link": {
                                "classes": "flex"
                              },
                              "img": {
                                "classes": "block h-[35px] w-[150px] object-contain max-[575px]:h-auto max-[575px]:w-[120px]"
                              },
                              "text": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-hdr-search",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "justify-self-center w-full max-w-[520px] max-[992px]:hidden"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-hdr-q",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search For Kitchen Tools",
                              "iconPosition": "",
                              "icon": "IconSearch",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-h-[38px] w-full items-center rounded-[8px] border border-[#21191380] bg-white px-3 py-2 shadow-[0_1px_2px_#21191314] [&>div]:w-full [&>div]:flex-row-reverse [&>div]:justify-end"
                              },
                              "input-wrapper": {
                                "classes": "flex w-full flex-row-reverse items-center gap-2"
                              },
                              "input-search": {
                                "classes": "min-w-0 w-full! flex-1 border-0 bg-transparent px-0! text-[14px] capitalize leading-[20px] text-[#211913] shadow-none! outline-none placeholder:text-[#211913]"
                              },
                              "icon": {
                                "classes": "flex size-4 shrink-0 items-center justify-center text-[#211913]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-hdr-icons",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-hdr-find",
                            "type": "button",
                            "options": {
                              "text": "",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconSearch",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-9 w-11 items-center justify-center overflow-hidden rounded-[5px] text-[#211913] transition-all duration-300 hover:bg-[#fcf7f5] hover:text-[#ff5554] min-[993px]:hidden max-[575px]:w-8"
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
                            "id": "em2-hdr-acct",
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
                                "classes": "flex h-9 w-11 items-center justify-center overflow-hidden rounded-[5px] text-[#211913] transition-all duration-300 hover:bg-[#fcf7f5] hover:text-[#ff5554] max-[575px]:w-8"
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
                            "id": "em2-hdr-cart",
                            "type": "cart",
                            "options": {
                              "buttonIcon": "IconShoppingCart",
                              "editMode": false,
                              "triggerStyle": "icon"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "button": {
                                "classes": "relative flex h-9 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-[5px] text-[#211913] transition-all duration-300 hover:bg-[#fcf7f5] hover:text-[#ff5554] max-[575px]:w-8"
                              },
                              "button-icon": {
                                "classes": "flex size-5 items-center justify-center"
                              },
                              "button-quantity": {
                                "classes": "absolute right-[3px] top-[3px] z-[1] flex size-4 items-center justify-center overflow-hidden rounded-full bg-[#ff5554] text-[10px] font-normal uppercase leading-none text-white max-[575px]:right-0 max-[575px]:top-0"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em2-hdr-nav",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative mt-[10px] w-full before:absolute before:left-[calc((100%-100dvw)/2)] before:top-0 before:z-[1] before:h-px before:w-[100dvw] before:bg-[#2119131a] before:content-[''] max-[992px]:hidden"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-hdr-links",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-allcat",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group/all mr-[10px] py-[6px]"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-allcat-btn",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex cursor-pointer items-center gap-2 rounded-[6px] bg-[#211913] px-4 py-2 text-white transition-colors duration-200 group-hover/all:bg-[#ff5554]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "em2-allcat-i",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconMenu2",
                                      "size": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "em2-allcat-t",
                                    "type": "text",
                                    "options": {
                                      "text": "All Categories",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-[family-name:var(--font-figtree)] whitespace-nowrap text-[14px] font-semibold leading-[20px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "em2-allcat-a",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconChevronDown",
                                      "size": 14
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex transition-transform duration-300 group-hover/all:rotate-180"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "em2-allcat-menu",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "invisible absolute left-0 top-full z-[3] h-[min(560px,calc(100dvh-126px))] w-full translate-y-[10px] overflow-hidden rounded-b-[16px] border-t border-[#2119131a] bg-white opacity-0 shadow-[0_18px_40px_#0000001f] transition-all duration-300 group-hover/all:visible group-hover/all:translate-y-0 group-hover/all:opacity-100 [&:not(:has(.em2-cat:hover))_.em2-cat:first-child_.em2-cat-panel]:grid [&:not(:has(.em2-cat:hover))_.em2-cat:first-child_.em2-cat-tab]:bg-[#fff8f7] [&:not(:has(.em2-cat:hover))_.em2-cat:first-child_.em2-cat-tab]:text-[#ff5554] [&:not(:has(.em2-cat:hover))_.em2-cat:first-child_.em2-cat-tab]:before:scale-y-100"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "em2-allcat-list",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-full w-[250px] border-r border-[#2119131a] py-3 max-[1200px]:w-[220px]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "em2-cat-0",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "em2-cat group/tab"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-cat-0-tab",
                                            "type": "button",
                                            "options": {
                                              "text": "Beauty & Personal Care",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/beauty-personal-care",
                                              "target": "",
                                              "icon": "IconChevronRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-tab relative flex w-full flex-row-reverse items-center justify-between gap-[10px] py-[11px] pl-[22px] pr-[18px] text-left text-[15px] leading-[20px] text-[#211913] transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:scale-y-0 before:bg-[#ff5554] before:transition-transform before:duration-200 before:content-[''] group-hover/tab:bg-[#fff8f7] group-hover/tab:text-[#ff5554] group-hover/tab:before:scale-y-100"
                                              },
                                              "icon": {
                                                "classes": "flex shrink-0 items-center"
                                              },
                                              "label": {
                                                "classes": ""
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-cat-0-panel",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-panel absolute inset-y-0 left-[250px] right-0 hidden grid-cols-[minmax(0,1fr)_280px] gap-8 py-6 pl-[34px] pr-6 group-hover/tab:grid max-[1200px]:left-[220px] max-[1200px]:grid-cols-[minmax(0,1fr)_230px] max-[1200px]:gap-5 max-[1200px]:p-5"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-cat-0-content",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "min-w-0 overflow-y-auto pr-[10px]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-0-head",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "mb-[22px] flex items-center justify-between gap-4"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-0-title",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Beauty & Personal Care",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] text-[20px] font-bold text-[#211913]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-0-view",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "View all →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/beauty-personal-care",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "shrink-0"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-semibold capitalize text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "em2-cat-0-links",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "grid grid-cols-3 gap-x-6 gap-y-[6px] max-[1200px]:grid-cols-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-0-l0",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Beauty Tools",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/beauty-tools",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-0-l1",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Personal Care",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/personal-care",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-0-l2",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Hair Accessories",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/hair-accessories",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-0-l3",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Health & Wellness",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/health-wellness",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "id": "em2-cat-0-promo",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "group/promo relative block overflow-hidden rounded-[16px] bg-[#0b0b0d]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-0-promo-img",
                                                    "type": "image",
                                                    "options": {
                                                      "src": "https://ehansmart.com/cdn/shop/collections/08_Beauty_Personal_Care.webp?v=1793454912&width=560",
                                                      "altText": "Beauty & Personal Care",
                                                      "width": "",
                                                      "height": ""
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "absolute inset-0"
                                                      },
                                                      "link": {
                                                        "classes": "block h-full w-full"
                                                      },
                                                      "img": {
                                                        "classes": "h-full w-full object-cover opacity-55 transition-transform duration-[600ms] group-hover/promo:scale-[1.06]"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "id": "em2-cat-0-promo-in",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "relative flex h-full flex-col items-start bg-[radial-gradient(80%_60%_at_100%_0%,rgba(237,32,36,.35),transparent_70%),linear-gradient(180deg,#0b0b0df2,#0b0b0d8c_45%,#0b0b0df2)] px-6 py-[26px]"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-0-promo-k",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "explore",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff3b3f]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-0-promo-t",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Beauty & Personal Care",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] mt-[6px] text-[26px] font-extrabold leading-[1.2] text-white"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-0-promo-b",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "shop now →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/beauty-personal-care",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-auto inline-flex items-center rounded-[50px] bg-[#ff5554] px-[18px] py-[9px] text-white transition-colors duration-200 group-hover/promo:bg-white group-hover/promo:text-[#ff5554]"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-bold capitalize"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-0-promo-f",
                                                        "type": "container",
                                                        "options": {},
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-[18px] flex flex-col gap-[6px]"
                                                          }
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "em2-cat-0-promo-f0",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-0-promo-fi0",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconCash",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-0-promo-ft0",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "100% Cash on Delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "id": "em2-cat-0-promo-f1",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-0-promo-fi1",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconTruckDelivery",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-0-promo-ft1",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "Fast home delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
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
                                        "id": "em2-cat-1",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "em2-cat group/tab"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-cat-1-tab",
                                            "type": "button",
                                            "options": {
                                              "text": "Baby & Mother",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/baby-mother",
                                              "target": "",
                                              "icon": "IconChevronRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-tab relative flex w-full flex-row-reverse items-center justify-between gap-[10px] py-[11px] pl-[22px] pr-[18px] text-left text-[15px] leading-[20px] text-[#211913] transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:scale-y-0 before:bg-[#ff5554] before:transition-transform before:duration-200 before:content-[''] group-hover/tab:bg-[#fff8f7] group-hover/tab:text-[#ff5554] group-hover/tab:before:scale-y-100"
                                              },
                                              "icon": {
                                                "classes": "flex shrink-0 items-center"
                                              },
                                              "label": {
                                                "classes": ""
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-cat-1-panel",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-panel absolute inset-y-0 left-[250px] right-0 hidden grid-cols-[minmax(0,1fr)_280px] gap-8 py-6 pl-[34px] pr-6 group-hover/tab:grid max-[1200px]:left-[220px] max-[1200px]:grid-cols-[minmax(0,1fr)_230px] max-[1200px]:gap-5 max-[1200px]:p-5"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-cat-1-content",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "min-w-0 overflow-y-auto pr-[10px]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-1-head",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "mb-[22px] flex items-center justify-between gap-4"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-1-title",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Baby & Mother",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] text-[20px] font-bold text-[#211913]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-view",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "View all →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/baby-mother",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "shrink-0"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-semibold capitalize text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "em2-cat-1-links",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "grid grid-cols-3 gap-x-6 gap-y-[6px] max-[1200px]:grid-cols-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-1-l0",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Baby & Kids",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/baby-care",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-l1",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Baby Safety",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/baby-safety",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-l2",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Kids’ Fashion",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/kids-fashion",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-l3",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "School Essentials",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/school-essentials",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-l4",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Mother Care",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/mother-care",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "id": "em2-cat-1-promo",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "group/promo relative block overflow-hidden rounded-[16px] bg-[#0b0b0d]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-1-promo-img",
                                                    "type": "image",
                                                    "options": {
                                                      "src": "https://ehansmart.com/cdn/shop/collections/07_Baby_Mother.webp?v=1793454875&width=560",
                                                      "altText": "Baby & Mother",
                                                      "width": "",
                                                      "height": ""
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "absolute inset-0"
                                                      },
                                                      "link": {
                                                        "classes": "block h-full w-full"
                                                      },
                                                      "img": {
                                                        "classes": "h-full w-full object-cover opacity-55 transition-transform duration-[600ms] group-hover/promo:scale-[1.06]"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "id": "em2-cat-1-promo-in",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "relative flex h-full flex-col items-start bg-[radial-gradient(80%_60%_at_100%_0%,rgba(237,32,36,.35),transparent_70%),linear-gradient(180deg,#0b0b0df2,#0b0b0d8c_45%,#0b0b0df2)] px-6 py-[26px]"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-1-promo-k",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "explore",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff3b3f]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-promo-t",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Baby & Mother",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] mt-[6px] text-[26px] font-extrabold leading-[1.2] text-white"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-promo-b",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "shop now →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/baby-mother",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-auto inline-flex items-center rounded-[50px] bg-[#ff5554] px-[18px] py-[9px] text-white transition-colors duration-200 group-hover/promo:bg-white group-hover/promo:text-[#ff5554]"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-bold capitalize"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-1-promo-f",
                                                        "type": "container",
                                                        "options": {},
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-[18px] flex flex-col gap-[6px]"
                                                          }
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "em2-cat-1-promo-f0",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-1-promo-fi0",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconCash",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-1-promo-ft0",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "100% Cash on Delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "id": "em2-cat-1-promo-f1",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-1-promo-fi1",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconTruckDelivery",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-1-promo-ft1",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "Fast home delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
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
                                        "id": "em2-cat-2",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "em2-cat group/tab"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-cat-2-tab",
                                            "type": "button",
                                            "options": {
                                              "text": "Home & Living",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/home-living",
                                              "target": "",
                                              "icon": "IconChevronRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-tab relative flex w-full flex-row-reverse items-center justify-between gap-[10px] py-[11px] pl-[22px] pr-[18px] text-left text-[15px] leading-[20px] text-[#211913] transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:scale-y-0 before:bg-[#ff5554] before:transition-transform before:duration-200 before:content-[''] group-hover/tab:bg-[#fff8f7] group-hover/tab:text-[#ff5554] group-hover/tab:before:scale-y-100"
                                              },
                                              "icon": {
                                                "classes": "flex shrink-0 items-center"
                                              },
                                              "label": {
                                                "classes": ""
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-cat-2-panel",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-panel absolute inset-y-0 left-[250px] right-0 hidden grid-cols-[minmax(0,1fr)_280px] gap-8 py-6 pl-[34px] pr-6 group-hover/tab:grid max-[1200px]:left-[220px] max-[1200px]:grid-cols-[minmax(0,1fr)_230px] max-[1200px]:gap-5 max-[1200px]:p-5"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-cat-2-content",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "min-w-0 overflow-y-auto pr-[10px]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-2-head",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "mb-[22px] flex items-center justify-between gap-4"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-2-title",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Home & Living",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] text-[20px] font-bold text-[#211913]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-view",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "View all →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/home-living",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "shrink-0"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-semibold capitalize text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "em2-cat-2-links",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "grid grid-cols-3 gap-x-6 gap-y-[6px] max-[1200px]:grid-cols-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-2-l0",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Home Organization",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/home-organization",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-l1",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Home Decor",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/home-decor",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-l2",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Home Improvement",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/home-improvement",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-l3",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Cleaning Supplies",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/cleaning-supplies",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-l4",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Bathroom Essentials",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/bathroom-essentials",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "id": "em2-cat-2-promo",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "group/promo relative block overflow-hidden rounded-[16px] bg-[#0b0b0d]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-2-promo-img",
                                                    "type": "image",
                                                    "options": {
                                                      "src": "https://ehansmart.com/cdn/shop/collections/11_Home_Living.webp?v=1793381684&width=560",
                                                      "altText": "Home & Living",
                                                      "width": "",
                                                      "height": ""
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "absolute inset-0"
                                                      },
                                                      "link": {
                                                        "classes": "block h-full w-full"
                                                      },
                                                      "img": {
                                                        "classes": "h-full w-full object-cover opacity-55 transition-transform duration-[600ms] group-hover/promo:scale-[1.06]"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "id": "em2-cat-2-promo-in",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "relative flex h-full flex-col items-start bg-[radial-gradient(80%_60%_at_100%_0%,rgba(237,32,36,.35),transparent_70%),linear-gradient(180deg,#0b0b0df2,#0b0b0d8c_45%,#0b0b0df2)] px-6 py-[26px]"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-2-promo-k",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "explore",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff3b3f]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-promo-t",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Home & Living",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] mt-[6px] text-[26px] font-extrabold leading-[1.2] text-white"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-promo-b",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "shop now →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/home-living",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-auto inline-flex items-center rounded-[50px] bg-[#ff5554] px-[18px] py-[9px] text-white transition-colors duration-200 group-hover/promo:bg-white group-hover/promo:text-[#ff5554]"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-bold capitalize"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-2-promo-f",
                                                        "type": "container",
                                                        "options": {},
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-[18px] flex flex-col gap-[6px]"
                                                          }
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "em2-cat-2-promo-f0",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-2-promo-fi0",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconCash",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-2-promo-ft0",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "100% Cash on Delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "id": "em2-cat-2-promo-f1",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-2-promo-fi1",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconTruckDelivery",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-2-promo-ft1",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "Fast home delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
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
                                        "id": "em2-cat-3",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "em2-cat group/tab"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-cat-3-tab",
                                            "type": "button",
                                            "options": {
                                              "text": "Kitchen & Dining",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/kitchen-dining",
                                              "target": "",
                                              "icon": "IconChevronRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-tab relative flex w-full flex-row-reverse items-center justify-between gap-[10px] py-[11px] pl-[22px] pr-[18px] text-left text-[15px] leading-[20px] text-[#211913] transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:scale-y-0 before:bg-[#ff5554] before:transition-transform before:duration-200 before:content-[''] group-hover/tab:bg-[#fff8f7] group-hover/tab:text-[#ff5554] group-hover/tab:before:scale-y-100"
                                              },
                                              "icon": {
                                                "classes": "flex shrink-0 items-center"
                                              },
                                              "label": {
                                                "classes": ""
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-cat-3-panel",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-panel absolute inset-y-0 left-[250px] right-0 hidden grid-cols-[minmax(0,1fr)_280px] gap-8 py-6 pl-[34px] pr-6 group-hover/tab:grid max-[1200px]:left-[220px] max-[1200px]:grid-cols-[minmax(0,1fr)_230px] max-[1200px]:gap-5 max-[1200px]:p-5"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-cat-3-content",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "min-w-0 overflow-y-auto pr-[10px]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-3-head",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "mb-[22px] flex items-center justify-between gap-4"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-3-title",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Kitchen & Dining",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] text-[20px] font-bold text-[#211913]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-3-view",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "View all →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/kitchen-dining",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "shrink-0"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-semibold capitalize text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "em2-cat-3-links",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "grid grid-cols-3 gap-x-6 gap-y-[6px] max-[1200px]:grid-cols-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-3-l0",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Kitchen Tools",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/kitchen-tools",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-3-l1",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Kitchen Cleaning",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/kitchen-cleaning",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-3-l2",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Kitchen Safety",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/kitchen-safety",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "id": "em2-cat-3-promo",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "group/promo relative block overflow-hidden rounded-[16px] bg-[#0b0b0d]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-3-promo-img",
                                                    "type": "image",
                                                    "options": {
                                                      "src": "https://ehansmart.com/cdn/shop/collections/13_Kitchen_Dining.webp?v=1793381736&width=560",
                                                      "altText": "Kitchen & Dining",
                                                      "width": "",
                                                      "height": ""
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "absolute inset-0"
                                                      },
                                                      "link": {
                                                        "classes": "block h-full w-full"
                                                      },
                                                      "img": {
                                                        "classes": "h-full w-full object-cover opacity-55 transition-transform duration-[600ms] group-hover/promo:scale-[1.06]"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "id": "em2-cat-3-promo-in",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "relative flex h-full flex-col items-start bg-[radial-gradient(80%_60%_at_100%_0%,rgba(237,32,36,.35),transparent_70%),linear-gradient(180deg,#0b0b0df2,#0b0b0d8c_45%,#0b0b0df2)] px-6 py-[26px]"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-3-promo-k",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "explore",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff3b3f]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-3-promo-t",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Kitchen & Dining",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] mt-[6px] text-[26px] font-extrabold leading-[1.2] text-white"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-3-promo-b",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "shop now →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/kitchen-dining",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-auto inline-flex items-center rounded-[50px] bg-[#ff5554] px-[18px] py-[9px] text-white transition-colors duration-200 group-hover/promo:bg-white group-hover/promo:text-[#ff5554]"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-bold capitalize"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-3-promo-f",
                                                        "type": "container",
                                                        "options": {},
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-[18px] flex flex-col gap-[6px]"
                                                          }
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "em2-cat-3-promo-f0",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-3-promo-fi0",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconCash",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-3-promo-ft0",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "100% Cash on Delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "id": "em2-cat-3-promo-f1",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-3-promo-fi1",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconTruckDelivery",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-3-promo-ft1",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "Fast home delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
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
                                        "id": "em2-cat-4",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "em2-cat group/tab"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-cat-4-tab",
                                            "type": "button",
                                            "options": {
                                              "text": "Fashion & Accessories",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/fashion-accessories",
                                              "target": "",
                                              "icon": "IconChevronRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-tab relative flex w-full flex-row-reverse items-center justify-between gap-[10px] py-[11px] pl-[22px] pr-[18px] text-left text-[15px] leading-[20px] text-[#211913] transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:scale-y-0 before:bg-[#ff5554] before:transition-transform before:duration-200 before:content-[''] group-hover/tab:bg-[#fff8f7] group-hover/tab:text-[#ff5554] group-hover/tab:before:scale-y-100"
                                              },
                                              "icon": {
                                                "classes": "flex shrink-0 items-center"
                                              },
                                              "label": {
                                                "classes": ""
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-cat-4-panel",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-panel absolute inset-y-0 left-[250px] right-0 hidden grid-cols-[minmax(0,1fr)_280px] gap-8 py-6 pl-[34px] pr-6 group-hover/tab:grid max-[1200px]:left-[220px] max-[1200px]:grid-cols-[minmax(0,1fr)_230px] max-[1200px]:gap-5 max-[1200px]:p-5"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-cat-4-content",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "min-w-0 overflow-y-auto pr-[10px]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-4-head",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "mb-[22px] flex items-center justify-between gap-4"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-4-title",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Fashion & Accessories",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] text-[20px] font-bold text-[#211913]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-view",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "View all →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/fashion-accessories",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "shrink-0"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-semibold capitalize text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "em2-cat-4-links",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "grid grid-cols-3 gap-x-6 gap-y-[6px] max-[1200px]:grid-cols-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-4-l0",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Women’s Essentials",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/women-s-essentials",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-l1",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Man’s Essentials",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/man-s-essentials",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-l2",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Fashion",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/fashion",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-l3",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Jewelry",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/jewelry",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-l4",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Travel Accessories",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/travel-accessories",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "id": "em2-cat-4-promo",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "group/promo relative block overflow-hidden rounded-[16px] bg-[#0b0b0d]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-4-promo-img",
                                                    "type": "image",
                                                    "options": {
                                                      "src": "https://ehansmart.com/cdn/shop/collections/05_Fashion_Accessories.webp?v=1793454841&width=560",
                                                      "altText": "Fashion & Accessories",
                                                      "width": "",
                                                      "height": ""
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "absolute inset-0"
                                                      },
                                                      "link": {
                                                        "classes": "block h-full w-full"
                                                      },
                                                      "img": {
                                                        "classes": "h-full w-full object-cover opacity-55 transition-transform duration-[600ms] group-hover/promo:scale-[1.06]"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "id": "em2-cat-4-promo-in",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "relative flex h-full flex-col items-start bg-[radial-gradient(80%_60%_at_100%_0%,rgba(237,32,36,.35),transparent_70%),linear-gradient(180deg,#0b0b0df2,#0b0b0d8c_45%,#0b0b0df2)] px-6 py-[26px]"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-4-promo-k",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "explore",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff3b3f]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-promo-t",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Fashion & Accessories",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] mt-[6px] text-[26px] font-extrabold leading-[1.2] text-white"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-promo-b",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "shop now →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/fashion-accessories",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-auto inline-flex items-center rounded-[50px] bg-[#ff5554] px-[18px] py-[9px] text-white transition-colors duration-200 group-hover/promo:bg-white group-hover/promo:text-[#ff5554]"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-bold capitalize"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-4-promo-f",
                                                        "type": "container",
                                                        "options": {},
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-[18px] flex flex-col gap-[6px]"
                                                          }
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "em2-cat-4-promo-f0",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-4-promo-fi0",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconCash",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-4-promo-ft0",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "100% Cash on Delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "id": "em2-cat-4-promo-f1",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-4-promo-fi1",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconTruckDelivery",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-4-promo-ft1",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "Fast home delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
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
                                        "id": "em2-cat-5",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "em2-cat group/tab"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-cat-5-tab",
                                            "type": "button",
                                            "options": {
                                              "text": "Lifestyle & Outdoor",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/lifestyle-outdoor",
                                              "target": "",
                                              "icon": "IconChevronRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-tab relative flex w-full flex-row-reverse items-center justify-between gap-[10px] py-[11px] pl-[22px] pr-[18px] text-left text-[15px] leading-[20px] text-[#211913] transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:scale-y-0 before:bg-[#ff5554] before:transition-transform before:duration-200 before:content-[''] group-hover/tab:bg-[#fff8f7] group-hover/tab:text-[#ff5554] group-hover/tab:before:scale-y-100"
                                              },
                                              "icon": {
                                                "classes": "flex shrink-0 items-center"
                                              },
                                              "label": {
                                                "classes": ""
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-cat-5-panel",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-panel absolute inset-y-0 left-[250px] right-0 hidden grid-cols-[minmax(0,1fr)_280px] gap-8 py-6 pl-[34px] pr-6 group-hover/tab:grid max-[1200px]:left-[220px] max-[1200px]:grid-cols-[minmax(0,1fr)_230px] max-[1200px]:gap-5 max-[1200px]:p-5"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-cat-5-content",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "min-w-0 overflow-y-auto pr-[10px]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-5-head",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "mb-[22px] flex items-center justify-between gap-4"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-5-title",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Lifestyle & Outdoor",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] text-[20px] font-bold text-[#211913]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-5-view",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "View all →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/lifestyle-outdoor",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "shrink-0"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-semibold capitalize text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "em2-cat-5-links",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "grid grid-cols-3 gap-x-6 gap-y-[6px] max-[1200px]:grid-cols-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-5-l0",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Lifestyle",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/lifestyle",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-5-l1",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Garden & Outdoor",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/garden-outdoor",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-5-l2",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "Pet Accessories",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/pet-accessories",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "block"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "rounded-[6px] px-3 py-[9px] text-[15px] leading-[20px] text-[#211913] transition-all duration-200 hover:translate-x-1 hover:bg-[#fff8f7] hover:text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "id": "em2-cat-5-promo",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "group/promo relative block overflow-hidden rounded-[16px] bg-[#0b0b0d]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-5-promo-img",
                                                    "type": "image",
                                                    "options": {
                                                      "src": "https://ehansmart.com/cdn/shop/collections/04_Lifestyle_Outdoor.webp?v=1793454828&width=560",
                                                      "altText": "Lifestyle & Outdoor",
                                                      "width": "",
                                                      "height": ""
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "absolute inset-0"
                                                      },
                                                      "link": {
                                                        "classes": "block h-full w-full"
                                                      },
                                                      "img": {
                                                        "classes": "h-full w-full object-cover opacity-55 transition-transform duration-[600ms] group-hover/promo:scale-[1.06]"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "id": "em2-cat-5-promo-in",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "relative flex h-full flex-col items-start bg-[radial-gradient(80%_60%_at_100%_0%,rgba(237,32,36,.35),transparent_70%),linear-gradient(180deg,#0b0b0df2,#0b0b0d8c_45%,#0b0b0df2)] px-6 py-[26px]"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-5-promo-k",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "explore",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff3b3f]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-5-promo-t",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Lifestyle & Outdoor",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] mt-[6px] text-[26px] font-extrabold leading-[1.2] text-white"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-5-promo-b",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "shop now →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/lifestyle-outdoor",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-auto inline-flex items-center rounded-[50px] bg-[#ff5554] px-[18px] py-[9px] text-white transition-colors duration-200 group-hover/promo:bg-white group-hover/promo:text-[#ff5554]"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-bold capitalize"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-5-promo-f",
                                                        "type": "container",
                                                        "options": {},
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-[18px] flex flex-col gap-[6px]"
                                                          }
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "em2-cat-5-promo-f0",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-5-promo-fi0",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconCash",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-5-promo-ft0",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "100% Cash on Delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "id": "em2-cat-5-promo-f1",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-5-promo-fi1",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconTruckDelivery",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-5-promo-ft1",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "Fast home delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
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
                                        "id": "em2-cat-6",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "em2-cat group/tab"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-cat-6-tab",
                                            "type": "button",
                                            "options": {
                                              "text": "Tools & Hardware",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/tools-hardware",
                                              "target": "",
                                              "icon": "IconChevronRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-tab relative flex w-full flex-row-reverse items-center justify-between gap-[10px] py-[11px] pl-[22px] pr-[18px] text-left text-[15px] leading-[20px] text-[#211913] transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:scale-y-0 before:bg-[#ff5554] before:transition-transform before:duration-200 before:content-[''] group-hover/tab:bg-[#fff8f7] group-hover/tab:text-[#ff5554] group-hover/tab:before:scale-y-100"
                                              },
                                              "icon": {
                                                "classes": "flex shrink-0 items-center"
                                              },
                                              "label": {
                                                "classes": ""
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-cat-6-panel",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "em2-cat-panel absolute inset-y-0 left-[250px] right-0 hidden grid-cols-[minmax(0,1fr)_280px] gap-8 py-6 pl-[34px] pr-6 group-hover/tab:grid max-[1200px]:left-[220px] max-[1200px]:grid-cols-[minmax(0,1fr)_230px] max-[1200px]:gap-5 max-[1200px]:p-5"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-cat-6-content",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "min-w-0 overflow-y-auto pr-[10px]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-6-head",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "mb-[22px] flex items-center justify-between gap-4"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-6-title",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Tools & Hardware",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] text-[20px] font-bold text-[#211913]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-6-view",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "View all →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/tools-hardware",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "shrink-0"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-semibold capitalize text-[#ff5554]"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "em2-cat-6-links",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "grid grid-cols-3 gap-x-6 gap-y-[6px] max-[1200px]:grid-cols-2"
                                                      }
                                                    },
                                                    "children": []
                                                  }
                                                ]
                                              },
                                              {
                                                "id": "em2-cat-6-promo",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "group/promo relative block overflow-hidden rounded-[16px] bg-[#0b0b0d]"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "em2-cat-6-promo-img",
                                                    "type": "image",
                                                    "options": {
                                                      "src": "https://ehansmart.com/cdn/shop/collections/15_Tools_Hardware.webp?v=1793382702&width=560",
                                                      "altText": "Tools & Hardware",
                                                      "width": "",
                                                      "height": ""
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "absolute inset-0"
                                                      },
                                                      "link": {
                                                        "classes": "block h-full w-full"
                                                      },
                                                      "img": {
                                                        "classes": "h-full w-full object-cover opacity-55 transition-transform duration-[600ms] group-hover/promo:scale-[1.06]"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "id": "em2-cat-6-promo-in",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "relative flex h-full flex-col items-start bg-[radial-gradient(80%_60%_at_100%_0%,rgba(237,32,36,.35),transparent_70%),linear-gradient(180deg,#0b0b0df2,#0b0b0d8c_45%,#0b0b0df2)] px-6 py-[26px]"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "em2-cat-6-promo-k",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "explore",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "text-[12px] font-bold uppercase tracking-[1.5px] text-[#ff3b3f]"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-6-promo-t",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Tools & Hardware",
                                                          "tag": "p"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-[family-name:var(--font-figtree)] mt-[6px] text-[26px] font-extrabold leading-[1.2] text-white"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-6-promo-b",
                                                        "type": "button",
                                                        "options": {
                                                          "text": "shop now →",
                                                          "linkTo": "custom",
                                                          "scheme": "",
                                                          "url": "/categories/tools-hardware",
                                                          "target": "",
                                                          "icon": "",
                                                          "iconSize": 16
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-auto inline-flex items-center rounded-[50px] bg-[#ff5554] px-[18px] py-[9px] text-white transition-colors duration-200 group-hover/promo:bg-white group-hover/promo:text-[#ff5554]"
                                                          },
                                                          "icon": {
                                                            "classes": ""
                                                          },
                                                          "label": {
                                                            "classes": "text-[14px] font-bold capitalize"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "em2-cat-6-promo-f",
                                                        "type": "container",
                                                        "options": {},
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "mt-[18px] flex flex-col gap-[6px]"
                                                          }
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "em2-cat-6-promo-f0",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-6-promo-fi0",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconCash",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-6-promo-ft0",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "100% Cash on Delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "id": "em2-cat-6-promo-f1",
                                                            "type": "container",
                                                            "options": {},
                                                            "cssSelectors": {
                                                              "*": {
                                                                "classes": "flex items-center gap-2"
                                                              }
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "em2-cat-6-promo-fi1",
                                                                "type": "icon",
                                                                "options": {
                                                                  "iconName": "IconTruckDelivery",
                                                                  "size": 16
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "flex text-[#2bd47d]"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "id": "em2-cat-6-promo-ft1",
                                                                "type": "text",
                                                                "options": {
                                                                  "text": "Fast home delivery",
                                                                  "tag": "p"
                                                                },
                                                                "cssSelectors": {
                                                                  "*": {
                                                                    "classes": "text-[13px] font-semibold text-white"
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
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "em2-nav-baby",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group/nav"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-nav-baby-l",
                                "type": "button",
                                "options": {
                                  "text": "Baby care",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/baby-care",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "relative block px-[14px] py-[6px] text-[14px] capitalize leading-[20px] text-[#211913] transition-all duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#ff5554] after:opacity-0 after:transition-all after:duration-300 after:content-[''] group-hover/nav:bg-[#fcf7f5] group-hover/nav:after:opacity-100"
                                  }
                                }
                              },
                              {
                                "id": "em2-nav-baby-mega",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "invisible absolute left-0 top-full z-[2] max-h-[60dvh] w-full translate-y-[10px] overflow-y-auto rounded-b-[16px] bg-white px-[14px] py-6 opacity-0 shadow-[0_3px_12px_#0000001f] transition-all duration-300 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "em2-nav-baby-mega-in",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap justify-between gap-6"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "em2-nav-baby-c0",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "min-w-[200px]"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-nav-baby-c0-t",
                                            "type": "button",
                                            "options": {
                                              "text": "Baby wear",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/baby-care",
                                              "target": "",
                                              "icon": "",
                                              "iconSize": 16
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mb-3 block"
                                              },
                                              "icon": {
                                                "classes": ""
                                              },
                                              "label": {
                                                "classes": "text-[16px] font-medium capitalize leading-[22px] text-[#211913]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-nav-baby-c0-l",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex flex-col gap-3"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-nav-baby-c0-l0",
                                                "type": "button",
                                                "options": {
                                                  "text": "Baby Pant",
                                                  "linkTo": "custom",
                                                  "scheme": "",
                                                  "url": "/categories/baby-care",
                                                  "target": "",
                                                  "icon": "",
                                                  "iconSize": 16
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "block"
                                                  },
                                                  "icon": {
                                                    "classes": ""
                                                  },
                                                  "label": {
                                                    "classes": "w-fit text-[14px] capitalize leading-[20px] tracking-[0.3px] text-[#211913] underline-offset-2 hover:underline"
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "id": "em2-nav-baby-c1",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "min-w-[200px]"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-nav-baby-c1-t",
                                            "type": "button",
                                            "options": {
                                              "text": "Baby essential",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/baby-care",
                                              "target": "",
                                              "icon": "",
                                              "iconSize": 16
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mb-3 block"
                                              },
                                              "icon": {
                                                "classes": ""
                                              },
                                              "label": {
                                                "classes": "text-[16px] font-medium capitalize leading-[22px] text-[#211913]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-nav-baby-c1-l",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex flex-col gap-3"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "em2-nav-baby-c1-l0",
                                                "type": "button",
                                                "options": {
                                                  "text": "Baby Tools",
                                                  "linkTo": "custom",
                                                  "scheme": "",
                                                  "url": "/categories/baby-care",
                                                  "target": "",
                                                  "icon": "",
                                                  "iconSize": 16
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "block"
                                                  },
                                                  "icon": {
                                                    "classes": ""
                                                  },
                                                  "label": {
                                                    "classes": "w-fit text-[14px] capitalize leading-[20px] tracking-[0.3px] text-[#211913] underline-offset-2 hover:underline"
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "id": "em2-nav-baby-c2",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "min-w-[200px]"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-nav-baby-c2-t",
                                            "type": "button",
                                            "options": {
                                              "text": "Baby lifestyle",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/baby-care",
                                              "target": "",
                                              "icon": "",
                                              "iconSize": 16
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mb-3 block"
                                              },
                                              "icon": {
                                                "classes": ""
                                              },
                                              "label": {
                                                "classes": "text-[16px] font-medium capitalize leading-[22px] text-[#211913]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-nav-baby-c2-l",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex flex-col gap-3"
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
                            "id": "em2-nav-women",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group/nav"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-nav-women-l",
                                "type": "button",
                                "options": {
                                  "text": "Women’s essentials",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/women-s-essentials",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "relative block px-[14px] py-[6px] text-[14px] capitalize leading-[20px] text-[#211913] transition-all duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#ff5554] after:opacity-0 after:transition-all after:duration-300 after:content-[''] group-hover/nav:bg-[#fcf7f5] group-hover/nav:after:opacity-100"
                                  }
                                }
                              },
                              {
                                "id": "em2-nav-women-mega",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "invisible absolute left-0 top-full z-[2] max-h-[60dvh] w-full translate-y-[10px] overflow-y-auto rounded-b-[16px] bg-white px-[14px] py-6 opacity-0 shadow-[0_3px_12px_#0000001f] transition-all duration-300 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "em2-nav-women-mega-in",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap justify-between gap-6"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "em2-nav-women-c0",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "min-w-[200px]"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "em2-nav-women-c0-t",
                                            "type": "button",
                                            "options": {
                                              "text": "Beauty & Grooming Tools",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/women-s-essentials",
                                              "target": "",
                                              "icon": "",
                                              "iconSize": 16
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mb-3 block"
                                              },
                                              "icon": {
                                                "classes": ""
                                              },
                                              "label": {
                                                "classes": "text-[16px] font-medium capitalize leading-[22px] text-[#211913]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "em2-nav-women-c0-l",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex flex-col gap-3"
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
                            "id": "em2-nav-home",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group/nav"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-nav-home-l",
                                "type": "button",
                                "options": {
                                  "text": "Home & Kitchen",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/home-kitchen",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "relative block px-[14px] py-[6px] text-[14px] capitalize leading-[20px] text-[#211913] transition-all duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#ff5554] after:opacity-0 after:transition-all after:duration-300 after:content-[''] group-hover/nav:bg-[#fcf7f5] group-hover/nav:after:opacity-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em2-nav-garden",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group/nav"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-nav-garden-l",
                                "type": "button",
                                "options": {
                                  "text": "Garden & Outdoor",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/garden-outdoor",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "relative block px-[14px] py-[6px] text-[14px] capitalize leading-[20px] text-[#211913] transition-all duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#ff5554] after:opacity-0 after:transition-all after:duration-300 after:content-[''] group-hover/nav:bg-[#fcf7f5] group-hover/nav:after:opacity-100"
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
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "em2-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-t border-[#ed20242e] bg-[radial-gradient(50%_70%_at_100%_0%,#ed202414,transparent_70%),linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)] text-[#211913]"
              }
            },
            "children": [
              {
                "id": "em2-ftr-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-5 max-[992px]:px-0"
                  }
                },
                "children": [
                  {
                    "id": "em2-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-10 py-14 max-[1200px]:grid-cols-4 max-[1200px]:gap-8 max-[992px]:flex max-[992px]:flex-col max-[992px]:gap-0 max-[992px]:py-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-ftr-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full max-[1200px]:col-span-full max-[992px]:border-b max-[992px]:border-[#ed20242e] max-[992px]:px-[10px] max-[992px]:pb-6 max-[992px]:pt-8"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-ftr-logo",
                            "type": "logo",
                            "options": {
                              "logoType": "image",
                              "logoText": "Ehans Mart",
                              "src": "https://ehansmart.com/cdn/shop/files/Ehans_Mart_Logo.webp?v=1793472527&width=300",
                              "link": "/"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex"
                              },
                              "link": {
                                "classes": "flex"
                              },
                              "img": {
                                "classes": "block h-auto w-[150px]"
                              },
                              "text": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "ইহান্স মার্ট - আপনার স্মার্ট অনলাইন শপিং পার্টনার। Quality products, honest prices and cash on delivery — anywhere in Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 max-w-[340px] text-[14px] leading-[1.7] text-[#211913]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-ftr-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-ftr-shop-t",
                            "type": "text",
                            "options": {
                              "text": "Shop",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-figtree)] mb-4 text-[16px] font-semibold capitalize text-[#211913] max-[992px]:mb-0 max-[992px]:border-b max-[992px]:border-[#ed20242e] max-[992px]:px-[10px] max-[992px]:py-4"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-shop-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-[10px] max-[992px]:p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-ftr-shop-0",
                                "type": "button",
                                "options": {
                                  "text": "Baby Care",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/baby-care",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-shop-1",
                                "type": "button",
                                "options": {
                                  "text": "Women’s Essentials",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/women-s-essentials",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-shop-2",
                                "type": "button",
                                "options": {
                                  "text": "Man’s Essentials",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/man-s-essentials",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-shop-3",
                                "type": "button",
                                "options": {
                                  "text": "Lifestyle",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/lifestyle",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "em2-ftr-quick",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-ftr-quick-t",
                            "type": "text",
                            "options": {
                              "text": "Quick Links",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-figtree)] mb-4 text-[16px] font-semibold capitalize text-[#211913] max-[992px]:mb-0 max-[992px]:border-b max-[992px]:border-[#ed20242e] max-[992px]:px-[10px] max-[992px]:py-4"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-quick-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-[10px] max-[992px]:p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-ftr-quick-0",
                                "type": "button",
                                "options": {
                                  "text": "Home",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-quick-1",
                                "type": "button",
                                "options": {
                                  "text": "All products",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-quick-2",
                                "type": "button",
                                "options": {
                                  "text": "About us",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/about",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-quick-3",
                                "type": "button",
                                "options": {
                                  "text": "Blogs",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/blog",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-quick-4",
                                "type": "button",
                                "options": {
                                  "text": "Contact us",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/contact",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-quick-5",
                                "type": "button",
                                "options": {
                                  "text": "FAQ",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/faq",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-quick-6",
                                "type": "button",
                                "options": {
                                  "text": "My cart",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/cart",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "em2-ftr-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-ftr-care-t",
                            "type": "text",
                            "options": {
                              "text": "Customer Care",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-figtree)] mb-4 text-[16px] font-semibold capitalize text-[#211913] max-[992px]:mb-0 max-[992px]:border-b max-[992px]:border-[#ed20242e] max-[992px]:px-[10px] max-[992px]:py-4"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-care-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-[10px] max-[992px]:p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-ftr-care-0",
                                "type": "button",
                                "options": {
                                  "text": "Shipping Policy",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/policy#shipping",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-care-1",
                                "type": "button",
                                "options": {
                                  "text": "Return Policy",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/policy#refund",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-care-2",
                                "type": "button",
                                "options": {
                                  "text": "Exchange Policy",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/policy#exchange",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-care-3",
                                "type": "button",
                                "options": {
                                  "text": "Privacy Policy",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/policy#privacy",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-care-4",
                                "type": "button",
                                "options": {
                                  "text": "Terms Of Service",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/policy#terms",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": "text-[14px] font-normal leading-[21px] text-[#211913] hover:text-[#ff5554] hover:underline"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "em2-ftr-touch",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-ftr-touch-t",
                            "type": "text",
                            "options": {
                              "text": "Get In Touch",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-figtree)] mb-4 text-[16px] font-semibold capitalize text-[#211913] max-[992px]:mb-0 max-[992px]:border-b max-[992px]:border-[#ed20242e] max-[992px]:px-[10px] max-[992px]:py-4"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-touch-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-[10px] max-[992px]:p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-ftr-addr",
                                "type": "button",
                                "options": {
                                  "text": "Kaunia, Rangpur 5400, Bangladesh",
                                  "linkTo": "",
                                  "scheme": "",
                                  "url": "",
                                  "target": "",
                                  "icon": "IconMapPin",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px]"
                                  },
                                  "icon": {
                                    "classes": "mt-px flex shrink-0 text-[#ff5554]"
                                  },
                                  "label": {
                                    "classes": "text-[14px] leading-[1.5] text-[#211913] hover:text-[#ff5554]"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-tel",
                                "type": "button",
                                "options": {
                                  "text": "+8801841650668",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "tel:+8801841650668",
                                  "target": "",
                                  "icon": "IconPhone",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px]"
                                  },
                                  "icon": {
                                    "classes": "mt-px flex shrink-0 text-[#ff5554]"
                                  },
                                  "label": {
                                    "classes": "text-[14px] leading-[1.5] text-[#211913] hover:text-[#ff5554]"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-mail",
                                "type": "button",
                                "options": {
                                  "text": "info@ehansmart.com",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "mailto:info@ehansmart.com",
                                  "target": "",
                                  "icon": "IconMail",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px]"
                                  },
                                  "icon": {
                                    "classes": "mt-px flex shrink-0 text-[#ff5554]"
                                  },
                                  "label": {
                                    "classes": "text-[14px] leading-[1.5] text-[#211913] hover:text-[#ff5554]"
                                  }
                                }
                              },
                              {
                                "id": "em2-ftr-hours",
                                "type": "button",
                                "options": {
                                  "text": "Open 24 hours, 7 days a week",
                                  "linkTo": "",
                                  "scheme": "",
                                  "url": "",
                                  "target": "",
                                  "icon": "IconClock",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px]"
                                  },
                                  "icon": {
                                    "classes": "mt-px flex shrink-0 text-[#ff5554]"
                                  },
                                  "label": {
                                    "classes": "text-[14px] leading-[1.5] text-[#211913] hover:text-[#ff5554]"
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
                    "id": "em2-ftr-bottom",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex items-center justify-between gap-4 border-t border-[#ed20242e] py-5 max-[992px]:flex-col-reverse max-[992px]:justify-center max-[992px]:gap-3 max-[992px]:border-t-0 max-[992px]:px-[10px] max-[992px]:py-4 max-[992px]:text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-ftr-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center whitespace-pre max-[992px]:justify-center"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-ftr-c1",
                            "type": "text",
                            "options": {
                              "text": "© 2026 ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[14px] text-[#211913] max-[575px]:text-[13px]"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-c2",
                            "type": "button",
                            "options": {
                              "text": "Ehans Mart",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "text-[14px] text-[#211913] max-[575px]:text-[13px] font-semibold underline hover:text-[#ff5554]"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-c3",
                            "type": "text",
                            "options": {
                              "text": ". All rights reserved. Made by ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[14px] text-[#211913] max-[575px]:text-[13px]"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-c4",
                            "type": "button",
                            "options": {
                              "text": "Qualixe",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "https://qualixe.com",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "text-[14px] text-[#211913] max-[575px]:text-[13px] font-semibold underline hover:text-[#ff5554]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-ftr-pay",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-2 max-[992px]:justify-center max-[575px]:gap-[6px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-ftr-pay-t",
                            "type": "text",
                            "options": {
                              "text": "We accept",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[13px] text-[#211913] max-[575px]:hidden"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-pay-cod",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[30px] items-center rounded-[4px] border border-[#2119131a] bg-white px-[10px] max-[575px]:h-7 max-[575px]:px-2"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-ftr-pay-codt",
                                "type": "text",
                                "options": {
                                  "text": "Cash On Delivery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[12px] font-semibold text-[#211913] max-[575px]:text-[11px]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em2-ftr-pay-b",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/files/payment-bkash.png?height=60&v=1792577613",
                              "altText": "bKash",
                              "width": "",
                              "height": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[30px] items-center rounded-[4px] border border-[#2119131a] bg-white px-[10px] max-[575px]:h-7 max-[575px]:px-2"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "h-5 w-auto max-[575px]:h-[17px]"
                              }
                            }
                          },
                          {
                            "id": "em2-ftr-pay-n",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/files/payment-nagad.png?height=60&v=1792577613",
                              "altText": "Nagad",
                              "width": "",
                              "height": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[30px] items-center rounded-[4px] border border-[#2119131a] bg-white px-[10px] max-[575px]:h-7 max-[575px]:px-2"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "h-5 w-auto max-[575px]:h-[17px]"
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
        "title": "Home",
        "type": "home",
        "content": [
          {
            "id": "em2-hero",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full bg-[#fcf7f5] py-5 max-[992px]:pb-6 max-[992px]:pt-0"
              }
            },
            "children": [
              {
                "id": "em2-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-5 max-[992px]:px-0"
                  }
                },
                "children": [
                  {
                    "id": "em2-hero-img",
                    "type": "image",
                    "options": {
                      "src": "https://ehansmart.com/cdn/shop/files/WEBP_BANNER.webp?v=1793471843&width=2640",
                      "altText": "Bangladeshi fast-growing e-commerce brand",
                      "width": "",
                      "height": "",
                      "link": "/shop"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "block overflow-hidden rounded-[20px] max-[992px]:rounded-none"
                      },
                      "link": {
                        "classes": "block h-full w-full"
                      },
                      "img": {
                        "classes": "block h-auto w-full"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-cats",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full bg-[#fcf7f5]"
              }
            },
            "children": [
              {
                "id": "em2-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-5 max-[1360px]:px-0"
                  }
                },
                "children": [
                  {
                    "id": "em2-cats-track",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex snap-x gap-[10px] overflow-x-auto [scrollbar-width:none] max-[1360px]:px-5 max-[575px]:px-[10px] [&::-webkit-scrollbar]:hidden"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-cat0",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat0-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/07_Personal_Care.webp?v=1793381540&width=320",
                              "altText": "Personal Care",
                              "width": "",
                              "height": "",
                              "link": "/categories/personal-care"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat0-t",
                            "type": "button",
                            "options": {
                              "text": "Personal Care",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/personal-care",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat1-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/09_Mother_Care.webp?v=1793381616&width=320",
                              "altText": "Mother Care",
                              "width": "",
                              "height": "",
                              "link": "/categories/mother-care"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat1-t",
                            "type": "button",
                            "options": {
                              "text": "Mother Care",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/mother-care",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat2-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/08_Mens_Essentials.webp?v=1793381582&width=320",
                              "altText": "Man’s Essentials",
                              "width": "",
                              "height": "",
                              "link": "/categories/man-s-essentials"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat2-t",
                            "type": "button",
                            "options": {
                              "text": "Man’s Essentials",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/man-s-essentials",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat3-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/04_Lifestyle_Outdoor.webp?v=1793454828&width=320",
                              "altText": "Lifestyle & Outdoor",
                              "width": "",
                              "height": "",
                              "link": "/categories/lifestyle-outdoor"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat3-t",
                            "type": "button",
                            "options": {
                              "text": "Lifestyle & Outdoor",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/lifestyle-outdoor",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat4-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/25_Lifestyle.webp?v=1793382698&width=320",
                              "altText": "Lifestyle",
                              "width": "",
                              "height": "",
                              "link": "/categories/lifestyle"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat4-t",
                            "type": "button",
                            "options": {
                              "text": "Lifestyle",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/lifestyle",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat5-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/03_Kitchen_Tools.webp?v=1793454802&width=320",
                              "altText": "Kitchen Tools",
                              "width": "",
                              "height": "",
                              "link": "/categories/kitchen-tools"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat5-t",
                            "type": "button",
                            "options": {
                              "text": "Kitchen Tools",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/kitchen-tools",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat6-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/01_Kitchen_Safety.webp?v=1793454758&width=320",
                              "altText": "Kitchen Safety",
                              "width": "",
                              "height": "",
                              "link": "/categories/kitchen-safety"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat6-t",
                            "type": "button",
                            "options": {
                              "text": "Kitchen Safety",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/kitchen-safety",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat7",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat7-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/category_3.webp?v=1793381282&width=320",
                              "altText": "School Essentials",
                              "width": "",
                              "height": "",
                              "link": "/categories/school-essentials"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat7-t",
                            "type": "button",
                            "options": {
                              "text": "School Essentials",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/school-essentials",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat8",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat8-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/15_Tools_Hardware.webp?v=1793382702&width=320",
                              "altText": "Tools & Hardware",
                              "width": "",
                              "height": "",
                              "link": "/categories/tools-hardware"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat8-t",
                            "type": "button",
                            "options": {
                              "text": "Tools & Hardware",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/tools-hardware",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat9",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat9-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/02_Kitchen_Cleaning.webp?v=1793454788&width=320",
                              "altText": "Kitchen Cleaning",
                              "width": "",
                              "height": "",
                              "link": "/categories/kitchen-cleaning"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat9-t",
                            "type": "button",
                            "options": {
                              "text": "Kitchen Cleaning",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/kitchen-cleaning",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat10",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat10-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/05_Kids_Fashion.webp?v=1793381463&width=320",
                              "altText": "Kids’ Fashion",
                              "width": "",
                              "height": "",
                              "link": "/categories/kids-fashion"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat10-t",
                            "type": "button",
                            "options": {
                              "text": "Kids’ Fashion",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/kids-fashion",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat11",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat11-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/20_Jewelry.webp?v=1793382769&width=320",
                              "altText": "Jewelry",
                              "width": "",
                              "height": "",
                              "link": "/categories/jewelry"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat11-t",
                            "type": "button",
                            "options": {
                              "text": "Jewelry",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/jewelry",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat12",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat12-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/02_Home_Organization.webp?v=1793381334&width=320",
                              "altText": "Home Organization",
                              "width": "",
                              "height": "",
                              "link": "/categories/home-organization"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat12-t",
                            "type": "button",
                            "options": {
                              "text": "Home Organization",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/home-organization",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat13",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat13-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/16_Cleaning_Supplies.webp?v=1793382734&width=320",
                              "altText": "Pet Accessories",
                              "width": "",
                              "height": "",
                              "link": "/categories/pet-accessories"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat13-t",
                            "type": "button",
                            "options": {
                              "text": "Pet Accessories",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/pet-accessories",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat14",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat14-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/12_Home_Improvement.webp?v=1793381715&width=320",
                              "altText": "Home Improvement",
                              "width": "",
                              "height": "",
                              "link": "/categories/home-improvement"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat14-t",
                            "type": "button",
                            "options": {
                              "text": "Home Improvement",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/home-improvement",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat15",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat15-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/21_Health_Wellness.webp?v=1793382779&width=320",
                              "altText": "Health & Wellness",
                              "width": "",
                              "height": "",
                              "link": "/categories/health-wellness"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat15-t",
                            "type": "button",
                            "options": {
                              "text": "Health & Wellness",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/health-wellness",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat16",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat16-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/19_Hair_Accessories.webp?v=1793382756&width=320",
                              "altText": "Hair Accessories",
                              "width": "",
                              "height": "",
                              "link": "/categories/hair-accessories"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat16-t",
                            "type": "button",
                            "options": {
                              "text": "Hair Accessories",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/hair-accessories",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat17",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat17-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/18_Garden_Outdoor.webp?v=1793382746&width=320",
                              "altText": "Garden & Outdoor",
                              "width": "",
                              "height": "",
                              "link": "/categories/garden-outdoor"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat17-t",
                            "type": "button",
                            "options": {
                              "text": "Garden & Outdoor",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/garden-outdoor",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat18",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat18-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/05_Fashion_Accessories.webp?v=1793454841&width=320",
                              "altText": "Fashion & Accessories",
                              "width": "",
                              "height": "",
                              "link": "/categories/fashion-accessories"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat18-t",
                            "type": "button",
                            "options": {
                              "text": "Fashion & Accessories",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/fashion-accessories",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat19",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat19-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/22_Fashion.webp?v=1793382789&width=320",
                              "altText": "Fashion",
                              "width": "",
                              "height": "",
                              "link": "/categories/fashion"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat19-t",
                            "type": "button",
                            "options": {
                              "text": "Fashion",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/fashion",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat20",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat20-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/15_Tools_Hardware_64930322-725c-4b9a-87c8-f5fe75b48f9b.webp?v=1793382856&width=320",
                              "altText": "Cleaning Supplies",
                              "width": "",
                              "height": "",
                              "link": "/categories/cleaning-supplies"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat20-t",
                            "type": "button",
                            "options": {
                              "text": "Cleaning Supplies",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/cleaning-supplies",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat21",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat21-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/category_1.webp?v=1793381385&width=320",
                              "altText": "Beauty Tools",
                              "width": "",
                              "height": "",
                              "link": "/categories/beauty-tools"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat21-t",
                            "type": "button",
                            "options": {
                              "text": "Beauty Tools",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/beauty-tools",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat22",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat22-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/24_Bathroom_Essentials.webp?v=1793382810&width=320",
                              "altText": "Bathroom Essentials",
                              "width": "",
                              "height": "",
                              "link": "/categories/bathroom-essentials"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat22-t",
                            "type": "button",
                            "options": {
                              "text": "Bathroom Essentials",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/bathroom-essentials",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat23",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat23-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/06_Baby_Safety.webp?v=1793381514&width=320",
                              "altText": "Baby Safety",
                              "width": "",
                              "height": "",
                              "link": "/categories/baby-safety"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat23-t",
                            "type": "button",
                            "options": {
                              "text": "Baby Safety",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/baby-safety",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-cat24",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group/c flex w-[151px] shrink-0 snap-start flex-col items-center gap-[5px] max-[575px]:w-[85px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-cat24-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/collections/07_Baby_Mother.webp?v=1793454875&width=320",
                              "altText": "Baby & Mother",
                              "width": "",
                              "height": "",
                              "link": "/categories/baby-mother"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[8px] bg-[#f6f6f5] shadow-[0_3px_12px_#0000001a] transition-all duration-300 group-hover/c:shadow-[-1px_3px_12px_#0003] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block aspect-square h-auto w-full object-cover transition-all duration-300 group-hover/c:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-cat24-t",
                            "type": "button",
                            "options": {
                              "text": "Baby & Mother",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/baby-mother",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block px-1 text-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-[18px] text-[#211913] transition-all duration-300 group-hover/c:underline max-[575px]:whitespace-normal max-[575px]:text-[12px] max-[575px]:leading-[14px]"
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
            "id": "em2-banners",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full bg-[#fcf7f5] py-6"
              }
            },
            "children": [
              {
                "id": "em2-banners-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-5 max-[575px]:px-[10px]"
                  }
                },
                "children": [
                  {
                    "id": "em2-banners-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-[minmax(0,747fr)_minmax(0,433fr)] gap-5 max-[992px]:grid-cols-2 max-[992px]:gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-banner0",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative overflow-hidden row-span-2 max-[992px]:col-span-2 max-[992px]:row-span-1 before:absolute before:left-[-100%] before:top-0 before:z-[2] before:block before:h-full before:w-1/2 before:skew-x-[-25deg] before:bg-[linear-gradient(to_right,#fff0,#ffffff4d)] before:content-[''] before:pointer-events-none hover:before:left-[125%] hover:before:transition-all hover:before:duration-[950ms]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-banner0-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/files/Home_Kitchen_Best_Deals_Banner_1_copy.webp?v=1793508431&width=1660",
                              "altText": "Home & Kitchen",
                              "width": "",
                              "height": "",
                              "link": "/categories/home-kitchen"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block h-full w-full overflow-hidden rounded-[10px] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block h-full w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-banner1",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative overflow-hidden  before:absolute before:left-[-100%] before:top-0 before:z-[2] before:block before:h-full before:w-1/2 before:skew-x-[-25deg] before:bg-[linear-gradient(to_right,#fff0,#ffffff4d)] before:content-[''] before:pointer-events-none hover:before:left-[125%] hover:before:transition-all hover:before:duration-[950ms]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-banner1-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/files/Woman_wEBP_5852ddb1-564e-4da7-9f33-ed0dac4b2cb0.webp?v=1793507461&width=1660",
                              "altText": "Women’s Essentials",
                              "width": "",
                              "height": "",
                              "link": "/categories/women-s-essentials"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block h-full w-full overflow-hidden rounded-[10px] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block h-full w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em2-banner2",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative overflow-hidden  before:absolute before:left-[-100%] before:top-0 before:z-[2] before:block before:h-full before:w-1/2 before:skew-x-[-25deg] before:bg-[linear-gradient(to_right,#fff0,#ffffff4d)] before:content-[''] before:pointer-events-none hover:before:left-[125%] hover:before:transition-all hover:before:duration-[950ms]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-banner2-img",
                            "type": "image",
                            "options": {
                              "src": "https://ehansmart.com/cdn/shop/files/Kids.webp?v=1793507760&width=1660",
                              "altText": "Baby & Kids",
                              "width": "",
                              "height": "",
                              "link": "/categories/baby-care"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block h-full w-full overflow-hidden rounded-[10px] max-[575px]:rounded-[5px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "block h-full w-full object-cover"
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
            "id": "em2-slider",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full bg-[#fcf7f5] py-6"
              }
            },
            "children": [
              {
                "id": "em2-slider-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-5 max-[575px]:px-[10px]"
                  }
                },
                "children": [
                  {
                    "id": "em2-slider-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-5 flex items-center justify-between gap-4 max-[575px]:gap-[10px]"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-slider-title",
                        "type": "heading",
                        "options": {
                          "text": "Women’s Essentials",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-[family-name:var(--font-figtree)] text-[22px] font-semibold leading-[1.2] text-[#ff5554] max-[575px]:text-[18px]"
                          }
                        }
                      },
                      {
                        "id": "em2-slider-all",
                        "type": "button",
                        "options": {
                          "text": "View All products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/women-s-essentials",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[5px] border border-[#211913] px-[30px] py-[10px] text-[#211913] transition-all duration-300 flex-row-reverse hover:bg-[#211913] hover:text-white max-[767px]:px-[14px] max-[767px]:py-2 max-[575px]:gap-[5px] max-[575px]:px-[10px] max-[575px]:py-[7px]"
                          },
                          "icon": {
                            "classes": "flex items-center"
                          },
                          "label": {
                            "classes": "whitespace-nowrap text-[14px] font-medium capitalize leading-none max-[767px]:text-[13px] max-[575px]:text-[12px]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em2-slider-wrap",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group/sl relative [&_.splide__arrow]:size-10 [&_.splide__arrow]:bg-white [&_.splide__arrow]:opacity-0 [&_.splide__arrow]:transition-opacity group-hover/sl:[&_.splide__arrow]:opacity-100 max-[992px]:[&_.splide__arrow]:opacity-100 [&_.splide__arrow_svg]:size-3"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-slider-ps",
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
                            "perPage": 5,
                            "perMove": 1,
                            "gap": "10px",
                            "arrows": 1,
                            "pagination": 0,
                            "drag": 1,
                            "speed": 400,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "575": {
                                "perPage": 2,
                                "arrows": false
                              },
                              "992": {
                                "perPage": 3
                              }
                            }
                          }
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#2119131a] bg-white"
                          },
                          "arrows-wrap": {
                            "classes": ""
                          },
                          "arrow-item": {
                            "classes": ""
                          },
                          "arrow-prev": {
                            "classes": ""
                          },
                          "arrow-next": {
                            "classes": ""
                          },
                          "pagination": {
                            "classes": ""
                          },
                          "dot": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "em2-slider-loop",
                            "type": "postLoop",
                            "options": {
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": ""
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#2119131a] bg-white"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-sc-thumb",
                                "type": "postThumbnail",
                                "options": {
                                  "linkTo": "postUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                                  },
                                  "link": {
                                    "classes": "absolute inset-0 block h-full w-full"
                                  },
                                  "image": {
                                    "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                                  }
                                }
                              },
                              {
                                "id": "em2-sc-badge",
                                "type": "productDiscount",
                                "options": {
                                  "label": "",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute right-[10px] top-[10px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5554] px-[10px] py-[5px] leading-none text-white max-[749px]:right-2 max-[749px]:top-2 max-[749px]:px-2 max-[749px]:py-1"
                                  },
                                  "discount": {
                                    "classes": "text-[12px] font-bold tracking-[0.3px] before:content-['-'] max-[749px]:text-[11px]"
                                  },
                                  "label": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "em2-sc-body",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-grow flex-col px-[13px] pb-[10px] pt-[13px] max-[749px]:px-[10px]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "em2-sc-title",
                                    "type": "postTitle",
                                    "options": {
                                      "text": "Product Title.",
                                      "tag": "h3",
                                      "linkTo": "postUrl",
                                      "classes": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-[family-name:var(--font-hind-siliguri)] block text-[16px] font-normal capitalize leading-[1.3] tracking-[0.6px] text-[#211913] underline-offset-[3px] hover:underline max-[575px]:text-[12px] max-[575px]:leading-[1.2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "em2-sc-price",
                                    "type": "productPrice",
                                    "options": {
                                      "separator": "",
                                      "variablePriceViewType": "inline"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-row-reverse flex-wrap items-center justify-end gap-[5px] [&>span:nth-child(2)]:hidden"
                                      },
                                      "simple-price-sale": {
                                        "classes": "flex items-start text-[14px] font-normal capitalize leading-none tracking-[1px] text-[#211913]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "flex items-start text-[14px] font-normal capitalize leading-none tracking-[1px] text-[#ff5554] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex flex-wrap items-center gap-[5px]"
                                      },
                                      "variable-price-min": {
                                        "classes": "text-[14px] leading-none tracking-[1px] text-[#211913]"
                                      },
                                      "variable-price-max": {
                                        "classes": "text-[14px] leading-none tracking-[1px] text-[#211913]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "em2-sc-cart",
                                    "type": "addToCart",
                                    "options": {
                                      "buttonText": "Add to cart",
                                      "icon": "",
                                      "iconSize": 16,
                                      "hideQuanity": true,
                                      "hideButton": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-auto flex pt-[13px]"
                                      },
                                      "quantity-wrapper": {
                                        "classes": "hidden"
                                      },
                                      "quantity-input": {
                                        "classes": ""
                                      },
                                      "quantity-plus": {
                                        "classes": ""
                                      },
                                      "quantity-minus": {
                                        "classes": ""
                                      },
                                      "button-wrapper": {
                                        "classes": "font-[family-name:var(--font-figtree)] relative flex min-h-[45px] w-full cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-[4px] bg-[#ff5554] p-2 text-[15px] font-bold uppercase leading-none tracking-[1px] text-white max-[749px]:min-h-9 max-[749px]:text-[13px]"
                                      },
                                      "button-icon": {
                                        "classes": "hidden"
                                      },
                                      "button-label": {
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
            "id": "em2-grid",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full bg-[#fcf7f5] py-6"
              }
            },
            "children": [
              {
                "id": "em2-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-5 max-[575px]:px-[10px]"
                  }
                },
                "children": [
                  {
                    "id": "em2-grid-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-grid-title",
                        "type": "heading",
                        "options": {
                          "text": "Trending Items",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-[family-name:var(--font-figtree)] text-[22px] font-semibold leading-[1.2] text-[#ff5554] max-[575px]:text-[18px]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em2-grid-pg",
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
                        "classes": "grid grid-cols-5 gap-4 max-[992px]:grid-cols-2 max-[767px]:gap-y-6"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#2119131a] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-grid-loop",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-5 gap-4 max-[992px]:grid-cols-2 max-[767px]:gap-y-6"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#2119131a] bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-gc-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                              },
                              "link": {
                                "classes": "absolute inset-0 block h-full w-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                              }
                            }
                          },
                          {
                            "id": "em2-gc-badge",
                            "type": "productDiscount",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute right-[10px] top-[10px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5554] px-[10px] py-[5px] leading-none text-white max-[749px]:right-2 max-[749px]:top-2 max-[749px]:px-2 max-[749px]:py-1"
                              },
                              "discount": {
                                "classes": "text-[12px] font-bold tracking-[0.3px] before:content-['-'] max-[749px]:text-[11px]"
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "em2-gc-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-grow flex-col px-[13px] pb-[10px] pt-[13px] max-[749px]:px-[10px]"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-gc-title",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-[family-name:var(--font-hind-siliguri)] block text-[16px] font-normal capitalize leading-[1.3] tracking-[0.6px] text-[#211913] underline-offset-[3px] hover:underline max-[575px]:text-[12px] max-[575px]:leading-[1.2]"
                                  }
                                }
                              },
                              {
                                "id": "em2-gc-price",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse flex-wrap items-center justify-end gap-[5px] [&>span:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "flex items-start text-[14px] font-normal capitalize leading-none tracking-[1px] text-[#211913]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "flex items-start text-[14px] font-normal capitalize leading-none tracking-[1px] text-[#ff5554] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-center gap-[5px]"
                                  },
                                  "variable-price-min": {
                                    "classes": "text-[14px] leading-none tracking-[1px] text-[#211913]"
                                  },
                                  "variable-price-max": {
                                    "classes": "text-[14px] leading-none tracking-[1px] text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em2-gc-cart",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "icon": "",
                                  "iconSize": 16,
                                  "hideQuanity": true,
                                  "hideButton": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-auto flex pt-[13px]"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-plus": {
                                    "classes": ""
                                  },
                                  "quantity-minus": {
                                    "classes": ""
                                  },
                                  "button-wrapper": {
                                    "classes": "font-[family-name:var(--font-figtree)] relative flex min-h-[45px] w-full cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-[4px] bg-[#ff5554] p-2 text-[15px] font-bold uppercase leading-none tracking-[1px] text-white max-[749px]:min-h-9 max-[749px]:text-[13px]"
                                  },
                                  "button-icon": {
                                    "classes": "hidden"
                                  },
                                  "button-label": {
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
                    "id": "em2-grid-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-grid-show",
                        "type": "button",
                        "options": {
                          "text": "Show more",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconChevronDown",
                          "iconSize": 20
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group/more font-[family-name:var(--font-figtree)] inline-flex min-h-11 flex-row-reverse items-center justify-center gap-2 px-4 py-[10px] text-[#ff5554]"
                          },
                          "icon": {
                            "classes": "flex animate-bounce items-center [animation-duration:1.6s]"
                          },
                          "label": {
                            "classes": "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-[3px] text-[15px] font-bold uppercase tracking-[1px] transition-[background-size] duration-300 group-hover/more:bg-[length:100%_2px]"
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
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "em2-p-shop-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-shop-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-shop-head-t",
                    "type": "heading",
                    "options": {
                      "text": "All Products",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-shop",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-shop-pg",
                "type": "postGrid",
                "options": {
                  "classes": "",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-shop-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-shop-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-shop-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-shop-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-shop-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-hind-siliguri)] block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-shop-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-shop-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em2-p-shop-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Product",
        "type": "product",
        "content": [
          {
            "id": "em2-p-pd",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-10"
              }
            },
            "children": [
              {
                "id": "em2-p-pd-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-pd-gal-c",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-pd-gal",
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
                            "classes": "w-full overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-contain"
                          },
                          "thumbnail-item": {
                            "classes": "size-20 overflow-hidden rounded-[5px] border border-[#e8e3e1] bg-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em2-p-pd-buy",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-pd-cats",
                        "type": "productCategories",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] font-medium uppercase tracking-[1px] text-[#6c6c6c]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-title",
                        "type": "postTitle",
                        "options": {
                          "text": "Product Title.",
                          "tag": "h1",
                          "linkTo": "",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-[family-name:var(--font-hind-siliguri)] text-[24px] font-semibold capitalize leading-[1.3] tracking-[0.6px] text-[#211913] sm:text-[30px]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-rate",
                        "type": "productRatings",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          },
                          "star-rate": {
                            "classes": "text-[#ff5554]"
                          },
                          "rate-count": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          },
                          "avg-rating": {
                            "classes": "text-[13px] font-semibold text-[#211913]"
                          },
                          "total-reviews": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          },
                          "icon": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-price",
                        "type": "productPrice",
                        "options": {
                          "separator": "",
                          "variablePriceViewType": "inline"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-3"
                          },
                          "simple-price-wrap": {
                            "classes": "flex flex-wrap items-baseline gap-3"
                          },
                          "simple-price-sale": {
                            "classes": "text-[28px] font-bold leading-none text-[#211913]"
                          },
                          "simple-price-regular": {
                            "classes": "text-[16px] leading-none text-[#ff5454] line-through"
                          },
                          "variable-price-wrap": {
                            "classes": "flex flex-wrap items-baseline gap-3"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-stock",
                        "type": "productStockStatus",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[14px] font-medium text-[#008000]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-var",
                        "type": "productVariations",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-cart",
                        "type": "addToCart",
                        "options": {
                          "buttonText": "add to cart",
                          "icon": "IconShoppingCart",
                          "iconSize": 18,
                          "hideQuanity": false,
                          "hideButton": false
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-3"
                          },
                          "quantity-wrapper": {
                            "classes": "flex items-center rounded-[5px] border border-[#e8e3e1] bg-white"
                          },
                          "quantity-input": {
                            "classes": "h-[52px] w-12 border-0 bg-transparent text-center text-[16px] text-[#211913] outline-none"
                          },
                          "quantity-plus": {
                            "classes": "flex size-[52px] items-center justify-center text-[#211913] hover:text-[#ff5554]"
                          },
                          "quantity-minus": {
                            "classes": "flex size-[52px] items-center justify-center text-[#211913] hover:text-[#ff5554]"
                          },
                          "button-wrapper": {
                            "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90 max-w-[320px] flex-1"
                          },
                          "button-icon": {
                            "classes": "mr-2 size-[18px]"
                          },
                          "button-label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-wa",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Order on WhatsApp",
                          "phone": "",
                          "message": "Hi, I would like to order this from Ehans Mart.",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-fit"
                          },
                          "link": {
                            "classes": "flex items-center gap-2 rounded-[5px] bg-[#25d366] px-5 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                          },
                          "icon": {
                            "classes": "size-[18px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-sku",
                        "type": "productSku",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-brands",
                        "type": "productBrands",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-content",
                        "type": "postContent",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-2 border-t border-[#e8e3e1] pt-5 text-[16px] leading-[22px] text-[#211913]"
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
            "id": "em2-p-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 pb-12"
              }
            },
            "children": [
              {
                "id": "em2-p-pd-rel-t",
                "type": "heading",
                "options": {
                  "text": "You may also like",
                  "tag": "h2"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "font-[family-name:var(--font-figtree)] mb-5 text-[18px] font-semibold leading-[1.2] text-[#ff5554] sm:text-[22px]"
                  }
                }
              },
              {
                "id": "em2-p-pd-rel-g",
                "type": "relatedProducts",
                "options": {
                  "posts_per_page": "6"
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-pd-rel-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-pd-rel-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-rel-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-pd-rel-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-pd-rel-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-hind-siliguri)] block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-pd-rel-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-pd-rel-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
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
        "title": "Categories Archive",
        "type": "categories",
        "content": [
          {
            "id": "em2-p-categories-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-categories-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-categories-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Categories Archive",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-categories",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-categories-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_cat",
                    "order": "ASC",
                    "orderby": "name",
                    "per_page": "24",
                    "hide_empty": false
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-8"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-categories-loop",
                    "type": "termsLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-categories-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full overflow-hidden rounded-[8px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "em2-p-categories-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title",
                          "tag": "h3",
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "px-1 text-center text-[14px] font-medium capitalize leading-[18px] text-[#211913] group-hover:underline"
                          }
                        }
                      },
                      {
                        "id": "em2-p-categories-count",
                        "type": "termCount",
                        "options": {
                          "prefix": "",
                          "suffix": " items"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-center text-[14px] font-light leading-none text-[#6c6c6c]"
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
        "title": "Categories Single",
        "type": "categories_single",
        "content": [
          {
            "id": "em2-p-categories_single-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-categories_single-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-categories_single-head-t",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-categories_single",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-categories_single-pg",
                "type": "postGrid",
                "options": {
                  "classes": "",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-categories_single-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-categories_single-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-categories_single-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-categories_single-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-categories_single-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-hind-siliguri)] block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-categories_single-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-categories_single-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em2-p-categories_single-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Tags Archive",
        "type": "tags",
        "content": [
          {
            "id": "em2-p-tags-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-tags-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-tags-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Tags Archive",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-tags",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-tags-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_tag",
                    "order": "ASC",
                    "orderby": "name",
                    "per_page": "24",
                    "hide_empty": false
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-8"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-tags-loop",
                    "type": "termsLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-tags-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full overflow-hidden rounded-[8px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "em2-p-tags-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title",
                          "tag": "h3",
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "px-1 text-center text-[14px] font-medium capitalize leading-[18px] text-[#211913] group-hover:underline"
                          }
                        }
                      },
                      {
                        "id": "em2-p-tags-count",
                        "type": "termCount",
                        "options": {
                          "prefix": "",
                          "suffix": " items"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-center text-[14px] font-light leading-none text-[#6c6c6c]"
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
        "title": "Tags Single",
        "type": "tags_single",
        "content": [
          {
            "id": "em2-p-tags_single-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-tags_single-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-tags_single-head-t",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-tags_single",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-tags_single-pg",
                "type": "postGrid",
                "options": {
                  "classes": "",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-tags_single-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-tags_single-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-tags_single-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-tags_single-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-tags_single-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-hind-siliguri)] block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-tags_single-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-tags_single-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em2-p-tags_single-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Brands Archive",
        "type": "brands",
        "content": [
          {
            "id": "em2-p-brands-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-brands-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-brands-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Brands Archive",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-brands",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-brands-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_brand",
                    "order": "ASC",
                    "orderby": "name",
                    "per_page": "24",
                    "hide_empty": false
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-8"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-brands-loop",
                    "type": "termsLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-brands-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full overflow-hidden rounded-[8px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "em2-p-brands-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title",
                          "tag": "h3",
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "px-1 text-center text-[14px] font-medium capitalize leading-[18px] text-[#211913] group-hover:underline"
                          }
                        }
                      },
                      {
                        "id": "em2-p-brands-count",
                        "type": "termCount",
                        "options": {
                          "prefix": "",
                          "suffix": " items"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-center text-[14px] font-light leading-none text-[#6c6c6c]"
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
        "title": "Brands Single",
        "type": "brands_single",
        "content": [
          {
            "id": "em2-p-brands_single-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-brands_single-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-brands_single-head-t",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-brands_single",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-brands_single-pg",
                "type": "postGrid",
                "options": {
                  "classes": "",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-brands_single-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-brands_single-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em2-p-brands_single-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-brands_single-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-brands_single-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-hind-siliguri)] block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-brands_single-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-brands_single-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em2-p-brands_single-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Blog Archive",
        "type": "blog",
        "content": [
          {
            "id": "em2-p-blog-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-blog-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-blog-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Blog",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-blog",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-blog-pg",
                "type": "postGrid",
                "options": {
                  "classes": "",
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
                    "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  },
                  "loop-item": {
                    "classes": "group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-blog-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-blog-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "block w-full overflow-hidden rounded-t-[8px] bg-white"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          }
                        }
                      },
                      {
                        "id": "em2-p-blog-c-body",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-blog-c-date",
                            "type": "postDate",
                            "options": {
                              "format": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[13px] text-[#6c6c6c]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-blog-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Post Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-[family-name:var(--font-hind-siliguri)] mt-2 text-[16px] font-semibold leading-[1.3] text-[#211913] group-hover:text-[#ff5554]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-blog-c-ex",
                            "type": "postExcerpt",
                            "options": {
                              "length": 110
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-[14px] leading-[22px] text-[#6c6c6c]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em2-p-blog-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Blog Single",
        "type": "blog_single",
        "content": [
          {
            "id": "em2-p-bs",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[820px] px-4 py-10 sm:px-5"
              }
            },
            "children": [
              {
                "id": "em2-p-bs-title",
                "type": "postTitle",
                "options": {
                  "text": "Post Title.",
                  "tag": "h1",
                  "linkTo": "",
                  "classes": ""
                },
                "cssSelectors": {
                  "*": {
                    "classes": "font-[family-name:var(--font-hind-siliguri)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                  }
                }
              },
              {
                "id": "em2-p-bs-meta",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-4 flex flex-wrap items-center gap-4"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-bs-m1",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-bs-author",
                        "type": "postAuthor",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[14px] text-[#6c6c6c]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em2-p-bs-m2",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-bs-date",
                        "type": "postDate",
                        "options": {
                          "format": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[14px] text-[#6c6c6c]"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "em2-p-bs-thumb",
                "type": "postThumbnail",
                "options": {
                  "linkTo": "",
                  "classes": ""
                },
                "cssSelectors": {
                  "*": {
                    "classes": "mt-6 block w-full overflow-hidden rounded-[10px] bg-white"
                  },
                  "link": {
                    "classes": "block h-full w-full"
                  },
                  "image": {
                    "classes": "aspect-[16/9] h-full w-full object-cover"
                  }
                }
              },
              {
                "id": "em2-p-bs-content",
                "type": "postContent",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-6 text-[16px] leading-[26px] text-[#211913]"
                  }
                }
              },
              {
                "id": "em2-p-bs-comments",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-10 border-t border-[#e8e3e1] pt-8"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-bs-c-t",
                    "type": "heading",
                    "options": {
                      "text": "Comments",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] mb-5 text-[22px] font-semibold text-[#211913]"
                      }
                    }
                  },
                  {
                    "id": "em2-p-bs-cg",
                    "type": "commentsGrid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "flex flex-col gap-5"
                      },
                      "loop-item": {
                        "classes": "flex gap-3 rounded-[8px] border border-[#e8e3e1] bg-white p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-bs-cl",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "flex flex-col gap-5"
                          },
                          "loop-item": {
                            "classes": "flex gap-3 rounded-[8px] border border-[#e8e3e1] bg-white p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-bs-ca",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "size-10 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5]"
                              },
                              "image": {
                                "classes": "h-full w-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "em2-p-bs-cau",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[14px] font-semibold text-[#211913]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-bs-crt",
                            "type": "commentRate",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[#ff5554]"
                              }
                            }
                          },
                          {
                            "id": "em2-p-bs-cc",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[14px] leading-[22px] text-[#6c6c6c]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em2-p-bs-cf",
                    "type": "commentsForm",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-8"
                      },
                      "input": {
                        "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913]"
                      },
                      "textarea": {
                        "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913]"
                      },
                      "button": {
                        "classes": "mt-3 w-fit rounded-[5px] bg-[#ff5554] px-[30px] py-[10px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
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
        "title": "Account",
        "type": "account",
        "content": [
          {
            "id": "em2-p-acc-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em2-p-acc-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-acc-head-t",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em2-p-acc",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em2-p-acc-root",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-acc-out",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-acc-out-g",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto grid max-w-[900px] grid-cols-1 gap-6 lg:grid-cols-2"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-acc-login-c",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-[8px] border border-[#e8e3e1] bg-white p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-p-acc-login-t",
                                "type": "heading",
                                "options": {
                                  "text": "Login",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-[family-name:var(--font-figtree)] mb-4 text-[22px] font-semibold text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em2-p-acc-login",
                                "type": "login",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3"
                                  },
                                  "input": {
                                    "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913] outline-none focus:border-[#ff5554]"
                                  },
                                  "button": {
                                    "classes": "w-full rounded-[5px] bg-[#ff5554] px-[30px] py-[12px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
                                  },
                                  "label": {
                                    "classes": "text-[13px] font-medium text-[#211913]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em2-p-acc-reg-c",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-[8px] border border-[#e8e3e1] bg-white p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "em2-p-acc-reg-t",
                                "type": "heading",
                                "options": {
                                  "text": "Create account",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-[family-name:var(--font-figtree)] mb-4 text-[22px] font-semibold text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em2-p-acc-reg",
                                "type": "register",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3"
                                  },
                                  "input": {
                                    "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913] outline-none focus:border-[#ff5554]"
                                  },
                                  "button": {
                                    "classes": "w-full rounded-[5px] bg-[#ff5554] px-[30px] py-[12px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
                                  },
                                  "label": {
                                    "classes": "text-[13px] font-medium text-[#211913]"
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
                    "id": "em2-p-acc-in",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-acc-tabs",
                        "type": "tabs",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6"
                          },
                          "tabs-nav": {
                            "classes": "flex flex-wrap gap-2 border-b border-[#e8e3e1]"
                          },
                          "tabs-nav-item": {
                            "classes": "cursor-pointer px-4 py-3 text-[14px] font-medium capitalize text-[#6c6c6c] hover:text-[#ff5554]"
                          },
                          "tabs-nav-item-active": {
                            "classes": "cursor-pointer border-b-2 border-[#ff5554] px-4 py-3 text-[14px] font-semibold capitalize text-[#ff5554]"
                          },
                          "tabs-content": {
                            "classes": "pt-2"
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-acc-tab-1",
                            "type": "tabsItem",
                            "options": {
                              "label": "Orders"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em2-p-acc-orders",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  },
                                  "table": {
                                    "classes": "w-full overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white text-[14px]"
                                  },
                                  "th": {
                                    "classes": "bg-[#fcf7f5] px-4 py-3 text-left text-[13px] font-semibold text-[#211913]"
                                  },
                                  "td": {
                                    "classes": "border-t border-[#e8e3e1] px-4 py-3 text-[#211913]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em2-p-acc-tab-2",
                            "type": "tabsItem",
                            "options": {
                              "label": "Profile"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em2-p-acc-profile",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                }
                              },
                              {
                                "id": "em2-p-acc-profile-e",
                                "type": "customerProfileEdit",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-3"
                                  },
                                  "input": {
                                    "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913] outline-none focus:border-[#ff5554]"
                                  },
                                  "button": {
                                    "classes": "w-full rounded-[5px] bg-[#ff5554] px-[30px] py-[12px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
                                  },
                                  "label": {
                                    "classes": "text-[13px] font-medium text-[#211913]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em2-p-acc-tab-3",
                            "type": "tabsItem",
                            "options": {
                              "label": "Subscriptions"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em2-p-acc-subs",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em2-p-acc-tab-4",
                            "type": "tabsItem",
                            "options": {
                              "label": "Support"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em2-p-acc-tickets",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
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
        "title": "Thank you",
        "type": "thank_you",
        "content": [
          {
            "id": "em2-p-ty",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-16"
              }
            },
            "children": [
              {
                "id": "em2-p-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto max-w-[620px] rounded-[16px] border border-[#e8e3e1] bg-white p-8 text-center sm:p-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-ty-ic",
                    "type": "text",
                    "options": {
                      "text": "✓",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#008000] text-[26px] font-bold text-white"
                      }
                    }
                  },
                  {
                    "id": "em2-p-ty-t",
                    "type": "heading",
                    "options": {
                      "text": "Thank you for your order",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.5rem,calc(1.38rem+0.6vw),1.875rem)] font-semibold leading-[1.2] text-[#211913]"
                      }
                    }
                  },
                  {
                    "id": "em2-p-ty-p",
                    "type": "text",
                    "options": {
                      "text": "We have your order and will call to confirm delivery. You can pay cash when it arrives.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mt-4 max-w-[460px] text-[16px] leading-[22px] text-[#6c6c6c]"
                      }
                    }
                  },
                  {
                    "id": "em2-p-ty-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-7 flex flex-wrap items-center justify-center gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-ty-b1",
                        "type": "button",
                        "options": {
                          "text": "Continue shopping",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center justify-center gap-2 rounded-[5px] border border-[#211913] px-[30px] py-[10px] text-[14px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white w-auto"
                          },
                          "icon": {
                            "classes": ""
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em2-p-ty-b2",
                        "type": "button",
                        "options": {
                          "text": "View my orders",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/account",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-auto rounded-[5px] bg-[#ff5554] px-[30px] py-[10px] text-[14px] font-medium capitalize text-white transition-opacity hover:opacity-90"
                          },
                          "icon": {
                            "classes": ""
                          },
                          "label": {
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
      },
      {
        "title": "404",
        "type": "404",
        "content": [
          {
            "id": "em2-p-404",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "font-[family-name:var(--font-dm-sans)] mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-16 text-center"
              }
            },
            "children": [
              {
                "id": "em2-p-404-n",
                "type": "text",
                "options": {
                  "text": "404",
                  "tag": "span"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "block text-[clamp(4rem,12vw,8rem)] font-bold leading-none text-[#ff5554]"
                  }
                }
              },
              {
                "id": "em2-p-404-t",
                "type": "heading",
                "options": {
                  "text": "We could not find that page",
                  "tag": "h1"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "font-[family-name:var(--font-figtree)] text-[clamp(1.5rem,calc(1.38rem+0.6vw),1.875rem)] font-semibold leading-[1.2] mt-4 text-[#211913]"
                  }
                }
              },
              {
                "id": "em2-p-404-p",
                "type": "text",
                "options": {
                  "text": "The link may be old, or the product may have sold out. Try a search, or browse the shop.",
                  "tag": "p"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto mt-4 max-w-[480px] text-[16px] leading-[22px] text-[#6c6c6c]"
                  }
                }
              },
              {
                "id": "em2-p-404-btns",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-7 flex flex-wrap items-center justify-center gap-3"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-404-b1",
                    "type": "button",
                    "options": {
                      "text": "Back to home",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/",
                      "target": "",
                      "icon": "",
                      "iconSize": 14
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center justify-center gap-2 rounded-[5px] border border-[#211913] px-[30px] py-[10px] text-[14px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white w-auto"
                      },
                      "icon": {
                        "classes": ""
                      },
                      "label": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "em2-p-404-b2",
                    "type": "button",
                    "options": {
                      "text": "Shop all products",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/shop",
                      "target": "",
                      "icon": "",
                      "iconSize": 14
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-auto rounded-[5px] bg-[#ff5554] px-[30px] py-[10px] text-[14px] font-medium capitalize text-white transition-opacity hover:opacity-90"
                      },
                      "icon": {
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
                "id": "em2-p-404-cats",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-12"
                  }
                },
                "children": [
                  {
                    "id": "em2-p-404-tg",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "order": "ASC",
                        "orderby": "name",
                        "per_page": "9",
                        "hide_empty": false
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-4 gap-x-3 gap-y-4 sm:grid-cols-6 lg:grid-cols-9 lg:gap-x-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                      }
                    },
                    "children": [
                      {
                        "id": "em2-p-404-tg-loop",
                        "type": "termsLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "em2-p-404-tg-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[5px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)] sm:rounded-[8px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em2-p-404-tg-title",
                            "type": "termTitle",
                            "options": {
                              "text": "Term Title",
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-1 text-center text-[12px] font-medium capitalize leading-[14px] text-[#211913] transition-all duration-300 group-hover:underline sm:text-[14px] sm:leading-[18px]"
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
];

export default template;
