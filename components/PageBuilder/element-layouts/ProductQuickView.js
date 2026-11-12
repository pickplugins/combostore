/**
 * Element layouts for the `productQuickView` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productQuickView` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productQuickView"`. (PageBuilder.jsx regenerates
 * all ids on paste/replace, so the readable ids below are safe.)
 *
 * productQuickView is a trigger button plus a panel holding child blocks.
 * The children read the product from PostContext, so a quick view placed in
 * a product loop (postGrid / postSlider card) shows that card's product.
 * Each preset therefore ships the button, the panel and a full set of
 * product children: gallery, title, rating, price, excerpt, variations,
 * stock and add to cart.
 *
 * Notes that shaped these presets:
 *
 * 1. Placement comes from options.position through
 *    elements/productQuickViewLayout.js: 'fixedMiddle' is a centred modal
 *    (`w-full max-w-4xl` is added there), 'fixedLeft' / 'fixedRight' are full
 *    height drawers whose width comes from the `popover` classes, and the
 *    top / bottom positions are 20rem dropdowns hanging off the button.
 *    A narrower modal sets a responsive max-width (`sm:max-w-xl`), which
 *    wins over the base `max-w-4xl`.
 *
 * 2. The close button sits in a zero-height sticky holder at the panel's top
 *    right, so `popover-close` only needs its margin and looks; content that
 *    starts at the very top (an edge-to-edge image) stays under it.
 *
 * 3. On phones the modal layer aligns to the bottom, so `rounded-t-3xl
 *    sm:rounded-2xl` turns the modal into a bottom sheet there.
 *
 * 4. Product title links to the product (linkTo 'postUrl'); "View full
 *    details" is the post excerpt's read-more link, which goes to the same
 *    page - button blocks cannot link to the current product.
 *
 * 5. Built with withElementCssDefaults(), so each block carries its element's
 *    full key set (the builder's style editor only lists keys a block has).
 */

import { withElementCssDefaults } from '../ElementsDefinition';


/* ---------------------------------------------------------------------------
   Child blocks. `p` prefixes the ids so each preset's children are distinct.
--------------------------------------------------------------------------- */

var block = (type, id, options, cssSelectors, children) => {
  var b = {
    "id": id,
    "type": type,
    "options": options ?? {},
    "cssSelectors": withElementCssDefaults(type, cssSelectors ?? {})
  };
  if (children) {
    b.children = children;
  }
  return b;
};

var gallery = (p, itemClasses = 'rounded-xl overflow-hidden bg-neutral-100 [&_img]:aspect-square [&_img]:object-cover', thumbnails = true) =>
  block('productGallery', `${p}-gallery`, {
    "thumbnails": thumbnails,
    "sliderOptions": { "type": "slide", "perPage": 1, "perMove": 1, "rewind": true, "arrows": 1, "pagination": 0, "speed": 400, "drag": 1 }
  }, {
    "item": { "classes": itemClasses },
    "prev": { "classes": "bg-white! opacity-100! size-8! rounded-full! shadow-md [&>svg]:fill-neutral-700! [&>svg]:size-3!" },
    "next": { "classes": "bg-white! opacity-100! size-8! rounded-full! shadow-md [&>svg]:fill-neutral-700! [&>svg]:size-3!" },
    "thumbnails": { "classes": "mt-3" },
    "thumbnail": { "classes": "rounded-lg overflow-hidden opacity-70 [&.is-active]:opacity-100" },
    "thumbnail-image": { "classes": "w-full h-full object-cover" }
  });

var categories = (p) => block('productCategories', `${p}-cats`, { "label": "", "separator": " · " }, {
  "*": { "classes": "flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-neutral-500" },
  "item": { "classes": "hover:text-neutral-900 transition-colors" }
});

var title = (p, classes = 'text-2xl font-bold leading-tight text-neutral-900 hover:text-neutral-700 transition-colors', tag = 'h2') =>
  block('postTitle', `${p}-title`, { "linkTo": "postUrl", "tag": tag }, { "*": { "classes": classes } });

var ratings = (p) => block('productRatings', `${p}-rating`, { "hideIfEmpty": true }, {
  "*": { "classes": "flex items-center gap-2 text-sm" },
  "star-rate": { "classes": "flex items-center gap-0.5 text-amber-400" },
  "avg-rating": { "classes": "font-medium text-neutral-700" },
  "total-reviews": { "classes": "text-neutral-500" }
});

var price = (p, size = 'text-2xl') => block('productPrice', `${p}-price`, {}, {
  "*": { "classes": "flex flex-wrap items-baseline gap-2" },
  "simple-price-wrap": { "classes": "flex items-baseline gap-2" },
  "simple-price-sale": { "classes": `${size} font-bold text-neutral-900` },
  "simple-price-regular": { "classes": "text-base text-neutral-400 line-through" },
  "variable-price-wrap": { "classes": "flex items-baseline gap-1" },
  "variable-price-min": { "classes": `${size} font-bold text-neutral-900` },
  "variable-price-max": { "classes": `${size} font-bold text-neutral-900` }
});

var discount = (p) => block('productDiscount', `${p}-discount`, { "label": "OFF" }, {
  "*": { "classes": "inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-600" }
});

var priceRow = (p, size) => block('columns', `${p}-price-row`, {}, {
  "*": { "classes": "flex flex-wrap items-center gap-3" },
  "column": { "classes": "" }
}, [
  block('columnItem', `${p}-price-row-a`, {}, {}, [price(p, size)]),
  block('columnItem', `${p}-price-row-b`, {}, {}, [discount(p)])
]);

var excerpt = (p, maxWord = 30, readMoreText = '') => block('postExcerpt', `${p}-excerpt`, {
  "maxWord": maxWord, "readMoreText": readMoreText, "readMoreIcon": readMoreText ? "IconArrowRight" : "", "readMoreIconSize": 16
}, {
  "*": { "classes": "flex flex-col gap-3" },
  "excerpt": { "classes": "text-sm leading-relaxed text-neutral-600" },
  "read-more": { "classes": "inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline" }
});

/* Just the "View full details" link: an excerpt with its text hidden. */
var detailsLink = (p) => block('postExcerpt', `${p}-details-link`, {
  "maxWord": 1, "readMoreText": "View full details", "readMoreIcon": "IconArrowRight", "readMoreIconSize": 16
}, {
  "*": { "classes": "flex" },
  "excerpt": { "classes": "hidden" },
  "read-more": { "classes": "inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline" }
});

var variations = (p) => block('productVariations', `${p}-variations`, {}, {
  "attr-wrap": { "classes": "flex flex-col gap-4" },
  "attr-title": { "classes": "flex flex-col gap-2 text-sm font-semibold text-neutral-900" },
  "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
  "variation-item": { "classes": "rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-800 transition-colors hover:border-neutral-500 cursor-pointer" },
  "variation-selected": { "classes": "!border-neutral-900 !bg-neutral-900 !text-white" }
});

var stock = (p) => block('productStockStatus', `${p}-stock`, {
  "inStockText": "In stock", "outOfStockText": "Out of stock", "inStockIcon": "IconCircleCheckFilled", "outOfStockIcon": "IconCircleXFilled", "iconSize": 16
}, {
  "*": { "classes": "flex items-center gap-2 text-sm font-medium" },
  "in-stock": { "classes": "flex items-center gap-1.5 text-emerald-600" },
  "out-of-stock": { "classes": "flex items-center gap-1.5 text-red-600" }
});

var addToCart = (p, buttonClasses = 'flex flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-white cursor-pointer hover:bg-neutral-800 transition-colors') =>
  block('addToCart', `${p}-atc`, {
    "buttonText": "Add to cart", "icon": "IconShoppingBagPlus", "iconSize": 18, "hideQuantity": false, "hideButton": false
  }, {
    "*": { "classes": "flex w-full items-stretch gap-3" },
    "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 rounded-lg border border-neutral-300 px-2 text-neutral-600" },
    "button-wrapper": { "classes": buttonClasses },
    "button-icon": { "classes": "flex items-center" },
    "button-label": { "classes": "text-sm font-semibold whitespace-nowrap" }
  });

var sku = (p) => block('productSku', `${p}-sku`, { "label": "SKU:" }, {
  "*": { "classes": "flex items-center gap-1.5 text-xs text-neutral-500" },
  "sku": { "classes": "font-medium text-neutral-700" }
});

/* A column of blocks with a vertical rhythm. */
var stack = (id, classes, children) => block('columnItem', id, {}, { "*": { "classes": classes } }, children);

/* Gallery on the left, details on the right; stacks on phones. */
var split = (p, details, galleryBlock) => block('columns', `${p}-split`, {}, {
  "*": { "classes": "flex flex-col gap-6 md:flex-row md:gap-8" },
  "column": { "classes": "min-w-0" }
}, [
  stack(`${p}-media`, 'md:w-1/2 md:shrink-0', [galleryBlock ?? gallery(p)]),
  stack(`${p}-details`, 'flex flex-col gap-4 md:flex-1 md:py-2', details)
]);

var divider = (p) => block('columns', `${p}-meta`, {}, {
  "*": { "classes": "flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4" },
  "column": { "classes": "" }
}, [
  stack(`${p}-meta-a`, '', [stock(p)]),
  stack(`${p}-meta-b`, '', [sku(p)])
]);


/* ---------------------------------------------------------------------------
   Trigger buttons.
--------------------------------------------------------------------------- */

var solidButton = 'inline-flex items-center justify-center gap-2 max-w-fit cursor-pointer rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 focus-visible:ring-offset-2';
var closeButton = 'mr-3 mt-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-500 shadow-sm ring-1 ring-black/5 backdrop-blur transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40';
var backdrop = 'fixed inset-0 z-[998] bg-neutral-900/50 backdrop-blur-[2px]';

var quickView = (id, options, cssSelectors, children) => ({
  "id": id,
  "type": "productQuickView",
  "options": { "buttonLabel": "Quick View", "buttonIcon": "IconEye", "iconSize": 18, "slideIn": "", "slideOut": "", ...options },
  "cssSelectors": withElementCssDefaults('productQuickView', {
    "backdrop": { "classes": backdrop },
    "popover-close": { "classes": closeButton },
    ...cssSelectors
  }),
  "children": children
});


var layouts = [

  {
    title: 'Split Modal',
    thumbnail: '',
    content: quickView('qv-split', { "position": "fixedMiddle" }, {
      "button": { "classes": solidButton },
      "popover": { "classes": "z-[999] overflow-y-auto overscroll-contain bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 rounded-t-3xl sm:rounded-2xl" },
      "popover-content": { "classes": "p-5 sm:p-8" }
    }, [
      split('qv-split', [
        categories('qv-split'),
        title('qv-split'),
        ratings('qv-split'),
        priceRow('qv-split'),
        excerpt('qv-split', 30, 'View full details'),
        variations('qv-split'),
        addToCart('qv-split'),
        divider('qv-split')
      ])
    ]),
  },

  {
    title: 'Edge-to-Edge Image Modal',
    thumbnail: '',
    content: quickView('qv-edge', { "position": "fixedMiddle" }, {
      "button": { "classes": solidButton },
      "popover": { "classes": "z-[999] overflow-y-auto overscroll-contain bg-white text-neutral-900 shadow-2xl rounded-t-3xl sm:rounded-3xl" },
      "popover-content": { "classes": "" }
    }, [
      block('columns', 'qv-edge-split', {}, {
        "*": { "classes": "flex flex-col md:flex-row" },
        "column": { "classes": "min-w-0" }
      }, [
        stack('qv-edge-media', 'bg-neutral-100 md:w-1/2 md:shrink-0', [
          gallery('qv-edge', '[&_img]:aspect-[4/5] [&_img]:object-cover', false)
        ]),
        stack('qv-edge-details', 'flex flex-col gap-4 p-6 sm:p-8 md:flex-1 md:justify-center', [
          categories('qv-edge'),
          title('qv-edge', 'text-3xl font-semibold tracking-tight text-neutral-900'),
          ratings('qv-edge'),
          priceRow('qv-edge'),
          excerpt('qv-edge', 35),
          variations('qv-edge'),
          addToCart('qv-edge', 'flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-white cursor-pointer hover:bg-neutral-800 transition-colors'),
          detailsLink('qv-edge')
        ])
      ])
    ]),
  },

  {
    title: 'Compact Modal',
    thumbnail: '',
    content: quickView('qv-compact', { "position": "fixedMiddle", "buttonLabel": "Quick View" }, {
      "button": { "classes": 'inline-flex items-center justify-center gap-2 max-w-fit cursor-pointer rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-900 hover:text-neutral-900' },
      "popover": { "classes": "z-[999] overflow-y-auto overscroll-contain bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 rounded-t-3xl sm:rounded-2xl sm:max-w-md" },
      "popover-content": { "classes": "flex flex-col gap-4 p-5" }
    }, [
      gallery('qv-compact', 'rounded-xl overflow-hidden bg-neutral-100 [&_img]:aspect-[4/3] [&_img]:object-cover', false),
      title('qv-compact', 'text-xl font-bold leading-snug text-neutral-900 hover:text-neutral-700 transition-colors', 'h3'),
      priceRow('qv-compact', 'text-xl'),
      variations('qv-compact'),
      addToCart('qv-compact'),
      stock('qv-compact')
    ]),
  },

  {
    title: 'Side Drawer',
    thumbnail: '',
    content: quickView('qv-drawer', { "position": "fixedRight", "slideIn": "slideInRight", "slideOut": "slideOutRight" }, {
      "button": { "classes": solidButton },
      "popover": { "classes": "z-[999] w-full max-w-md overflow-y-auto overscroll-contain bg-white text-neutral-900 shadow-2xl" },
      "popover-content": { "classes": "flex flex-col gap-5 p-6 pt-14" }
    }, [
      gallery('qv-drawer'),
      categories('qv-drawer'),
      title('qv-drawer', 'text-2xl font-bold leading-tight text-neutral-900 hover:text-neutral-700 transition-colors'),
      ratings('qv-drawer'),
      priceRow('qv-drawer'),
      excerpt('qv-drawer', 40, 'View full details'),
      variations('qv-drawer'),
      addToCart('qv-drawer'),
      divider('qv-drawer')
    ]),
  },

  {
    title: 'Icon Button (Card Overlay)',
    thumbnail: '',
    content: quickView('qv-icon', { "position": "fixedMiddle", "buttonLabel": "", "iconSize": 20 }, {
      /* A round eye button: place it over a product card image (e.g. inside
         an absolutely positioned container) for a hover action. */
      "button": { "classes": 'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-800 shadow-md ring-1 ring-black/5 transition-all hover:scale-105 hover:bg-neutral-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40' },
      "popover": { "classes": "z-[999] overflow-y-auto overscroll-contain bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 rounded-t-3xl sm:rounded-2xl" },
      "popover-content": { "classes": "p-5 sm:p-8" }
    }, [
      split('qv-icon', [
        title('qv-icon'),
        ratings('qv-icon'),
        priceRow('qv-icon'),
        excerpt('qv-icon', 25, 'View full details'),
        variations('qv-icon'),
        addToCart('qv-icon'),
        stock('qv-icon')
      ])
    ]),
  },

  {
    title: 'Hover Bar Button',
    thumbnail: '',
    content: quickView('qv-bar', { "position": "fixedMiddle", "buttonIcon": "IconEye", "iconSize": 16 }, {
      /* A full-width bar for the bottom of a product card image. */
      "*": { "classes": "relative w-full" },
      "button": { "classes": 'flex w-full cursor-pointer items-center justify-center gap-2 bg-neutral-900/85 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition-colors hover:bg-neutral-900' },
      "popover": { "classes": "z-[999] overflow-y-auto overscroll-contain bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 rounded-t-3xl sm:rounded-2xl" },
      "popover-content": { "classes": "p-5 sm:p-8" }
    }, [
      split('qv-bar', [
        categories('qv-bar'),
        title('qv-bar'),
        priceRow('qv-bar'),
        excerpt('qv-bar', 30, 'View full details'),
        variations('qv-bar'),
        addToCart('qv-bar'),
        divider('qv-bar')
      ])
    ]),
  },

  {
    title: 'Mini Dropdown',
    thumbnail: '',
    content: quickView('qv-mini', { "position": "bottomLeft", "buttonLabel": "Preview", "slideIn": "fadeInUp", "slideOut": "fadeOut" }, {
      "button": { "classes": 'inline-flex items-center gap-1.5 max-w-fit cursor-pointer rounded-md px-2 py-1 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900' },
      "popover": { "classes": "z-[999] overflow-y-auto overscroll-contain rounded-xl bg-white text-neutral-900 shadow-xl ring-1 ring-black/10" },
      "popover-content": { "classes": "flex flex-col gap-3 p-4" }
    }, [
      gallery('qv-mini', 'rounded-lg overflow-hidden bg-neutral-100 [&_img]:aspect-[4/3] [&_img]:object-cover', false),
      title('qv-mini', 'text-base font-semibold leading-snug text-neutral-900 hover:underline', 'h3'),
      price('qv-mini', 'text-lg'),
      addToCart('qv-mini', 'flex flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white cursor-pointer hover:bg-neutral-800 transition-colors')
    ]),
  },

];

export default layouts;
