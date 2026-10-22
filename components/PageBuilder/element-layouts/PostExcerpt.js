/**
 * Element layouts for the `postExcerpt` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `postExcerpt` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "postExcerpt"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * postExcerpt is a <p> of post copy plus an optional read-more link. The text
 * comes from `usePost()` (PostExcerpt.jsx:37), so a preset decides the typography
 * and what the read-more looks like -- not the words. All five selector keys are
 * applied; of the four declared options only two do anything.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Clamp the copy with CSS, because `maxWord` does not truncate. It is read
 *    at :31 and then never used -- the excerpt is rendered whole at :69, and the
 *    panel does not even offer the field. So `line-clamp-*` on the `excerpt`
 *    key is the only way to keep cards the same height, and every card preset
 *    below carries one. `maxWord` is still set to the definition's 20 so the
 *    block round-trips unchanged.
 *
 * 2. `readMoreText: ''` removes the read-more entirely. :71 gates the whole
 *    <Link> on the string being truthy, so blanking it is the supported way to
 *    get a bare summary -- that is what the plain and compact presets do, and
 *    their read-more keys are left empty to match.
 *
 * 3. The read-more <a> needs its own display. Both its children are <div>s
 *    (:74, :79), so without a flex on `read-more` the icon and the label stack.
 *    The definition ships `flex gap-2 items-center` for exactly this reason;
 *    these presets use `inline-flex w-fit` instead, so the link is only as wide
 *    as its text and the underline and pill backgrounds do not run the full
 *    column. (The href is hardcoded to `#` -- `linkTo` is read at :29 and never
 *    used, like `tag` at :28, which is why the excerpt is always a <p>.)
 *
 * 4. No empty icon wrapper to hide. Unlike the `list` element, :73 gates the
 *    icon <div> on the icon actually resolving, so a preset with
 *    `readMoreIcon: ''` emits no wrapper at all and needs no `empty:hidden`.
 *
 * 5. `readMoreIconSize` is the icon's only size control (:75, as a width/height
 *    attribute), so text utilities on `read-more-icon` will not resize it --
 *    that key is for color and spacing. Icon names must be exact
 *    @tabler/icons-react exports (:41, an unknown name silently renders
 *    nothing); the ones used here were checked against the installed package.
 *
 * The renderer falls back to a baby-essentials placeholder sentence when the
 * post has no excerpt (:37), so these presets preview at a realistic length in
 * the canvas even on an empty post.
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
