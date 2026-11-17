# Fraud Checker

Order-screening configuration: which checks an order should be screened
against before the shop accepts it.

This was a tab on **Settings → Fraud Check**. It is now a screen at
**Dashboard → Store → Fraud Checker**, owned by this extension. Nothing about
the stored data changed.

## What it contributes

| Point | What |
| --- | --- |
| `nav` | One entry under the `store` group |
| `routes` | `fraud-checker` → the screen |

No blocks: none of this is something a merchant places on a page. No runtime:
what is enforced runs on the server, so there is nothing for the storefront to
mount.

## The checks

| id | Label | Fields |
| --- | --- | --- |
| `loginRequired` | Login Required | `enabled` |
| `maxOrder` | Max orders per hour | `enabled`, `order_count` |
| `duplicateOrder` | Duplicate Order | `enabled` |
| `reCAPTCHA` | reCAPTCHA | `enabled` |
| `emailOtp` | Email OTP Verification | `enabled`, `order_count` |
| `limitip` | Limit IP Address | `enabled`, `order_count` |
| `limitPhone` | Limit Phone Number | `enabled`, `order_count` |
| `mobilefraudcheck` | Mobile Fraud Checker | `enabled`, `service`, `score` |

`lib/providers.js` is the table. In core each of these was a hand-written
`providerKey == '...'` branch in the settings markup — 840 lines of
near-identical JSX whose only differences were a label, some help text and
which keys it wrote. Adding a check now means adding a row, not a branch.

Three more (`tempEmail`, `smsOtp`, `phoneCall`) had branches in core but were
commented out of the list that drove them, so they never rendered. They are
recorded in `NOT_YET_OFFERED` rather than dropped silently.

## What is enforced

Two checks run on the server, in `create_order` (combostore-server,
`ComboStoreRest.php`), before the order is written:

| Check | Rule | Refusal |
| --- | --- | --- |
| `loginRequired` | The request must carry a valid customer token. The order is then placed as that customer: the body's `userid` is overwritten, because anyone can write any id into it. | `{ status: "failed", code: "login_required" }` |
| `limitPhone` | At most `order_count` orders per phone number in the last hour. Billing and shipping phones are compared on their last 10 digits, so `+8801711…` and `01711…` are the same number. Incomplete, draft, trashed, failed and cancelled orders do not count. 0 or blank means no limit. | `{ status: "failed", code: "phone_limit" }` |

Both are skipped for `incomplete` orders (the checkout's abandoned-cart
capture) and for `administrator` / `store_manager` tokens, the same as the MOQ
check. The checkout sends the signed-in customer's token with every
`create_order` call so the server can see who is ordering.

Every other check is still **Coming Soon**: saved, but nothing reads it. When
those ship they belong in the same place. Anything decided in the browser is
bypassed by posting an order straight to the API.

## Storage

Under `fraudCheck` in the store settings blob — the same key, the same
per-check ids, the same field names core used. A store configured under the
old settings tab reads back unchanged.

Saving posts **only** `fraudCheck`. `update_settings` merges what it is given,
so a one-key post leaves everything else alone.

`localStorage` (`combostore_fraud_checker`) is a mirror that keeps the screen
usable while the settings round-trip is in flight or has failed. It is never
the store of record.

### Why the settings screen had to stop posting this key

`SettingsGlobal.jsx` posts its **entire** `settingsData` object on save. It
loads with `{ ...settingsData, ...res }`, so `fraudCheck` came back from the
server and went out again on every save.

Left that way, the two screens would race: configure here at 10:00, save
Settings at 10:01 from a tab opened at 09:55, and the stale `fraudCheck` in
that tab's state overwrites what this extension wrote. No error, no conflict —
the settings just revert.

So `update_settings` in `SettingsGlobal.jsx` now strips the keys it no longer
owns before posting. That is what makes this extension the single writer.

**If you add another extension that stores settings this way, it needs the
same treatment.** The rule: whoever owns a key is the only thing that posts
it.

## Two bugs fixed in the move

- The service `<select>` carried `name={'score'}` while reading
  `value={...['service']}`. Choosing a service wrote the service id into
  `score`, clobbering the number beside it, and the select never showed what
  was stored because nothing ever wrote `service`. A table-driven field cannot
  drift like that — the key is read and written from one place.
- `emailOtp` and `limitPhone` both described themselves as "Enable IP limit",
  copied from the check above and never corrected. The stored keys are
  unchanged; only the words a merchant reads are.
