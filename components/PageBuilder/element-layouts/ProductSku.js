/**
 * Element layouts for the `productSku` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productSku` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productSku"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productSku is a leaf, so a preset is options plus the four selector keys
 * (`*`, `icon`, `label`, `sku`). ProductSkuView (the shop) and the builder's
 * ProductSku.jsx render the same ProductSkuMarkup.
 *
 * The few things worth knowing:
 *
 * 1. The label div is only drawn when there is a label. The `empty:hidden`
 *    these presets carry on `label` predates that and is now harmless.
 *
 * 2. `options.icon` must be an exact @tabler/icons-react export name; one that
 *    does not resolve drops the icon div. `iconSize` defaults to 24 when unset.
 *
 * 3. The SKU is the picked variation's own SKU when it has one, otherwise the
 *    product's; with neither the shop shows nothing and the builder a dimmed
 *    sample "SKU-12345".
 *
 * 4. DOM order is icon, then label, then SKU, and the root owns the whole
 *    layout through `*`. A stacked label-over-code variant sets `flex-col` on
 *    `*` and leaves the icon off, which is what Stacked Meta does.
 */

var layouts = [

  {
    title: 'Label Inline',
    thumbnail: '',
    content: {
      "id": "sku-inline",
      "type": "productSku",
      "options": {
        "label": "SKU:",
        "icon": "",
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2" },
        "label": { "classes": "empty:hidden text-sm text-neutral-500" },
        "sku": { "classes": "text-sm font-medium text-neutral-900 tracking-wide" },
        "icon": { "classes": "shrink-0 flex items-center text-neutral-400" }
      }
    },
  },

  {
    title: 'Code Badge',
    thumbnail: '',
    content: {
      "id": "sku-badge",
      "type": "productSku",
      "options": {
        "label": "SKU",
        "icon": "",
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2" },
        "label": { "classes": "empty:hidden text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "sku": { "classes": "px-2.5 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-md tracking-wider" },
        "icon": { "classes": "shrink-0 flex items-center text-neutral-400" }
      }
    },
  },

  {
    title: 'Barcode Row',
    thumbnail: '',
    content: {
      "id": "sku-barcode",
      "type": "productSku",
      "options": {
        "label": "Product code",
        "icon": "IconBarcode",
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3 px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg w-fit" },
        "label": { "classes": "empty:hidden text-xs text-neutral-500" },
        "sku": { "classes": "text-sm font-semibold text-neutral-900 tracking-wider" },
        "icon": { "classes": "shrink-0 flex items-center text-orange-500" }
      }
    },
  },

  {
    title: 'Stacked Meta',
    thumbnail: '',
    content: {
      "id": "sku-stacked",
      "type": "productSku",
      "options": {
        "label": "SKU",
        "icon": "",
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col items-start gap-0.5" },
        "label": { "classes": "empty:hidden text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "sku": { "classes": "text-base font-semibold text-neutral-900 tracking-wide" },
        "icon": { "classes": "shrink-0 flex items-center text-neutral-400" }
      }
    },
  },

  {
    title: 'Dark Mono Pill',
    thumbnail: '',
    content: {
      "id": "sku-dark",
      "type": "productSku",
      "options": {
        "label": "SKU",
        "icon": "IconHash",
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 px-3 py-1.5 bg-neutral-900 rounded-full w-fit" },
        "label": { "classes": "empty:hidden text-[11px] font-semibold uppercase tracking-widest text-neutral-500" },
        "sku": { "classes": "text-xs font-medium text-amber-400 tracking-wider" },
        "icon": { "classes": "shrink-0 flex items-center text-neutral-500" }
      }
    },
  },

  {
    title: 'Minimal Muted',
    thumbnail: '',
    content: {
      "id": "sku-min",
      "type": "productSku",
      "options": {
        "label": "",
        "icon": "",
        "iconSize": 14
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-1.5" },
        "label": { "classes": "empty:hidden text-xs text-neutral-400" },
        "sku": { "classes": "text-xs text-neutral-400 tracking-wide" },
        "icon": { "classes": "shrink-0 flex items-center text-neutral-300" }
      }
    },
  },

];

export default layouts;
