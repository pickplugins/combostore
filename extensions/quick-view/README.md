# Product Quick View

A look at a product without leaving the grid. The shopper clicks **Quick
view** on a card, a modal opens with the images, price, variations and Add to
Cart, and closing it puts them back exactly where they were — same scroll
position, same page of results, same filters.

Settings on **Dashboard → Appearance → Quick View**.

## The one idea

**The modal contains core's own product blocks**, wrapped in the same
`PostProvider` the product page uses:

```
PostProvider value={product}
  ├─ ProductGalleryView
  ├─ ProductCategoriesView
  ├─ ProductStockStatusView · ProductSkuView
  ├─ ProductPriceView
  ├─ ProductVariablePricesView     ← the real variation picker
  └─ AddToCartView                 ← the real Add to Cart
```

Nothing about buying a product is reimplemented, so nothing can drift.
Variations, addons, bulk pricing and trade prices work because they are the
same components. A change to how the product page sells something is a change
here too, with no second place to remember.

It also means the modal honours `purchaseGate`: with `request-quote`
installed, a quote-only product opened in quick view shows "Price on request"
and no Add to Cart, exactly as its product page does. Neither extension knows
about the other.

## Where the modal lives

In `document.body`, via a portal, mounted once by the runtime.

Not in the card that was clicked: a card is inside a grid, and a parent with
`overflow: hidden` would clip the modal while a parent with `transform` would
break its fixed positioning. Not as a block either — there is one modal for
the whole site, and a block would mean one per placement, several open at
once, and none at all on the pages the merchant forgot.

The trigger is the block. Twenty cards on a page means twenty buttons and one
modal.

## What it fetches

`get_product` with the card's slug — the same anonymous call
`lib/getProduct.js` makes for the product page, so the modal gets the full
record rather than the thinner one a grid card carries.

Two things make it feel instant:

- **The card's data is shown immediately** as a seed, so the modal opens with
  a title and a picture instead of an empty frame, then fills in.
- **Fetched products are cached for the page view.** A grid gets browsed back
  and forth; without the cache every reopen is another round trip and another
  skeleton flash for something that was on screen a second ago.

A response that arrives after the shopper has moved to another product is
still written to the cache — it is correct, just late — but never into the
open modal.

## Details that are easy to get wrong

- **The variation picker writes to a store shared with the product page.** It
  is cleared on open *and* on close; without the clear on open, the second
  product you look at inherits the first one's variation and prices wrongly.
- **Escape and the close button always work**, whatever "clicking outside
  closes it" is set to.
- **Body scroll is restored to its previous value**, not cleared — something
  else may have been holding it, such as a cart drawer opened first.
- **Focus** moves into the panel and returns to the trigger on close.
- **Stock status is passed in.** The core stock block reads `stock_status`
  from its *options*, not from the product, because on a template it is
  configured by the merchant. Here there is a real product, so it is derived
  from `stock_count`.
- **Close after add watches the cart**, because `AddToCartView` is core's and
  reports to the cart store rather than to us. It only runs while the modal
  is open, which is the only time the shopper could have added from here.

## Settings

Stored in the store settings under `quickViewSettings`, saved with the
dashboard's JWT through `update_settings` and read back on the storefront
from `get_settings_public` via `/api/settings`.

> **If the settings never come back**, the WordPress side is dropping keys it
> does not recognise in `update_settings`. The screen says so in a banner.
> Allowing `quickViewSettings` through is the fix.

**Preview** on that screen opens the real modal on a real product with the
settings as they currently stand, saved or not. It can, because the runtime
that mounts the modal is in the root layout and that wraps the dashboard too
— so it is what a shopper gets, not a drawing of it that can fall behind.

## Placing the trigger

Drag **Quick View Button** into a product grid, slider or loop. It reads the
card's product from the context the loop provides, so it needs no
configuration — and it does nothing outside a loop, where there is no product
to open.

Three presets:

| Preset | Needs |
| --- | --- |
| Full Width Under Card | nothing |
| Icon Over The Image | `relative` on the card |
| Reveal On Hover | `relative` and `group` on the card |

The last two position against the card, so without those classes the button
lands in the page corner or never appears. Core's product cards carry them; a
hand-built one may not.

## Files

```
lib/store.js              what is open, the cache, the settings
lib/defaults.js           the section list, widths, defaults
lib/modalStyles.js        how the reused core elements are dressed
lib/QuickViewModal.jsx    the modal, portalled to document.body
lib/QuickViewRuntime.jsx  the mount
pages/QuickView.jsx       the settings screen, with a real preview
elements/QuickViewButton.jsx
```

The modal is not a page-builder block, so there is no `CssSelectors` editor
behind it — `lib/modalStyles.js` is the one place its look is decided.

## What this does not do

- **No gallery zoom, reviews, related products or long description.** Those
  are what the full page is for, and the link out is always there. A modal
  that grows into the product page is a product page that loads in the wrong
  place.
- **No prefetch on hover.** It would make the first open feel instant at the
  cost of a request for every card a cursor crosses, which on a dense grid is
  most of them.
- **No deep link.** Opening a quick view does not change the URL, so it
  cannot be shared or reached with the back button. The back button closing
  the modal would be the better behaviour and needs a history entry pushed on
  open.
- **It is not styled per placement.** One modal, one look, set on the
  settings screen.
