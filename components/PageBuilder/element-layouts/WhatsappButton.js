/**
 * Element layouts for the `whatsappButton` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `whatsappButton` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "whatsappButton"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * whatsappButton is a leaf: a wrapper <div>, a <Link> to wa.me, an optional icon
 * div and a label div. Its renderer is line-for-line the same component as
 * MessengerButton.jsx -- the only differences are the option name (`phone`
 * rather than `username`), the host (`wa.me` rather than `m.me`), the default
 * wording, and one commented-out alternative URL at :51. So see
 * MessengerButton.js in this folder for the shared reasoning; all five declared
 * options are read (:37-41) and all four selector keys are applied (:105, :129,
 * :133, :138).
 *
 * Renderer notes that shaped these presets:
 *
 * 1. `phone` is the one field a preset cannot fill, and the link is broken until
 *    it is set. The href is `https://wa.me/${phone}?text=...` (:50), so an empty
 *    value yields `https://wa.me/?text=...`. wa.me also wants the number in full
 *    international form with digits only -- country code, no `+`, no spaces or
 *    dashes (a Bangladesh number as `8801737034053`), and it silently fails on
 *    anything else. It is store-specific, so every preset leaves it `""` and
 *    that is the field to set in the options panel after dropping one.
 *
 * 2. Put the button on the `link` key, not on `*`. The <a> at :129 is the
 *    clickable area and `*` is only the box around it, so padding or a
 *    background on `*` gives you button-looking edges that do nothing. These
 *    presets keep `link` as the whole button and use `*` for width and
 *    placement, which is what the definition's `link` default
 *    (`flex gap-3 items-center`) already assumes.
 *
 * 3. `message` supports six placeholders, substituted before the URL is
 *    encoded: `{product_id}`, `{product_title}`, `{product_price}`,
 *    `{product_description}`, `{product_image}` and `{product_url}` (:79-84).
 *    They are safe in a preset -- the whole message goes through
 *    `encodeURIComponent` (:49) -- and they preview sensibly because
 *    `productData` falls back to a dummy product (:9-16) when nothing supplies
 *    one, which in the builder is always. Keep `{product_url}`: it is the only
 *    thing telling the shop which product the chat is about.
 *
 * 4. Set `iconSize` explicitly. :40 reads it with no fallback, so a block
 *    missing the key renders at tabler's default rather than the 20 the
 *    definition suggests. The icon div is conditional on the name resolving
 *    (:132), so an unknown or empty `icon` emits no wrapper at all.
 *
 * 5. The label div is NOT conditional (:138), so an icon-only button needs both
 *    `label: ""` and `empty:hidden` on the `label` key -- otherwise an empty div
 *    keeps the link's gap and the glyph sits visibly off-centre. The round
 *    floating preset does exactly that.
 *
 * 6. The link cannot be clicked in the canvas and cannot open in a new tab. The
 *    wrapper's onClick calls `preventDefault()` (:107) so selecting the block
 *    never navigates -- right for editing, but it means the href has to be
 *    checked on the published page. There is no `target` option and the renderer
 *    sets none, so WhatsApp opens in the same tab.
 *
 * These presets mirror the MessengerButton set shape for shape, so a product
 * page can carry both buttons side by side with only the brand colour differing
 * -- WhatsApp's #25d366 here against Messenger's #0084ff there. One caveat to
 * that symmetry: "Floating Round Icon" ships the same `fixed bottom-5 right-5
 * z-50` in both files, so a page using both floating buttons will stack them on
 * top of each other. Offset one of them (`bottom-24`) when both are wanted.
 */

var layouts = [

  {
    title: 'WhatsApp Green Button',
    thumbnail: '',
    content: {
      "id": "wb-green",
      "type": "whatsappButton",
      "options": {
        "label": "Order on WhatsApp",
        "phone": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconBrandWhatsapp",
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "flex gap-2.5 items-center px-5 py-3 rounded-lg bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Outline WhatsApp',
    thumbnail: '',
    content: {
      "id": "wb-outline",
      "type": "whatsappButton",
      "options": {
        "label": "Ask about this product",
        "phone": "",
        "message": "Hi, I have a question about {product_title} {product_url}",
        "icon": "IconBrandWhatsapp",
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-lg border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-medium whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Full Width Bar',
    thumbnail: '',
    content: {
      "id": "wb-bar",
      "type": "whatsappButton",
      "options": {
        "label": "Order on WhatsApp",
        "phone": "",
        "message": "Hi, I want to order {product_title} (Tk {product_price}) {product_url}",
        "icon": "IconBrandWhatsapp",
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm" },
        "link": { "classes": "flex gap-2.5 w-full items-center justify-center py-3.5 rounded-lg bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold tracking-wide" }
      }
    },
  },

  {
    title: 'Compact Card Pill',
    thumbnail: '',
    content: {
      "id": "wb-pill",
      "type": "whatsappButton",
      "options": {
        "label": "WhatsApp us",
        "phone": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconBrandWhatsapp",
        "iconSize": 14
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "flex gap-1.5 items-center px-3 py-1.5 rounded-full bg-[#25d366]/10 text-[#1da851] cursor-pointer hover:bg-[#25d366]/20 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-xs font-medium whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Floating Round Icon',
    thumbnail: '',
    content: {
      "id": "wb-float",
      "type": "whatsappButton",
      "options": {
        "label": "",
        "phone": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconBrandWhatsapp",
        "iconSize": 28
      },
      "cssSelectors": {
        "*": { "classes": "fixed bottom-5 right-5 z-50" },
        "link": { "classes": "flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] text-white shadow-lg cursor-pointer hover:bg-[#1da851] transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "empty:hidden" }
      }
    },
  },

  {
    title: 'Dark Contact Row',
    thumbnail: '',
    content: {
      "id": "wb-dark",
      "type": "whatsappButton",
      "options": {
        "label": "Order on WhatsApp",
        "phone": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconBrandWhatsapp",
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm" },
        "link": { "classes": "flex gap-2.5 w-full items-center justify-center py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-100 cursor-pointer hover:border-neutral-600 hover:bg-neutral-700 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0 text-[#25d366]" },
        "label": { "classes": "text-sm font-semibold" }
      }
    },
  },

];

export default layouts;
