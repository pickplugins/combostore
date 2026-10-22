# Extensions

An extension is a folder in here with a manifest saying what it contributes.
Core reads the registry built from `extensions/index.js` — **no core file is
edited to add one.**

`loyalty-points/` is a worked example that uses every contribution point.

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
