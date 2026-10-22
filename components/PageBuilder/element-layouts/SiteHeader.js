/**
 * Layout presets for the `siteHeader` element.
 *
 * Each preset's `content` is rooted at a `siteHeader` block so the Layouts panel
 * can Replace the selected header like-for-like. Block ids are regenerated on
 * Add/Replace, so the ids below only need to be unique within a preset.
 */

var layouts = [

  {
    title: 'Classic Store',
    thumbnail: '',
    content: {
      "id": "hdr-classic",
      "type": "siteHeader",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white border-b border-gray-200 sticky top-0 z-40" } },
      "children": [
        {
          "id": "hdr-classic-container",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-4" } },
          "children": [
            {
              "id": "hdr-classic-columns",
              "type": "columns",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "flex items-center gap-6 flex-wrap justify-between" },
                "column": { "classes": "" }
              },
              "children": [
                {
                  "id": "hdr-classic-col-logo",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "shrink-0" } },
                  "children": [
                    {
                      "id": "hdr-classic-logo",
                      "type": "logo",
                      "options": { "logoType": "image", "logoText": "My Store", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-36 h-auto object-contain" },
                        "text": { "classes": "text-xl font-bold text-neutral-900" }
                      }
                    }
                  ]
                },
                {
                  "id": "hdr-classic-col-nav",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "hidden lg:block" } },
                  "children": [
                    {
                      "id": "hdr-classic-menu",
                      "type": "menu",
                      "options": {},
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "menu": { "classes": "flex gap-7 text-sm font-medium text-neutral-700" },
                        "menu-item": { "classes": "" },
                        "sub-menu": { "classes": "rounded-lg border border-gray-100 py-2 min-w-48" },
                        "menu-link": { "classes": "hover:text-orange-600 transition-colors py-1" },
                        "link-label": { "classes": "" },
                        "icon": { "classes": "" }
                      },
                      "children": [
                        { "id": "hdr-classic-mi-1", "type": "menuItem", "options": { "label": "Home", "url": "/" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        {
                          "id": "hdr-classic-mi-2",
                          "type": "menuItem",
                          "options": { "label": "Shop", "url": "/shop" },
                          "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                          "children": [
                            { "id": "hdr-classic-mi-2-1", "type": "menuItem", "options": { "label": "New Arrivals", "url": "/shop/new" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-gray-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                            { "id": "hdr-classic-mi-2-2", "type": "menuItem", "options": { "label": "Best Sellers", "url": "/shop/best-sellers" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-gray-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                            { "id": "hdr-classic-mi-2-3", "type": "menuItem", "options": { "label": "Offers", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-gray-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                          ]
                        },
                        { "id": "hdr-classic-mi-3", "type": "menuItem", "options": { "label": "Blog", "url": "/blog" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-classic-mi-4", "type": "menuItem", "options": { "label": "Contact", "url": "/contact" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                      ]
                    }
                  ]
                },
                {
                  "id": "hdr-classic-col-actions",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-3 ml-auto" } },
                  "children": [
                    {
                      "id": "hdr-classic-search",
                      "type": "quickSearch",
                      "options": { "placeholder": "Search products...", "iconPosition": "", "icon": "IconZoom" },
                      "cssSelectors": {
                        "*": { "classes": "border border-gray-200 rounded-full py-1 px-4 bg-gray-50" },
                        "input-search": { "classes": "w-full lg:w-56 px-2 bg-transparent border-0 shadow-none! outline-none" },
                        "input-wrapper": { "classes": "flex flex-wrap gap-2 items-center" },
                        "icon": { "classes": "text-gray-500" },
                        "popover": { "classes": "bg-white shadow-xl rounded-lg border border-gray-100" },
                        "reset": { "classes": "text-red-400 text-sm cursor-pointer" },
                        "categories": { "classes": "" },
                        "brands": { "classes": "" },
                        "items": { "classes": "divide-y divide-gray-100" },
                        "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-gray-50" },
                        "item-title": { "classes": "" },
                        "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                        "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                        "page-item": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                        "page-count": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                      }
                    },
                    {
                      "id": "hdr-classic-cart",
                      "type": "cart",
                      "options": { "buttonIcon": "IconShoppingCart", "editMode": true },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "button": { "classes": "flex items-center gap-2 text-sm px-4 rounded-full py-2 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white transition-colors" },
                        "button-quantity": { "classes": "font-semibold" },
                        "button-icon": { "classes": "" },
                        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                        "cart-header": { "classes": "flex justify-between items-center bg-orange-500 py-3 px-4 text-white" },
                        "cart-total-items": { "classes": "" },
                        "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                        "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                        "go-to-checkout": { "classes": "text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full cursor-pointer" },
                        "coupon-input": { "classes": "w-28 border! border-solid border-gray-300 shadow-none! text-center rounded-full" },
                        "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 rounded-full cursor-pointer" },
                        "back-to-cart": { "classes": "text-sm text-orange-600 cursor-pointer" }
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
    title: 'Search Focused (two rows)',
    thumbnail: '',
    content: {
      "id": "hdr-search",
      "type": "siteHeader",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white shadow-sm sticky top-0 z-40" } },
      "children": [
        {
          "id": "hdr-search-top",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-4" } },
          "children": [
            {
              "id": "hdr-search-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid gap-4 grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "hdr-search-gi-logo",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "hdr-search-logo",
                      "type": "logo",
                      "options": { "logoType": "image", "logoText": "My Store", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-32 h-auto object-contain" },
                        "text": { "classes": "text-xl font-bold text-neutral-900" }
                      }
                    }
                  ]
                },
                {
                  "id": "hdr-search-gi-search",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "hdr-search-search",
                      "type": "quickSearch",
                      "options": { "placeholder": "Search for products, brands and categories", "iconPosition": "", "icon": "IconZoom" },
                      "cssSelectors": {
                        "*": { "classes": "border-2 border-orange-300 rounded-full py-1.5 px-5 bg-orange-50 w-full" },
                        "input-search": { "classes": "w-full px-2 bg-transparent border-0 shadow-none! outline-none" },
                        "input-wrapper": { "classes": "flex flex-nowrap gap-2 items-center w-full" },
                        "icon": { "classes": "text-orange-600 shrink-0" },
                        "popover": { "classes": "bg-white shadow-xl rounded-lg border border-gray-100 w-full" },
                        "reset": { "classes": "text-red-400 text-sm cursor-pointer shrink-0" },
                        "categories": { "classes": "" },
                        "brands": { "classes": "" },
                        "items": { "classes": "divide-y divide-gray-100" },
                        "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-orange-50" },
                        "item-title": { "classes": "" },
                        "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                        "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                        "page-item": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                        "page-count": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                      }
                    }
                  ]
                },
                {
                  "id": "hdr-search-gi-cart",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-3 justify-end" } },
                  "children": [
                    {
                      "id": "hdr-search-account",
                      "type": "button",
                      "options": { "text": "Account", "tag": "a", "url": "/account", "icon": "IconUserCircle", "iconSize": "18" },
                      "cssSelectors": {
                        "*": { "classes": "hidden sm:flex items-center gap-2 text-sm text-neutral-700 hover:text-orange-600 cursor-pointer" },
                        "icon": { "classes": "" },
                        "label": { "classes": "" }
                      }
                    },
                    {
                      "id": "hdr-search-cart",
                      "type": "cart",
                      "options": { "buttonIcon": "IconShoppingCart", "editMode": true },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "button": { "classes": "flex items-center gap-2 text-sm px-4 rounded-full py-2 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white transition-colors" },
                        "button-quantity": { "classes": "font-semibold" },
                        "button-icon": { "classes": "" },
                        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                        "cart-header": { "classes": "flex justify-between items-center bg-orange-500 py-3 px-4 text-white" },
                        "cart-total-items": { "classes": "" },
                        "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                        "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                        "go-to-checkout": { "classes": "text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full cursor-pointer" },
                        "coupon-input": { "classes": "w-28 border! border-solid border-gray-300 shadow-none! text-center rounded-full" },
                        "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 rounded-full cursor-pointer" },
                        "back-to-cart": { "classes": "text-sm text-orange-600 cursor-pointer" }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "hdr-search-navbar",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "border-t border-gray-100 bg-white" } },
          "children": [
            {
              "id": "hdr-search-navwrap",
              "type": "container",
              "options": {},
              "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-2 overflow-x-auto" } },
              "children": [
                {
                  "id": "hdr-search-menu",
                  "type": "menu",
                  "options": {},
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "menu": { "classes": "flex gap-6 text-sm font-medium text-neutral-700 whitespace-nowrap" },
                    "menu-item": { "classes": "" },
                    "sub-menu": { "classes": "rounded-lg border border-gray-100 py-2 min-w-48" },
                    "menu-link": { "classes": "hover:text-orange-600 transition-colors py-1" },
                    "link-label": { "classes": "" },
                    "icon": { "classes": "text-orange-500" }
                  },
                  "children": [
                    { "id": "hdr-search-mi-1", "type": "menuItem", "options": { "label": "All Categories", "url": "/categories", "icon": "IconLayoutGrid", "iconSize": "16" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                    { "id": "hdr-search-mi-2", "type": "menuItem", "options": { "label": "New Arrivals", "url": "/shop/new" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                    { "id": "hdr-search-mi-3", "type": "menuItem", "options": { "label": "Best Sellers", "url": "/shop/best-sellers" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                    { "id": "hdr-search-mi-4", "type": "menuItem", "options": { "label": "Offers", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "text-red-600 font-semibold" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                    { "id": "hdr-search-mi-5", "type": "menuItem", "options": { "label": "Track Order", "url": "/track-order" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
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
    title: 'Centered Logo',
    thumbnail: '',
    content: {
      "id": "hdr-center",
      "type": "siteHeader",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white border-b border-gray-200" } },
      "children": [
        {
          "id": "hdr-center-container",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-5" } },
          "children": [
            {
              "id": "hdr-center-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid gap-4 grid-cols-1 lg:grid-cols-3 items-center" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "hdr-center-gi-nav",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "hidden lg:block" } },
                  "children": [
                    {
                      "id": "hdr-center-menu",
                      "type": "menu",
                      "options": {},
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "menu": { "classes": "flex gap-6 text-xs uppercase tracking-widest text-neutral-600" },
                        "menu-item": { "classes": "" },
                        "sub-menu": { "classes": "rounded-none border border-gray-100 py-2 min-w-44" },
                        "menu-link": { "classes": "hover:text-neutral-900 transition-colors py-1" },
                        "link-label": { "classes": "" },
                        "icon": { "classes": "" }
                      },
                      "children": [
                        { "id": "hdr-center-mi-1", "type": "menuItem", "options": { "label": "Shop", "url": "/shop" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-center-mi-2", "type": "menuItem", "options": { "label": "Collections", "url": "/collections" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-center-mi-3", "type": "menuItem", "options": { "label": "About", "url": "/about" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                      ]
                    }
                  ]
                },
                {
                  "id": "hdr-center-gi-logo",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex justify-center" } },
                  "children": [
                    {
                      "id": "hdr-center-logo",
                      "type": "logo",
                      "options": { "logoType": "text", "logoText": "MY STORE", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "text-center" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-36 h-auto object-contain mx-auto" },
                        "text": { "classes": "text-2xl font-semibold tracking-[0.25em] text-neutral-900" }
                      }
                    }
                  ]
                },
                {
                  "id": "hdr-center-gi-actions",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-4 justify-center lg:justify-end" } },
                  "children": [
                    {
                      "id": "hdr-center-search",
                      "type": "quickSearch",
                      "options": { "placeholder": "Search", "iconPosition": "", "icon": "IconSearch" },
                      "cssSelectors": {
                        "*": { "classes": "border-b border-neutral-300 py-1 px-1 bg-transparent" },
                        "input-search": { "classes": "w-32 lg:w-40 px-1 bg-transparent border-0 shadow-none! outline-none text-sm" },
                        "input-wrapper": { "classes": "flex gap-2 items-center" },
                        "icon": { "classes": "text-neutral-500" },
                        "popover": { "classes": "bg-white shadow-xl border border-gray-100" },
                        "reset": { "classes": "text-red-400 text-sm cursor-pointer" },
                        "categories": { "classes": "" },
                        "brands": { "classes": "" },
                        "items": { "classes": "divide-y divide-gray-100" },
                        "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-gray-50" },
                        "item-title": { "classes": "" },
                        "item-image": { "classes": "object-cover w-14 h-14" },
                        "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                        "page-item": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 cursor-pointer" },
                        "page-count": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 cursor-pointer w-16 text-center" }
                      }
                    },
                    {
                      "id": "hdr-center-cart",
                      "type": "cart",
                      "options": { "buttonIcon": "IconShoppingBag", "editMode": true },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "button": { "classes": "flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2 border border-neutral-900 hover:bg-neutral-900 hover:text-white cursor-pointer text-neutral-900 transition-colors" },
                        "button-quantity": { "classes": "font-semibold" },
                        "button-icon": { "classes": "" },
                        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[440px] bg-white shadow-2xl overflow-y-auto" },
                        "cart-header": { "classes": "flex justify-between items-center bg-neutral-900 py-3 px-4 text-white" },
                        "cart-total-items": { "classes": "" },
                        "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center text-sm" },
                        "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center text-sm" },
                        "go-to-checkout": { "classes": "text-white bg-neutral-900 px-4 py-2 cursor-pointer" },
                        "coupon-input": { "classes": "w-28 border! border-solid border-gray-300 shadow-none! text-center" },
                        "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 cursor-pointer" },
                        "back-to-cart": { "classes": "text-sm text-neutral-600 cursor-pointer" }
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
    title: 'Minimal Clean',
    thumbnail: '',
    content: {
      "id": "hdr-minimal",
      "type": "siteHeader",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white" } },
      "children": [
        {
          "id": "hdr-minimal-container",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto px-5 py-6" } },
          "children": [
            {
              "id": "hdr-minimal-columns",
              "type": "columns",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "flex items-center justify-between gap-6 flex-wrap" },
                "column": { "classes": "" }
              },
              "children": [
                {
                  "id": "hdr-minimal-col-logo",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "hdr-minimal-logo",
                      "type": "logo",
                      "options": { "logoType": "text", "logoText": "Store.", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-28 h-auto object-contain" },
                        "text": { "classes": "text-lg font-bold text-neutral-900" }
                      }
                    }
                  ]
                },
                {
                  "id": "hdr-minimal-col-right",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-8" } },
                  "children": [
                    {
                      "id": "hdr-minimal-menu",
                      "type": "menu",
                      "options": {},
                      "cssSelectors": {
                        "*": { "classes": "hidden md:block" },
                        "menu": { "classes": "flex gap-7 text-sm text-neutral-600" },
                        "menu-item": { "classes": "" },
                        "sub-menu": { "classes": "rounded-md border border-gray-100 py-2 min-w-44" },
                        "menu-link": { "classes": "hover:text-neutral-900 transition-colors" },
                        "link-label": { "classes": "" },
                        "icon": { "classes": "" }
                      },
                      "children": [
                        { "id": "hdr-minimal-mi-1", "type": "menuItem", "options": { "label": "Shop", "url": "/shop" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-minimal-mi-2", "type": "menuItem", "options": { "label": "Journal", "url": "/blog" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-minimal-mi-3", "type": "menuItem", "options": { "label": "Contact", "url": "/contact" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                      ]
                    },
                    {
                      "id": "hdr-minimal-cart",
                      "type": "cart",
                      "options": { "buttonIcon": "IconShoppingCart", "editMode": true },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "button": { "classes": "flex items-center gap-2 text-sm text-neutral-900 hover:text-neutral-500 cursor-pointer transition-colors" },
                        "button-quantity": { "classes": "inline-flex items-center justify-center min-w-5 h-5 text-[11px] rounded-full bg-neutral-900 text-white px-1" },
                        "button-icon": { "classes": "" },
                        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[440px] bg-white shadow-2xl overflow-y-auto" },
                        "cart-header": { "classes": "flex justify-between items-center border-b border-gray-200 py-3 px-4 text-neutral-900" },
                        "cart-total-items": { "classes": "" },
                        "cart-close": { "classes": "border border-gray-200 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm" },
                        "cart-reset": { "classes": "border border-gray-200 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm" },
                        "go-to-checkout": { "classes": "text-white bg-neutral-900 px-4 py-2 rounded-md cursor-pointer" },
                        "coupon-input": { "classes": "w-28 border! border-solid border-gray-300 shadow-none! text-center rounded-md" },
                        "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 rounded-md cursor-pointer" },
                        "back-to-cart": { "classes": "text-sm text-neutral-600 cursor-pointer" }
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
    title: 'Bold Dark',
    thumbnail: '',
    content: {
      "id": "hdr-dark",
      "type": "siteHeader",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-neutral-900 text-white sticky top-0 z-40" } },
      "children": [
        {
          "id": "hdr-dark-container",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-4" } },
          "children": [
            {
              "id": "hdr-dark-columns",
              "type": "columns",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "flex items-center gap-6 flex-wrap justify-between" },
                "column": { "classes": "" }
              },
              "children": [
                {
                  "id": "hdr-dark-col-logo",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-8" } },
                  "children": [
                    {
                      "id": "hdr-dark-logo",
                      "type": "logo",
                      "options": { "logoType": "text", "logoText": "MY STORE", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-32 h-auto object-contain" },
                        "text": { "classes": "text-xl font-black tracking-tight text-white" }
                      }
                    },
                    {
                      "id": "hdr-dark-menu",
                      "type": "menu",
                      "options": {},
                      "cssSelectors": {
                        "*": { "classes": "hidden lg:block" },
                        "menu": { "classes": "flex gap-6 text-sm font-medium text-neutral-300" },
                        "menu-item": { "classes": "" },
                        "sub-menu": { "classes": "rounded-lg border border-neutral-700 bg-neutral-900 py-2 min-w-48" },
                        "menu-link": { "classes": "hover:text-white transition-colors py-1" },
                        "link-label": { "classes": "" },
                        "icon": { "classes": "" }
                      },
                      "children": [
                        { "id": "hdr-dark-mi-1", "type": "menuItem", "options": { "label": "Shop", "url": "/shop" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-dark-mi-2", "type": "menuItem", "options": { "label": "Deals", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "text-amber-400" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-dark-mi-3", "type": "menuItem", "options": { "label": "Brands", "url": "/brands" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                        { "id": "hdr-dark-mi-4", "type": "menuItem", "options": { "label": "Support", "url": "/support" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                      ]
                    }
                  ]
                },
                {
                  "id": "hdr-dark-col-actions",
                  "type": "columnItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-3 ml-auto" } },
                  "children": [
                    {
                      "id": "hdr-dark-search",
                      "type": "quickSearch",
                      "options": { "placeholder": "Search products...", "iconPosition": "", "icon": "IconZoom" },
                      "cssSelectors": {
                        "*": { "classes": "border border-neutral-700 rounded-full py-1 px-4 bg-neutral-800" },
                        "input-search": { "classes": "w-full lg:w-52 px-2 bg-transparent border-0 shadow-none! outline-none text-white placeholder:text-neutral-500" },
                        "input-wrapper": { "classes": "flex flex-wrap gap-2 items-center" },
                        "icon": { "classes": "text-neutral-400" },
                        "popover": { "classes": "bg-neutral-900 text-white shadow-2xl rounded-lg border border-neutral-700" },
                        "reset": { "classes": "text-red-400 text-sm cursor-pointer" },
                        "categories": { "classes": "" },
                        "brands": { "classes": "" },
                        "items": { "classes": "divide-y divide-neutral-800" },
                        "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-neutral-800" },
                        "item-title": { "classes": "" },
                        "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                        "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                        "page-item": { "classes": "border border-solid border-neutral-700 shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                        "page-count": { "classes": "border border-solid border-neutral-700 shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                      }
                    },
                    {
                      "id": "hdr-dark-cart",
                      "type": "cart",
                      "options": { "buttonIcon": "IconShoppingCart", "editMode": true },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "button": { "classes": "flex items-center gap-2 text-sm font-semibold px-5 rounded-full py-2 bg-amber-400 hover:bg-amber-300 cursor-pointer text-neutral-900 transition-colors" },
                        "button-quantity": { "classes": "font-bold" },
                        "button-icon": { "classes": "" },
                        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-neutral-900 text-white shadow-2xl overflow-y-auto" },
                        "cart-header": { "classes": "flex justify-between items-center bg-amber-400 py-3 px-4 text-neutral-900" },
                        "cart-total-items": { "classes": "" },
                        "cart-close": { "classes": "border border-neutral-900/30 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                        "cart-reset": { "classes": "border border-neutral-900/30 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                        "go-to-checkout": { "classes": "text-neutral-900 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-full cursor-pointer font-semibold" },
                        "coupon-input": { "classes": "w-28 border! border-solid border-neutral-700 bg-neutral-800 shadow-none! text-center rounded-full" },
                        "coupon-apply-button": { "classes": "text-neutral-900 bg-amber-400 px-3 py-2 rounded-full cursor-pointer" },
                        "back-to-cart": { "classes": "text-sm text-amber-400 cursor-pointer" }
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
    title: 'Promo Topbar',
    thumbnail: '',
    content: {
      "id": "hdr-promo",
      "type": "siteHeader",
      "options": {},
      "cssSelectors": { "*": { "classes": "w-full bg-white sticky top-0 z-40" } },
      "children": [
        {
          "id": "hdr-promo-topbar",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "bg-neutral-900 text-white text-center py-2 px-5" } },
          "children": [
            {
              "id": "hdr-promo-text",
              "type": "text",
              "options": { "text": "Free delivery on orders over 2000Tk - use code FREESHIP", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-xs tracking-wide" } }
            }
          ]
        },
        {
          "id": "hdr-promo-main",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-4 border-b border-gray-200" } },
          "children": [
            {
              "id": "hdr-promo-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid gap-4 grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "hdr-promo-gi-logo",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "" } },
                  "children": [
                    {
                      "id": "hdr-promo-logo",
                      "type": "logo",
                      "options": { "logoType": "image", "logoText": "My Store", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "link": { "classes": "inline-block" },
                        "img": { "classes": "w-32 h-auto object-contain" },
                        "text": { "classes": "text-xl font-bold text-neutral-900" }
                      }
                    }
                  ]
                },
                {
                  "id": "hdr-promo-gi-search",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "hdr-promo-search",
                      "type": "quickSearch",
                      "options": { "placeholder": "What are you looking for?", "iconPosition": "", "icon": "IconZoom" },
                      "cssSelectors": {
                        "*": { "classes": "border border-gray-200 rounded-lg py-2 px-4 bg-gray-50 w-full" },
                        "input-search": { "classes": "w-full px-2 bg-transparent border-0 shadow-none! outline-none" },
                        "input-wrapper": { "classes": "flex flex-nowrap gap-2 items-center w-full" },
                        "icon": { "classes": "text-gray-500 shrink-0" },
                        "popover": { "classes": "bg-white shadow-xl rounded-lg border border-gray-100 w-full" },
                        "reset": { "classes": "text-red-400 text-sm cursor-pointer shrink-0" },
                        "categories": { "classes": "" },
                        "brands": { "classes": "" },
                        "items": { "classes": "divide-y divide-gray-100" },
                        "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-gray-50" },
                        "item-title": { "classes": "" },
                        "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                        "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                        "page-item": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                        "page-count": { "classes": "border border-solid border-gray-300 shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                      }
                    }
                  ]
                },
                {
                  "id": "hdr-promo-gi-actions",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "flex items-center gap-4 justify-end" } },
                  "children": [
                    {
                      "id": "hdr-promo-help",
                      "type": "button",
                      "options": { "text": "Help", "tag": "a", "url": "/support", "icon": "IconHeadset", "iconSize": "18" },
                      "cssSelectors": {
                        "*": { "classes": "hidden md:flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 cursor-pointer" },
                        "icon": { "classes": "" },
                        "label": { "classes": "" }
                      }
                    },
                    {
                      "id": "hdr-promo-cart",
                      "type": "cart",
                      "options": { "buttonIcon": "IconShoppingCart", "editMode": true },
                      "cssSelectors": {
                        "*": { "classes": "" },
                        "button": { "classes": "flex items-center gap-2 text-sm px-4 rounded-lg py-2 bg-neutral-900 hover:bg-neutral-800 cursor-pointer text-white transition-colors" },
                        "button-quantity": { "classes": "font-semibold" },
                        "button-icon": { "classes": "" },
                        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                        "cart-header": { "classes": "flex justify-between items-center bg-neutral-900 py-3 px-4 text-white" },
                        "cart-total-items": { "classes": "" },
                        "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-lg text-sm" },
                        "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-lg text-sm" },
                        "go-to-checkout": { "classes": "text-white bg-neutral-900 px-4 py-2 rounded-lg cursor-pointer" },
                        "coupon-input": { "classes": "w-28 border! border-solid border-gray-300 shadow-none! text-center rounded-lg" },
                        "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 rounded-lg cursor-pointer" },
                        "back-to-cart": { "classes": "text-sm text-neutral-600 cursor-pointer" }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "hdr-promo-navbar",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-2 overflow-x-auto" } },
          "children": [
            {
              "id": "hdr-promo-menu",
              "type": "menu",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "" },
                "menu": { "classes": "flex gap-6 text-sm text-neutral-700 whitespace-nowrap" },
                "menu-item": { "classes": "" },
                "sub-menu": { "classes": "rounded-lg border border-gray-100 py-2 min-w-48" },
                "menu-link": { "classes": "hover:text-neutral-900 transition-colors py-1" },
                "link-label": { "classes": "" },
                "icon": { "classes": "" }
              },
              "children": [
                { "id": "hdr-promo-mi-1", "type": "menuItem", "options": { "label": "Home", "url": "/" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "hdr-promo-mi-2", "type": "menuItem", "options": { "label": "Shop", "url": "/shop" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "hdr-promo-mi-3", "type": "menuItem", "options": { "label": "Categories", "url": "/categories" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "hdr-promo-mi-4", "type": "menuItem", "options": { "label": "Blog", "url": "/blog" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                { "id": "hdr-promo-mi-5", "type": "menuItem", "options": { "label": "Track Order", "url": "/track-order" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
              ]
            }
          ]
        }
      ]
    }
  }

]

export default layouts;
