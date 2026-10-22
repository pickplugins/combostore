/**
 * Element layouts for the `messengerButton` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `messengerButton` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "messengerButton"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * messengerButton is a leaf and an unusually well-behaved one: a wrapper <div>,
 * a <Link> to m.me, an optional icon div and a label div. All five declared
 * options are read (MessengerButton.jsx:37-41) and all four selector keys are
 * applied (:104,:128,:132,:137), so there is no dead surface to work around --
 * only a few things worth knowing.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. `username` is the one field a preset cannot fill, and the link is broken
 *    until it is. The href is built as `https://m.me/${username}?text=...`
 *    (:50), so an empty username yields `https://m.me/?text=...`. It is
 *    store-specific -- there is no sensible default to ship -- so every preset
 *    leaves it `""`, matching the definition, and that is the field to set in
 *    the options panel after dropping one. Everything else here is layout.
 *
 * 2. Put the button on the `link` key, not on `*`. The <a> at :128 is the
 *    clickable area and `*` is just the box around it, so padding or a
 *    background on `*` produces a button-looking shape whose edges do nothing.
 *    These presets keep `link` as the whole button -- padding, radius, colour,
 *    hover -- and use `*` only for width and placement. The definition's own
 *    `link` default (`flex gap-3 items-center`) already assumes this.
 *
 * 3. `message` supports six placeholders, substituted before the URL is
 *    encoded: `{product_id}`, `{product_title}`, `{product_price}`,
 *    `{product_description}`, `{product_image}` and `{product_url}` (:78-83).
 *    They are safe to use in a preset -- the whole message goes through
 *    `encodeURIComponent` (:49) -- and they preview sensibly, because
 *    `productData` falls back to a dummy product (:9-16) when nothing supplies
 *    one, which in the builder is always. Keep `{product_url}` in the message:
 *    it is the only thing telling the shop which product the chat is about.
 *
 * 4. Set `iconSize` explicitly. :40 reads it with no fallback, so a block
 *    missing the key renders at tabler's own default rather than the 20 the
 *    definition suggests. The icon div is conditional on the name resolving
 *    (:131), so an unknown or empty `icon` emits no wrapper at all -- no
 *    `empty:hidden` needed, unlike the `list` and `tabs` elements.
 *
 * 5. The label div is NOT conditional (:137), so an icon-only button needs both
 *    `label: ""` and `empty:hidden` on the `label` key -- otherwise an empty div
 *    keeps the `gap-3` from the link and the button sits visibly off-centre.
 *    The round floating preset does exactly that.
 *
 * 6. The link cannot be clicked in the canvas and cannot open in a new tab. The
 *    wrapper's onClick calls `preventDefault()` (:106) so selecting the block
 *    never navigates -- which is right for editing, but it means the href has to
 *    be checked on the published page. There is also no `target` option and the
 *    renderer sets none, so Messenger opens in the same tab.
 */

var layouts = [

  {
    title: 'Messenger Blue Button',
    thumbnail: '',
    content: {
      "id": "mb-blue",
      "type": "messengerButton",
      "options": {
        "label": "Order on Messenger",
        "username": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconBrandMessenger",
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "flex gap-2.5 items-center px-5 py-3 rounded-lg bg-[#0084ff] text-white cursor-pointer hover:bg-[#0073e6] transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Outline Messenger',
    thumbnail: '',
    content: {
      "id": "mb-outline",
      "type": "messengerButton",
      "options": {
        "label": "Ask about this product",
        "username": "",
        "message": "Hi, I have a question about {product_title} {product_url}",
        "icon": "IconBrandMessenger",
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-lg border border-[#0084ff] bg-white text-[#0084ff] cursor-pointer hover:bg-[#0084ff]/5 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-medium whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Full Width Bar',
    thumbnail: '',
    content: {
      "id": "mb-bar",
      "type": "messengerButton",
      "options": {
        "label": "Order on Messenger",
        "username": "",
        "message": "Hi, I want to order {product_title} (Tk {product_price}) {product_url}",
        "icon": "IconBrandMessenger",
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm" },
        "link": { "classes": "flex gap-2.5 w-full items-center justify-center py-3.5 rounded-lg bg-[#0084ff] text-white cursor-pointer hover:bg-[#0073e6] transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold tracking-wide" }
      }
    },
  },

  {
    title: 'Compact Card Pill',
    thumbnail: '',
    content: {
      "id": "mb-pill",
      "type": "messengerButton",
      "options": {
        "label": "Message us",
        "username": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconMessageCircle",
        "iconSize": 14
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "flex gap-1.5 items-center px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700 cursor-pointer hover:bg-neutral-200 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-xs font-medium whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Floating Round Icon',
    thumbnail: '',
    content: {
      "id": "mb-float",
      "type": "messengerButton",
      "options": {
        "label": "",
        "username": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconBrandMessenger",
        "iconSize": 26
      },
      "cssSelectors": {
        "*": { "classes": "fixed bottom-5 right-5 z-50" },
        "link": { "classes": "flex items-center justify-center w-14 h-14 rounded-full bg-[#0084ff] text-white shadow-lg cursor-pointer hover:bg-[#0073e6] transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "empty:hidden" }
      }
    },
  },

  {
    title: 'Dark Contact Row',
    thumbnail: '',
    content: {
      "id": "mb-dark",
      "type": "messengerButton",
      "options": {
        "label": "Order on Messenger",
        "username": "",
        "message": "Hi, I want to buy {product_title} {product_url}",
        "icon": "IconBrandMessenger",
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm" },
        "link": { "classes": "flex gap-2.5 w-full items-center justify-center py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-100 cursor-pointer hover:border-neutral-600 hover:bg-neutral-700 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0 text-[#0084ff]" },
        "label": { "classes": "text-sm font-semibold" }
      }
    },
  },

];

export default layouts;
