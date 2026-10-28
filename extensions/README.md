# Extensions

An extension is a folder in here with a manifest saying what it contributes.
Core reads the registry built from `extensions/index.js` — **no core file is
edited to add one.**

`loyalty-points/` is a worked example that uses every contribution point.
Five real ones, each with its own README: `discount-rules/` (automatic cart
discounts), `request-quote/` (ask for a price instead of buying),
`quick-view/` (a product in a modal, straight from the grid),
`currency-switcher/` (prices shown in the shopper's currency) and
`countdown-timer/` (sale deadlines and dispatch cutoffs).

## Installing one

Import the manifest in `extensions/index.js` and add it to `MANIFESTS`:

```js
import myExtension from "./my-extension/extension.config";

const MANIFESTS = [
  loyaltyPoints,
  myExtension,
];
```

That list is static on purpose: extensions are bundled with the app, so the
build sees every import and code-splits normally. A dynamic `import()` of a path
discovered at runtime would defeat that and would mean shipping a loader for
code the build never type-checked or linted.

## Layout

```
extensions/
  my-extension/
    extension.config.jsx      the manifest
    pages/MyScreen.jsx        dashboard screens
    elements/MyBlock.jsx      page-builder block renderer
    elements/MyBlockOptions.jsx
    elements/myBlockLayouts.js
```

The manifest is `.jsx`, not `.js`, because `nav[].icon` and
`definition.icon` are rendered elements — the same way core writes them in
`Sidebar.jsx` and `ElementsDefinition.js`.

## Manifest

```js
export default {
  id: "my-extension",        // required, lower-case letters/digits/dashes, unique
  name: "My Extension",      // defaults to id
  version: "1.0.0",
  description: "...",
  enabled: true,             // false ships it installed but switched off

  nav: [ ... ],              // sidebar entries
  routes: { ... },           // dashboard screens
  elements: [ ... ],         // page-builder blocks
  runtime: MyRuntime,        // headless, mounted on every page
};
```

A manifest that fails validation is **dropped whole**, not partially applied,
and the reason is logged with an `[extensions]` prefix and listed on
**Dashboard → Extensions**. One bad manifest cannot take the dashboard down.

Keys the registry does not know are left alone, so an extension can keep its own
bookkeeping in the manifest.

### `nav`

```js
nav: [
  {
    label: "Loyalty",
    value: "loyalty-points",              // unique across core AND all extensions
    icon: <IconGift />,
    parent: "store",                      // an existing group's `value`
    roles: ["administrator", "store_manager"],   // required
  },
],
```

- **`roles` is not optional.** `ToggleNavs` calls `hasRoleAccessed(nav.roles)`,
  which runs `.includes` on it with no guard — a missing one throws and takes
  out the whole sidebar. The registry rejects the manifest instead.
- **`value` must be unique.** The nav tree is keyed on it, so a duplicate would
  silently replace the other entry's link. A clash with core is skipped with a
  warning; a clash between two extensions is reported.
- **`parent` must exist**, either a core group (`store`, `sell`, `accounts`,
  `appearance`, `users-group`, `stats`, `support`, `media`, `blogs`, `delivery`)
  or another entry from your own manifest. Order does not matter.
- A **child** entry is linked as `/dashboard/<slug>`, which is where your screen
  lives. A **top-level** entry is linked as `/<slug>`, so the merge adds a
  `dashboard/` prefix for you.

### `routes`

```js
routes: {
  "loyalty-points": LoyaltyOverview,
},
```

Keys are slugs under `/dashboard/`. The component is rendered by
`app/dashboard/[...slug]/page.jsx`, which already sits inside
`app/dashboard/layout.jsx` — so the sidebar, header and shell are there and your
component only draws the page body, exactly like a core screen.

It receives `slug` and `segments`, so one component can serve a deeper path
(`/dashboard/my-slug/anything`) and do its own sub-routing.

**A core screen always wins.** Next matches static route segments before the
catch-all, so a file at `app/dashboard/orders/page.jsx` means an extension
claiming `orders` is never reached. Pick a slug unlikely to collide.

A slug no *active* extension claims is a 404 — including the screens of an
extension that has been switched off.

### `elements`

```js
elements: [
  {
    definition: { /* same shape as an ElementsDefinition.js entry */ },
    render:  MyBlock,          // required
    options: MyBlockOptions,   // optional
    layouts: myBlockLayouts,   // optional
  },
],
```

- **`definition.group` must be one of `text`, `layout`, `content`, `product`,
  `shop`, `invoice`.** `ElementsList.jsx` buckets anything else under `other`
  and then renders only the six known groups, so a wrong group means the block
  is registered, works, and is draggable from nowhere. The registry warns about
  this.
- **`definition.type` must be unique.** A type core already has is skipped with
  a warning: `elements.find` returns the first match, so an extension would
  otherwise shadow a core block in the palette while `BlockPreview` still
  rendered core's.
- **`render` has to honour the editor contract.** Copy a small core element
  (`components/PageBuilder/elements/ProductSku.jsx` is a good one): the root
  needs `draggable`, the block `id`, the hover outline, the drag-over marker and
  the selected outline. Miss them and the block cannot be selected or dragged on
  the canvas while looking fine on the page.
- **The same component renders on the canvas and on the live page.** Core
  pairs `Cart.jsx` with `CartView.jsx`; a manifest registers one `render` per
  type, so yours serves both. The editor props are the tell — `BlockPreview`
  passes `setSelectedId`, `BlockRender` passes only the block — which is also
  how a block draws sample content on a canvas where the real data does not
  exist. On the live page the renderer is picked from the manifests' own
  `enabled`, not the activation store: `BlockRender` is reached from a server
  component, and the on/off switch is one browser's localStorage.
- **`definition.cssSelectors` is what the class editor lists.** Declare every
  selector key the renderer reads, or users cannot style those parts.
- **`options` gets `{...block}`, `updateBlock` and `handleMoveBlock`**, the same
  as a core panel. `updateBlock(key, value)` replaces a top-level block key, so
  an option change rewrites the whole `options` object. Mount
  `<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />` to
  get the per-selector class editor.
- **`layouts`** is the same shape as `element-layouts/*`: a list of
  `{ title, thumbnail, content }` whose every `content.type` is your block's
  type. They appear in the layout picker with no branch added to
  `ElementLayouts.jsx`.

### `runtime`

```js
runtime: MyRuntime,          // a component that renders null
```

Some of what an extension does is not a screen and not a block.
`discount-rules` prices the cart and `request-quote` decides which products
can be bought at all; both have to be in effect wherever the relevant page
is, and hanging that off a block the merchant may not have placed would make
the behaviour depend on page layout.

`components/ExtensionsRuntime.jsx` mounts every active extension's runtime
once, from `app/layout.jsx`. A runtime usually renders nothing: it subscribes
to what it needs, works in effects, and publishes into a store.

- **It is mounted on every page, including the storefront.** Do real work
  only when there is something to do.
- **A runtime that needs a global overlay renders it through a portal into
  `document.body`, never inline.** `quick-view` does: there is one modal for
  the whole site, openable from any card on any page, so it cannot belong to
  a block — that would mean one modal per placement and none where the
  merchant forgot. Inline is wrong too, because a parent's `overflow:
  hidden` would clip it and a parent's `transform` would break its fixed
  positioning. Portals need `document`, so track mounting and render `null`
  until then; testing for `document` directly makes the first client render
  disagree with the server's.
- **Activation comes from the manifests, not the store.** The on/off switch
  on Dashboard → Extensions lives in the editing browser's localStorage;
  reading it here would mean the first client render disagreed with the
  server markup, and it is the wrong question on the storefront anyway — one
  admin's local preference must not decide what a shopper is charged.
- **A runtime that throws is contained**, logged with an `[extensions]`
  prefix, and the page carries on.

## Core-facing slots

An extension cannot edit core, so where core has to read something an
extension produced, core owns a neutral slot and the extension writes to it.
The rule for adding one: core must be able to describe what the slot means
without naming an extension, and the empty value must be exactly the old
behaviour. Put it in the store whose subscribers need to react to it. There
are three so far.

```js
// store/useCounterStore.js
cartDiscount: { amount, freeShipping, lines }
```

The cart totals subtract `amount` and zero the shipping line when
`freeShipping` is set, without knowing which extension filled it in. Nothing
installed leaves it at zero, which is the arithmetic core had before.
Filled by `discount-rules`.

```js
// store/useCounterStore.js
purchaseGate: (product) => null | { hideAddToCart, hidePrice, priceText, reason }
```

Whether a product may be bought here and now. A function, not data, because
the answer depends on the product and there is no list of every product to
key on. `AddToCartView` drops its controls when `hideAddToCart` is set, and
`ProductPriceView` prints `priceText` in place of the price when `hidePrice`
is. The default is `null`, which gates nothing. Filled by `request-quote`,
and the same shape would serve pre-orders, trade-only pricing or
out-of-region items.

A gate is installed from an effect after mount, so the first paint is always
the ungated one and a hidden price shows for a frame before it goes. Doing
better would mean core knowing the rules, which is the coupling the slot
exists to avoid.

```js
// store/useUtilsStore.js
formatPrice: (value) => string | null
```

How a price becomes text. `wrapCurrency` and `priceHtml` offer every amount
to it and use what comes back; `null` means *not mine* and core formats the
value exactly as it always has. Filled by `currency-switcher`.

Two things about it are worth copying for the next slot of its kind. It
lives in `useUtilsStore` rather than beside the cart **because that is the
store the components doing the printing subscribe to** — installing a
formatter is a `set`, so they re-render and the change reaches the page;
from another store it would be read on whatever render happened next. And
it declines per call rather than being installed globally, which is how the
same slot covers the storefront while leaving the dashboard's figures in
real money.

## Turning one off

**Dashboard → Extensions** lists what is installed, what each one contributes,
and any manifest problems. Switching one off hides its nav entries, 404s its
screens, and removes its blocks from the palette and the renderer.

The choice is stored in `localStorage` under
`combostore_disabled_extensions` — *disabled* ids, not enabled ones, so an
extension installed later is on by default without needing that list migrated.

Activation starts from the manifests on every render and the stored overrides are
applied from an effect after mount. That is deliberate: the sidebar renders on
the server too, and seeding state from `localStorage` during render would make
the server markup and the first client render disagree. React does not patch a
hydration mismatch up — it leaves the page rendered from markup the client never
agreed with.

## What this does not do

- **No remote install.** Extensions are bundled; there is no fetching code at
  runtime and no marketplace. Gating bundled extensions on a per-store list from
  WordPress would be the next step, and needs an endpoint plus a decision about
  whether code is ever loaded from a URL.
- **No settings-page contribution.** `settings` is accepted and validated in the
  manifest but nothing renders it yet; `app/settings/page.jsx` is untouched.
- **No sandboxing.** An extension is ordinary app code with the same access as
  core. Review one before installing it.
- **No server side.** An extension is front-end code only. Anything it needs
  persisted goes through an endpoint that already exists — `discount-rules`
  keeps its rules in the store settings blob — so an extension that needs a
  new table or a new route needs the WordPress plugin changed too.
- **Nothing is enforced on the server.** An extension runs in the browser, and
  what it decides is posted with the order — a discount `discount-rules`
  worked out, or `request-quote` saying a product is not for sale at its
  listed price. Someone calling the API directly is bound by none of it. For
  a store where that matters, the extension's own rule module has to run
  again on the WordPress side against what was submitted, and disagreements
  rejected.
