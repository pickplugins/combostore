/**
 * Element layouts for the `image` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `image` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "image"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * image is a leaf: a wrapper <div>, an optional <Link>, and a next/image. The
 * definition declares `src`, `width`, `height`; the renderer reads `src` and
 * `link`; the panel edits `src`, `altText` and `link`. Those three lists do not
 * agree, which is most of what a preset here has to work around.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Size with classes on the `img` key -- `width` and `height` do nothing.
 *    Image.jsx:45,65 hardcodes `width={500} height={500}` on next/image and
 *    never looks at `options.width`/`options.height`, so the two declared size
 *    options are dead. Every preset below sizes through the `img` class string.
 *
 * 2. Prefer an explicit `aspect-*` (or a fixed `h-*`) over `h-auto`. The
 *    hardcoded 500x500 attributes give the <img> a 1:1 default aspect ratio
 *    while it loads, so `w-full h-auto` reserves a square box and then reflows
 *    to the real ratio once the file arrives -- a visible jump on every image
 *    that is not actually square. Pinning the ratio in CSS reserves the right
 *    box from the first paint, and `object-cover` keeps the crop clean when the
 *    uploaded file does not match it.
 *
 * 3. `link` is real but undeclared. It is absent from the definition's options,
 *    so a block dragged from the palette has no `link` key, but both the
 *    renderer (:27,:36) and the panel (ImageOptions.jsx:105) use it. Setting it
 *    in a preset switches the markup to the <Link> branch, which is the only
 *    branch where the `link` selector key applies -- so that key is worth
 *    styling only on a preset that ships a link, and `block` belongs on it, as
 *    an inline <a> would otherwise add descender space under the image.
 *
 * 4. There is no alt text. `alt={``}` is hardcoded at :45 and :65, so whatever
 *    the panel's "Image Alt Text" field writes into `options.altText` is never
 *    rendered. Presets set it anyway: it is where an author will type, and it
 *    costs nothing when the renderer starts reading it.
 *
 * 5. Keep all three selector keys present. The renderer interpolates
 *    `cssSelectors['link']?.classes` straight into className, so a missing key
 *    puts the literal string "undefined" in the class list. Harmless today,
 *    but it collides the moment a utility named `undefined` exists.
 *
 * `src` values use placehold.co, which is allowlisted in next.config.mjs
 * (`images.remotePatterns`) alongside localhost and server.kidobazar.com -- a
 * host outside that list throws at render even though the component passes
 * `unoptimized`.
 */

var layouts = [

  {
    title: 'Full Width Banner',
    thumbnail: '',
    content: {
      "id": "img-banner",
      "type": "image",
      "options": {
        "src": "https://placehold.co/1600x540?text=Banner",
        "altText": "Seasonal campaign banner",
        "width": "",
        "height": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "link": { "classes": "" },
        "img": { "classes": "w-full aspect-[3/1] object-cover rounded-lg bg-neutral-100" }
      }
    },
  },

  {
    title: 'Rounded Card Image',
    thumbnail: '',
    content: {
      "id": "img-card",
      "type": "image",
      "options": {
        "src": "https://placehold.co/800x600?text=Image",
        "altText": "Describe what is in the picture",
        "width": "",
        "height": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "link": { "classes": "" },
        "img": { "classes": "w-full aspect-[4/3] object-cover rounded-xl bg-neutral-100" }
      }
    },
  },

  {
    title: 'Square Product Thumb',
    thumbnail: '',
    content: {
      "id": "img-square",
      "type": "image",
      "options": {
        "src": "https://placehold.co/600x600?text=Product",
        "altText": "Product photo",
        "width": "",
        "height": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "link": { "classes": "" },
        "img": { "classes": "w-full aspect-square object-contain rounded-md border border-neutral-200 bg-white p-2" }
      }
    },
  },

  {
    title: 'Circle Avatar',
    thumbnail: '',
    content: {
      "id": "img-avatar",
      "type": "image",
      "options": {
        "src": "https://placehold.co/160x160?text=Photo",
        "altText": "Customer photo",
        "width": "",
        "height": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "" },
        "img": { "classes": "w-16 h-16 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm bg-neutral-100" }
      }
    },
  },

  {
    title: 'Linked Promo Tile',
    thumbnail: '',
    content: {
      "id": "img-promo",
      "type": "image",
      "options": {
        "src": "https://placehold.co/960x540?text=Offer",
        "altText": "Offer of the week",
        "link": "/shop",
        "width": "",
        "height": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-full overflow-hidden rounded-xl" },
        "link": { "classes": "block" },
        "img": { "classes": "w-full aspect-video object-cover transition-transform duration-300 hover:scale-105" }
      }
    },
  },

  {
    title: 'Inline Brand Mark',
    thumbnail: '',
    content: {
      "id": "img-mark",
      "type": "image",
      "options": {
        "src": "https://placehold.co/240x64?text=Brand",
        "altText": "Brand name",
        "width": "",
        "height": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "" },
        "img": { "classes": "h-8 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-opacity" }
      }
    },
  },

];

export default layouts;
