# Currency Switcher

Shoppers see prices in a currency they know. Set up on **Dashboard → Store →
Currencies**.

## Read this first

**It changes what prices look like, not what you are paid.**

Carts, orders and payments stay in the store's own currency. A shopper
browsing in USD still has an order placed in BDT and is charged BDT by their
bank, at the bank's rate — which will not be exactly the rate you set here.

That is not a shortcut; it is the only honest thing to build at this layer.
Charging in another currency means the payment gateway and the WordPress side
agreeing on a rate at the moment of capture, storing which currency an order
was taken in, and reporting on both. None of that is front-end work.

So the extension says so, on the storefront, in the **Currency Note** block —
and the dashboard says it before anything else on the screen.

## How a price gets converted

Every price the storefront prints goes through `wrapCurrency` in
`store/useUtilsStore.js`. That one chokepoint is where this extension
intervenes, through a core slot:

```js
// store/useUtilsStore.js
formatPrice: (value) => string | null
```

Returning `null` means *not mine*, and core formats the amount exactly as it
always has. So:

- with nothing installed, output is byte for byte what it was
- with no currency chosen, the formatter declines and the base currency is
  printed by core — there is no second copy of the base formatting to drift
- an amount that is not a number (`"Price on request"`, an empty cell) is
  declined rather than printed as `NaN`

**The dashboard is excluded.** `wrapCurrency` is shared with the admin
screens, and roughly twenty of them print real money — order totals,
expenses, takings. The runtime installs the formatter on storefront paths
only; on `/dashboard`, `/settings` and `/builder` it installs nothing. A
merchant must never have to wonder whether the figure in front of them is
converted.

## Rates

**You set them.** Each currency carries how much of it one unit of the base
buys, plus symbol, position, decimals, separators and an optional rounding
step. A new currency starts at rate `0`, which the converter refuses — a
plausible-looking wrong rate is the one mistake that would go unnoticed.

**Fetch today's rates** fills them in from a public exchange-rate service.
Only from this screen, only when you press it, and the result lands in the
fields for you to check rather than going live — it is not saved until you
save. **Your shoppers' browsers never contact that service**; they see
whatever number you stored. The endpoint is a setting, so it can be pointed
at a different provider or left blank.

The screen shows how old the rates are, because a year-old rate otherwise
looks exactly like a fresh one.

### Rounding

`roundTo` is a step, not a precision: `1` gives whole units, `0.5` halves,
`5` rounds to the nearest five. `decimals` then trims what is printed. The
two are separate because "always price in whole dollars" and "show two
decimal places" are different requests.

## What the shopper picks, and where it is kept

In `localStorage` under `combostore_currency`, read after mount and never
during render — seeding it during render would make the server markup and the
first client render disagree on every price on the page. Until it is read,
the base currency is shown, which is what the server rendered.

Only the *code* is stored. Rates are never read from there: a shopper's own
browser must not be able to set an exchange rate.

A stored code for a currency you have since removed or switched off falls
back to the base rather than pricing in something you no longer offer.

**Guess from the browser's language** is off by default. When on, it only
runs on a first visit, only reads the region at the end of the language tag,
and only picks a currency you already offer. A shopper shown the wrong
currency may not notice it is wrong.

## Why switching currency actually repaints the page

The slot lives in `useUtilsStore` rather than beside the cart, because the
components that print prices subscribe to that store. Installing a formatter
is a `set`, so they all re-render and the new formatting reaches the screen.
From another store the formatter would be correct and invisible until
something else happened to force a render — every price on the page would
keep its old currency.

The runtime therefore reinstalls the formatter whenever the choice changes.
That is the mechanism, not a side effect.

## Blocks

| Block | Where |
| --- | --- |
| **Currency Switcher** | the header — dropdown or a row; hides itself when there is nothing to switch between |
| **Currency Note** | the cart and the checkout — renders nothing for shoppers already in the base currency |

The dropdown presets position their list absolutely, so the block's root
carries `relative`. Without it the list anchors to whatever ancestor happens
to be positioned, usually the header, and lands across the page.

## Files

```
lib/convert.js           converting, rounding, formatting, locale guessing - pure
lib/defaults.js          the currency catalogue, defaults, note wording
lib/store.js             the merchant's currencies and the shopper's choice
lib/CurrencyRuntime.jsx  installs the formatter; keeps the dashboard out
pages/Currencies.jsx     the screen
elements/CurrencySwitcher.jsx
elements/CurrencyNote.jsx
```

## What this does not do

- **It does not charge in another currency.** See the top of this file.
- **No automatic rate refresh.** Rates change when you press the button.
  Keeping them current on a schedule needs something that runs when nobody
  has the dashboard open, which an extension is not.
- **No per-currency pricing.** Every price is the base price times a rate.
  A store that wants `$19.99` in the US and `£19.99` in the UK needs prices
  held per currency on the product, which is a WordPress-side change.
- **No geolocation.** The first-visit guess reads the browser's language, not
  an IP address — no third-party lookup, and nothing about the shopper leaves
  their browser.
- **Converted prices are not used for anything but display.** Coupon
  thresholds, free-shipping minimums and discount rules all compare against
  base-currency amounts, which is correct, but means a shopper in USD sees
  "spend $45 more" worked out in BDT and converted.
