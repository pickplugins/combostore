/**
 * Element layouts for the `countdownTimer` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `countdownTimer` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "countdownTimer"`. (PageBuilder.jsx regenerates all
 * ids on paste/replace, so the readable ids below are safe.)
 *
 * countdownTimer is a leaf: an optional `prefix` (`icon`, `prefix-text`), then
 * either `units` - a `unit` (plus `unit-days` / `unit-hours` / `unit-minutes`
 * / `unit-seconds`) holding `value` and `label`, with `separator` between -
 * or one `inline` line. `expired` is the message shown at zero when
 * `expired: "message"`.
 *
 * These presets carry style and wording only - no `mode`, `endDate`,
 * `endsAt` or `durationMinutes`. Replace swaps the whole block, so
 * ElementLayouts.jsx copies those four from the block being replaced onto
 * the preset: the end the merchant set survives a change of look.
 *
 * `tabular-nums` on the digits: proportional digits change width as they
 * count and the timer jiggles once a second.
 */

var layouts = [

  {
    title: 'Dark Boxes',
    thumbnail: '',
    content: {
      "id": "cdt-boxes",
      "type": "countdownTimer",
      "options": {
        "layout": "boxes",
        "showDays": true,
        "showSeconds": true,
        "showLabels": true,
        "separator": "",
        "prefix": "",
        "expired": "hide"
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col items-start gap-2" },
        "prefix": { "classes": "flex items-center gap-1.5 text-sm font-medium text-gray-700" },
        "units": { "classes": "flex items-center gap-2" },
        "unit": { "classes": "flex min-w-14 flex-col items-center gap-0.5 rounded-xl bg-gray-900 px-3 py-2" },
        "value": { "classes": "text-xl font-bold tabular-nums leading-none text-white" },
        "label": { "classes": "text-[10px] uppercase tracking-wide text-gray-400" },
        "separator": { "classes": "" },
        "inline": { "classes": "" },
        "expired": { "classes": "text-sm text-gray-500" }
      }
    }
  },

  {
    title: 'Sale Ends Inline',
    thumbnail: '',
    content: {
      "id": "cdt-inline",
      "type": "countdownTimer",
      "options": {
        "layout": "inline",
        "showDays": true,
        "showSeconds": true,
        "prefix": "Sale ends in",
        "icon": "IconClock",
        "iconSize": 16,
        "expired": "hide"
      },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-sm text-red-700 ring-1 ring-red-200" },
        "prefix": { "classes": "flex items-center gap-1.5 font-medium" },
        "icon": { "classes": "flex items-center" },
        "inline": { "classes": "font-bold tabular-nums" },
        "expired": { "classes": "font-medium" }
      }
    }
  },

  {
    title: 'Light Cards With Colons',
    thumbnail: '',
    content: {
      "id": "cdt-cards",
      "type": "countdownTimer",
      "options": {
        "layout": "boxes",
        "showDays": true,
        "showSeconds": true,
        "showLabels": true,
        "separator": ":",
        "prefix": "Offer ends in",
        "expired": "message",
        "expiredText": "This offer has ended."
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-wrap items-center gap-3" },
        "prefix": { "classes": "text-sm font-semibold text-gray-900" },
        "units": { "classes": "flex items-start gap-1.5" },
        "unit": { "classes": "flex min-w-12 flex-col items-center rounded-lg border border-gray-200 bg-white px-2 py-1.5 shadow-sm" },
        "value": { "classes": "text-lg font-bold tabular-nums leading-tight text-gray-900" },
        "label": { "classes": "text-[10px] uppercase tracking-wide text-gray-500" },
        "separator": { "classes": "pt-1.5 text-lg font-bold text-gray-400" },
        "expired": { "classes": "text-sm font-medium text-gray-500" }
      }
    }
  },

];

export default layouts;
