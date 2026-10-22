/**
 * Element layouts for the `postThumbnail` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `postThumbnail` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "postThumbnail"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * postThumbnail is a context element, not a configured one: the image comes from
 * `usePost()` -- `post.post_thumbnail.src` (PostThumbnail.jsx:70,:83) -- so a
 * preset cannot choose a picture. What it can decide is the frame: the crop, the
 * radius, whether the thumbnail is a link, and how it behaves in a card versus a
 * list row. Everything below is therefore class work on three selector keys.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. `linkTo` is the only option, and it is undeclared. The definition has
 *    `options: {}`, so a block from the palette has no options at all, but :27
 *    reads `options.linkTo` and :65 wraps the image in a <Link> when it is
 *    exactly `'postUrl'`. That is also the only case where the `link` selector
 *    key applies, so the two go together -- `linkTo: 'postUrl'` plus `block` on
 *    `link`, or neither. (The href is hardcoded to `#`; the link is structural,
 *    and the real post URL is not wired up yet.)
 *
 * 2. Size with classes on `image`; there is nothing else. `width={400}
 *    height={400}` is hardcoded on all four next/image calls, so those are
 *    attributes, not a layout. As with the `image` element, an explicit
 *    `aspect-*` beats `h-auto`: the 1:1 attributes reserve a square box while
 *    the file loads and the row reflows once the real ratio arrives.
 *
 * 3. Something always renders, which is what makes these presets previewable.
 *    Both branches fall back to `/thumb.png` (:74,:87, and the file is in
 *    public/), so an empty post still draws a box of the right shape in the
 *    canvas rather than collapsing to nothing.
 *
 * 4. `object-cover` with a background is the safe pairing. Post thumbnails
 *    arrive at whatever ratio the author uploaded; `cover` fills the frame the
 *    preset pins, and the `bg-neutral-100` underneath covers the gap while the
 *    image is still in flight.
 *
 * 5. The crop lives on `image`, the clipping on `*`. A radius or
 *    `overflow-hidden` on the wrapper only shapes what the wrapper contains, so
 *    the zoom preset puts `overflow-hidden` on `*` and the transform on
 *    `image` -- the wrapper is what stops the scaled image bleeding out.
 *
 * There is no alt text: `alt={``}` is hardcoded on every branch.
 */

var layouts = [

  {
    title: 'Card Cover 4:3',
    thumbnail: '',
    content: {
      "id": "pth-card",
      "type": "postThumbnail",
      "options": {
        "linkTo": "postUrl"
      },
      "cssSelectors": {
        "*": { "classes": "w-full overflow-hidden rounded-t-xl" },
        "link": { "classes": "block" },
        "image": { "classes": "w-full aspect-[4/3] object-cover bg-neutral-100" }
      }
    },
  },

  {
    title: 'Square Thumb',
    thumbnail: '',
    content: {
      "id": "pth-square",
      "type": "postThumbnail",
      "options": {
        "linkTo": "postUrl"
      },
      "cssSelectors": {
        "*": { "classes": "w-full overflow-hidden rounded-lg" },
        "link": { "classes": "block" },
        "image": { "classes": "w-full aspect-square object-cover bg-neutral-100" }
      }
    },
  },

  {
    title: 'Wide Banner 16:9',
    thumbnail: '',
    content: {
      "id": "pth-wide",
      "type": "postThumbnail",
      "options": {
        "linkTo": "postUrl"
      },
      "cssSelectors": {
        "*": { "classes": "w-full overflow-hidden rounded-xl" },
        "link": { "classes": "block" },
        "image": { "classes": "w-full aspect-video object-cover bg-neutral-100" }
      }
    },
  },

  {
    title: 'Hover Zoom Cover',
    thumbnail: '',
    content: {
      "id": "pth-zoom",
      "type": "postThumbnail",
      "options": {
        "linkTo": "postUrl"
      },
      "cssSelectors": {
        "*": { "classes": "w-full overflow-hidden rounded-xl" },
        "link": { "classes": "block" },
        "image": { "classes": "w-full aspect-[4/3] object-cover bg-neutral-100 transition-transform duration-300 hover:scale-105" }
      }
    },
  },

  {
    title: 'Side List Thumb',
    thumbnail: '',
    content: {
      "id": "pth-list",
      "type": "postThumbnail",
      "options": {
        "linkTo": "postUrl"
      },
      "cssSelectors": {
        "*": { "classes": "w-24 shrink-0 overflow-hidden rounded-md" },
        "link": { "classes": "block" },
        "image": { "classes": "w-24 h-24 object-cover bg-neutral-100" }
      }
    },
  },

  {
    title: 'Circle Thumb (No Link)',
    thumbnail: '',
    content: {
      "id": "pth-circle",
      "type": "postThumbnail",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "" },
        "image": { "classes": "w-14 h-14 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm bg-neutral-100" }
      }
    },
  },

];

export default layouts;
