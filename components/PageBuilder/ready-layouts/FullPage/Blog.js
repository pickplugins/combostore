var landingPages = [
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [
      {
        "id": "col-root-fashion",
        "type": "columns",
        "options": { "classes": "" },
        "cssSelectors": {
          "*": { "classes": "flex flex-wrap gap-8 p-10 justify-between bg-neutral-950 text-neutral-200" },
          "column": { "classes": "" }
        },
        "children": [
          {
            "id": "col-brand-fashion",
            "type": "columnItem",
            "cssSelectors": { "*": { "classes": "flex flex-col gap-4 w-72" } },
            "children": [
              {
                "id": "logo-fashion",
                "type": "logo",
                "options": {
                  "logoType": "image",
                  "logoText": "LUXE ATELIER",
                  "src": "https://example.com/wp-content/uploads/logo-fashion.webp"
                },
                "cssSelectors": {
                  "*": { "classes": "" },
                  "link": { "classes": "" },
                  "img": { "classes": "w-40 invert" },
                  "text": { "classes": "tracking-widest uppercase font-light" }
                }
              },
              {
                "id": "text-fashion",
                "type": "text",
                "options": {
                  "text": "Timeless pieces, ethically made. Crafted in small batches for a wardrobe that lasts.",
                  "tag": "p"
                },
                "cssSelectors": { "*": { "classes": "text-sm text-neutral-400 leading-relaxed" } }
              },
              {
                "id": "address-fashion",
                "type": "address",
                "options": {
                  "phone": { "icon": "IconPhone", "label": "Phone Number", "value": "+1 (212) 555-0134" },
                  "email": { "icon": "IconMail", "label": "Email", "value": "hello@luxeatelier.com" },
                  "location": { "icon": "IconMap2", "label": "location", "value": "45 Spring St, New York, NY 10012" },
                  "iconSize": 18
                },
                "cssSelectors": {
                  "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-400" },
                  "item": { "classes": "flex gap-2 items-center" },
                  "link": { "classes": "flex gap-2 items-center hover:text-white transition-colors" },
                  "phone-link": { "classes": "flex gap-2 items-center" },
                  "email-link": { "classes": "flex gap-2 items-center" },
                  "icon": { "classes": "" }
                },
                "children": []
              }
            ],
            "options": []
          },
          {
            "id": "col-shop-fashion",
            "type": "linkList",
            "options": {
              "headerText": "Shop",
              "items": [
                { "text": "New Arrivals", "icon": "", "slug": "/new-arrivals" },
                { "text": "Women", "icon": "", "slug": "/women" },
                { "text": "Men", "icon": "", "slug": "/men" },
                { "text": "Accessories", "icon": "", "slug": "/accessories" },
                { "text": "Sale", "icon": "", "slug": "/sale" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm uppercase tracking-wider text-white font-medium mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-neutral-400 hover:text-white transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          },
          {
            "id": "col-help-fashion",
            "type": "linkList",
            "options": {
              "headerText": "Customer Care",
              "items": [
                { "text": "Track Order", "icon": "", "slug": "/track-order" },
                { "text": "Shipping & Returns", "icon": "", "slug": "/shipping-returns" },
                { "text": "Size Guide", "icon": "", "slug": "/size-guide" },
                { "text": "Contact Us", "icon": "", "slug": "/contact" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm uppercase tracking-wider text-white font-medium mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-neutral-400 hover:text-white transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          },
          {
            "id": "col-legal-fashion",
            "type": "linkList",
            "options": {
              "headerText": "Legal",
              "items": [
                { "text": "Terms of Service", "icon": "", "slug": "/terms" },
                { "text": "Privacy Policy", "icon": "", "slug": "/privacy" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm uppercase tracking-wider text-white font-medium mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-neutral-400 hover:text-white transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          }
        ]
      }
    ],
  },
  {
    title: 'saas-tech',
    thumbnail: '',
    content: [
      {
        "id": "col-root-saas",
        "type": "columns",
        "options": { "classes": "" },
        "cssSelectors": {
          "*": { "classes": "flex flex-wrap gap-10 p-12 justify-between bg-slate-900 text-slate-300 border-t border-slate-800" },
          "column": { "classes": "" }
        },
        "children": [
          {
            "id": "col-brand-saas",
            "type": "columnItem",
            "cssSelectors": { "*": { "classes": "flex flex-col gap-4 w-80" } },
            "children": [
              {
                "id": "logo-saas",
                "type": "logo",
                "options": {
                  "logoType": "image",
                  "logoText": "Streamline",
                  "src": "https://example.com/wp-content/uploads/logo-saas.webp"
                },
                "cssSelectors": {
                  "*": { "classes": "" },
                  "link": { "classes": "" },
                  "img": { "classes": "w-32" },
                  "text": { "classes": "text-xl font-semibold text-white" }
                }
              },
              {
                "id": "text-saas",
                "type": "text",
                "options": {
                  "text": "The all-in-one workspace for product teams to plan, ship, and measure faster.",
                  "tag": "p"
                },
                "cssSelectors": { "*": { "classes": "text-sm text-slate-400 leading-relaxed" } }
              },
              {
                "id": "list-saas-status",
                "type": "list",
                "options": {
                  "icon": "IconCircleCheck",
                  "iconSize": 16,
                  "items": [
                    { "text": "99.99% uptime SLA", "icon": "IconCircleCheck" },
                    { "text": "SOC 2 Type II certified", "icon": "IconShieldCheck" }
                  ],
                  "tag": "ul"
                },
                "cssSelectors": {
                  "*": { "classes": "flex flex-col gap-2" },
                  "li": { "classes": "flex items-center gap-2 text-xs text-slate-500" },
                  "icon": { "classes": "text-emerald-400" },
                  "text": { "classes": "text-xs" }
                }
              }
            ],
            "options": []
          },
          {
            "id": "col-product-saas",
            "type": "linkList",
            "options": {
              "headerText": "Product",
              "items": [
                { "text": "Features", "icon": "", "slug": "/features" },
                { "text": "Integrations", "icon": "", "slug": "/integrations" },
                { "text": "Pricing", "icon": "", "slug": "/pricing" },
                { "text": "Changelog", "icon": "", "slug": "/changelog" },
                { "text": "API Docs", "icon": "", "slug": "/docs" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm font-semibold text-white mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-slate-400 hover:text-white transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          },
          {
            "id": "col-company-saas",
            "type": "linkList",
            "options": {
              "headerText": "Company",
              "items": [
                { "text": "About", "icon": "", "slug": "/about" },
                { "text": "Careers", "icon": "", "slug": "/careers" },
                { "text": "Blog", "icon": "", "slug": "/blog" },
                { "text": "Contact Sales", "icon": "", "slug": "/contact-sales" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm font-semibold text-white mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-slate-400 hover:text-white transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          },
          {
            "id": "col-support-saas",
            "type": "linkList",
            "options": {
              "headerText": "Resources",
              "items": [
                { "text": "Help Center", "icon": "", "slug": "/help" },
                { "text": "Community", "icon": "", "slug": "/community" },
                { "text": "Status Page", "icon": "", "slug": "/status" },
                { "text": "Security", "icon": "", "slug": "/security" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm font-semibold text-white mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-slate-400 hover:text-white transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          }
        ]
      }
    ],
  },
  {
    title: 'restaurant-food',
    thumbnail: '',
    content: [
      {
        "id": "col-root-restaurant",
        "type": "columns",
        "options": { "classes": "" },
        "cssSelectors": {
          "*": { "classes": "flex flex-wrap gap-8 p-10 justify-between bg-amber-950 text-amber-100" },
          "column": { "classes": "" }
        },
        "children": [
          {
            "id": "col-brand-restaurant",
            "type": "columnItem",
            "cssSelectors": { "*": { "classes": "flex flex-col gap-4 w-72" } },
            "children": [
              {
                "id": "logo-restaurant",
                "type": "logo",
                "options": {
                  "logoType": "image",
                  "logoText": "Casa Bella",
                  "src": "https://example.com/wp-content/uploads/logo-restaurant.webp"
                },
                "cssSelectors": {
                  "*": { "classes": "" },
                  "link": { "classes": "" },
                  "img": { "classes": "w-36" },
                  "text": { "classes": "text-2xl font-serif italic text-amber-50" }
                }
              },
              {
                "id": "text-restaurant",
                "type": "text",
                "options": {
                  "text": "Family-style Italian cooking, made fresh daily with locally sourced ingredients.",
                  "tag": "p"
                },
                "cssSelectors": { "*": { "classes": "text-sm text-amber-200/80 leading-relaxed" } }
              },
              {
                "id": "address-restaurant",
                "type": "address",
                "options": {
                  "phone": { "icon": "IconPhone", "label": "Phone Number", "value": "+1 (415) 555-0192" },
                  "email": { "icon": "IconMail", "label": "Email", "value": "reservations@casabella.com" },
                  "location": { "icon": "IconMap2", "label": "location", "value": "88 Vine Ave, San Francisco, CA 94108" },
                  "iconSize": 18
                },
                "cssSelectors": {
                  "*": { "classes": "flex gap-2 flex-col text-sm text-amber-200/80" },
                  "item": { "classes": "flex gap-2 items-center" },
                  "link": { "classes": "flex gap-2 items-center hover:text-amber-50 transition-colors" },
                  "phone-link": { "classes": "flex gap-2 items-center" },
                  "email-link": { "classes": "flex gap-2 items-center" },
                  "icon": { "classes": "" }
                },
                "children": []
              }
            ],
            "options": []
          },
          {
            "id": "col-hours-restaurant",
            "type": "list",
            "options": {
              "icon": "",
              "iconSize": 16,
              "items": [
                { "text": "Mon–Thu: 11am – 9pm", "icon": "" },
                { "text": "Fri–Sat: 11am – 11pm", "icon": "" },
                { "text": "Sunday: 12pm – 8pm", "icon": "" }
              ],
              "tag": "ul"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-2 w-56" },
              "li": { "classes": "flex text-sm text-amber-200/80" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          },
          {
            "id": "col-explore-restaurant",
            "type": "linkList",
            "options": {
              "headerText": "Explore",
              "items": [
                { "text": "Menu", "icon": "", "slug": "/menu" },
                { "text": "Reservations", "icon": "", "slug": "/reservations" },
                { "text": "Private Events", "icon": "", "slug": "/events" },
                { "text": "Gift Cards", "icon": "", "slug": "/gift-cards" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-lg font-serif text-amber-50 mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-amber-200/80 hover:text-amber-50 transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          }
        ]
      }
    ],
  },
  {
    title: 'fitness-gym',
    thumbnail: '',
    content: [
      {
        "id": "col-root-fitness",
        "type": "columns",
        "options": { "classes": "" },
        "cssSelectors": {
          "*": { "classes": "flex flex-wrap gap-8 p-10 justify-between bg-black text-white" },
          "column": { "classes": "" }
        },
        "children": [
          {
            "id": "col-brand-fitness",
            "type": "columnItem",
            "cssSelectors": { "*": { "classes": "flex flex-col gap-4 w-72" } },
            "children": [
              {
                "id": "logo-fitness",
                "type": "logo",
                "options": {
                  "logoType": "image",
                  "logoText": "IRONCORE",
                  "src": "https://example.com/wp-content/uploads/logo-fitness.webp"
                },
                "cssSelectors": {
                  "*": { "classes": "" },
                  "link": { "classes": "" },
                  "img": { "classes": "w-40" },
                  "text": { "classes": "text-2xl font-black italic uppercase" }
                }
              },
              {
                "id": "text-fitness",
                "type": "text",
                "options": {
                  "text": "Strength training, HIIT, and recovery — everything you need under one roof.",
                  "tag": "p"
                },
                "cssSelectors": { "*": { "classes": "text-sm text-neutral-400" } }
              }
            ],
            "options": []
          },
          {
            "id": "col-classes-fitness",
            "type": "linkList",
            "options": {
              "headerText": "Classes",
              "items": [
                { "text": "Strength Training", "icon": "", "slug": "/classes/strength" },
                { "text": "HIIT", "icon": "", "slug": "/classes/hiit" },
                { "text": "Yoga & Mobility", "icon": "", "slug": "/classes/yoga" },
                { "text": "Personal Training", "icon": "", "slug": "/personal-training" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm uppercase tracking-wide font-bold mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-neutral-400 hover:text-red-500 transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          },
          {
            "id": "col-membership-fitness",
            "type": "linkList",
            "options": {
              "headerText": "Membership",
              "items": [
                { "text": "Plans & Pricing", "icon": "", "slug": "/membership" },
                { "text": "Free Trial", "icon": "", "slug": "/free-trial" },
                { "text": "Corporate Wellness", "icon": "", "slug": "/corporate" }
              ],
              "tag": "ul",
              "icon": "",
              "iconSize": "16"
            },
            "cssSelectors": {
              "*": { "classes": "flex flex-col gap-3" },
              "header-text": { "classes": "text-sm uppercase tracking-wide font-bold mb-1" },
              "ul": { "classes": "flex flex-col gap-2" },
              "li": { "classes": "flex" },
              "link": { "classes": "flex items-center gap-2 text-neutral-400 hover:text-red-500 transition-colors" },
              "icon": { "classes": "" },
              "text": { "classes": "text-sm" }
            }
          },
          {
            "id": "col-visit-fitness",
            "type": "address",
            "options": {
              "phone": { "icon": "IconPhone", "label": "Phone Number", "value": "+1 (312) 555-0177" },
              "email": { "icon": "IconMail", "label": "Email", "value": "info@ironcoregym.com" },
              "location": { "icon": "IconMap2", "label": "location", "value": "500 Fitness Ave, Chicago, IL 60607" },
              "iconSize": 18
            },
            "cssSelectors": {
              "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-400" },
              "item": { "classes": "flex gap-2 items-center" },
              "link": { "classes": "flex gap-2 items-center hover:text-red-500 transition-colors" },
              "phone-link": { "classes": "flex gap-2 items-center" },
              "email-link": { "classes": "flex gap-2 items-center" },
              "icon": { "classes": "" }
            },
            "children": []
          }
        ]
      }
    ],
  },
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [],
  },
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [],
  },
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [],
  },
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [],
  },
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [],
  },
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [],
  },
  {
    title: 'fashion-apparel',
    thumbnail: '',
    content: [],
  },



]

export default landingPages;