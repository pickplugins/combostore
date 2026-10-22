/**
 * Element layouts for the `heading` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `heading` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "heading"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * heading is the simplest element in this folder and the only one so far with
 * nothing to work around: `options.text` and `options.tag` are both declared and
 * read (Heading.jsx:28, :64), the single `*` selector key is applied (:41), and
 * there is no mismatch between the definition, the renderer and the panel. So a
 * preset here is just a tag, some text and one class string -- the variety has
 * to come from typography rather than structure.
 *
 * Two things still worth knowing:
 *
 * 1. Pick the tag for document structure, not for size. The tag renders
 *    literally (`const Tag = tag`), so `tag: "h1"` emits an <h1> whatever the
 *    classes say. One h1 per page, h2 for major sections, h3 below that -- the
 *    size comes from the class string, so a small eyebrow can still be an h2 if
 *    that is what the outline calls for.
 *
 * 2. heading does not pick up loop text. Heading.jsx:5,10 imports and calls
 *    `useLoop()` and then never uses the result, so a heading placed inside a
 *    featurebox or post loop always shows its own `options.text`. Text.jsx:9
 *    does read `loop?.text`, so use a `text` element where per-item copy is
 *    wanted.
 *
 * The centred preset draws its underline with an `after:` pseudo-element rather
 * than a border, so the rule is narrower than the text. Those utilities --
 * including `after:content-['']` -- were compiled against this project's
 * Tailwind before being used here.
 */

var layouts = [

  {
    title: 'Section Title',
    thumbnail: '',
    content: {
      "id": "hd-section",
      "type": "heading",
      "options": {
        "text": "Shop by category",
        "tag": "h2"
      },
      "cssSelectors": {
        "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" }
      }
    },
  },

  {
    title: 'Page Hero Title',
    thumbnail: '',
    content: {
      "id": "hd-hero",
      "type": "heading",
      "options": {
        "text": "Everything for your little one, delivered",
        "tag": "h1"
      },
      "cssSelectors": {
        "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight max-w-3xl" }
      }
    },
  },

  {
    title: 'Eyebrow Caps',
    thumbnail: '',
    content: {
      "id": "hd-eyebrow",
      "type": "heading",
      "options": {
        "text": "New this week",
        "tag": "h2"
      },
      "cssSelectors": {
        "*": { "classes": "text-xs font-semibold uppercase tracking-widest text-orange-600" }
      }
    },
  },

  {
    title: 'Underlined Section',
    thumbnail: '',
    content: {
      "id": "hd-underline",
      "type": "heading",
      "options": {
        "text": "Featured products",
        "tag": "h2"
      },
      "cssSelectors": {
        "*": { "classes": "inline-block pb-3 text-xl font-bold text-neutral-900 border-b-2 border-orange-500" }
      }
    },
  },

  {
    title: 'Centered Accent Bar',
    thumbnail: '',
    content: {
      "id": "hd-centered",
      "type": "heading",
      "options": {
        "text": "Why shop with us",
        "tag": "h2"
      },
      "cssSelectors": {
        "*": { "classes": "relative pb-4 text-center text-2xl font-bold tracking-tight text-neutral-900 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-orange-500" }
      }
    },
  },

  {
    title: 'Dark Section Title',
    thumbnail: '',
    content: {
      "id": "hd-dark",
      "type": "heading",
      "options": {
        "text": "Best sellers",
        "tag": "h2"
      },
      "cssSelectors": {
        "*": { "classes": "text-2xl font-bold tracking-tight text-white" }
      }
    },
  },

];

export default layouts;
