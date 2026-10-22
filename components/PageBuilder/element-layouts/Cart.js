/**
 * Element layouts for the `cart` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `cart` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "cart"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * The file this replaced was a verbatim copy of AddToCart.js -- six
 * `"type": "addToCart"` presets, which Replace would have spliced in as the
 * wrong element entirely. It was also never wired up: `cart` had no branch in
 * ElementLayouts.jsx, so the panel always fell through to `setlayouts([])`.
 *
 * cart is a leaf: a trigger button plus a popover holding the whole cart ->
 * checkout flow. Cart.jsx (elements/Cart.jsx) renders it from hardcoded demo
 * state -- two Tshirts at 20 -- so the canvas always shows a populated cart.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Set `editMode: true` on every preset. :49 seeds `cartToggle` from
 *    `options?.editMode`, and the popover only renders when `cartToggle` is
 *    true (:204). With it false the preset pastes in as a bare button and none
 *    of the thirteen popover selectors can be seen or styled. Note the seeding
 *    happens in `useState`, so it is read once per mount -- flipping Edit Mode
 *    in the options panel afterwards does not reopen a closed popover.
 *
 * 2. The popover slides in on its own and no preset should touch its
 *    animation. Cart.jsx holds `animate__animated animate__fadeInRight` on the
 *    panel itself, so a preset only supplies the panel's position, size and
 *    surface. Earlier revisions of these presets each carried `animate-none!`
 *    to defuse a renderer bug -- the animation name was picked by an `animate`
 *    flag that an effect flipped on mount, landing on fadeOutRight whose
 *    `opacity: 0; translate3d(100%,0,0)` then stuck under animate.css's
 *    `animation-fill-mode: both`, leaving the cart invisible a second after it
 *    opened. That flag is gone, so the override is too. Do not reintroduce it:
 *    it compiles to `animation: none !important` and would now suppress a
 *    working entrance.
 *
 * 3. `coupon-input` is the one selector that lands on a real `<input>`, and
 *    globals.css styles form controls in *unlayered* rules (border, bg, shadow,
 *    radius, padding) that outrank Tailwind utilities by design. Its border,
 *    background, radius and shadow are therefore marked important with the v4
 *    suffix (`border!`, `shadow-none!`). The `!border-2` prefix spelling in the
 *    element definition is Tailwind v3 syntax and compiles to nothing on v4,
 *    which is why the stock coupon field looks unstyled. Those base rules also
 *    set `min-height: 2.25rem` as a raw declaration, so the field cannot be
 *    made shorter without `min-h-0!`; these presets let it keep that height.
 *
 * 4. `input-text` and `input-textarea` are declared on the element and are dead
 *    today. They belong to the checkout step, but :643 renders
 *    `<Checkout onLoading={onLoading} cartOptions={options} />` without passing
 *    `cssSelectors`, so Checkout.jsx:36 falls back to `{}` and styles nothing.
 *    They are filled in anyway, in each preset's own palette and with the same
 *    important suffixes `coupon-input` needs, so they come out right if that
 *    prop is ever forwarded.
 *
 * 5. The trigger icon cannot be chosen. :200 renders `<IconBasketCheck />`
 *    directly; `options.buttonIcon` is declared on the element and never read,
 *    so it is left at '' here rather than implying otherwise. The icon takes no
 *    size prop either, so it arrives at tabler's 24px default -- the presets
 *    size it with `[&>svg]:size-*` on `button-icon` and colour it through
 *    `currentColor`. Same trick on `cart-close`, `cart-reset` and
 *    `back-to-cart`, whose icons are rendered with a bare `width={18}` (:231,
 *    :239) or nothing at all (:625), leaving height at 24 and the glyph
 *    stretched.
 *
 * 6. `button` always ends up `flex`. :193 appends
 *    `${cartItems.length == 0 ? 'hidden ' : "flex"}` and the demo cart is never
 *    empty, so a `grid` or `inline-flex` in a preset only races `flex` for the
 *    same specificity. These set alignment, spacing and colour there and leave
 *    display alone. It is a `<div>`, not a `<button>`, so globals.css's button
 *    rules do not reach it and nothing here needs important.
 *
 * 7. Most of the popover body has no selector. The item rows and their stepper,
 *    thumbnail, price, Remove link and line total (:253-390), the "Cart Total"
 *    row (:398), the applied-coupon block (:528), the "Total Amount to Pay"
 *    row (:569) and the padding around Go To Checkout (:574) are all hardcoded.
 *    So a preset dresses the chrome -- trigger, panel shell, header, close and
 *    reset, coupon row, checkout action, back link, spinner -- and the middle
 *    of the panel stays as it is.
 *
 *    A dark panel is still possible, because almost none of that hardcoded
 *    markup sets a text colour -- it inherits, so a light `text-*` on `popover`
 *    carries the whole body. The colours it does pin are all accents that read
 *    fine either way: `text-red-500` on Remove, `text-green-500` on the amount
 *    to pay, `border-green-700` on the coupon chip, and gray-400/500 row
 *    dividers. `bg-amazon-600` and `hover:bg-amazon-300` on the stepper
 *    chevrons look like exceptions but are dead classes -- no `amazon` token
 *    exists in globals.css -- so those spans stay transparent. The one real
 *    blemish is `hover:text-gray-600` on those chevrons, which on a dark panel
 *    hovers dark-on-dark; it is a hover state on a control whose handler is an
 *    empty stub, so Dark Elegant Drawer wears it rather than lighten the whole
 *    body. Anything beyond that needs selectors the element does not expose.
 *
 * 8. `cart-header` is reused by both steps (:222 cart, :603 checkout), so
 *    whatever it gets has to read against "Total Items - 2" and against
 *    "Checkout" with the spinner and Back to Cart beside it.
 *
 * 9. Nothing in the popover body actually works. `removeCartItems`,
 *    `resetCartItems`, `updateCartItems` and `addNotification` are all empty
 *    stubs (:65-68), so the steppers, Remove and Reset do nothing. Apply Coupon
 *    does fire a real fetch (:439) against an undefined `serverUrl`, which
 *    throws into a swallowed `.catch` -- harmless, but it is why the field
 *    never responds. Go To Checkout and Back to Cart do work: they move
 *    `cartStep` between 0 and 1 (:585, :623), which is how the checkout step's
 *    selectors can be styled at all.
 *
 * The element's own `*` default is empty and the renderer always adds
 * `relative`, so these leave positioning on `*` alone and only keep the trigger
 * from claiming a full row with `w-fit`.
 */

var layouts = [

  {
    title: 'Blue Side Drawer',
    thumbnail: '',
    content: {
      "id": "cart-blue-drawer",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "text-sm font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[480px] bg-white shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-blue-600 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-gray-300! rounded-md! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-md bg-blue-600 text-white text-sm cursor-pointer hover:bg-blue-700 transition-colors" },
        "go-to-checkout": { "classes": "px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-gray-300! rounded-md! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-gray-300! rounded-md! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Orange Pill Drawer',
    thumbnail: '',
    content: {
      "id": "cart-orange-pill",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 pl-4 pr-3 py-2 rounded-full bg-orange-500 text-white cursor-pointer hover:bg-orange-600 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-6 h-6 rounded-full bg-white text-orange-600 text-xs font-bold" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-orange-50 shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-orange-500 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/50 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/50 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-orange-300! rounded-full! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-full bg-orange-500 text-white text-sm cursor-pointer hover:bg-orange-600 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold cursor-pointer hover:bg-orange-600 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-full bg-white/25 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-orange-200! rounded-full! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-orange-200! rounded-xl! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Minimal Mono Drawer',
    thumbnail: '',
    content: {
      "id": "cart-mono",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": false,
        "orderNotes": true,
        "deliveryLocation": false,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 border border-neutral-900 text-neutral-900 cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-4" },
        "button-quantity": { "classes": "text-xs font-bold uppercase tracking-widest leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[440px] bg-white border-l border-neutral-200 shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-neutral-900 text-white" },
        "cart-total-items": { "classes": "text-xs uppercase tracking-widest" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 border border-white/40 text-xs uppercase tracking-wide cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 border border-white/40 text-xs uppercase tracking-wide cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-neutral-300! rounded-none! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 bg-neutral-900 text-white text-xs uppercase tracking-wide cursor-pointer hover:bg-neutral-700 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-3 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-neutral-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs uppercase tracking-wide cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-neutral-300! rounded-none! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-neutral-300! rounded-none! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Icon Badge Drawer',
    thumbnail: '',
    content: {
      "id": "cart-icon-badge",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "relative items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-700 cursor-pointer hover:border-slate-400 hover:text-slate-700 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-slate-800 text-white text-[10px] font-bold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[470px] bg-slate-50 shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-slate-800 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md bg-white/10 text-xs cursor-pointer hover:bg-white/20 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md bg-white/10 text-xs cursor-pointer hover:bg-white/20 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-slate-300! rounded-md! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-md bg-slate-700 text-white text-sm cursor-pointer hover:bg-slate-800 transition-colors" },
        "go-to-checkout": { "classes": "px-5 py-2.5 rounded-md bg-slate-800 text-white text-sm font-semibold cursor-pointer hover:bg-slate-900 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-slate-300! rounded-md! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-slate-300! rounded-md! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Left Slide Panel',
    thumbnail: '',
    content: {
      "id": "cart-left-panel",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-sm bg-emerald-800 text-[11px] font-bold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 left-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-emerald-700 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-emerald-300! rounded-md! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-md bg-emerald-600 text-white text-sm cursor-pointer hover:bg-emerald-700 transition-colors" },
        "go-to-checkout": { "classes": "px-5 py-2.5 rounded-md bg-emerald-600 text-white text-sm font-semibold cursor-pointer hover:bg-emerald-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-emerald-200! rounded-md! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-emerald-200! rounded-md! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Centered Modal Cart',
    thumbnail: '',
    content: {
      "id": "cart-modal",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-lg bg-brand text-white cursor-pointer hover:bg-brand-600 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-full bg-white text-brand text-[11px] font-bold leading-none" },
        "popover": { "classes": "fixed z-50 inset-0 m-auto h-fit max-h-[85vh] w-[95%] max-w-[560px] bg-white rounded-xl shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-brand text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-lg border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-lg border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-brand-200! rounded-lg! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-lg bg-brand text-white text-sm cursor-pointer hover:bg-brand-600 transition-colors" },
        "go-to-checkout": { "classes": "px-5 py-2.5 rounded-lg bg-brand text-white text-sm font-semibold cursor-pointer hover:bg-brand-600 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-lg bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-brand-200! rounded-lg! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-brand-200! rounded-lg! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Floating Bubble Cart',
    thumbnail: '',
    content: {
      "id": "cart-bubble",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "fixed z-40 bottom-6 right-6 items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white shadow-xl cursor-pointer hover:bg-neutral-800 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-6" },
        "button-quantity": { "classes": "absolute top-1 right-1 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-amber-400 text-neutral-900 text-[10px] font-bold leading-none" },
        "popover": { "classes": "fixed z-50 bottom-6 right-6 max-h-[80vh] w-[92%] sm:w-[420px] bg-white rounded-2xl shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-neutral-900 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs cursor-pointer hover:bg-white/20 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs cursor-pointer hover:bg-white/20 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-full bg-neutral-900 text-white text-sm cursor-pointer hover:bg-neutral-800 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-2.5 rounded-full bg-amber-400 text-neutral-900 text-sm font-bold cursor-pointer hover:bg-amber-300 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-full bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-neutral-300! rounded-2xl! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Glass Drawer',
    thumbnail: '',
    content: {
      "id": "cart-glass",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-xl ring-1 ring-black/5 text-neutral-800 cursor-pointer hover:bg-white transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-lg bg-neutral-900 text-white text-[11px] font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[480px] bg-white/80 backdrop-blur-xl ring-1 ring-black/5 shadow-2xl shadow-black/20 overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-white/60 backdrop-blur-xl border-b border-black/5 text-neutral-900" },
        "cart-total-items": { "classes": "text-sm font-semibold tracking-tight" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-lg ring-1 ring-black/10 text-xs text-neutral-600 cursor-pointer hover:bg-black/5 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-lg ring-1 ring-black/10 text-xs text-neutral-600 cursor-pointer hover:bg-black/5 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-black/10! rounded-xl! shadow-none! bg-white/70!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-3 rounded-xl bg-neutral-900 text-white text-sm font-semibold tracking-tight cursor-pointer hover:bg-neutral-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs text-neutral-600 cursor-pointer hover:text-neutral-900 transition-colors [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-lg bg-black/5 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-black/10! rounded-xl! shadow-none! bg-white/70!" },
        "input-textarea": { "classes": "w-full text-sm border! border-black/10! rounded-xl! shadow-none! bg-white/70!" }
      }
    },
  },

  {
    title: 'Soft Bottom Sheet',
    thumbnail: '',
    content: {
      "id": "cart-sheet",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2.5 rounded-2xl bg-stone-900 text-stone-50 cursor-pointer hover:bg-stone-800 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-lg bg-stone-700 text-[11px] font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 inset-x-0 bottom-0 max-h-[88vh] w-[95%] lg:w-[480px] bg-stone-50 rounded-t-3xl shadow-2xl shadow-black/20 overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-stone-50 border-b border-stone-200 text-stone-900" },
        "cart-total-items": { "classes": "text-sm font-semibold tracking-tight" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-200 text-xs text-stone-700 cursor-pointer hover:bg-stone-300 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-200 text-xs text-stone-700 cursor-pointer hover:bg-stone-300 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-stone-300! rounded-xl! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-xl bg-stone-200 text-stone-900 text-sm font-medium cursor-pointer hover:bg-stone-300 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-3 rounded-2xl bg-stone-900 text-stone-50 text-sm font-semibold tracking-tight cursor-pointer hover:bg-stone-800 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs text-stone-600 cursor-pointer hover:text-stone-900 transition-colors [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-xl bg-stone-200 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-stone-300! rounded-xl! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-stone-300! rounded-xl! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Dark Elegant Drawer',
    thumbnail: '',
    content: {
      "id": "cart-dark-elegant",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-zinc-100 ring-1 ring-white/10 cursor-pointer hover:bg-zinc-800 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-lg bg-amber-400 text-zinc-900 text-[11px] font-bold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[480px] bg-zinc-900 text-zinc-100 ring-1 ring-white/10 shadow-2xl shadow-black/40 overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-zinc-950 border-b border-white/10 text-zinc-100" },
        "cart-total-items": { "classes": "text-sm font-semibold tracking-tight" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 ring-1 ring-white/10 text-xs text-zinc-300 cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 ring-1 ring-white/10 text-xs text-zinc-300 cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-white/15! rounded-xl! shadow-none! bg-zinc-800! text-zinc-100!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-xl bg-white/10 text-zinc-100 text-sm font-medium cursor-pointer hover:bg-white/20 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-3 rounded-xl bg-amber-400 text-zinc-900 text-sm font-bold tracking-tight cursor-pointer hover:bg-amber-300 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs text-zinc-400 cursor-pointer hover:text-zinc-100 transition-colors [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-lg bg-white/10 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-white/15! rounded-xl! shadow-none! bg-zinc-800! text-zinc-100!" },
        "input-textarea": { "classes": "w-full text-sm border! border-white/15! rounded-xl! shadow-none! bg-zinc-800! text-zinc-100!" }
      }
    },
  },

  {
    title: 'Gradient Header Drawer',
    thumbnail: '',
    content: {
      "id": "cart-gradient",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white cursor-pointer hover:from-indigo-600 hover:to-violet-600 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-lg bg-white/25 text-[11px] font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[480px] bg-white shadow-2xl shadow-indigo-900/20 overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold tracking-tight" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/15 text-xs cursor-pointer hover:bg-white/25 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/15 text-xs cursor-pointer hover:bg-white/25 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-indigo-200! rounded-xl! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-sm font-medium cursor-pointer hover:bg-indigo-100 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold tracking-tight cursor-pointer hover:from-indigo-600 hover:to-violet-600 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-lg bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-indigo-200! rounded-xl! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-indigo-200! rounded-xl! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Compact Rail',
    thumbnail: '',
    content: {
      "id": "cart-rail",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": false,
        "orderNotes": false,
        "deliveryLocation": false,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-neutral-200 bg-white text-neutral-700 text-sm cursor-pointer hover:ring-neutral-400 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-4" },
        "button-quantity": { "classes": "text-xs font-medium tabular-nums leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] sm:w-[360px] bg-white ring-1 ring-neutral-200 shadow-xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-2 px-4 py-3 bg-white border-b border-neutral-200 text-neutral-900" },
        "cart-total-items": { "classes": "text-xs font-medium text-neutral-500 tracking-tight" },
        "cart-reset": { "classes": "flex items-center gap-1 px-2 py-1 rounded-md text-xs text-neutral-500 cursor-pointer hover:bg-neutral-100 hover:text-neutral-800 transition-colors [&>svg]:size-3.5" },
        "cart-close": { "classes": "flex items-center gap-1 px-2 py-1 rounded-md text-xs text-neutral-500 cursor-pointer hover:bg-neutral-100 hover:text-neutral-800 transition-colors [&>svg]:size-3.5" },
        "coupon-input": { "classes": "w-28 text-center text-xs border! border-neutral-200! rounded-md! shadow-none! bg-neutral-50!" },
        "coupon-apply-button": { "classes": "px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium cursor-pointer hover:bg-neutral-200 transition-colors" },
        "go-to-checkout": { "classes": "px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold cursor-pointer hover:bg-neutral-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs text-neutral-500 cursor-pointer hover:text-neutral-900 transition-colors [&>svg]:size-3.5" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-neutral-100 p-1" },
        "input-text": { "classes": "w-full text-xs border! border-neutral-200! rounded-md! shadow-none! bg-neutral-50!" },
        "input-textarea": { "classes": "w-full text-xs border! border-neutral-200! rounded-md! shadow-none! bg-neutral-50!" }
      }
    },
  },

  /* ------------------------------------------------------------------ *
   * Industry presets.
   *
   * The seven below match the carts already shipped in
   * PageBuilder/templates -- same accents, same radius, same header --
   * so a store built from one of those templates can restyle its cart
   * from here without drifting off palette. Palettes were read off the
   * template files rather than invented, including the hex-based ones
   * (GhorerBazar, IslamicLifestyle) that predate the colour tokens.
   *
   * Two deliberate differences from the template copies. They set
   * `editMode: true`, because a preset has to show its popover to be
   * previewed and styled at all (note 1). And they fill in all sixteen
   * selector keys, where the templates leave `header-spinner`,
   * `input-text` and `input-textarea` off entirely.
   *
   * The four after those cover industries the templates do not reach
   * yet, so their palettes are new rather than borrowed.
   *
   * The `options` flags are checkout behaviour, not styling, so each
   * preset sets them to what that industry actually needs -- delivery
   * location on for local grocery, subscriptions on for produce boxes
   * and repeat prescriptions, country and city on for the two that ship
   * internationally.
   * ------------------------------------------------------------------ */

  {
    title: 'Beauty & Cosmetics',
    thumbnail: '',
    content: {
      "id": "cart-beauty",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-5 py-2 rounded-full bg-rose-600 text-white text-sm cursor-pointer hover:bg-rose-700 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "text-sm font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-neutral-900 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-28 text-center text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-full bg-neutral-900 text-white text-sm cursor-pointer hover:bg-neutral-800 transition-colors" },
        "go-to-checkout": { "classes": "px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold cursor-pointer hover:bg-rose-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-sm cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-full bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-neutral-300! rounded-2xl! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Grocery & Daily Needs',
    thumbnail: '',
    content: {
      "id": "cart-grocery",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": false,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-full bg-green-700 text-white text-sm cursor-pointer hover:bg-green-800 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "text-sm font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-green-700 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-28 text-center text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-full bg-neutral-900 text-white text-sm cursor-pointer hover:bg-neutral-800 transition-colors" },
        "go-to-checkout": { "classes": "px-4 py-2 rounded-full bg-green-700 text-white text-sm font-semibold cursor-pointer hover:bg-green-800 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-sm cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-full bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-neutral-300! rounded-2xl! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Organic & Farm Produce',
    thumbnail: '',
    content: {
      "id": "cart-organic",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": false,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": true,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm cursor-pointer hover:bg-orange-600 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "text-sm font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-neutral-50 shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-orange-500 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-full border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-28 text-center text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-full bg-neutral-900 text-white text-sm cursor-pointer hover:bg-neutral-800 transition-colors" },
        "go-to-checkout": { "classes": "px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold cursor-pointer hover:bg-orange-600 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-sm cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-full bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-neutral-300! rounded-full! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-neutral-300! rounded-2xl! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Home & Kitchen',
    thumbnail: '',
    content: {
      "id": "cart-home-kitchen",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": false,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-md bg-teal-700 text-white text-sm cursor-pointer hover:bg-teal-800 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "text-sm font-semibold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-stone-50 shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-teal-700 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-28 text-center text-sm border! border-stone-300! rounded-md! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-md bg-zinc-900 text-white text-sm cursor-pointer hover:bg-zinc-800 transition-colors" },
        "go-to-checkout": { "classes": "px-4 py-2 rounded-md bg-teal-700 text-white text-sm font-semibold cursor-pointer hover:bg-teal-800 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-sm cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-stone-300! rounded-md! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-stone-300! rounded-md! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Kitchen Accessories',
    thumbnail: '',
    content: {
      "id": "cart-kitchen-acc",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": false,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm shadow-lg shadow-blue-600/25 cursor-pointer hover:bg-blue-700 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "text-sm font-bold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-slate-900 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-lg border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-lg border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-28 text-center text-sm border! border-slate-300! rounded-lg! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-lg bg-slate-900 text-white text-sm cursor-pointer hover:bg-slate-800 transition-colors" },
        "go-to-checkout": { "classes": "px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 cursor-pointer hover:bg-blue-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-sm cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-lg bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-slate-300! rounded-lg! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-slate-300! rounded-lg! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Deshi Grocery (Ghorer Bazar)',
    thumbnail: '',
    content: {
      "id": "cart-deshi-bazar",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": false,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2.5 px-4 py-2.5 rounded-md bg-[#f48721] text-white text-sm font-bold cursor-pointer hover:bg-[#d9731a] transition-colors" },
        "button-icon": { "classes": "flex items-center shrink-0 [&>svg]:size-5" },
        "button-quantity": { "classes": "text-sm font-bold leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-[#f5f5f5] shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-[#041f1e] text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-md border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-28 text-center text-sm border! border-[#e4e7ec]! rounded-md! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-md bg-[#041f1e] text-white text-sm cursor-pointer hover:opacity-90 transition-opacity" },
        "go-to-checkout": { "classes": "px-4 py-2 rounded-md bg-[#f48721] text-white text-sm font-bold cursor-pointer hover:bg-[#d9731a] transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-sm text-[#f48721] cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-[#e4e7ec]! rounded-md! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-[#e4e7ec]! rounded-md! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Islamic Lifestyle',
    thumbnail: '',
    content: {
      "id": "cart-islamic",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#e7eeed] text-[#115e59] cursor-pointer hover:bg-[#d9e4e2] transition-colors" },
        "button-icon": { "classes": "flex items-center shrink-0 [&>svg]:size-5" },
        "button-quantity": { "classes": "text-[15px] font-bold leading-tight" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-[#faf6ee] shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-4 py-3 bg-[#115e59] text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 rounded-lg border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 rounded-lg border border-white/40 text-sm cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-28 text-center text-sm border! border-[#eae3d3]! rounded-lg! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-3 py-2 rounded-lg bg-[#115e59] text-white text-sm cursor-pointer hover:opacity-90 transition-opacity" },
        "go-to-checkout": { "classes": "px-4 py-2.5 rounded-lg bg-[#dc2626] text-white text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-sm text-[#115e59] cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-lg bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-[#eae3d3]! rounded-lg! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-[#eae3d3]! rounded-lg! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Fashion & Apparel',
    thumbnail: '',
    content: {
      "id": "cart-fashion",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": false,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2.5 px-5 py-2.5 bg-neutral-950 text-neutral-50 text-[11px] font-semibold uppercase tracking-[0.18em] cursor-pointer hover:bg-neutral-800 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-4" },
        "button-quantity": { "classes": "text-[11px] font-semibold tabular-nums leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[470px] bg-[#faf9f7] shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-neutral-950 text-neutral-50" },
        "cart-total-items": { "classes": "text-[11px] font-semibold uppercase tracking-[0.18em]" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1 border border-white/30 text-[11px] uppercase tracking-widest cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-3.5" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1 border border-white/30 text-[11px] uppercase tracking-widest cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-3.5" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-neutral-300! rounded-none! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-4 py-2 bg-white text-neutral-900 text-[11px] font-semibold uppercase tracking-widest border border-neutral-900 cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors" },
        "go-to-checkout": { "classes": "px-7 py-3 bg-neutral-950 text-neutral-50 text-[11px] font-semibold uppercase tracking-[0.18em] cursor-pointer hover:bg-neutral-800 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-[11px] uppercase tracking-widest cursor-pointer hover:underline [&>svg]:size-3.5" },
        "header-spinner": { "classes": "flex items-center bg-white/15 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-neutral-300! rounded-none! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-neutral-300! rounded-none! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Electronics & Gadgets',
    thumbnail: '',
    content: {
      "id": "cart-electronics",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": false,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-semibold shadow-lg shadow-sky-500/25 cursor-pointer hover:bg-sky-400 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-md bg-slate-950 text-[11px] font-bold tabular-nums leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[480px] bg-slate-50 shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-slate-950 text-slate-100" },
        "cart-total-items": { "classes": "text-sm font-semibold tabular-nums tracking-tight" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 text-xs text-slate-300 cursor-pointer hover:bg-white/20 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 text-xs text-slate-300 cursor-pointer hover:bg-white/20 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm tabular-nums border! border-slate-300! rounded-lg! shadow-none! bg-white!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium cursor-pointer hover:bg-slate-700 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-3 rounded-lg bg-sky-500 text-white text-sm font-bold tracking-tight shadow-lg shadow-sky-500/25 cursor-pointer hover:bg-sky-400 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs text-slate-300 cursor-pointer hover:text-white transition-colors [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-white/10 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-slate-300! rounded-lg! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-slate-300! rounded-lg! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Pharmacy & Healthcare',
    thumbnail: '',
    content: {
      "id": "cart-pharmacy",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": false,
        "orderNotes": true,
        "deliveryLocation": true,
        "shippingAddress": true,
        "orderSubscription": true,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2 px-4 py-2 rounded-lg bg-cyan-700 text-white text-sm font-medium cursor-pointer hover:bg-cyan-800 transition-colors" },
        "button-icon": { "classes": "flex items-center [&>svg]:size-5" },
        "button-quantity": { "classes": "flex items-center justify-center min-w-5 h-5 rounded-md bg-white text-cyan-800 text-[11px] font-bold tabular-nums leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[480px] bg-white ring-1 ring-cyan-100 shadow-2xl overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-cyan-700 text-white" },
        "cart-total-items": { "classes": "text-sm font-semibold" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-md border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-md border border-white/40 text-xs cursor-pointer hover:bg-white/10 transition-colors [&>svg]:size-4" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-cyan-200! rounded-lg! shadow-none! bg-cyan-50!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-lg bg-cyan-50 text-cyan-800 text-sm font-medium border border-cyan-200 cursor-pointer hover:bg-cyan-100 transition-colors" },
        "go-to-checkout": { "classes": "px-6 py-3 rounded-lg bg-emerald-600 text-white text-sm font-semibold cursor-pointer hover:bg-emerald-700 transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-xs cursor-pointer hover:underline [&>svg]:size-4" },
        "header-spinner": { "classes": "flex items-center rounded-md bg-white/20 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-cyan-200! rounded-lg! shadow-none! bg-white!" },
        "input-textarea": { "classes": "w-full text-sm border! border-cyan-200! rounded-lg! shadow-none! bg-white!" }
      }
    },
  },

  {
    title: 'Jewellery & Luxury',
    thumbnail: '',
    content: {
      "id": "cart-jewellery",
      "type": "cart",
      "options": {
        "buttonIcon": "",
        "editMode": true,
        "countryCity": true,
        "orderNotes": true,
        "deliveryLocation": false,
        "shippingAddress": true,
        "orderSubscription": false,
        "shippingMethods": true
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "button": { "classes": "items-center gap-2.5 px-5 py-2.5 rounded-sm bg-[#14110f] text-[#e8dcc4] text-[11px] font-semibold uppercase tracking-[0.2em] ring-1 ring-[#c9a227]/40 cursor-pointer hover:bg-[#1f1a16] transition-colors" },
        "button-icon": { "classes": "flex items-center text-[#c9a227] [&>svg]:size-4" },
        "button-quantity": { "classes": "text-[11px] font-semibold tabular-nums leading-none" },
        "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[470px] bg-[#14110f] text-[#f0ebe3] ring-1 ring-[#c9a227]/25 shadow-2xl shadow-black/50 overflow-y-auto" },
        "cart-header": { "classes": "flex justify-between items-center gap-3 px-5 py-4 bg-[#0d0b09] border-b border-[#c9a227]/30 text-[#e8dcc4]" },
        "cart-total-items": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em]" },
        "cart-reset": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-sm border border-[#c9a227]/40 text-[11px] uppercase tracking-widest text-[#c9a227] cursor-pointer hover:bg-[#c9a227]/10 transition-colors [&>svg]:size-3.5" },
        "cart-close": { "classes": "flex items-center gap-1 px-3 py-1.5 rounded-sm border border-[#c9a227]/40 text-[11px] uppercase tracking-widest text-[#c9a227] cursor-pointer hover:bg-[#c9a227]/10 transition-colors [&>svg]:size-3.5" },
        "coupon-input": { "classes": "w-32 text-center text-sm border! border-[#c9a227]/40! rounded-sm! shadow-none! bg-[#1f1a16]! text-[#f0ebe3]!" },
        "coupon-apply-button": { "classes": "px-4 py-2 rounded-sm border border-[#c9a227]/50 text-[#c9a227] text-[11px] font-semibold uppercase tracking-widest cursor-pointer hover:bg-[#c9a227]/10 transition-colors" },
        "go-to-checkout": { "classes": "px-7 py-3 rounded-sm bg-[#c9a227] text-[#14110f] text-[11px] font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-[#dcb53a] transition-colors" },
        "back-to-cart": { "classes": "flex items-center gap-1 text-[11px] uppercase tracking-widest text-[#c9a227] cursor-pointer hover:underline [&>svg]:size-3.5" },
        "header-spinner": { "classes": "flex items-center rounded-sm bg-[#c9a227]/15 p-1" },
        "input-text": { "classes": "w-full text-sm border! border-[#c9a227]/40! rounded-sm! shadow-none! bg-[#1f1a16]! text-[#f0ebe3]!" },
        "input-textarea": { "classes": "w-full text-sm border! border-[#c9a227]/40! rounded-sm! shadow-none! bg-[#1f1a16]! text-[#f0ebe3]!" }
      }
    },
  },

];

export default layouts;
