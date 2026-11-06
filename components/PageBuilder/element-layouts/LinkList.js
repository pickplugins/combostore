/**
 * Element layouts for the `linkList` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `linkList` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "linkList"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * linkList is a leaf: it takes no children, so a preset is purely options data
 * plus the seven selector keys -- and unlike most elements in this folder, every
 * one of those keys is actually read by the renderer.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Links navigate on the shop (they called preventDefault everywhere until
 *    now); LinkListMarkup is shared with the builder, which alone blocks the
 *    click. `item.slug` is the URL -- relative links use client-side
 *    navigation, http(s) / mailto / tel ones a plain <a>, `item.newTab` opens
 *    a new tab, and an item without one is plain text. The slugs below are
 *    realistic placeholders, matching the paths used in SiteFooter.js.
 *
 * 2. `options.icon` is the fallback icon and `options.iconSize` (24 when
 *    unset) sizes every icon; the definition now declares both.
 *
 * 3. The `header-text` div is drawn only with a headerText, and the `icon`
 *    span only when an icon resolves, so neither leaves an empty box eating
 *    the gap any more. The `empty:hidden` the presets carry on both keys is
 *    now redundant but harmless.
 *
 * 4. The definition's default `li: 'list-disc flex'` can never show a bullet:
 *    `flex` replaces the `list-item` display that `list-disc` needs. So each
 *    preset picks one -- flex rows with no marker, or a real marker with the
 *    link as an inline-flex child, which is what the numbered preset does.
 *
 * 5. `tag` is `ul` or `ol` (anything else renders a <ul>); the items are
 *    always <li>.
 */

var layouts = [

  {
    title: 'Footer Links Column',
    thumbnail: '',
    content: {
      "id": "ll-footer",
      "type": "linkList",
      "options": {
        "headerText": "Customer Service",
        "tag": "ul",
        "icon": "",
        "iconSize": 16,
        "items": [
          { "text": "Track Your Order", "icon": "", "slug": "/track-order" },
          { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
          { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
          { "text": "Payment Methods", "icon": "", "slug": "/payments" },
          { "text": "FAQ", "icon": "", "slug": "/faq" },
          { "text": "Contact Us", "icon": "", "slug": "/contact" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "header-text": { "classes": "empty:hidden text-sm font-semibold text-neutral-900" },
        "ul": { "classes": "flex flex-col gap-2" },
        "li": { "classes": "flex" },
        "link": { "classes": "flex items-center gap-2 text-sm text-neutral-600 hover:text-orange-600 transition-colors" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center" },
        "text": { "classes": "" }
      }
    },
  },

  {
    title: 'Icon Account Links',
    thumbnail: '',
    content: {
      "id": "ll-account",
      "type": "linkList",
      "options": {
        "headerText": "My Account",
        "tag": "ul",
        "icon": "IconChevronRight",
        "iconSize": 17,
        "items": [
          { "text": "My Profile", "icon": "IconUser", "slug": "/my-account" },
          { "text": "My Orders", "icon": "IconPackage", "slug": "/my-account/orders" },
          { "text": "Wishlist", "icon": "IconHeart", "slug": "/wishlist" },
          { "text": "Track Order", "icon": "IconTruck", "slug": "/track-order" },
          { "text": "Saved Addresses", "icon": "IconMapPin", "slug": "/my-account/addresses" },
          { "text": "Help & Support", "icon": "IconHeadphones", "slug": "/support" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "header-text": { "classes": "empty:hidden text-sm font-semibold text-neutral-900" },
        "ul": { "classes": "flex flex-col" },
        "li": { "classes": "flex border-b border-neutral-100 last:border-0" },
        "link": { "classes": "flex items-center gap-3 w-full py-2.5 text-sm text-neutral-700 hover:text-orange-600 transition-colors" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center text-neutral-400" },
        "text": { "classes": "" }
      }
    },
  },

  {
    title: 'Inline Pill Links',
    thumbnail: '',
    content: {
      "id": "ll-pill",
      "type": "linkList",
      "options": {
        "headerText": "Popular searches",
        "tag": "ul",
        "icon": "",
        "iconSize": 14,
        "items": [
          { "text": "New arrivals", "icon": "", "slug": "/shop/new" },
          { "text": "Best sellers", "icon": "", "slug": "/shop/best-sellers" },
          { "text": "Under Tk 500", "icon": "", "slug": "/shop/under-500" },
          { "text": "Today's offers", "icon": "IconDiscount2", "slug": "/shop/offers" },
          { "text": "Free delivery", "icon": "IconTruck", "slug": "/shop/free-delivery" },
          { "text": "Gift ideas", "icon": "IconGift", "slug": "/shop/gifts" },
          { "text": "All brands", "icon": "", "slug": "/brands" },
          { "text": "All categories", "icon": "", "slug": "/categories" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "header-text": { "classes": "empty:hidden text-xs font-semibold uppercase tracking-wide text-neutral-500" },
        "ul": { "classes": "flex flex-wrap gap-2" },
        "li": { "classes": "flex" },
        "link": { "classes": "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-orange-50 text-xs font-medium text-neutral-600 hover:text-orange-700 transition-colors" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center" },
        "text": { "classes": "whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Two Column Quick Links',
    thumbnail: '',
    content: {
      "id": "ll-twocol",
      "type": "linkList",
      "options": {
        "headerText": "Quick links",
        "tag": "ul",
        "icon": "",
        "iconSize": 15,
        "items": [
          { "text": "About Us", "icon": "", "slug": "/about" },
          { "text": "Our Blog", "icon": "", "slug": "/blog" },
          { "text": "All Brands", "icon": "", "slug": "/brands" },
          { "text": "All Categories", "icon": "", "slug": "/categories" },
          { "text": "Shipping Info", "icon": "", "slug": "/shipping" },
          { "text": "Return Policy", "icon": "", "slug": "/returns" },
          { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
          { "text": "Terms of Service", "icon": "", "slug": "/terms" },
          { "text": "Track Order", "icon": "", "slug": "/track-order" },
          { "text": "Contact", "icon": "", "slug": "/contact" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "header-text": { "classes": "empty:hidden text-sm font-semibold text-neutral-900" },
        "ul": { "classes": "grid grid-cols-2 gap-x-6 gap-y-2" },
        "li": { "classes": "flex min-w-0" },
        "link": { "classes": "flex items-center gap-2 min-w-0 text-sm text-neutral-600 hover:text-neutral-900 transition-colors" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center" },
        "text": { "classes": "truncate" }
      }
    },
  },

  {
    title: 'Dark Footer Column',
    thumbnail: '',
    content: {
      "id": "ll-dark",
      "type": "linkList",
      "options": {
        "headerText": "Information",
        "tag": "ul",
        "icon": "IconChevronRight",
        "iconSize": 14,
        "items": [
          { "text": "About Us", "icon": "", "slug": "/about" },
          { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
          { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
          { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
          { "text": "Terms of Service", "icon": "", "slug": "/terms" },
          { "text": "Contact Us", "icon": "", "slug": "/contact" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-4" },
        "header-text": { "classes": "empty:hidden text-xs font-semibold uppercase tracking-wider text-neutral-500" },
        "ul": { "classes": "flex flex-col gap-2.5" },
        "li": { "classes": "flex" },
        "link": { "classes": "flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center text-neutral-600" },
        "text": { "classes": "" }
      }
    },
  },

  {
    title: 'Numbered Help Topics',
    thumbnail: '',
    content: {
      "id": "ll-numbered",
      "type": "linkList",
      "options": {
        "headerText": "Getting started",
        "tag": "ol",
        "icon": "",
        "iconSize": 15,
        "items": [
          { "text": "How to place an order", "icon": "", "slug": "/faq" },
          { "text": "How to pay with bKash or Nagad", "icon": "", "slug": "/payments" },
          { "text": "How to track your parcel", "icon": "", "slug": "/track-order" },
          { "text": "How to return an item", "icon": "", "slug": "/returns" },
          { "text": "How to reach our hotline", "icon": "", "slug": "/support" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "header-text": { "classes": "empty:hidden text-sm font-semibold text-neutral-900" },
        "ul": { "classes": "" },
        "li": { "classes": "list-decimal ml-5 py-1 marker:text-xs marker:text-neutral-400" },
        "link": { "classes": "inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-orange-600 transition-colors" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center" },
        "text": { "classes": "" }
      }
    },
  },

];

export default layouts;
