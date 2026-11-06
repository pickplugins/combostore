/**
 * Element layouts for the `postExcerpt` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `postExcerpt` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "postExcerpt"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * postExcerpt is the post's excerpt plus an optional read-more link to the
 * post's page. The text comes from the post (or, on a product page with a
 * variation picked, that variation's description), so a preset decides the
 * typography and what the read-more looks like -- not the words.
 * PostExcerptView (the shop) and the builder's PostExcerpt.jsx render the
 * same PostExcerptMarkup.
 *
 * Notes that shaped these presets:
 *
 * 1. `maxWord` cuts the excerpt to that many words (as plain text); 0 keeps
 *    it whole and formatted. The card presets also carry a `line-clamp-*` on
 *    `excerpt`, which keeps cards the same height whatever the word lengths.
 *
 * 2. `readMoreText: ''` removes the read-more entirely -- that is what the
 *    plain and compact presets do, and their read-more keys are left empty to
 *    match.
 *
 * 3. The read-more link needs its own display. Both its children are <div>s,
 *    so without a flex on `read-more` the icon and the label stack. The
 *    definition ships `flex gap-2 items-center`; these presets use
 *    `inline-flex w-fit` instead, so the link is only as wide as its text.
 *
 * 4. The icon <div> is only drawn when the icon resolves, so a preset with
 *    `readMoreIcon: ''` emits no wrapper and needs no `empty:hidden`.
 *
 * 5. `readMoreIconSize` is the icon's only size control, so text utilities on
 *    `read-more-icon` will not resize it -- that key is for colour and
 *    spacing. Icon names must be exact @tabler/icons-react exports.
 *
 * Outside a loop, or for a post without an excerpt, the builder shows a
 * sample sentence at a realistic length; on the shop such a post shows
 * nothing.
 */

var layouts = [

  {
    title: 'Card Excerpt + Arrow',
    thumbnail: '',
    content: {
      "id": "pex-card",
      "type": "postExcerpt",
      "options": {
        "maxWord": 20,
        "readMoreText": "Read more",
        "readMoreIcon": "IconArrowNarrowRight",
        "readMoreIconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2.5" },
        "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-3" },
        "read-more": { "classes": "inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 hover:gap-2.5 transition-all" },
        "read-more-icon": { "classes": "flex items-center" },
        "read-more-label": { "classes": "" }
      }
    },
  },

  {
    title: 'Plain Summary',
    thumbnail: '',
    content: {
      "id": "pex-plain",
      "type": "postExcerpt",
      "options": {
        "maxWord": 20,
        "readMoreText": "",
        "readMoreIcon": "",
        "readMoreIconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "excerpt": { "classes": "text-base text-neutral-700 leading-relaxed max-w-2xl" },
        "read-more": { "classes": "" },
        "read-more-icon": { "classes": "" },
        "read-more-label": { "classes": "" }
      }
    },
  },

  {
    title: 'Compact Two Lines',
    thumbnail: '',
    content: {
      "id": "pex-compact",
      "type": "postExcerpt",
      "options": {
        "maxWord": 20,
        "readMoreText": "",
        "readMoreIcon": "",
        "readMoreIconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "excerpt": { "classes": "text-xs text-neutral-500 leading-snug line-clamp-2" },
        "read-more": { "classes": "" },
        "read-more-icon": { "classes": "" },
        "read-more-label": { "classes": "" }
      }
    },
  },

  {
    title: 'Underlined Read More',
    thumbnail: '',
    content: {
      "id": "pex-underline",
      "type": "postExcerpt",
      "options": {
        "maxWord": 20,
        "readMoreText": "Continue reading",
        "readMoreIcon": "",
        "readMoreIconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-4" },
        "read-more": { "classes": "inline-flex w-fit items-center text-sm font-medium text-neutral-900 underline decoration-orange-400 decoration-2 underline-offset-4 hover:decoration-orange-600" },
        "read-more-icon": { "classes": "" },
        "read-more-label": { "classes": "" }
      }
    },
  },

  {
    title: 'Read More Pill',
    thumbnail: '',
    content: {
      "id": "pex-pill",
      "type": "postExcerpt",
      "options": {
        "maxWord": 20,
        "readMoreText": "Read the full post",
        "readMoreIcon": "IconChevronRight",
        "readMoreIconSize": 15
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-4" },
        "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-3" },
        "read-more": { "classes": "inline-flex w-fit items-center gap-1 px-4 py-2 rounded-full bg-orange-500 text-xs font-semibold text-white hover:bg-orange-600 transition-colors" },
        "read-more-icon": { "classes": "flex items-center" },
        "read-more-label": { "classes": "" }
      }
    },
  },

  {
    title: 'Dark Card Excerpt',
    thumbnail: '',
    content: {
      "id": "pex-dark",
      "type": "postExcerpt",
      "options": {
        "maxWord": 20,
        "readMoreText": "Read more",
        "readMoreIcon": "IconArrowNarrowRight",
        "readMoreIconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2.5" },
        "excerpt": { "classes": "text-sm text-neutral-300 leading-relaxed line-clamp-3" },
        "read-more": { "classes": "inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:gap-2.5 transition-all" },
        "read-more-icon": { "classes": "flex items-center" },
        "read-more-label": { "classes": "" }
      }
    },
  },

];

export default layouts;
