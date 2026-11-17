/**
 * Element layouts for the `productFaq` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productFaq` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productFaq"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productFaq is a leaf: an optional `header` (`title`), then `items` holding
 * an `item` per question (plus `item-open` while open), each with its
 * `question` (`question-text`, `toggle`) and `answer`. ProductFaqView (the
 * shop) and the builder's ProductFaq.jsx render the same ProductFaqMarkup.
 *
 * 1. The questions come from the product's FAQ addon; a product without any
 *    renders nothing on the shop (dimmed samples in the builder).
 * 2. A closed answer is hidden with the `hidden` attribute, so a display
 *    class on `answer` cannot reopen it.
 * 3. `display: "list"` shows every answer and no toggles.
 */

var layouts = [

  {
    title: 'Divided Accordion',
    thumbnail: '',
    content: {
      "id": "faq-divided",
      "type": "productFaq",
      "options": {
        "display": "accordion",
        "toggleIcon": "chevron",
        "openFirst": true,
        "multiple": true,
        "showHeading": true,
        "heading": "Frequently asked questions"
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "header": { "classes": "" },
        "title": { "classes": "text-lg font-semibold text-gray-900" },
        "items": { "classes": "flex flex-col divide-y divide-gray-200 border-y border-gray-200" },
        "item": { "classes": "" },
        "item-open": { "classes": "" },
        "question": { "classes": "flex cursor-pointer items-center justify-between gap-4 py-4 text-left font-medium text-gray-900" },
        "question-text": { "classes": "" },
        "toggle": { "classes": "flex shrink-0 items-center text-gray-500" },
        "answer": { "classes": "whitespace-pre-line pb-4 text-sm leading-relaxed text-gray-600" }
      }
    }
  },

  {
    title: 'Card Accordion',
    thumbnail: '',
    content: {
      "id": "faq-cards",
      "type": "productFaq",
      "options": {
        "display": "accordion",
        "toggleIcon": "plus",
        "openFirst": false,
        "multiple": false,
        "showHeading": true,
        "heading": "Questions & answers"
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-4" },
        "header": { "classes": "" },
        "title": { "classes": "text-xl font-semibold text-gray-900" },
        "items": { "classes": "flex flex-col gap-2" },
        "item": { "classes": "rounded-xl border border-gray-200 bg-white transition-colors" },
        "item-open": { "classes": "border-gray-900" },
        "question": { "classes": "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left font-medium text-gray-900" },
        "question-text": { "classes": "" },
        "toggle": { "classes": "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700" },
        "answer": { "classes": "whitespace-pre-line px-4 pb-4 text-sm leading-relaxed text-gray-600" }
      }
    }
  },

  {
    title: 'Open List',
    thumbnail: '',
    content: {
      "id": "faq-list",
      "type": "productFaq",
      "options": {
        "display": "list",
        "showHeading": true,
        "heading": "FAQ"
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-4" },
        "header": { "classes": "" },
        "title": { "classes": "text-lg font-semibold text-gray-900" },
        "items": { "classes": "grid gap-x-8 gap-y-5 sm:grid-cols-2" },
        "item": { "classes": "flex flex-col gap-1" },
        "item-open": { "classes": "" },
        "question": { "classes": "font-semibold text-gray-900" },
        "question-text": { "classes": "" },
        "toggle": { "classes": "" },
        "answer": { "classes": "whitespace-pre-line text-sm leading-relaxed text-gray-600" }
      }
    }
  },

];

export default layouts;
