/**
 * Element layouts for the `productWarranty` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productWarranty` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productWarranty"`. (PageBuilder.jsx
 * regenerates all ids on paste/replace, so the readable ids below are safe.)
 *
 * productWarranty is a leaf: a `summary` row (`icon`, `summary-text`,
 * `provider`), then - in display "full" - a `details` list of `section`s
 * (`section-title`, `section-text`). ProductWarrantyView (the shop) and the
 * builder's ProductWarranty.jsx render the same markup.
 *
 * 1. The warranty comes from the product's Warranty addon; a product without
 *    one renders nothing on the shop (a dimmed sample in the builder).
 * 2. Icon names must be exact @tabler/icons-react exports; an unknown one
 *    drops the icon.
 */

var layouts = [

  {
    title: 'Inline Line',
    thumbnail: '',
    content: {
      "id": "warranty-line",
      "type": "productWarranty",
      "options": { "display": "summary", "icon": "IconShieldCheck", "iconSize": 18, "showProvider": true, "providerPrefix": "by" },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "summary": { "classes": "flex flex-wrap items-center gap-1.5 text-sm text-gray-700" },
        "icon": { "classes": "flex items-center text-emerald-600" },
        "summary-text": { "classes": "font-medium first-letter:uppercase" },
        "provider": { "classes": "text-gray-500" }
      }
    }
  },

  {
    title: 'Badge',
    thumbnail: '',
    content: {
      "id": "warranty-badge",
      "type": "productWarranty",
      "options": { "display": "summary", "icon": "IconShieldCheckFilled", "iconSize": 16, "showProvider": false },
      "cssSelectors": {
        "*": { "classes": "flex" },
        "summary": { "classes": "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200" },
        "icon": { "classes": "flex items-center" },
        "summary-text": { "classes": "first-letter:uppercase" },
        "provider": { "classes": "" }
      }
    }
  },

  {
    title: 'Details Card',
    thumbnail: '',
    content: {
      "id": "warranty-card",
      "type": "productWarranty",
      "options": {
        "display": "full", "icon": "IconShieldCheck", "iconSize": 22, "showProvider": true, "providerPrefix": "by",
        "showCoverage": true, "showExclusions": true, "showClaim": true, "showContact": true
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-4 rounded-xl border border-gray-200 p-5" },
        "summary": { "classes": "flex flex-wrap items-center gap-2 text-base text-gray-900" },
        "icon": { "classes": "inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600" },
        "summary-text": { "classes": "font-semibold first-letter:uppercase" },
        "provider": { "classes": "text-sm text-gray-500" },
        "details": { "classes": "grid gap-4 border-t border-gray-100 pt-4 sm:grid-cols-2" },
        "section": { "classes": "flex flex-col gap-1" },
        "section-title": { "classes": "text-xs font-semibold uppercase tracking-wide text-gray-500" },
        "section-text": { "classes": "whitespace-pre-line text-sm text-gray-700" }
      }
    }
  },

];

export default layouts;
