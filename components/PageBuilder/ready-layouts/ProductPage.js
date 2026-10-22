var landingPages = [
  {
    "title": "Modern",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-16 max-w-6xl px-4" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-14 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "rounded-2xl overflow-hidden" },
                    "items": { "classes": "" },
                    "item": { "classes": "rounded-xl" },
                    "image": { "classes": "rounded-xl" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
              "children": [
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Out of stock", "inStockText": "In stock", "icon": "", "iconSize": 20, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-5 text-sm" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "bg-red-50 text-red-600 px-3 py-1 rounded-full font-medium" },
                    "in-stock": { "classes": "bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full font-medium" }
                  }
                },
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "text-xs" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-2" },
                    "item": { "classes": "rounded-full px-3 py-1 bg-gray-100 text-gray-600 uppercase tracking-wide" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight" } }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "simple-price-wrap": { "classes": "flex gap-3 items-center" },
                    "simple-price-sale": { "classes": "font-bold text-2xl text-gray-900" },
                    "simple-price-regular": { "classes": "line-through text-base text-gray-400" }
                  }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center" },
                    "star-rate": { "classes": "flex gap-1 items-center text-amber-400" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "text-gray-500 text-sm" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center mt-2" },
                    "button-wrapper": { "classes": "cursor-pointer text-white bg-gray-900 px-6 rounded-full flex items-center hover:bg-black transition-colors" },
                    "button-label": { "classes": "cursor-pointer text-white bg-gray-900 px-6 py-3 rounded-full" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border border-gray-200 gap-2 items-center rounded-full text-gray-900 px-3" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 20, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-gray-600 leading-relaxed" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center text-gray-900 font-medium" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Product Description" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-16" },
            "navs-items": { "classes": "flex gap-8 border-b border-gray-200" },
            "nav-item": { "classes": "pb-3 cursor-pointer font-medium text-gray-400" },
            "nav-item-active": { "classes": "border-b-2 border-gray-900 !text-gray-900" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "pt-6" }
          },
          "children": [
            {
              "id": "b4mtiizxt0",
              "type": "tabsItem",
              "options": [],
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                { "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }
              ]
            },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },
  {
    "title": "Minimal",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-10 max-w-4xl px-4" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-8 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-2" } },
              "children": [
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Out of stock", "inStockText": "In stock", "icon": "", "iconSize": 20, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-5 text-xs uppercase tracking-wide" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "text-red-500" },
                    "in-stock": { "classes": "text-gray-500" }
                  }
                },
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "text-xs text-gray-400" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-2" },
                    "item": { "classes": "" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-xl font-medium" } }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "simple-price-wrap": { "classes": "flex gap-2 items-center" },
                    "simple-price-sale": { "classes": "font-medium text-base text-gray-900" },
                    "simple-price-regular": { "classes": "line-through text-sm text-gray-400" }
                  }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center text-xs" },
                    "star-rate": { "classes": "flex gap-1 items-center text-gray-900" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center" },
                    "button-wrapper": { "classes": "cursor-pointer text-gray-900 border border-gray-900 px-4 flex items-center" },
                    "button-label": { "classes": "cursor-pointer text-gray-900 px-4 py-2" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border border-solid border-gray-300 gap-2 items-center text-gray-700 px-2" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 20, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-sm text-gray-500" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Product Description" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-10" },
            "navs-items": { "classes": "flex gap-4" },
            "nav-item": { "classes": "px-2 py-2 cursor-pointer text-sm text-gray-400" },
            "nav-item-active": { "classes": "border-b border-gray-900 !text-gray-900" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "" }
          },
          "children": [
            {
              "id": "b4mtiizxt0",
              "type": "tabsItem",
              "options": [],
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                { "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }
              ]
            },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },
  {
    "title": "Bold Dark",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-16 max-w-6xl px-4 bg-gray-950" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-10 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "rounded-lg overflow-hidden border border-gray-800" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-3 text-white" } },
              "children": [
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Out of stock", "inStockText": "In stock", "icon": "", "iconSize": 20, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-5 text-sm" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "bg-red-900 text-red-300 px-2 rounded-sm" },
                    "in-stock": { "classes": "bg-yellow-400 text-gray-950 px-2 rounded-sm font-semibold" }
                  }
                },
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "text-xs" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-2" },
                    "item": { "classes": "rounded-sm px-2 text-yellow-400" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-3xl font-bold text-white" } }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "simple-price-wrap": { "classes": "flex gap-2 items-center" },
                    "simple-price-sale": { "classes": "font-bold text-xl text-yellow-400" },
                    "simple-price-regular": { "classes": "line-through text-base text-gray-500" }
                  }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center" },
                    "star-rate": { "classes": "flex gap-1 items-center text-yellow-400" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "text-gray-400" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center" },
                    "button-wrapper": { "classes": "cursor-pointer text-gray-950 bg-yellow-400 px-4 rounded-sm flex items-center font-semibold hover:bg-yellow-300" },
                    "button-label": { "classes": "cursor-pointer text-gray-950 bg-yellow-400 px-4 py-2 rounded-sm" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border-2 border-solid border-yellow-400 gap-2 items-center rounded-sm text-yellow-400 px-2" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 20, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-gray-400" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center text-yellow-400" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Product Description" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-14" },
            "navs-items": { "classes": "flex gap-2" },
            "nav-item": { "classes": "px-3 py-2 cursor-pointer font-semibold text-gray-500" },
            "nav-item-active": { "classes": "border-b-2 border-yellow-400 !text-yellow-400" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "text-gray-300" }
          },
          "children": [
            {
              "id": "b4mtiizxt0",
              "type": "tabsItem",
              "options": [],
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                { "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }
              ]
            },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },



  {
    "title": "Fashion & Apparel",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-14 max-w-6xl px-4" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-12 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "rounded-none" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "object-cover aspect-[3/4]" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "w-2 h-2 rounded-full bg-gray-300" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
              "children": [
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": " / " },
                  "cssSelectors": {
                    "*": { "classes": "text-xs" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-1" },
                    "item": { "classes": "text-gray-400 uppercase tracking-widest" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-3xl font-light tracking-wide" } }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center text-xs" },
                    "star-rate": { "classes": "flex gap-1 items-center text-gray-900" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "text-gray-400" }
                  }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "simple-price-wrap": { "classes": "flex gap-3 items-center" },
                    "simple-price-sale": { "classes": "font-medium text-xl tracking-wide" },
                    "simple-price-regular": { "classes": "line-through text-base text-gray-400" }
                  }
                },
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Sold out", "inStockText": "In stock, ready to ship", "icon": "", "iconSize": 16, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 text-xs" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "text-red-500" },
                    "in-stock": { "classes": "text-gray-500" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Bag", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center mt-2" },
                    "button-wrapper": { "classes": "cursor-pointer text-white bg-black px-8 flex items-center uppercase text-xs tracking-widest hover:bg-gray-800" },
                    "button-label": { "classes": "cursor-pointer text-white bg-black px-8 py-3 uppercase text-xs tracking-widest" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border border-gray-300 gap-2 items-center text-gray-800 px-3" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 25, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-gray-500 leading-relaxed text-sm mt-2" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center underline" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "Designer: ", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs text-gray-400 uppercase tracking-widest" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Details & Fit" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-16" },
            "navs-items": { "classes": "flex gap-8 border-b border-gray-200" },
            "nav-item": { "classes": "pb-3 cursor-pointer uppercase text-xs tracking-widest text-gray-400" },
            "nav-item-active": { "classes": "border-b-2 border-black !text-black" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "pt-6 text-sm text-gray-600" }
          },
          "children": [
            { "id": "b4mtiizxt0", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [{ "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }] },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },
  {
    "title": "Electronics & Tech",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-14 max-w-6xl px-4" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-10 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "rounded-xl bg-gray-50 p-6" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "object-contain" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
              "children": [
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-sm font-semibold text-blue-600" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-2xl font-bold" } }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center" },
                    "star-rate": { "classes": "flex gap-1 items-center text-amber-400" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "font-medium" },
                    "total-reviews": { "classes": "text-blue-600 text-sm underline" }
                  }
                },
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Out of stock", "inStockText": "In stock", "icon": "", "iconSize": 18, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-5 text-sm" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "bg-red-100 text-red-600 px-2 py-0.5 rounded-md" },
                    "in-stock": { "classes": "bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md" }
                  }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "border-t border-b border-gray-100 py-3" },
                    "simple-price-wrap": { "classes": "flex gap-3 items-center" },
                    "simple-price-sale": { "classes": "font-bold text-2xl text-gray-900" },
                    "simple-price-regular": { "classes": "line-through text-base text-gray-400" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center mt-2" },
                    "button-wrapper": { "classes": "cursor-pointer text-white bg-blue-600 px-6 rounded-lg flex items-center font-medium hover:bg-blue-700" },
                    "button-label": { "classes": "cursor-pointer text-white bg-blue-600 px-6 py-3 rounded-lg font-medium" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border border-gray-200 gap-2 items-center rounded-lg text-gray-800 px-3" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 25, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-gray-600 leading-relaxed text-sm" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center text-blue-600 font-medium" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-2" },
                    "item": { "classes": "bg-gray-900 text-white text-xs px-2 py-1 rounded-md" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "Category: ", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "text-xs text-gray-400" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-2" },
                    "item": { "classes": "" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Specifications" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-14" },
            "navs-items": { "classes": "flex gap-6 border-b border-gray-200" },
            "nav-item": { "classes": "pb-3 cursor-pointer font-medium text-gray-400" },
            "nav-item-active": { "classes": "border-b-2 border-blue-600 !text-blue-600" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "pt-6" }
          },
          "children": [
            { "id": "b4mtiizxt0", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [{ "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }] },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },
  {
    "title": "Jewelry & Luxury",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-20 max-w-6xl px-6 bg-neutral-50" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-16 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "bg-white" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "object-contain aspect-square" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "w-1.5 h-1.5 rounded-full bg-amber-700" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-5 justify-center" } },
              "children": [
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-[0.2em] text-amber-700" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-4xl font-serif" } }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "simple-price-wrap": { "classes": "flex gap-3 items-center" },
                    "simple-price-sale": { "classes": "font-serif text-2xl text-gray-900" },
                    "simple-price-regular": { "classes": "line-through text-base text-gray-400" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 30, "readMoreText": "Read the full story", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-gray-600 leading-loose font-light" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center text-amber-700 underline" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Currently unavailable", "inStockText": "Available", "icon": "", "iconSize": 16, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 text-xs uppercase tracking-widest" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "text-red-500" },
                    "in-stock": { "classes": "text-gray-500" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center mt-3" },
                    "button-wrapper": { "classes": "cursor-pointer text-white bg-amber-800 px-10 flex items-center uppercase text-xs tracking-[0.2em] hover:bg-amber-900" },
                    "button-label": { "classes": "cursor-pointer text-white bg-amber-800 px-10 py-4 uppercase text-xs tracking-[0.2em]" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border border-amber-800 gap-2 items-center text-amber-800 px-3" }
                  }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center text-xs" },
                    "star-rate": { "classes": "flex gap-1 items-center text-amber-700" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "text-gray-400" }
                  }
                },
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs text-gray-400 uppercase tracking-widest" }, "label": { "classes": "" }, "items": { "classes": "flex gap-2" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Craftsmanship" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-20" },
            "navs-items": { "classes": "flex gap-10 justify-center border-b border-gray-200" },
            "nav-item": { "classes": "pb-3 cursor-pointer uppercase text-xs tracking-[0.2em] text-gray-400" },
            "nav-item-active": { "classes": "border-b border-amber-800 !text-amber-800" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "pt-8 max-w-3xl mx-auto text-center text-gray-600 font-light" }
          },
          "children": [
            { "id": "b4mtiizxt0", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [{ "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }] },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },
  {
    "title": "Food & Grocery",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-12 max-w-5xl px-4" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-8 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "rounded-2xl bg-green-50 p-4" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "object-contain" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "bg-green-600" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
              "children": [
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-2" },
                    "item": { "classes": "bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-2xl font-bold text-gray-800" } }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center text-sm" },
                    "star-rate": { "classes": "flex gap-1 items-center text-orange-400" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "text-gray-500" }
                  }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "simple-price-wrap": { "classes": "flex gap-2 items-center" },
                    "simple-price-sale": { "classes": "font-bold text-xl text-green-700" },
                    "simple-price-regular": { "classes": "line-through text-sm text-gray-400" }
                  }
                },
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Out of stock", "inStockText": "Fresh & in stock", "icon": "", "iconSize": 18, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-5 text-sm" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "bg-red-100 text-red-600 px-2 rounded-full" },
                    "in-stock": { "classes": "bg-green-100 text-green-700 px-2 rounded-full" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center mt-2" },
                    "button-wrapper": { "classes": "cursor-pointer text-white bg-green-600 px-5 rounded-full flex items-center font-medium hover:bg-green-700" },
                    "button-label": { "classes": "cursor-pointer text-white bg-green-600 px-5 py-2 rounded-full font-medium" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border-2 border-green-200 gap-2 items-center rounded-full text-green-700 px-3" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 20, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-gray-600 text-sm" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center text-green-700 font-medium" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs text-gray-400" }, "label": { "classes": "" }, "items": { "classes": "flex gap-2" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "Brand: ", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs text-gray-400" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Nutrition & Info" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-12" },
            "navs-items": { "classes": "flex gap-2" },
            "nav-item": { "classes": "px-4 py-2 cursor-pointer rounded-full font-medium text-gray-500 bg-gray-100" },
            "nav-item-active": { "classes": "!bg-green-600 !text-white" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "pt-6" }
          },
          "children": [
            { "id": "b4mtiizxt0", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [{ "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }] },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },
  {
    "title": "Furniture & Home",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-16 max-w-6xl px-4" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-12 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "rounded-lg bg-stone-100" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "object-cover" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
              "children": [
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs text-stone-500 uppercase tracking-wide" }, "label": { "classes": "" }, "items": { "classes": "flex gap-2" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-3xl font-medium text-stone-800" } }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 25, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-stone-500 leading-relaxed" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center text-stone-800 font-medium" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "border-t border-stone-200 pt-4" },
                    "simple-price-wrap": { "classes": "flex gap-3 items-center" },
                    "simple-price-sale": { "classes": "font-semibold text-2xl text-stone-800" },
                    "simple-price-regular": { "classes": "line-through text-base text-stone-400" }
                  }
                },
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Out of stock", "inStockText": "In stock — ships in 3-5 days", "icon": "", "iconSize": 18, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-5 text-sm" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "text-red-600" },
                    "in-stock": { "classes": "text-stone-600" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center mt-2" },
                    "button-wrapper": { "classes": "cursor-pointer text-white bg-stone-800 px-6 rounded-sm flex items-center font-medium hover:bg-stone-900" },
                    "button-label": { "classes": "cursor-pointer text-white bg-stone-800 px-6 py-3 rounded-sm font-medium" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border border-stone-300 gap-2 items-center rounded-sm text-stone-700 px-3" }
                  }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-3 items-center" },
                    "star-rate": { "classes": "flex gap-1 items-center text-amber-500" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "text-stone-400 text-sm" }
                  }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Materials & Dimensions" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-16" },
            "navs-items": { "classes": "flex gap-8 border-b border-stone-200" },
            "nav-item": { "classes": "pb-3 cursor-pointer font-medium text-stone-400" },
            "nav-item-active": { "classes": "border-b-2 border-stone-800 !text-stone-800" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "pt-6 text-stone-600" }
          },
          "children": [
            { "id": "b4mtiizxt0", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [{ "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }] },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  },
  {
    "title": "Beauty & Cosmetics",
    "thumbnail": "",
    "content":
    {
      "id": "b3mtim9h2x",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "mx-auto py-14 max-w-6xl px-4" } },
      "children": [
        {
          "id": "b3mtqua4ar",
          "type": "grid",
          "cssSelectors": { "*": { "classes": "grid gap-10 grid-cols-2" }, "grid-item": { "classes": "" } },
          "children": [
            {
              "id": "b3mtquagw3",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "" } },
              "children": [
                {
                  "id": "b3mtqubbc3",
                  "type": "productGallery",
                  "options": { "thumbnails": true },
                  "cssSelectors": {
                    "*": { "classes": "rounded-3xl bg-pink-50 p-6" },
                    "items": { "classes": "" },
                    "item": { "classes": "" },
                    "image": { "classes": "object-contain" },
                    "arrows": { "classes": "" },
                    "prev": { "classes": "" },
                    "next": { "classes": "" },
                    "pagination": { "classes": "" },
                    "dot": { "classes": "bg-pink-400" }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "b3mtquai5u",
              "type": "gridItem",
              "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
              "children": [
                {
                  "id": "b3mu24k07j",
                  "type": "productBrands",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-widest text-pink-500 font-semibold" }, "label": { "classes": "" }, "items": { "classes": "" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                },
                {
                  "id": "b3mtqubjib",
                  "type": "postTitle",
                  "options": { "classes": "", "linkTo": "" },
                  "cssSelectors": { "*": { "classes": "text-2xl font-semibold text-gray-800" } }
                },
                {
                  "id": "b3mty4n7g2",
                  "type": "productRatings",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center text-sm" },
                    "star-rate": { "classes": "flex gap-1 items-center text-pink-400" },
                    "icon": { "classes": "" },
                    "avg-rating": { "classes": "" },
                    "total-reviews": { "classes": "text-gray-400" }
                  }
                },
                {
                  "id": "b3mty4t64e",
                  "type": "productPrice",
                  "options": { "separator": "", "variablePriceViewType": "inline" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "simple-price-wrap": { "classes": "flex gap-2 items-center" },
                    "simple-price-sale": { "classes": "font-bold text-xl text-pink-600" },
                    "simple-price-regular": { "classes": "line-through text-sm text-gray-400" }
                  }
                },
                {
                  "id": "b3mtv50vum",
                  "type": "productStockStatus",
                  "options": { "label": "", "outofStockText": "Out of stock", "inStockText": "In stock", "icon": "", "iconSize": 16, "stock_status": "instock" },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-5 text-xs" },
                    "stock-status": { "classes": "" },
                    "label": { "classes": "" },
                    "icon": { "classes": "" },
                    "out-of-stock": { "classes": "text-red-500" },
                    "in-stock": { "classes": "text-pink-500" }
                  }
                },
                {
                  "id": "b3mty6bdbz",
                  "type": "addToCart",
                  "options": { "buttonText": "Add To Cart", "hideQuanity": false, "hideButton": false },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2 items-center mt-2" },
                    "button-wrapper": { "classes": "cursor-pointer text-white bg-pink-500 px-6 rounded-full flex items-center font-medium hover:bg-pink-600" },
                    "button-label": { "classes": "cursor-pointer text-white bg-pink-500 px-6 py-2.5 rounded-full font-medium" },
                    "button-icon": { "classes": "" },
                    "quantity-wrapper": { "classes": "flex border border-pink-200 gap-2 items-center rounded-full text-pink-600 px-3" }
                  }
                },
                {
                  "id": "b3mty6e6xx",
                  "type": "postExcerpt",
                  "options": { "maxWord": 20, "readMoreText": "", "readMoreIcon": "", "readMoreIconSize": 25 },
                  "cssSelectors": {
                    "*": { "classes": "text-gray-500 text-sm" },
                    "excerpt": { "classes": "" },
                    "read-more": { "classes": "flex gap-2 items-center text-pink-500 font-medium" },
                    "read-more-icon": { "classes": "" },
                    "read-more-label": { "classes": "" }
                  }
                },
                {
                  "id": "b3mu24dysu",
                  "type": "productBadge",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": {
                    "*": { "classes": "flex gap-2" },
                    "label": { "classes": "" },
                    "items": { "classes": "flex gap-2" },
                    "item": { "classes": "bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full" },
                    "category-name": { "classes": "" },
                    "separator": { "classes": "" }
                  }
                },
                {
                  "id": "b3mtv583jo",
                  "type": "productCategories",
                  "options": { "label": "", "separator": ", " },
                  "cssSelectors": { "*": { "classes": "text-xs text-gray-400" }, "label": { "classes": "" }, "items": { "classes": "flex gap-2" }, "item": { "classes": "" }, "category-name": { "classes": "" }, "separator": { "classes": "" } }
                }
              ]
            }
          ],
          "options": []
        },
        {
          "id": "b3mtv59y9h",
          "type": "tabs",
          "options": { "tabsItems": [{ "label": "Ingredients & How to Use" }, { "label": "Reviews" }], "orientation": "" },
          "cssSelectors": {
            "*": { "classes": "mt-12" },
            "navs-items": { "classes": "flex gap-2" },
            "nav-item": { "classes": "px-4 py-2 cursor-pointer rounded-full font-medium text-gray-500 bg-pink-50" },
            "nav-item-active": { "classes": "!bg-pink-500 !text-white" },
            "nav-item-label": { "classes": "" },
            "nav-item-icon": { "classes": "" },
            "nav-item-content": { "classes": "pt-6 text-gray-600" }
          },
          "children": [
            { "id": "b4mtiizxt0", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [{ "id": "b3mtv5f403", "type": "postContent", "options": { "classes": "" }, "cssSelectors": { "*": { "classes": "" } } }] },
            { "id": "b4mtiizy9o", "type": "tabsItem", "options": [], "cssSelectors": { "*": { "classes": "" } }, "children": [] }
          ]
        }
      ]
    }

  }

]
export default landingPages;