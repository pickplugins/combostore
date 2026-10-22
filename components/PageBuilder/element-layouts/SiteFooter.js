/**
 * Layout presets for the `siteFooter` element.
 *
 * Each preset's `content` is rooted at a `siteFooter` block so the Layouts panel
 * can Replace the selected footer like-for-like. Block ids are regenerated on
 * Add/Replace, so the ids below only need to be unique within a preset.
 *
 * Note: `linkList` items link through `item.slug` (see elements/LinkList.jsx),
 * not `item.url`.
 */

var layouts = [

  {
    title: 'Four Column Classic',
    thumbnail: '',
    content: {
      "id": "ftr-classic",
      "type": "siteFooter",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-t border-gray-200" } },
      "children": [
        {
          "id": "ftr-classic-main",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-12" } },
          "children": [
            {
              "id": "ftr-classic-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-classic-gi-brand",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                  "children": [
                    {
                      "id": "ftr-classic-logo",
                      "type": "logo",
                      "options": { "logoType": "image", "logoText": "My Store", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-36 h-auto object-contain" },
                        "text": { "classes": "text-xl font-bold text-neutral-900" }
                      }
                    },
                    {
                      "id": "ftr-classic-tagline",
                      "type": "text",
                      "options": { "text": "Quality products delivered to your door, all across the country.", "tag": "p" },
                      "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xs" } }
                    },
                    {
                      "id": "ftr-classic-address",
                      "type": "address",
                      "options": {
                        "phone": { "icon": "IconPhone", "label": "Phone", "value": "+880 1700 000000" },
                        "email": { "icon": "IconMail", "label": "Email", "value": "support@mystore.com" },
                        "location": { "icon": "IconMapPin", "label": "Location", "value": "House 12, Road 5, Dhaka 1212" },
                        "iconSize": 18
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-600" },
                        "item": { "classes": "flex gap-2 items-start" },
                        "link": { "classes": "flex gap-2 items-center hover:text-neutral-900" },
                        "phone-link": { "classes": "" },
                        "email-link": { "classes": "" },
                        "icon": { "classes": "text-neutral-400 shrink-0" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-classic-gi-shop",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-classic-ll-shop",
                      "type": "linkList",
                      "options": {
                        "headerText": "Shop",
                        "tag": "ul",
                        "items": [
                          { "text": "New Arrivals", "icon": "", "slug": "/shop/new" },
                          { "text": "Best Sellers", "icon": "", "slug": "/shop/best-sellers" },
                          { "text": "Offers", "icon": "", "slug": "/shop/offers" },
                          { "text": "All Categories", "icon": "", "slug": "/categories" },
                          { "text": "Brands", "icon": "", "slug": "/brands" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                        "icon": { "classes": "text-neutral-400" },
                        "text": { "classes": "text-sm text-neutral-600" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-classic-gi-help",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-classic-ll-help",
                      "type": "linkList",
                      "options": {
                        "headerText": "Customer Service",
                        "tag": "ul",
                        "items": [
                          { "text": "Track Order", "icon": "", "slug": "/track-order" },
                          { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
                          { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
                          { "text": "Support Tickets", "icon": "", "slug": "/support" },
                          { "text": "FAQ", "icon": "", "slug": "/faq" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                        "icon": { "classes": "text-neutral-400" },
                        "text": { "classes": "text-sm text-neutral-600" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-classic-gi-company",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-classic-ll-company",
                      "type": "linkList",
                      "options": {
                        "headerText": "Company",
                        "tag": "ul",
                        "items": [
                          { "text": "About Us", "icon": "", "slug": "/about" },
                          { "text": "Blog", "icon": "", "slug": "/blog" },
                          { "text": "Contact", "icon": "", "slug": "/contact" },
                          { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
                          { "text": "Terms & Conditions", "icon": "", "slug": "/terms" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                        "icon": { "classes": "text-neutral-400" },
                        "text": { "classes": "text-sm text-neutral-600" }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ftr-classic-bottom",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "border-t border-gray-200" } },
          "children": [
            {
              "id": "ftr-classic-bottom-inner",
              "type": "columns",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                "column": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-classic-copy-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-classic-copy",
                      "type": "text",
                      "options": { "text": "(c) 2026 My Store. All rights reserved.", "tag": "p" },
                      "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                    }
                  ]
                },
                {
                  "id": "ftr-classic-pay-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                  "children": [
                    {
                      "id": "ftr-classic-pay",
                      "type": "image",
                      "options": { "src": "https://placehold.co/240x32?text=Payments", "link": "" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "" },
                        "img": { "classes": "h-7 w-auto object-contain opacity-80" }
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
  },

  {
    title: 'Dark Mega',
    thumbnail: '',
    content: {
      "id": "ftr-dark",
      "type": "siteFooter",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-neutral-900 text-neutral-300" } },
      "children": [
        {
          "id": "ftr-dark-main",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-14" } },
          "children": [
            {
              "id": "ftr-dark-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-dark-gi-brand",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "lg:col-span-2 flex flex-col gap-4" } },
                  "children": [
                    {
                      "id": "ftr-dark-logo",
                      "type": "logo",
                      "options": { "logoType": "text", "logoText": "MY STORE", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-36 h-auto object-contain" },
                        "text": { "classes": "text-2xl font-black tracking-tight text-white" }
                      }
                    },
                    {
                      "id": "ftr-dark-tagline",
                      "type": "text",
                      "options": { "text": "Thousands of products, nationwide delivery and support seven days a week.", "tag": "p" },
                      "cssSelectors": { "*": { "classes": "text-sm text-neutral-400 leading-relaxed max-w-sm" } }
                    },
                    {
                      "id": "ftr-dark-address",
                      "type": "address",
                      "options": {
                        "phone": { "icon": "IconPhone", "label": "Phone", "value": "+880 1700 000000" },
                        "email": { "icon": "IconMail", "label": "Email", "value": "support@mystore.com" },
                        "location": { "icon": "IconMapPin", "label": "Location", "value": "House 12, Road 5, Dhaka 1212" },
                        "iconSize": 18
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-400" },
                        "item": { "classes": "flex gap-2 items-start" },
                        "link": { "classes": "flex gap-2 items-center hover:text-white" },
                        "phone-link": { "classes": "" },
                        "email-link": { "classes": "" },
                        "icon": { "classes": "text-amber-400 shrink-0" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-dark-gi-shop",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-dark-ll-shop",
                      "type": "linkList",
                      "options": {
                        "headerText": "Shop",
                        "tag": "ul",
                        "items": [
                          { "text": "New Arrivals", "icon": "", "slug": "/shop/new" },
                          { "text": "Best Sellers", "icon": "", "slug": "/shop/best-sellers" },
                          { "text": "Deals", "icon": "", "slug": "/shop/offers" },
                          { "text": "Brands", "icon": "", "slug": "/brands" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-white uppercase tracking-wide" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-amber-400 transition-colors" },
                        "icon": { "classes": "text-neutral-500" },
                        "text": { "classes": "text-sm text-neutral-400" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-dark-gi-help",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-dark-ll-help",
                      "type": "linkList",
                      "options": {
                        "headerText": "Help",
                        "tag": "ul",
                        "items": [
                          { "text": "Track Order", "icon": "", "slug": "/track-order" },
                          { "text": "Shipping", "icon": "", "slug": "/shipping" },
                          { "text": "Returns", "icon": "", "slug": "/returns" },
                          { "text": "FAQ", "icon": "", "slug": "/faq" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-white uppercase tracking-wide" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-amber-400 transition-colors" },
                        "icon": { "classes": "text-neutral-500" },
                        "text": { "classes": "text-sm text-neutral-400" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-dark-gi-company",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-dark-ll-company",
                      "type": "linkList",
                      "options": {
                        "headerText": "Company",
                        "tag": "ul",
                        "items": [
                          { "text": "About", "icon": "", "slug": "/about" },
                          { "text": "Blog", "icon": "", "slug": "/blog" },
                          { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
                          { "text": "Terms", "icon": "", "slug": "/terms" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-white uppercase tracking-wide" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-amber-400 transition-colors" },
                        "icon": { "classes": "text-neutral-500" },
                        "text": { "classes": "text-sm text-neutral-400" }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ftr-dark-bottom",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "border-t border-neutral-800" } },
          "children": [
            {
              "id": "ftr-dark-bottom-inner",
              "type": "columns",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                "column": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-dark-copy-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-dark-copy",
                      "type": "text",
                      "options": { "text": "(c) 2026 My Store. All rights reserved.", "tag": "p" },
                      "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                    }
                  ]
                },
                {
                  "id": "ftr-dark-legal-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-dark-legal-menu",
                      "type": "menu",
                      "options": {},
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "menu": { "classes": "flex gap-5 text-xs text-neutral-500" },
                        "menu-item": { "classes": "" },
                        "sub-menu": { "classes": "" },
                        "menu-link": { "classes": "hover:text-white transition-colors" },
                        "link-label": { "classes": "" },
                        "icon": { "classes": "" }
                      },
                      "children": [
                        { "id": "ftr-dark-legal-1", "type": "menuItem", "options": { "label": "Privacy", "url": "/privacy-policy" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "ftr-dark-legal-2", "type": "menuItem", "options": { "label": "Terms", "url": "/terms" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "ftr-dark-legal-3", "type": "menuItem", "options": { "label": "Refunds", "url": "/returns" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
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
  },

  {
    title: 'Centered Stacked',
    thumbnail: '',
    content: {
      "id": "ftr-center",
      "type": "siteFooter",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white border-t border-gray-200" } },
      "children": [
        {
          "id": "ftr-center-main",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-4xl mx-auto px-5 py-14 flex flex-col items-center gap-6 text-center" } },
          "children": [
            {
              "id": "ftr-center-logo",
              "type": "logo",
              "options": { "logoType": "text", "logoText": "MY STORE", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
              "cssSelectors": {
                "*": { "classes": "" },
                "link": { "classes": "inline-block" },
                "img": { "classes": "w-36 h-auto object-contain mx-auto" },
                "text": { "classes": "text-2xl font-semibold tracking-[0.25em] text-neutral-900" }
              }
            },
            {
              "id": "ftr-center-tagline",
              "type": "text",
              "options": { "text": "Carefully chosen products, delivered nationwide.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-md" } }
            },
            {
              "id": "ftr-center-menu",
              "type": "menu",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "" },
                "menu": { "classes": "flex gap-7 flex-wrap justify-center text-xs uppercase tracking-widest text-neutral-600" },
                "menu-item": { "classes": "" },
                "sub-menu": { "classes": "" },
                "menu-link": { "classes": "hover:text-neutral-900 transition-colors" },
                "link-label": { "classes": "" },
                "icon": { "classes": "" }
              },
              "children": [
                { "id": "ftr-center-mi-1", "type": "menuItem", "options": { "label": "Shop", "url": "/shop" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "ftr-center-mi-2", "type": "menuItem", "options": { "label": "About", "url": "/about" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "ftr-center-mi-3", "type": "menuItem", "options": { "label": "Blog", "url": "/blog" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "ftr-center-mi-4", "type": "menuItem", "options": { "label": "Contact", "url": "/contact" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "ftr-center-mi-5", "type": "menuItem", "options": { "label": "Track Order", "url": "/track-order" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
              ]
            },
            {
              "id": "ftr-center-address",
              "type": "address",
              "options": {
                "phone": { "icon": "IconPhone", "label": "Phone", "value": "+880 1700 000000" },
                "email": { "icon": "IconMail", "label": "Email", "value": "support@mystore.com" },
                "location": { "icon": "IconMapPin", "label": "Location", "value": "House 12, Road 5, Dhaka 1212" },
                "iconSize": 18
              },
              "cssSelectors": {
                "*": { "classes": "flex gap-5 flex-wrap justify-center text-sm text-neutral-600" },
                "item": { "classes": "flex gap-2 items-center" },
                "link": { "classes": "flex gap-2 items-center hover:text-neutral-900" },
                "phone-link": { "classes": "" },
                "email-link": { "classes": "" },
                "icon": { "classes": "text-neutral-400 shrink-0" }
              }
            }
          ]
        },
        {
          "id": "ftr-center-bottom",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "border-t border-gray-200 py-5 px-5 text-center" } },
          "children": [
            {
              "id": "ftr-center-copy",
              "type": "text",
              "options": { "text": "(c) 2026 My Store. All rights reserved.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Newsletter Split',
    thumbnail: '',
    content: {
      "id": "ftr-news",
      "type": "siteFooter",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white border-t border-gray-200" } },
      "children": [
        {
          "id": "ftr-news-cta",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "bg-neutral-900 text-white" } },
          "children": [
            {
              "id": "ftr-news-cta-inner",
              "type": "columns",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "max-w-7xl mx-auto px-5 py-10 flex items-center justify-between gap-6 flex-wrap" },
                "column": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-news-cta-text-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex flex-col gap-2 max-w-lg" } },
                  "children": [
                    {
                      "id": "ftr-news-cta-heading",
                      "type": "heading",
                      "options": { "text": "Get offers before everyone else", "tag": "h3" },
                      "cssSelectors": { "*": { "classes": "text-xl font-bold text-white" } }
                    },
                    {
                      "id": "ftr-news-cta-sub",
                      "type": "text",
                      "options": { "text": "New arrivals, restocks and discount codes, straight to your inbox.", "tag": "p" },
                      "cssSelectors": { "*": { "classes": "text-sm text-neutral-400" } }
                    }
                  ]
                },
                {
                  "id": "ftr-news-cta-btn-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-news-cta-btn",
                      "type": "button",
                      "options": { "text": "Subscribe", "tag": "a", "url": "/newsletter", "icon": "IconMail", "iconSize": "18" },
                      "cssSelectors": {
                        "*": { "classes": "flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-900 font-semibold text-sm px-6 py-3 rounded-full cursor-pointer transition-colors" },
                        "icon": { "classes": "" },
                        "label": { "classes": "" }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ftr-news-main",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-12" } },
          "children": [
            {
              "id": "ftr-news-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-news-gi-brand",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                  "children": [
                    {
                      "id": "ftr-news-logo",
                      "type": "logo",
                      "options": { "logoType": "image", "logoText": "My Store", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-32 h-auto object-contain" },
                        "text": { "classes": "text-xl font-bold text-neutral-900" }
                      }
                    },
                    {
                      "id": "ftr-news-address",
                      "type": "address",
                      "options": {
                        "phone": { "icon": "IconPhone", "label": "Phone", "value": "+880 1700 000000" },
                        "email": { "icon": "IconMail", "label": "Email", "value": "support@mystore.com" },
                        "location": { "icon": "IconMapPin", "label": "Location", "value": "House 12, Road 5, Dhaka 1212" },
                        "iconSize": 18
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-600" },
                        "item": { "classes": "flex gap-2 items-start" },
                        "link": { "classes": "flex gap-2 items-center hover:text-neutral-900" },
                        "phone-link": { "classes": "" },
                        "email-link": { "classes": "" },
                        "icon": { "classes": "text-neutral-400 shrink-0" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-news-gi-shop",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-news-ll-shop",
                      "type": "linkList",
                      "options": {
                        "headerText": "Shop",
                        "tag": "ul",
                        "items": [
                          { "text": "New Arrivals", "icon": "", "slug": "/shop/new" },
                          { "text": "Best Sellers", "icon": "", "slug": "/shop/best-sellers" },
                          { "text": "Offers", "icon": "", "slug": "/shop/offers" },
                          { "text": "Brands", "icon": "", "slug": "/brands" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-neutral-900" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                        "icon": { "classes": "text-neutral-400" },
                        "text": { "classes": "text-sm text-neutral-600" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-news-gi-help",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-news-ll-help",
                      "type": "linkList",
                      "options": {
                        "headerText": "Customer Service",
                        "tag": "ul",
                        "items": [
                          { "text": "Track Order", "icon": "", "slug": "/track-order" },
                          { "text": "Shipping", "icon": "", "slug": "/shipping" },
                          { "text": "Returns", "icon": "", "slug": "/returns" },
                          { "text": "FAQ", "icon": "", "slug": "/faq" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-neutral-900" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                        "icon": { "classes": "text-neutral-400" },
                        "text": { "classes": "text-sm text-neutral-600" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-news-gi-company",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-news-ll-company",
                      "type": "linkList",
                      "options": {
                        "headerText": "Company",
                        "tag": "ul",
                        "items": [
                          { "text": "About", "icon": "", "slug": "/about" },
                          { "text": "Blog", "icon": "", "slug": "/blog" },
                          { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
                          { "text": "Terms", "icon": "", "slug": "/terms" }
                        ]
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex flex-col gap-3" },
                        "header-text": { "classes": "text-sm font-semibold text-neutral-900" },
                        "ul": { "classes": "flex flex-col gap-2" },
                        "li": { "classes": "list-none" },
                        "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                        "icon": { "classes": "text-neutral-400" },
                        "text": { "classes": "text-sm text-neutral-600" }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ftr-news-bottom",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "border-t border-gray-200 py-5 px-5 text-center" } },
          "children": [
            {
              "id": "ftr-news-copy",
              "type": "text",
              "options": { "text": "(c) 2026 My Store. All rights reserved.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Compact Bar',
    thumbnail: '',
    content: {
      "id": "ftr-compact",
      "type": "siteFooter",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-t border-gray-200" } },
      "children": [
        {
          "id": "ftr-compact-inner",
          "type": "columns",
          "options": {},
          "cssSelectors": {
            "*": { "classes": "max-w-7xl mx-auto px-5 py-6 flex items-center justify-between gap-6 flex-wrap" },
            "column": { "classes": "" }
          },
          "children": [
            {
              "id": "ftr-compact-col-logo",
              "type": "columnItem",
              "options": {},
              "cssSelectors": { "*": { "classes": "flex items-center gap-4" } },
              "children": [
                {
                  "id": "ftr-compact-logo",
                  "type": "logo",
                  "options": { "logoType": "text", "logoText": "Store.", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "link": { "classes": "inline-block" },
                    "img": { "classes": "w-28 h-auto object-contain" },
                    "text": { "classes": "text-lg font-bold text-neutral-900" }
                  }
                },
                {
                  "id": "ftr-compact-copy",
                  "type": "text",
                  "options": { "text": "(c) 2026 My Store", "tag": "span" },
                  "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                }
              ]
            },
            {
              "id": "ftr-compact-col-nav",
              "type": "columnItem",
              "options": {},
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "ftr-compact-menu",
                  "type": "menu",
                  "options": {},
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "menu": { "classes": "flex gap-6 flex-wrap text-sm text-neutral-600" },
                    "menu-item": { "classes": "" },
                    "sub-menu": { "classes": "" },
                    "menu-link": { "classes": "hover:text-neutral-900 transition-colors" },
                    "link-label": { "classes": "" },
                    "icon": { "classes": "" }
                  },
                  "children": [
                    { "id": "ftr-compact-mi-1", "type": "menuItem", "options": { "label": "Shop", "url": "/shop" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                    { "id": "ftr-compact-mi-2", "type": "menuItem", "options": { "label": "Track Order", "url": "/track-order" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                    { "id": "ftr-compact-mi-3", "type": "menuItem", "options": { "label": "Support", "url": "/support" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                    { "id": "ftr-compact-mi-4", "type": "menuItem", "options": { "label": "Privacy", "url": "/privacy-policy" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                  ]
                }
              ]
            },
            {
              "id": "ftr-compact-col-contact",
              "type": "columnItem",
              "options": {},
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "ftr-compact-address",
                  "type": "address",
                  "options": {
                    "phone": { "icon": "IconPhone", "label": "Phone", "value": "+880 1700 000000" },
                    "email": { "icon": "IconMail", "label": "Email", "value": "support@mystore.com" },
                    "iconSize": 16
                  },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-4 flex-wrap text-xs text-neutral-600" },
                    "item": { "classes": "flex gap-2 items-center" },
                    "link": { "classes": "flex gap-2 items-center hover:text-neutral-900" },
                    "phone-link": { "classes": "" },
                    "email-link": { "classes": "" },
                    "icon": { "classes": "text-neutral-400 shrink-0" }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Support Focused',
    thumbnail: '',
    content: {
      "id": "ftr-support",
      "type": "siteFooter",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white border-t border-gray-200" } },
      "children": [
        {
          "id": "ftr-support-main",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-12" } },
          "children": [
            {
              "id": "ftr-support-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid gap-10 grid-cols-1 lg:grid-cols-3" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-support-gi-contact",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex flex-col gap-4 bg-neutral-50 rounded-xl p-6" } },
                  "children": [
                    {
                      "id": "ftr-support-heading",
                      "type": "heading",
                      "options": { "text": "Need help ordering?", "tag": "h3" },
                      "cssSelectors": { "*": { "classes": "text-lg font-bold text-neutral-900" } }
                    },
                    {
                      "id": "ftr-support-sub",
                      "type": "text",
                      "options": { "text": "Our team replies within minutes, every day from 9am to 10pm.", "tag": "p" },
                      "cssSelectors": { "*": { "classes": "text-sm text-neutral-600" } }
                    },
                    {
                      "id": "ftr-support-whatsapp",
                      "type": "whatsappButton",
                      "options": { "label": "Chat on WhatsApp", "phone": "8801700000000", "message": "Hi, I need help with my order.", "icon": "IconBrandWhatsapp", "iconSize": 20 },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "flex gap-3 items-center justify-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-3 rounded-full transition-colors" },
                        "icon": { "classes": "" },
                        "label": { "classes": "" }
                      }
                    },
                    {
                      "id": "ftr-support-messenger",
                      "type": "messengerButton",
                      "options": { "label": "Chat on Messenger", "username": "mystore", "message": "Hi, I need help with my order.", "icon": "IconBrandMessenger", "iconSize": 20 },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "flex gap-3 items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-full transition-colors" },
                        "icon": { "classes": "" },
                        "label": { "classes": "" }
                      }
                    },
                    {
                      "id": "ftr-support-address",
                      "type": "address",
                      "options": {
                        "phone": { "icon": "IconPhone", "label": "Phone", "value": "+880 1700 000000" },
                        "email": { "icon": "IconMail", "label": "Email", "value": "support@mystore.com" },
                        "iconSize": 18
                      },
                      "cssSelectors": {
                        "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-600 pt-2" },
                        "item": { "classes": "flex gap-2 items-center" },
                        "link": { "classes": "flex gap-2 items-center hover:text-neutral-900" },
                        "phone-link": { "classes": "" },
                        "email-link": { "classes": "" },
                        "icon": { "classes": "text-neutral-400 shrink-0" }
                      }
                    }
                  ]
                },
                {
                  "id": "ftr-support-gi-links",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "lg:col-span-2" } },
                  "children": [
                    {
                      "id": "ftr-support-links-grid",
                      "type": "grid",
                      "options": {},
                      "cssSelectors": {
                        "*": { "classes": "grid gap-8 grid-cols-1 sm:grid-cols-3" },
                        "grid-item": { "classes": "" }
                      },
                      "children": [
                        {
                          "id": "ftr-support-gi-shop",
                          "type": "gridItem",
                          "options": {},
                          "cssSelectors": { "*": { "classes": "" } },
                          "children": [
                            {
                              "id": "ftr-support-ll-shop",
                              "type": "linkList",
                              "options": {
                                "headerText": "Shop",
                                "tag": "ul",
                                "items": [
                                  { "text": "New Arrivals", "icon": "", "slug": "/shop/new" },
                                  { "text": "Best Sellers", "icon": "", "slug": "/shop/best-sellers" },
                                  { "text": "Offers", "icon": "", "slug": "/shop/offers" },
                                  { "text": "Brands", "icon": "", "slug": "/brands" }
                                ]
                              },
                              "cssSelectors": {
                                "*": { "classes": "flex flex-col gap-3" },
                                "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                                "ul": { "classes": "flex flex-col gap-2" },
                                "li": { "classes": "list-none" },
                                "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                                "icon": { "classes": "text-neutral-400" },
                                "text": { "classes": "text-sm text-neutral-600" }
                              }
                            }
                          ]
                        },
                        {
                          "id": "ftr-support-gi-orders",
                          "type": "gridItem",
                          "options": {},
                          "cssSelectors": { "*": { "classes": "" } },
                          "children": [
                            {
                              "id": "ftr-support-ll-orders",
                              "type": "linkList",
                              "options": {
                                "headerText": "Orders",
                                "tag": "ul",
                                "items": [
                                  { "text": "Track Order", "icon": "IconTruckDelivery", "slug": "/track-order" },
                                  { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
                                  { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
                                  { "text": "Payment Methods", "icon": "", "slug": "/payments" }
                                ]
                              },
                              "cssSelectors": {
                                "*": { "classes": "flex flex-col gap-3" },
                                "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                                "ul": { "classes": "flex flex-col gap-2" },
                                "li": { "classes": "list-none" },
                                "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                                "icon": { "classes": "text-neutral-400" },
                                "text": { "classes": "text-sm text-neutral-600" }
                              }
                            }
                          ]
                        },
                        {
                          "id": "ftr-support-gi-company",
                          "type": "gridItem",
                          "options": {},
                          "cssSelectors": { "*": { "classes": "" } },
                          "children": [
                            {
                              "id": "ftr-support-ll-company",
                              "type": "linkList",
                              "options": {
                                "headerText": "Company",
                                "tag": "ul",
                                "items": [
                                  { "text": "About Us", "icon": "", "slug": "/about" },
                                  { "text": "Blog", "icon": "", "slug": "/blog" },
                                  { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
                                  { "text": "Terms & Conditions", "icon": "", "slug": "/terms" }
                                ]
                              },
                              "cssSelectors": {
                                "*": { "classes": "flex flex-col gap-3" },
                                "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                                "ul": { "classes": "flex flex-col gap-2" },
                                "li": { "classes": "list-none" },
                                "link": { "classes": "flex items-center gap-2 hover:text-neutral-900" },
                                "icon": { "classes": "text-neutral-400" },
                                "text": { "classes": "text-sm text-neutral-600" }
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
          "id": "ftr-support-bottom",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "border-t border-gray-200" } },
          "children": [
            {
              "id": "ftr-support-bottom-inner",
              "type": "columns",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                "column": { "classes": "" }
              },
              "children": [
                {
                  "id": "ftr-support-copy-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "ftr-support-copy",
                      "type": "text",
                      "options": { "text": "(c) 2026 My Store. All rights reserved.", "tag": "p" },
                      "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                    }
                  ]
                },
                {
                  "id": "ftr-support-pay-col",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                  "children": [
                    {
                      "id": "ftr-support-pay",
                      "type": "image",
                      "options": { "src": "https://placehold.co/240x32?text=Payments", "link": "" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "" },
                        "img": { "classes": "h-7 w-auto object-contain opacity-80" }
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
  }

]

export default layouts;
