# Discount Rules

Automatic cart discounts. A merchant writes rules on **Dashboard → Store →
Discount Rules**; a cart that satisfies one is priced down with nothing for
the shopper to type.

This is not the coupon the core cart already has. A coupon is a code the
shopper enters and can remove; a rule is something the cart qualifies for. The
two stack, each on its own line, and neither knows about the other.

## How a rule is put together

```
WHEN   all / any of these conditions hold
THEN   apply this one discount
```

Rules run in **priority order, lowest first**. A rule marked *stop after this
rule* keeps every rule below it from applying.

### Conditions

| Group | Condition |
| --- | --- |
| Cart | subtotal, total items, distinct products, a coupon is applied |
| Products | products in cart, categories in cart, tags in cart, quantity of matching items, subtotal of matching items |
| Customer | signed in, role, past orders |
| Delivery | shipping method |
| Schedule | date range, day of the week, time of day |

Numeric conditions take `is at least / more than / at most / less than /
equals / is between`. Set conditions take `contains any / all / none of`.

A rule with **no** conditions applies to every cart, which is how a storewide
sale is written.

### Discounts

| Action | What it does |
| --- | --- |
| `cart_percent` | % off the cart, with an optional cap |
| `cart_fixed` | a flat amount off the cart |
| `item_percent` | % off matching items, with an optional unit limit and cap |
| `item_fixed` | a flat amount off each unit, each line, or once |
| `fixed_price` | matching items repriced to a fixed unit price |
| `bulk_tier` | a quantity ladder — 3+ gets 5%, 6+ gets 10%, 12+ gets 15% |
| `buy_x_get_y` | buy X get Y, at any discount, on the cheapest units |
| `free_shipping` | waives the shipping line |

**Targets.** Every item-scoped action and condition picks what it applies to:
every item, specific product ids, category slugs, or tag slugs — with an
exclusion list on top.

### Decisions worth knowing about

- **Only the best tier pays out.** A ladder is a ladder, not a sum; a 12-item
  cart gets 15%, not 5 + 10 + 15.
- **Buy X get Y discounts the cheapest units.** It is what the phrase means
  everywhere a customer has met it, and it cannot be gamed by adding one
  expensive item.
- **Compounding is off by default.** Two 10% rules take 20%, not 19%. With
  compounding on, each rule discounts what the one before it left — which
  makes the result depend on the order the rules sit in. The switch is on the
  screen.
- **A cart can never go negative.** Each discount is clamped to what is left,
  and the optional ceiling caps the stack.
- **An unknown past-order count fails.** A guest is not a customer with zero
  orders, so a first-order rule does not fire for everyone who is not signed
  in.

## Testing a rule

The **test cart** beside the list runs the real engine — the same function
the storefront calls. Change a quantity, a category, the clock, and every
rule shows whether it fired and what it took off, with a tick or a cross
beside each individual condition. Rules that did not apply are listed with
the reason.

It is the only practical way to check a tier ladder, two offers that stack,
or a window that opens at six.

## Where the rules are stored

In the store settings, under `discountRules`, saved with the dashboard's JWT
through `update_settings` and read back on the storefront from
`get_settings_public` via `/api/settings`. That is the same path every other
setting takes, so there is no new endpoint and no new table.

`localStorage` is a **mirror**, not the source. It keeps the editor usable
while a save is in flight or has failed, and the screen says so in a banner
when what you are looking at has not reached the store. It is never read on
the storefront — a shopper's own browser must not be able to invent a
discount.

> **If rules save locally but never reach the store**, the WordPress side is
> rejecting keys it does not recognise in `update_settings`. The banner on the
> screen will say so. Allowing `discountRules` and `discountRuleOptions`
> through is the fix; nothing in this extension needs to change.

## How it reaches the cart

```
ExtensionsRuntime (root layout)
  └─ DiscountRulesRuntime      renders nothing, prices the cart
       └─ useCartDiscounts()   → useCounterStore.cartDiscount
                                 → CartView  subtracts it from the payable
                                 → CheckoutView records it on the order
```

The runtime is mounted on every page, so the rules are in effect wherever a
cart exists. The **Cart Discounts** page-builder block only *shows* the
breakdown — deleting it does not turn the discounts off, and two copies of it
cannot disagree, because both read the one published result.

`cartDiscount` on the core cart store is a neutral slot: core prices in
whatever is there without knowing which extension produced it.

## Files

```
lib/schema.js               condition and action catalogue - evaluate/apply live here
lib/engine.js               pure evaluation; no React, no stores
lib/store.js                the rules, and their trip to and from the settings
lib/defaults.js             blank rule, blank condition, starter examples
lib/useCartDiscounts.js     cart store -> engine -> cartDiscount
lib/DiscountRulesRuntime.jsx  the headless mount
pages/DiscountRules.jsx     the screen
pages/RuleCard.jsx          one rule
pages/FieldInput.jsx        one input per field descriptor
pages/Simulator.jsx         the test cart
elements/CartDiscounts.jsx  the cart-side readout
```

## Adding a condition or an action

One entry in `lib/schema.js`:

```js
cart_has_gift_note: {
	label: "Cart has a gift note",
	group: "Cart",
	operators: [{ value: "is", label: "is" }],
	fields: [{ key: "value", label: "Present", kind: "toggle" }],
	defaults: { operator: "is", value: true },
	summary: (c) => (c.value === false ? "No gift note" : "Has a gift note"),
	evaluate: (c, ctx) => Boolean(ctx.giftNote) === (c.value !== false),
},
```

It appears in the dropdown, gets its inputs, and starts matching. There is no
UI branch to add: the builder renders whatever `fields` declares, which is why
`evaluate` and the metadata sit in the same object — split across two files,
one half gets a new type and the other silently never matches it.

The field kinds `FieldInput` knows are `number`, `text`, `select`, `toggle`,
`date`, `time`, `days`, `idList`, `slugList`, `target` and `tiers`.
