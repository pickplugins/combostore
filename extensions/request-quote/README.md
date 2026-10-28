# Request a Quote

For the products a store cannot put a price on: made to order, priced by
volume, or negotiated. The shopper collects what they want and asks; the
merchant answers with real figures on **Dashboard → Sell → Quotes**.

This is not the cart. A cart is a purchase in progress; a quote list is a
question. They are kept apart deliberately — the same shopper can have both,
and a product can be in both modes at once.

## The three modes

Every product falls into one of these, decided by the rules:

| Mode | What the shopper sees |
| --- | --- |
| **Normal** | Add to Cart, price shown. Nothing changed. |
| **Quote as well** | Add to Cart *and* a quote button. Price shown. |
| **Quote only** | No Add to Cart. Price optionally replaced with "Price on request". |

## Rules

A rule is `WHEN a product looks like this → sell it that way`.

| Scope | Matches |
| --- | --- |
| Every product | the storewide case |
| These products | chosen ids |
| These categories / tags | by slug |
| No price set | the convention most stores already use for "ask us" |
| Priced above / below | bulk enquiries on big-ticket items |
| Out of stock | turn a dead end into a lead |

**The first matching rule wins**, so the order on screen is the order of
evaluation. That is what makes exceptions expressible: put a rule set to
*Normal* above a broad one and those products stay buyable.

```
1. These products: 42, 51        → Normal          ← the exception
2. Category "machinery"          → Quote only      ← the general rule
```

Written the other way round, rule 1 never gets a say. The arrows beside each
row are the only way to change that, which is why they are not hidden in a
menu.

**Try a product** on the Rules tab runs the real matcher against a product you
describe. Checking a rule by loading a product page only ever checks it
against whatever that page happens to be.

## Where a request goes

A quote request is created with `create_order` — the same anonymous call
checkout makes for a guest — and marked with `quote_request` on
`payment_method`. So a quote **is an order record**, from the first moment:

- no new table, no new endpoint, no second thing to back up
- the inbox is `get_orders` filtered on the marker, server side, so paging is
  right
- pricing it is `update_order_items` + `update_order`, exactly what
  `components/OrderUpdate.jsx` does for a sale

Its stage is an ordinary order status:

| Status | Means |
| --- | --- |
| `hold` | New request, waiting for a price |
| `pending` | Quoted, waiting on the customer |
| `processing` | Accepted |
| `canceled` | Declined or expired |

**Accepting clears the marker.** The record stops being a quote and carries on
as a normal order — so it leaves this inbox, joins the Orders screen, and
counts in the sales figures. A won quote tracked in two places is a won quote
somebody forgets to fulfil.

The quote-only answers that have nowhere else to live — company, the date
wanted, per-item notes — are written into `order_note` as labelled lines, and
read back out by the inbox. The labels are fixed strings rather than the
merchant's wording for exactly that reason.

> **Nothing is emailed.** This extension has no mail path. The quote screen
> has a *copy as text* button; send it however you normally reach the
> customer.

## Rules and wording are stored

In the store settings under `quoteSettings`, saved with the dashboard's JWT
through `update_settings` and read back on the storefront from
`get_settings_public` via `/api/settings`. Same path as every other setting,
so there is no new endpoint.

> **If the settings never come back**, the WordPress side is dropping keys it
> does not recognise in `update_settings`. The Rules tab says so in a banner.
> Allowing `quoteSettings` through is the fix; nothing here needs to change.

The shopper's quote list is different: it lives in `localStorage` under
`combostore_quote_list` and is cleared once the server has the request. That
one is genuinely local — it is a draft nobody else needs, and the server has
no business holding a basket nobody has sent.

## How it reaches the product page

```
ExtensionsRuntime (root layout)
  └─ QuoteRuntime           renders nothing
       ├─ adopts quoteSettings from the store settings
       ├─ reads the quote list out of localStorage (after mount)
       └─ installs useCounterStore.purchaseGate
                              → AddToCartView     hides the buy controls
                              → ProductPriceView  prints "Price on request"
```

`purchaseGate` is a core-facing slot: a function core calls with the product
it is about to render, returning `null` or
`{ hideAddToCart, hidePrice, priceText, reason }`. Core honours it without
knowing what a quote is, and with nothing installed it is `null` and the
product page behaves as it always did.

**It is installed after mount**, so a quote-only product shows its price for a
frame before it goes. The alternative is core knowing the rules, which is the
coupling the slot exists to avoid.

## Blocks

| Block | Where |
| --- | --- |
| **Quote Button** | product template — renders nothing on products no rule matches |
| **Quote List** | the quote page — basket, form, and the thank-you |
| **Quote Badge** | the header — counts a different basket from the cart |

Set **Quote list page** on the Rules tab to wherever the Quote List block
lives, or the buttons and the badge lead nowhere.

## Files

```
lib/rules.js            which products are quoted - scope catalogue, match lives here
lib/defaults.js         form fields, statuses, default settings, starter rules
lib/store.js            settings, the shopper's list, and submitting
lib/QuoteRuntime.jsx    the headless mount; installs the purchase gate
pages/Quotes.jsx        the screen, and its tabs
pages/QuoteInbox.jsx    the list of requests
pages/QuoteDetail.jsx   one request, and pricing it
pages/QuoteSettings.jsx rules, wording, form
elements/QuoteButton.jsx
elements/QuoteList.jsx
elements/QuoteCount.jsx
```

## Adding a scope

One entry in `lib/rules.js`:

```js
brand_is: {
	label: "Products of this brand",
	fields: [{ key: "brands", kind: "slugList", label: "Brand slugs" }],
	summary: (r) => (r.brands ?? []).join(", "),
	match: (r, product) => (r.brands ?? []).includes(product?.brand?.slug),
},
```

It appears in the dropdown, gets its inputs, and starts matching. There is no
UI branch to add — the settings screen renders whatever `fields` declares,
which is why `match` and the metadata sit in one object. Split across two
files, one half gets a new scope and the other quietly never matches it.

## What this does not do

- **Nothing is enforced on the server.** The gate runs in the browser. A
  shopper who knows the API can still `create_order` for a quote-only product
  at its listed price. For a store where that matters, `lib/rules.js` has to
  run again on the WordPress side against the submitted cart.
- **No email, no PDF.** See above.
- **No expiry.** A quote marked *Quoted* stays that way until somebody moves
  it. There is no scheduled job to expire one, because an extension is
  front-end code and nothing runs when the tab is closed.
- **Variations are not quoted separately.** The button adds the product, not
  the chosen variation — the quote list carries a `variation_id` field and
  the lines are keyed on it, so the plumbing is there, but the button does not
  read the variation picker's state yet.
