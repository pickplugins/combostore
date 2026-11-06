/**
 * Element layouts for the `accordion` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `accordion` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "accordion"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * Notes that shaped these presets:
 *
 * 1. AccordionView (the shop) and the builder's Accordion.jsx render the same
 *    AccordionMarkup, so a preset looks the same in both. Every part has a
 *    cssSelectors key, declared with its default in ElementsDefinition.js. A
 *    key a preset leaves out falls back to that default; "" really is empty.
 *    (Before AccordionView existed the shop printed "[accordion]" instead.)
 *
 * 2. Headers and panels are two lists joined by index: `options.items` holds
 *    the header labels and `children` the accordionItem panels. One header is
 *    drawn per child; a child with no matching label falls back to its own
 *    label or "Item n". Every preset below is balanced.
 *
 * 3. Each `items[i].classes` decorates that one header without touching the
 *    rest. `accordion-header-open` is added to an open item's header, for
 *    styling the open state.
 *
 * 4. A closed panel is hidden with the `hidden` attribute, which Tailwind v4
 *    enforces with !important, so `accordion-content` may set a display
 *    utility (flex, grid) without leaving closed panels visible.
 *
 * 5. The header and its panel are siblings inside `accordion-items`, not
 *    nested, so a gap on that wrapper separates each header from its own
 *    content. These presets either use no gap and rule off each row with a
 *    border, or use a small gap and let the panel read as an indented
 *    continuation.
 *
 * 6. Panels all start closed. By default several can be open at once;
 *    `options.multiple: false` makes opening one close the rest.
 *
 * 7. The chevron points down while closed and up while open, and it lives in
 *    `header-icon`.
 *
 * 8. The root's padding is its own key, `spacing` (default `p-4`), applied
 *    ahead of `*`. These presets leave it at its default; set it to "" or a
 *    different padding rather than fighting it from `*`.
 */

var layouts = [

  {
    title: 'FAQ Divided List',
    thumbnail: '',
    content: {
      "id": "ac-faq",
      "type": "accordion",
      "options": {
        "orientation": "",
        "items": [
          { "label": "How long does delivery take?", "classes": "" },
          { "label": "What payment methods do you accept?", "classes": "" },
          { "label": "Can I pay cash on delivery?", "classes": "" },
          { "label": "How do I return or exchange an item?", "classes": "" },
          { "label": "Do you deliver outside Dhaka?", "classes": "" },
          { "label": "How can I track my order?", "classes": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-white" },
        "accordion-items": { "classes": "flex flex-col border-b border-neutral-200" },
        "accordion-header": { "classes": "flex items-center justify-between gap-4 py-4 border-t border-neutral-200 cursor-pointer hover:text-orange-600 transition-colors" },
        "header-label": { "classes": "text-sm font-medium text-neutral-900" },
        "header-icon": { "classes": "shrink-0 text-neutral-400" },
        "accordion-content": { "classes": "pb-5 pr-10 text-sm text-neutral-600 leading-relaxed" }
      },
      "children": [
        {
          "id": "ac-faq-i1",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-faq-i1-t",
              "type": "text",
              "options": { "text": "Inside Dhaka we deliver in 24 to 48 hours. Outside Dhaka takes 2 to 4 working days depending on the district.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-faq-i2",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-faq-i2-t",
              "type": "text",
              "options": { "text": "bKash, Nagad and Rocket, any debit or credit card, or cash on delivery. Online payments run through a secure gateway and we never see your card details.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-faq-i3",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-faq-i3-t",
              "type": "text",
              "options": { "text": "Yes. Cash on delivery is available in all 64 districts. Pay the rider when the parcel reaches you, after you have checked it.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-faq-i4",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-faq-i4-t",
              "type": "text",
              "options": { "text": "Call the hotline within 7 days of delivery and we will arrange a pickup. The item has to be unused and in its original packaging. Refunds reach bKash or Nagad within three working days of inspection.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-faq-i5",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-faq-i5-t",
              "type": "text",
              "options": { "text": "We ship nationwide through Pathao, RedX and Steadfast. Delivery is Tk 120 outside Dhaka, and free on orders above Tk 1,000.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-faq-i6",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-faq-i6-t",
              "type": "text",
              "options": { "text": "You get an SMS with a tracking link as soon as the parcel leaves our warehouse. The same link lives under My Orders in your account.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Soft Toggle Cards',
    thumbnail: '',
    content: {
      "id": "ac-soft",
      "type": "accordion",
      "options": {
        "orientation": "",
        "items": [
          { "label": "Ordering and payment", "classes": "" },
          { "label": "Delivery charges", "classes": "" },
          { "label": "Returns and refunds", "classes": "" },
          { "label": "Warranty claims", "classes": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "accordion-items": { "classes": "flex flex-col gap-2" },
        "accordion-header": { "classes": "flex items-center justify-between gap-4 px-4 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg cursor-pointer transition-colors" },
        "header-label": { "classes": "text-sm font-semibold text-neutral-800" },
        "header-icon": { "classes": "shrink-0 text-neutral-500" },
        "accordion-content": { "classes": "px-4 pt-1 pb-3 text-sm text-neutral-600 leading-relaxed" }
      },
      "children": [
        {
          "id": "ac-soft-i1",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-soft-i1-t",
              "type": "text",
              "options": { "text": "Add to cart, enter your address and pick a payment method. No account is needed to check out, though creating one lets you track orders later.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-soft-i2",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-soft-i2-t",
              "type": "text",
              "options": { "text": "Tk 60 inside Dhaka and Tk 120 anywhere else in the country. Orders above Tk 1,000 ship free, and the charge is always shown before you confirm.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-soft-i3",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-soft-i3-t",
              "type": "text",
              "options": { "text": "Seven days to change your mind on anything unused and still in its packaging. We arrange the pickup, so you do not pay return courier charges.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-soft-i4",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-soft-i4-t",
              "type": "text",
              "options": { "text": "Warranty length is printed on each product page. Keep your invoice: it is the proof of purchase every brand service centre asks for.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Product Spec Accordion',
    thumbnail: '',
    content: {
      "id": "ac-spec",
      "type": "accordion",
      "options": {
        "orientation": "",
        "items": [
          { "label": "Specifications", "classes": "" },
          { "label": "In the box", "classes": "" },
          { "label": "Care instructions", "classes": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-white" },
        "accordion-items": { "classes": "flex flex-col" },
        "accordion-header": { "classes": "flex items-center justify-between gap-4 py-3.5 border-t border-neutral-200 cursor-pointer" },
        "header-label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-700" },
        "header-icon": { "classes": "shrink-0 text-neutral-400" },
        "accordion-content": { "classes": "pb-4 text-sm text-neutral-600" }
      },
      "children": [
        {
          "id": "ac-spec-i1",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-spec-i1-l",
              "type": "list",
              "options": {
                "tag": "ul",
                "icon": "IconPointFilled",
                "iconSize": 13,
                "items": [
                  { "text": "Brand: add the brand name", "icon": "" },
                  { "text": "Model: add the model or SKU", "icon": "" },
                  { "text": "Material: add the material", "icon": "" },
                  { "text": "Country of origin: add the origin", "icon": "" },
                  { "text": "Warranty: 12 months brand warranty", "icon": "" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "max-w-2xl" },
                "li": { "classes": "flex items-center gap-2 py-1.5 border-b border-neutral-100 last:border-0" },
                "icon": { "classes": "text-orange-500 shrink-0 flex items-center" },
                "text": { "classes": "text-sm text-neutral-700" }
              }
            }
          ]
        },
        {
          "id": "ac-spec-i2",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-spec-i2-l",
              "type": "list",
              "options": {
                "tag": "ul",
                "icon": "IconCheck",
                "iconSize": 15,
                "items": [
                  { "text": "The product itself", "icon": "" },
                  { "text": "Charging cable", "icon": "" },
                  { "text": "User manual", "icon": "" },
                  { "text": "Warranty card", "icon": "" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-1.5" },
                "li": { "classes": "flex items-center gap-2" },
                "icon": { "classes": "text-emerald-600 shrink-0 flex items-center" },
                "text": { "classes": "text-sm text-neutral-700" }
              }
            }
          ]
        },
        {
          "id": "ac-spec-i3",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-spec-i3-t",
              "type": "text",
              "options": { "text": "Wipe with a dry cloth. Keep away from direct sunlight and do not submerge in water. Store in the original box when it is not in use.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "leading-relaxed max-w-2xl" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Dark FAQ',
    thumbnail: '',
    content: {
      "id": "ac-dark",
      "type": "accordion",
      "options": {
        "orientation": "",
        "items": [
          { "label": "Is every product genuine?", "classes": "" },
          { "label": "When will my order ship?", "classes": "" },
          { "label": "Can I change my delivery address?", "classes": "" },
          { "label": "Do you have a physical store?", "classes": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-900 rounded-xl" },
        "accordion-items": { "classes": "flex flex-col" },
        "accordion-header": { "classes": "flex items-center justify-between gap-4 py-4 border-t border-white/10 first:border-t-0 cursor-pointer hover:text-amber-400 transition-colors" },
        "header-label": { "classes": "text-sm font-medium text-white" },
        "header-icon": { "classes": "shrink-0 text-neutral-500" },
        "accordion-content": { "classes": "pb-5 pr-10 text-sm text-neutral-400 leading-relaxed" }
      },
      "children": [
        {
          "id": "ac-dark-i1",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-dark-i1-t",
              "type": "text",
              "options": { "text": "Everything we list comes from the brand or its authorised distributor in Bangladesh. If a product ever turns out otherwise, we refund it in full.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-dark-i2",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-dark-i2-t",
              "type": "text",
              "options": { "text": "Orders confirmed before 4pm are handed to the courier the same day. Anything later goes out the next morning.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-dark-i3",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-dark-i3-t",
              "type": "text",
              "options": { "text": "Yes, as long as the parcel has not left the warehouse. Call the hotline with your order number and we will update it.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-dark-i4",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-dark-i4-t",
              "type": "text",
              "options": { "text": "Add your showroom address and opening hours here, or say that the store is online only so nobody turns up at the warehouse.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Minimal Large Questions',
    thumbnail: '',
    content: {
      "id": "ac-min",
      "type": "accordion",
      "options": {
        "orientation": "",
        "items": [
          { "label": "What makes your prices lower?", "classes": "" },
          { "label": "How do I know the size will fit?", "classes": "" },
          { "label": "What if the item arrives damaged?", "classes": "" },
          { "label": "Can I order by phone?", "classes": "" },
          { "label": "Do you offer bulk pricing?", "classes": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "accordion-items": { "classes": "flex flex-col gap-1" },
        "accordion-header": { "classes": "flex items-start justify-between gap-6 py-3 cursor-pointer group" },
        "header-label": { "classes": "text-base font-medium text-neutral-900 group-hover:text-orange-600 transition-colors" },
        "header-icon": { "classes": "shrink-0 mt-0.5 text-neutral-300 group-hover:text-orange-500 transition-colors" },
        "accordion-content": { "classes": "pb-4 pr-12 text-sm text-neutral-500 leading-relaxed max-w-2xl" }
      },
      "children": [
        {
          "id": "ac-min-i1",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-min-i1-t",
              "type": "text",
              "options": { "text": "We buy directly from distributors and keep the warehouse small, so there is no showroom rent priced into what you pay.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-min-i2",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-min-i2-t",
              "type": "text",
              "options": { "text": "Every listing with sizes has a measurement chart on the product page. If you are between two sizes, call the hotline and we will check the actual garment.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-min-i3",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-min-i3-t",
              "type": "text",
              "options": { "text": "Refuse the parcel at the door if the box is damaged, or send us a photo within 24 hours of delivery and we will replace it at our cost.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-min-i4",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-min-i4-t",
              "type": "text",
              "options": { "text": "Yes. Call the hotline between 9am and 10pm and we will place the order for you, or message us the product link on WhatsApp.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-min-i5",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-min-i5-t",
              "type": "text",
              "options": { "text": "We do, for orders above ten pieces of the same item. Send the list to our hotline number and we will quote within the day.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Compact Sidebar Panels',
    thumbnail: '',
    content: {
      "id": "ac-side",
      "type": "accordion",
      "options": {
        "orientation": "",
        "items": [
          { "label": "Delivery", "classes": "" },
          { "label": "Payment", "classes": "" },
          { "label": "Returns", "classes": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-50 border border-neutral-200 rounded-lg" },
        "accordion-items": { "classes": "flex flex-col divide-y divide-neutral-200" },
        "accordion-header": { "classes": "flex items-center justify-between gap-3 py-2.5 cursor-pointer" },
        "header-label": { "classes": "text-xs font-semibold text-neutral-700" },
        "header-icon": { "classes": "shrink-0 text-neutral-400 scale-75" },
        "accordion-content": { "classes": "pb-3 text-xs text-neutral-600 leading-relaxed" }
      },
      "children": [
        {
          "id": "ac-side-i1",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-side-i1-t",
              "type": "text",
              "options": { "text": "Tk 60 inside Dhaka in 24 to 48 hours. Tk 120 elsewhere in 2 to 4 days. Free above Tk 1,000.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-side-i2",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-side-i2-t",
              "type": "text",
              "options": { "text": "bKash, Nagad, Rocket, card, or cash on delivery.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        },
        {
          "id": "ac-side-i3",
          "type": "accordionItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "ac-side-i3-t",
              "type": "text",
              "options": { "text": "7 days for unused items in original packaging. We pay the return pickup.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "" } }
            }
          ]
        }
      ]
    },
  },

];

export default layouts;
