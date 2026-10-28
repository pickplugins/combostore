# Countdown Timer

Sale countdowns, daily dispatch cutoffs and first-visit offer windows. Set up
on **Dashboard → Appearance → Countdowns**.

## Campaigns, not block settings

A deadline belongs to a campaign, and blocks point at one. A sale shown in a
header bar, on the home page and on every product card is one campaign and
three blocks — not three end dates that drift apart the first time one is
edited and the others are forgotten.

| Kind | Counts to |
| --- | --- |
| **Ends at a date and time** | one moment. A sale with an end. |
| **A cutoff every day** | today's cutoff, rolling to the next working day once it passes. *"Order within 3h 20m for same-day dispatch."* |
| **Starts when the shopper arrives** | a window that opens on their first visit. |

Each campaign also carries an optional *don't show before* date and what to do
when it runs out — disappear, show a message, or sit at zero.

The screen previews every campaign live, through the same resolver the
storefront uses. A countdown looks right in a form and turns out to be a day
out, in the wrong timezone, or already over; the only way to know is to watch
one tick.

## Timezone

**Every date is read in the store's timezone, not the shopper's.**

This is the whole reason `lib/time.js` exists. Reading "ends 23:59 on the
15th" with `new Date(...)` in the shopper's browser ends the sale at local
midnight wherever they are — hours early in Sydney, hours late in London — and
each shopper's countdown is perfectly self-consistent, so nobody reports it.

The screen shows the current wall-clock time in the chosen zone next to the
field, because reading the zone's *name* back to yourself catches nothing.

Three details that are easy to get wrong and are handled:

- **`hourCycle: "h23"`, not `hour12: false`.** With `hour12: false` the hour
  after midnight formats as `"24"`, which parses to the wrong day and puts a
  deadline 24 hours out.
- **The offset is read at the instant in question**, not in general. A zone
  that observes daylight saving is a different distance from UTC in July than
  in January, and the wall-clock is solved twice so a deadline on the far side
  of a changeover from the first guess still lands right.
- **A daily cutoff resolves each candidate day through the zone separately**
  rather than adding 24 hours, because across a changeover a day is not 24
  hours long and the cutoff would drift by an hour.

## Hydration

A countdown is different on every render by definition, so whatever the server
puts in the HTML is already wrong by the time the browser reads it — and if
the first client render disagreed with that HTML, React would leave the page
showing markup the client never agreed with.

So nothing counts until after mount. The blocks render the same structure with
`--` in place of the digits, then fill in. Same markup, no layout shift, one
frame of placeholder.

## One clock

A page can carry a bar at the top, a timer on each card in a grid and one
beside Add to Cart. `lib/ticker.js` is a single interval with a list of
subscribers, started with the first timer and stopped with the last.

Separate intervals would wake the browser twenty times a second between them
and drift apart, so two timers showing the same deadline tick over at visibly
different moments — which reads as broken.

It aligns to the second boundary before settling into its beat, so every timer
changes when the clock does rather than at .37 of each second. Every tick reads
`Date.now()` rather than decrementing, so a throttled background tab needs no
catching up; returning to it just needs a tick, which the visibility listener
does.

## Why there is no "restart after a while"

The evergreen window runs once per browser and stays run out.

The version merchants usually ask for restarts the clock on each visit, so the
offer never actually ends and the urgency is a lie the shopper can catch by
coming back tomorrow. A genuinely recurring window is a **daily** campaign,
which ends when it says it ends.

Evergreen is also per browser, with the first-seen stamp in `localStorage`. It
is a nudge, not a deadline anyone can enforce — clearing site data resets it,
and the dashboard says so where the option is.

## Blocks

| Block | Where |
| --- | --- |
| **Countdown** | anywhere — boxes, inline with colons, or one line of text |
| **Countdown Bar** | the top of the page body — message, time left, a way through, dismissible |

A sticky bar only sticks within its own scrolling ancestor, so it belongs at
the top of the page body and not inside the content column.

Dismissing the bar hides it for the rest of the visit on every page, then it
comes back. That is `sessionStorage`: a bar nobody can bring back is a bar the
merchant cannot show a returning visitor, and "gone for this visit" is what a
close button is usually taken to mean.

Every preset sets `tabular-nums`. Without it the digits are proportionally
spaced and the whole timer jiggles sideways once a second.

## Settings

Stored under `countdownCampaigns`, saved with the dashboard's JWT through
`update_settings` and read back on the storefront from `get_settings_public`
via `/api/settings`.

> **If the settings never come back**, the WordPress side is dropping keys it
> does not recognise in `update_settings`. The screen says so in a banner.
> Allowing `countdownCampaigns` through is the fix.

## Files

```
lib/time.js              timezones, deadlines, splitting, formatting - pure
lib/campaign.js          campaign + now -> status and deadline - pure
lib/ticker.js            one interval for every timer on the page
lib/store.js             campaigns, and this browser's first-seen stamps
lib/useCountdown.js      the hook the blocks use
lib/CountdownRuntime.jsx the mount
pages/Countdowns.jsx     the screen, with live previews
elements/Countdown.jsx
elements/CountdownBar.jsx
```

## What this does not do

- **It does not change prices.** A countdown says a sale ends; it does not end
  it. Pair it with a scheduled rule in `discount-rules` — and set the same
  deadline in both, because nothing links them.
- **Nothing is enforced on the server.** A shopper with a clock set wrong, or
  who clears their storage, sees a different timer. Nothing is decided by it.
- **No per-product deadlines.** Campaigns are store-wide. A timer that ends at
  a different moment on every product needs the deadline held on the product,
  which is a WordPress-side change.
- **No "only N left" stock counter.** Different idea, different data, and the
  honest version needs live stock.
- **The bar is not automatically site-wide.** It is a block, so it goes wherever
  the merchant places it — usually the header template, which puts it on every
  page that uses that header.
