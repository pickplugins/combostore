/*
 * Element layouts for the `productDeal` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productDeal` block and
 * its "Layouts" picker; picking one replaces the block. Every layout's root
 * MUST be `"type": "productDeal"`. (PageBuilder.jsx regenerates all ids on
 * insert, so the ids here only need to be unique within this file.)
 *
 * productDeal is a leaf: a header (badge + status), an optional countdown,
 * the deal's message, the waitlist count, recent joiners and the join form.
 * ProductDealView (the shop) and the builder's ProductDeal.jsx read these
 * cssSelectors keys.
 */

const texts = {
  "title": "",
  "buttonText": "Join the waitlist",
  "joinedText": "You're on the waitlist. We'll let you know when the deal starts.",
  "countText": "{count} people on the waitlist",
  "emptyText": "Be the first to join the waitlist",
  "startsInText": "Starts in",
  "endsInText": "Ends in",
  "upcomingText": "Coming soon",
  "liveText": "Live now",
  "endedText": "This deal has ended",
  "showCountdown": true,
  "hideWhenEnded": true
};

var layouts = [

  {
    title: 'Warm Card',
    thumbnail: '',
    content: {
      "id": "deal-warm",
      "type": "productDeal",
      "options": { ...texts },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4" },
        "header": { "classes": "flex flex-wrap items-center justify-between gap-2" },
        "badge": { "classes": "inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white" },
        "status": { "classes": "text-xs font-medium text-amber-800" },
        "countdown": { "classes": "flex items-baseline gap-2" },
        "countdownLabel": { "classes": "text-sm text-gray-600" },
        "countdownValue": { "classes": "text-xl font-bold tabular-nums text-gray-900" },
        "message": { "classes": "text-sm text-gray-700" },
        "count": { "classes": "text-sm font-semibold text-gray-900" },
        "joiners": { "classes": "flex items-center gap-2" },
        "avatars": { "classes": "flex -space-x-2" },
        "avatar": { "classes": "flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-200 text-[10px] font-bold text-amber-900" },
        "joinersText": { "classes": "text-xs text-gray-600" },
        "form": { "classes": "flex flex-col gap-2 sm:flex-row sm:flex-wrap" },
        "input": { "classes": "min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm" },
        "button": { "classes": "rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60" },
        "success": { "classes": "rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700" },
        "error": { "classes": "text-sm text-red-600" }
      },
    }
  },

  {
    title: 'Dark Launch',
    thumbnail: '',
    content: {
      "id": "deal-dark",
      "type": "productDeal",
      "options": { ...texts, "upcomingText": "Dropping soon" },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-4 rounded-2xl bg-gray-900 p-5 text-white" },
        "header": { "classes": "flex flex-wrap items-center justify-between gap-2" },
        "badge": { "classes": "inline-flex items-center rounded-md bg-rose-500 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white" },
        "status": { "classes": "text-xs font-medium uppercase tracking-wide text-gray-400" },
        "countdown": { "classes": "flex flex-col gap-1" },
        "countdownLabel": { "classes": "text-xs uppercase tracking-wide text-gray-400" },
        "countdownValue": { "classes": "text-3xl font-extrabold tabular-nums" },
        "message": { "classes": "text-sm text-gray-300" },
        "count": { "classes": "text-sm font-semibold text-rose-300" },
        "joiners": { "classes": "flex items-center gap-2" },
        "avatars": { "classes": "flex -space-x-2" },
        "avatar": { "classes": "flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-900 bg-gray-700 text-[10px] font-bold text-white" },
        "joinersText": { "classes": "text-xs text-gray-400" },
        "form": { "classes": "flex flex-col gap-2" },
        "input": { "classes": "rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm text-white placeholder:text-gray-500" },
        "button": { "classes": "rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-rose-600 disabled:opacity-60" },
        "success": { "classes": "rounded-lg bg-emerald-500/15 px-3 py-2 text-sm font-medium text-emerald-300" },
        "error": { "classes": "text-sm text-rose-300" }
      },
    }
  },

  {
    title: 'Minimal Line',
    thumbnail: '',
    content: {
      "id": "deal-minimal",
      "type": "productDeal",
      "options": { ...texts, "buttonText": "Notify me" },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2 border-y border-gray-200 py-4" },
        "header": { "classes": "flex items-center gap-2" },
        "badge": { "classes": "text-sm font-semibold text-gray-900" },
        "status": { "classes": "rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600" },
        "countdown": { "classes": "flex items-baseline gap-1.5 text-sm" },
        "countdownLabel": { "classes": "text-gray-500" },
        "countdownValue": { "classes": "font-semibold tabular-nums text-gray-900" },
        "message": { "classes": "text-sm text-gray-600" },
        "count": { "classes": "text-xs text-gray-500" },
        "joiners": { "classes": "hidden" },
        "avatars": { "classes": "" },
        "avatar": { "classes": "" },
        "joinersText": { "classes": "" },
        "form": { "classes": "flex gap-2" },
        "input": { "classes": "min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm" },
        "button": { "classes": "rounded-md border border-gray-900 px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white disabled:opacity-60" },
        "success": { "classes": "text-sm text-green-700" },
        "error": { "classes": "text-sm text-red-600" }
      },
    }
  },

];

export default layouts;
