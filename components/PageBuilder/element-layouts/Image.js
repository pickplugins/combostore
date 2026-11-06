/**
 * Element layouts for the `image` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `image` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "image"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * image is a leaf: a wrapper <div> (`*`), an optional link (`link`) and a
 * next/image (`img`). ImageView (the shop) and the builder's Image.jsx render
 * the same ImageMarkup.
 *
 * Notes that shaped these presets:
 *
 * 1. Size with classes on the `img` key. The <img> gets width/height
 *    attributes of 500x500 (or options.width / options.height when set), which
 *    only matter as its ratio while it loads.
 *
 * 2. Prefer an explicit `aspect-*` (or a fixed `h-*`) over `h-auto`. The
 *    square default attributes reserve a 1:1 box while the file loads, so
 *    `w-full h-auto` reflows to the real ratio once it arrives -- a visible jump
 *    on every image that is not square. Pinning the ratio in CSS reserves the
 *    right box from the first paint, and `object-cover` keeps the crop clean.
 *
 * 3. `link` switches the markup to the linked branch, the only one where the
 *    `link` selector key applies -- so style that key only on a preset that
 *    ships a link, and give it `block`, as an inline <a> adds descender space
 *    under the image. `newTab` opens the link in a new tab.
 *
 * 4. `altText` is the image's alt text (it was ignored until now). Presets
 *    set it as a reminder; the author should describe their own image.
 *
 * `src` values use placehold.co. The image is `unoptimized`, so next/image
 * never checks the host against next.config's images.remotePatterns: any
 * image URL works.
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
