var landingPages = [
  {
    title: 'Fashion & Clothing',
    thumbnail: '',
    content: {
      "id": "fashionhero01",
      "type": "section",
      "options": [],
      "children": [
        {
          "id": "fashiongrid01",
          "type": "grid",
          "cssSelectors": {
            "*": {
              "classes": "grid gap-8 p-3 grid-cols-1 xl:grid-cols-2 items-center"
            },
            "grid-item": {
              "classes": ""
            }
          },
          "children": [
            {
              "id": "fashioncontent01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": ""
                }
              },
              "children": [
                {
                  "id": "fashionbadge01",
                  "type": "button",
                  "options": {
                    "text": "Style that feels like you",
                    "tag": "div",
                    "icon": "IconSparkles"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex gap-3 text-sm items-center"
                    },
                    "icon": {
                      "classes": "text-pink-500"
                    },
                    "label": {
                      "classes": ""
                    }
                  }
                },
                {
                  "id": "fashionheading01",
                  "type": "heading",
                  "options": {
                    "text": "Discover Your",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl py-6 font-bold"
                    }
                  }
                },
                {
                  "id": "fashionheading02",
                  "type": "heading",
                  "options": {
                    "text": "Perfect Style",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl text-pink-500 pb-6 font-bold"
                    }
                  }
                },
                {
                  "id": "fashiontext01",
                  "type": "heading",
                  "options": {
                    "text": "Trendy fashion, everyday essentials & timeless pieces -",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg"
                    }
                  }
                },
                {
                  "id": "fashiontext02",
                  "type": "heading",
                  "options": {
                    "text": "Everything you need to dress with confidence.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg"
                    }
                  }
                },
                {
                  "id": "fashioncolumns01",
                  "type": "columns",
                  "cssSelectors": {
                    "*": {
                      "classes": "flex items-center gap-3 py-10"
                    },
                    "column": {
                      "classes": ""
                    }
                  },
                  "children": [
                    {
                      "id": "fashionbutton01",
                      "type": "button",
                      "options": {
                        "text": "Shop Collection",
                        "tag": "a",
                        "linkTo": "custom",
                        "url": "/shop"
                      },
                      "cssSelectors": {
                        "*": {
                          "classes": "bg-pink-500 rounded-sm text-white font-semibold p-2 px-5"
                        },
                        "icon": {
                          "classes": ""
                        },
                        "label": {
                          "classes": ""
                        }
                      }
                    }
                  ],
                  "options": []
                },
                {
                  "id": "fashionlist01",
                  "type": "list",
                  "options": {
                    "icon": "",
                    "iconSize": 20,
                    "items": [
                      {
                        "text": "Latest Trends",
                        "icon": "IconShirt"
                      },
                      {
                        "text": "Quality Fabrics",
                        "icon": "IconBadge"
                      },
                      {
                        "text": "Easy Delivery",
                        "icon": "IconTruck"
                      }
                    ],
                    "tag": "ul"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex flex-wrap gap-5"
                    },
                    "li": {
                      "classes": "list-disc flex gap-2"
                    },
                    "icon": {
                      "classes": "text-lg text-pink-500"
                    },
                    "text": {
                      "classes": "text-sm"
                    }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "fashionimage01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": ""
                }
              },
              "children": [
                {
                  "id": "fashionimg01",
                  "type": "image",
                  "options": {
                    "src": "https://server.kidobazar.com/wp-content/uploads/2026/09/fashion-hero.png",
                    "width": "",
                    "height": ""
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "overflow-hidden rounded-xl"
                    },
                    "link": {
                      "classes": ""
                    },
                    "img": {
                      "classes": "w-full h-full object-cover"
                    }
                  }
                }
              ],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "cssSelectors": {
        "*": {
          "classes": "py-20 max-w-6xl mx-auto px-5"
        }
      }
    },
  },
  {
    title: 'Beauty & Personal Care',
    thumbnail: '',
    content: {
      "id": "beautyhero01",
      "type": "section",
      "options": [],
      "children": [
        {
          "id": "beautygrid01",
          "type": "grid",
          "cssSelectors": {
            "*": {
              "classes": "grid gap-8 p-3 grid-cols-1 xl:grid-cols-2 items-center"
            },
            "grid-item": {
              "classes": ""
            }
          },
          "children": [
            {
              "id": "beautycontent01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": ""
                }
              },
              "children": [
                {
                  "id": "beautybadge01",
                  "type": "button",
                  "options": {
                    "text": "Care for yourself, every day",
                    "tag": "div",
                    "icon": "IconHeart"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex gap-3 text-sm items-center"
                    },
                    "icon": {
                      "classes": "text-rose-500"
                    },
                    "label": {
                      "classes": ""
                    }
                  }
                },
                {
                  "id": "beautyheading01",
                  "type": "heading",
                  "options": {
                    "text": "Feel Good.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl py-6 font-bold"
                    }
                  }
                },
                {
                  "id": "beautyheading02",
                  "type": "heading",
                  "options": {
                    "text": "Look Your Best.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl text-rose-500 pb-6 font-bold"
                    }
                  }
                },
                {
                  "id": "beautytext01",
                  "type": "heading",
                  "options": {
                    "text": "Skincare, haircare, body care & beauty essentials -",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg"
                    }
                  }
                },
                {
                  "id": "beautytext02",
                  "type": "heading",
                  "options": {
                    "text": "Simple products for your everyday self-care routine.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg"
                    }
                  }
                },
                {
                  "id": "beautycolumns01",
                  "type": "columns",
                  "cssSelectors": {
                    "*": {
                      "classes": "flex items-center gap-3 py-10"
                    },
                    "column": {
                      "classes": ""
                    }
                  },
                  "children": [
                    {
                      "id": "beautybutton01",
                      "type": "button",
                      "options": {
                        "text": "Explore Beauty",
                        "tag": "a",
                        "linkTo": "custom",
                        "url": "/shop"
                      },
                      "cssSelectors": {
                        "*": {
                          "classes": "bg-rose-500 rounded-sm text-white font-semibold p-2 px-5"
                        },
                        "icon": {
                          "classes": ""
                        },
                        "label": {
                          "classes": ""
                        }
                      }
                    }
                  ],
                  "options": []
                },
                {
                  "id": "beautylist01",
                  "type": "list",
                  "options": {
                    "icon": "",
                    "iconSize": 20,
                    "items": [
                      {
                        "text": "Quality Products",
                        "icon": "IconBadge"
                      },
                      {
                        "text": "Everyday Essentials",
                        "icon": "IconSparkles"
                      },
                      {
                        "text": "Fast Delivery",
                        "icon": "IconTruck"
                      }
                    ],
                    "tag": "ul"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex flex-wrap gap-5"
                    },
                    "li": {
                      "classes": "list-disc flex gap-2"
                    },
                    "icon": {
                      "classes": "text-lg text-rose-500"
                    },
                    "text": {
                      "classes": "text-sm"
                    }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "beautyimage01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": ""
                }
              },
              "children": [
                {
                  "id": "beautyimg01",
                  "type": "image",
                  "options": {
                    "src": "https://server.kidobazar.com/wp-content/uploads/2026/09/beauty-hero.png",
                    "width": "",
                    "height": ""
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "overflow-hidden rounded-xl"
                    },
                    "link": {
                      "classes": ""
                    },
                    "img": {
                      "classes": "w-full h-full object-cover"
                    }
                  }
                }
              ],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "cssSelectors": {
        "*": {
          "classes": "py-20 max-w-6xl mx-auto px-5"
        }
      }
    },
  },
  {
    title: 'Baby & Mother Care',
    thumbnail: '',
    content: {
      "id": "motherbabyhero01",
      "type": "section",
      "options": [],
      "children": [
        {
          "id": "motherbabygrid01",
          "type": "grid",
          "cssSelectors": {
            "*": {
              "classes": "grid gap-8 p-3 grid-cols-1 xl:grid-cols-2 items-center"
            },
            "grid-item": {
              "classes": ""
            }
          },
          "children": [
            {
              "id": "motherbabycontent01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": ""
                }
              },
              "children": [
                {
                  "id": "motherbabybadge01",
                  "type": "button",
                  "options": {
                    "text": "Made for little moments & loving mothers",
                    "tag": "div",
                    "icon": "IconHeart"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex gap-3 text-sm items-center"
                    },
                    "icon": {
                      "classes": "text-purple-500"
                    },
                    "label": {
                      "classes": ""
                    }
                  }
                },
                {
                  "id": "motherbabyheading01",
                  "type": "heading",
                  "options": {
                    "text": "Care for Baby.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl py-6 font-bold"
                    }
                  }
                },
                {
                  "id": "motherbabyheading02",
                  "type": "heading",
                  "options": {
                    "text": "Care for Mom.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl text-purple-500 pb-6 font-bold"
                    }
                  }
                },
                {
                  "id": "motherbabytext01",
                  "type": "heading",
                  "options": {
                    "text": "Baby essentials, feeding, diapers, maternity & mother care -",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg"
                    }
                  }
                },
                {
                  "id": "motherbabytext02",
                  "type": "heading",
                  "options": {
                    "text": "Everything you need for a happier, healthier family.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg"
                    }
                  }
                },
                {
                  "id": "motherbabycolumns01",
                  "type": "columns",
                  "cssSelectors": {
                    "*": {
                      "classes": "flex items-center gap-3 py-10"
                    },
                    "column": {
                      "classes": ""
                    }
                  },
                  "children": [
                    {
                      "id": "motherbabybutton01",
                      "type": "button",
                      "options": {
                        "text": "Shop Baby & Mom",
                        "tag": "a",
                        "linkTo": "custom",
                        "url": "/shop"
                      },
                      "cssSelectors": {
                        "*": {
                          "classes": "bg-purple-500 rounded-sm text-white font-semibold p-2 px-5"
                        },
                        "icon": {
                          "classes": ""
                        },
                        "label": {
                          "classes": ""
                        }
                      }
                    }
                  ],
                  "options": []
                },
                {
                  "id": "motherbabylist01",
                  "type": "list",
                  "options": {
                    "icon": "",
                    "iconSize": 20,
                    "items": [
                      {
                        "text": "Baby Essentials",
                        "icon": "IconBabyCarriage"
                      },
                      {
                        "text": "Mother Care",
                        "icon": "IconHeart"
                      },
                      {
                        "text": "Fast Home Delivery",
                        "icon": "IconTruck"
                      }
                    ],
                    "tag": "ul"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex flex-wrap gap-5"
                    },
                    "li": {
                      "classes": "list-disc flex gap-2"
                    },
                    "icon": {
                      "classes": "text-lg text-purple-500"
                    },
                    "text": {
                      "classes": "text-sm"
                    }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "motherbabyimage01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": ""
                }
              },
              "children": [
                {
                  "id": "motherbabyimg01",
                  "type": "image",
                  "options": {
                    "src": "https://server.kidobazar.com/wp-content/uploads/2026/09/baby-mother-hero.png",
                    "width": "",
                    "height": ""
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "overflow-hidden rounded-xl"
                    },
                    "link": {
                      "classes": ""
                    },
                    "img": {
                      "classes": "w-full h-full object-cover"
                    }
                  }
                }
              ],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "cssSelectors": {
        "*": {
          "classes": "py-20 max-w-6xl mx-auto px-5"
        }
      }
    },
  },
  {
    title: 'Home & Kitchen',
    thumbnail: '',
    content: {
      "id": "homekitchen01",
      "type": "section",
      "options": [],
      "children": [
        {
          "id": "hk-grid01",
          "type": "grid",
          "cssSelectors": {
            "*": {
              "classes": "grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[600px]"
            },
            "grid-item": {
              "classes": ""
            }
          },
          "children": [
            {
              "id": "hk-main01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "lg:col-span-7 bg-amber-50 rounded-2xl p-8 lg:p-14 flex flex-col justify-center"
                }
              },
              "children": [
                {
                  "id": "hk-badge",
                  "type": "button",
                  "options": {
                    "text": "Make home feel better",
                    "tag": "div",
                    "icon": "IconHome"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex gap-2 items-center text-sm"
                    },
                    "icon": {
                      "classes": "text-amber-600"
                    }
                  }
                },
                {
                  "id": "hk-title",
                  "type": "heading",
                  "options": {
                    "text": "Beautiful Things",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-5xl lg:text-7xl font-bold pt-6"
                    }
                  }
                },
                {
                  "id": "hk-title2",
                  "type": "heading",
                  "options": {
                    "text": "For Every Home",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-5xl lg:text-7xl font-bold text-amber-600 pb-6"
                    }
                  }
                },
                {
                  "id": "hk-text",
                  "type": "heading",
                  "options": {
                    "text": "Kitchen essentials, home organization, dining & everyday living.",
                    "tag": "p"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg max-w-xl"
                    }
                  }
                },
                {
                  "id": "hk-button",
                  "type": "columns",
                  "cssSelectors": {
                    "*": {
                      "classes": "flex gap-3 pt-8"
                    }
                  },
                  "children": [
                    {
                      "id": "hk-shop",
                      "type": "button",
                      "options": {
                        "text": "Explore Home",
                        "tag": "a",
                        "linkTo": "custom",
                        "url": "/shop"
                      },
                      "cssSelectors": {
                        "*": {
                          "classes": "bg-amber-600 text-white font-semibold rounded-full px-6 py-3"
                        }
                      }
                    }
                  ],
                  "options": []
                }
              ],
              "options": []
            },
            {
              "id": "hk-side01",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "lg:col-span-5 overflow-hidden rounded-2xl"
                }
              },
              "children": [
                {
                  "id": "hk-image",
                  "type": "image",
                  "options": {
                    "src": "https://server.kidobazar.com/wp-content/uploads/2026/09/home-kitchen-hero.png",
                    "width": "",
                    "height": ""
                  },
                  "cssSelectors": {
                    "img": {
                      "classes": "w-full h-full object-cover"
                    }
                  }
                }
              ],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "cssSelectors": {
        "*": {
          "classes": "py-16 max-w-7xl mx-auto px-5"
        }
      }
    },
  },
  {
    title: 'Grocery & Food',
    thumbnail: '',
    content: {
      "id": "groceryfood01",
      "type": "section",
      "options": [],
      "children": [
        {
          "id": "gf-content",
          "type": "grid",
          "cssSelectors": {
            "*": {
              "classes": "grid grid-cols-1 gap-6 text-center"
            }
          },
          "children": [
            {
              "id": "gf-heading",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "max-w-3xl mx-auto"
                }
              },
              "children": [
                {
                  "id": "gf-badge",
                  "type": "button",
                  "options": {
                    "text": "Freshness delivered to your door",
                    "tag": "div",
                    "icon": "IconShoppingCart"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "inline-flex gap-2 items-center text-sm"
                    },
                    "icon": {
                      "classes": "text-green-600"
                    }
                  }
                },
                {
                  "id": "gf-title",
                  "type": "heading",
                  "options": {
                    "text": "Fresh Food.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl font-bold pt-5"
                    }
                  }
                },
                {
                  "id": "gf-title2",
                  "type": "heading",
                  "options": {
                    "text": "Everyday Essentials.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-6xl font-bold text-green-600"
                    }
                  }
                },
                {
                  "id": "gf-text",
                  "type": "heading",
                  "options": {
                    "text": "Groceries, snacks, drinks and pantry favorites for every day.",
                    "tag": "p"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-lg py-5"
                    }
                  }
                },
                {
                  "id": "gf-button",
                  "type": "button",
                  "options": {
                    "text": "Shop Groceries",
                    "tag": "a",
                    "linkTo": "custom",
                    "url": "/shop"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "inline-flex bg-green-600 text-white font-semibold rounded-full px-7 py-3"
                    }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "gf-features",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "grid grid-cols-1 md:grid-cols-3 gap-4 pt-10"
                }
              },
              "children": [
                {
                  "id": "gf-card1",
                  "type": "button",
                  "options": {
                    "text": "Fresh & Quality",
                    "tag": "div",
                    "icon": "IconLeaf"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "p-6 rounded-xl bg-green-50 font-semibold"
                    },
                    "icon": {
                      "classes": "text-green-600 text-2xl"
                    }
                  }
                },
                {
                  "id": "gf-card2",
                  "type": "button",
                  "options": {
                    "text": "Everyday Prices",
                    "tag": "div",
                    "icon": "IconTag"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "p-6 rounded-xl bg-orange-50 font-semibold"
                    },
                    "icon": {
                      "classes": "text-orange-500 text-2xl"
                    }
                  }
                },
                {
                  "id": "gf-card3",
                  "type": "button",
                  "options": {
                    "text": "Home Delivery",
                    "tag": "div",
                    "icon": "IconTruck"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "p-6 rounded-xl bg-blue-50 font-semibold"
                    },
                    "icon": {
                      "classes": "text-blue-500 text-2xl"
                    }
                  }
                }
              ],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "cssSelectors": {
        "*": {
          "classes": "py-20 max-w-6xl mx-auto px-5"
        }
      }
    },
  },
  {
    title: 'Mobile Accessories',
    thumbnail: '',
    content: {
      "id": "mobileaccessories01",
      "type": "section",
      "options": [],
      "children": [
        {
          "id": "ma-grid",
          "type": "grid",
          "cssSelectors": {
            "*": {
              "classes": "grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-slate-950"
            }
          },
          "children": [
            {
              "id": "ma-content",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "p-8 lg:p-16 flex flex-col justify-center text-white"
                }
              },
              "children": [
                {
                  "id": "ma-badge",
                  "type": "button",
                  "options": {
                    "text": "Upgrade your everyday tech",
                    "tag": "div",
                    "icon": "IconDeviceMobile"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex gap-3 items-center text-sm"
                    },
                    "icon": {
                      "classes": "text-cyan-400"
                    }
                  }
                },
                {
                  "id": "ma-title",
                  "type": "heading",
                  "options": {
                    "text": "Smart Accessories",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-5xl lg:text-6xl font-bold py-6"
                    }
                  }
                },
                {
                  "id": "ma-title2",
                  "type": "heading",
                  "options": {
                    "text": "Better Connections.",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-5xl lg:text-6xl font-bold text-cyan-400"
                    }
                  }
                },
                {
                  "id": "ma-text",
                  "type": "heading",
                  "options": {
                    "text": "Cases, chargers, cables, power banks, earbuds & more.",
                    "tag": "p"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-slate-300 text-lg pt-5"
                    }
                  }
                },
                {
                  "id": "ma-button",
                  "type": "button",
                  "options": {
                    "text": "Shop Accessories",
                    "tag": "a",
                    "linkTo": "custom",
                    "url": "/shop"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "mt-8 self-start bg-cyan-400 text-slate-950 font-bold rounded-full px-7 py-3"
                    }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "ma-image",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "min-h-[500px]"
                }
              },
              "children": [
                {
                  "id": "ma-img",
                  "type": "image",
                  "options": {
                    "src": "https://server.kidobazar.com/wp-content/uploads/2026/09/mobile-accessories-hero.png",
                    "width": "",
                    "height": ""
                  },
                  "cssSelectors": {
                    "img": {
                      "classes": "w-full h-full object-cover"
                    }
                  }
                }
              ],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "cssSelectors": {
        "*": {
          "classes": "py-16 max-w-7xl mx-auto px-5"
        }
      }
    },
  },
  {
    title: 'Electronics & Gadgets',
    thumbnail: '',
    content: {
      "id": "electronicsgadgets01",
      "type": "section",
      "options": [],
      "children": [
        {
          "id": "eg-grid",
          "type": "grid",
          "cssSelectors": {
            "*": {
              "classes": "grid grid-cols-1 md:grid-cols-3 gap-4"
            }
          },
          "children": [
            {
              "id": "eg-main",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative min-h-[550px]"
                }
              },
              "children": [
                {
                  "id": "eg-image",
                  "type": "image",
                  "options": {
                    "src": "https://server.kidobazar.com/wp-content/uploads/2026/09/electronics-hero.png",
                    "width": "",
                    "height": ""
                  },
                  "cssSelectors": {
                    "img": {
                      "classes": "w-full h-full object-cover"
                    }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "eg-content",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "rounded-2xl bg-blue-50 p-8 flex flex-col justify-center"
                }
              },
              "children": [
                {
                  "id": "eg-badge",
                  "type": "button",
                  "options": {
                    "text": "Technology made simple",
                    "tag": "div",
                    "icon": "IconCpu"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "flex gap-2 items-center text-sm"
                    },
                    "icon": {
                      "classes": "text-blue-600"
                    }
                  }
                },
                {
                  "id": "eg-title",
                  "type": "heading",
                  "options": {
                    "text": "Tech That",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-4xl font-bold pt-5"
                    }
                  }
                },
                {
                  "id": "eg-title2",
                  "type": "heading",
                  "options": {
                    "text": "Moves With You",
                    "tag": "h1"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-4xl font-bold text-blue-600"
                    }
                  }
                }
              ],
              "options": []
            },
            {
              "id": "eg-button",
              "type": "gridItem",
              "cssSelectors": {
                "*": {
                  "classes": "rounded-2xl bg-slate-950 p-8 flex flex-col justify-between"
                }
              },
              "children": [
                {
                  "id": "eg-text",
                  "type": "heading",
                  "options": {
                    "text": "Discover gadgets, smart devices & everyday electronics.",
                    "tag": "p"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "text-white text-lg"
                    }
                  }
                },
                {
                  "id": "eg-shop",
                  "type": "button",
                  "options": {
                    "text": "Explore Gadgets",
                    "tag": "a",
                    "linkTo": "custom",
                    "url": "/shop"
                  },
                  "cssSelectors": {
                    "*": {
                      "classes": "mt-6 self-start bg-blue-500 text-white font-semibold rounded-full px-6 py-3"
                    }
                  }
                }
              ],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "cssSelectors": {
        "*": {
          "classes": "py-16 max-w-7xl mx-auto px-5"
        }
      }
    },
  },



]
export default landingPages;