/**
 * Element layouts for the `logo` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `logo` block and its Replace
 * action splices the preset in place of that block, so every root here MUST be
 * `"type": "logo"`. (PageBuilder.jsx regenerates all ids on paste/replace, so
 * the readable ids below are safe.)
 *
 * logo is three elements in one: `options.logoType` picks between a text
 * wordmark, an image mark, or both. LogoView (the shop) and the builder's
 * Logo.jsx render the same LogoMarkup. All four selector keys are applied --
 * but not in every mode, which is the thing to get right here.
 *
 * Which selector keys do anything, per logoType:
 *
 *   text   -- `*`, `link`, `text`   (text is a <span>, inline)
 *   image  -- `*`, `link`, `img`
 *   both   -- `*`, `link`, `img`, `text`   (text is a <div>, block)
 *
 * So `text` flips between inline and block depending on the mode: the same
 * class string that reads fine as a wordmark in `text` mode becomes a full-width
 * block beside the image in `both` mode. That is why the two `both` presets
 * below carry the layout on the `link` key -- it is the <a> wrapping image and
 * text, and without a `flex` there the name drops under the mark.
 *
 * Notes that shaped these presets:
 *
 * 1. `logoType` should be one of the three exact strings; anything else (the
 *    panel's old "Choose" saved '') falls back to `image` with a src, else
 *    `text`. Every preset sets it explicitly.
 *
 * 2. An image or both preset should ship a non-empty `src`: without one the
 *    logo falls back to its text (next/image used to get an empty src).
 *
 * 3. Size the mark with classes on `img`. The <img> has 500x500 attributes,
 *    so `h-* w-auto object-contain` on the `img` key is the control -- and
 *    `object-contain` matters, since a logo file's real ratio rarely matches
 *    the square those attributes imply.
 *
 * 4. `options.link` is the href ('/' when empty); it used to be ignored.
 *    Presets leave it at '/'.
 *
 * 5. `options.altText` is the image's alt text, falling back to `logoText`, so
 *    an image-only logo's home link has a name for screen readers.
 *
 * `src` values use placehold.co. The image is `unoptimized`, so next/image
 * never checks the host against next.config's images.remotePatterns.
 */

var layouts = [

  {
    title: 'Text Wordmark',
    thumbnail: '',
    content: {
      "id": "lg-wordmark",
      "type": "logo",
      "options": {
        "logoType": "text",
        "logoText": "Kidobazar",
        "src": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "inline-flex items-center" },
        "img": { "classes": "" },
        "text": { "classes": "text-xl font-extrabold tracking-tight text-neutral-900" }
      }
    },
  },

  {
    title: 'Light Wordmark (Dark Bar)',
    thumbnail: '',
    content: {
      "id": "lg-wordmark-light",
      "type": "logo",
      "options": {
        "logoType": "text",
        "logoText": "Kidobazar",
        "src": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "inline-flex items-center" },
        "img": { "classes": "" },
        "text": { "classes": "text-xl font-extrabold tracking-tight text-white hover:text-orange-300 transition-colors" }
      }
    },
  },

  {
    title: 'Boxed Initial Mark',
    thumbnail: '',
    content: {
      "id": "lg-initial",
      "type": "logo",
      "options": {
        "logoType": "text",
        "logoText": "K",
        "src": ""
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "inline-flex items-center" },
        "img": { "classes": "" },
        "text": { "classes": "flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500 text-lg font-bold text-white" }
      }
    },
  },

  {
    title: 'Image Logo',
    thumbnail: '',
    content: {
      "id": "lg-image",
      "type": "logo",
      "options": {
        "logoType": "image",
        "logoText": "",
        "src": "https://placehold.co/240x64?text=Logo",
        "altText": "Kidobazar"
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "inline-flex items-center" },
        "img": { "classes": "h-10 w-auto max-w-[180px] object-contain" },
        "text": { "classes": "" }
      }
    },
  },

  {
    title: 'Mark + Name Lockup',
    thumbnail: '',
    content: {
      "id": "lg-lockup",
      "type": "logo",
      "options": {
        "logoType": "both",
        "logoText": "Kidobazar",
        "src": "https://placehold.co/64x64?text=K",
        "altText": "Kidobazar"
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "inline-flex items-center gap-2.5" },
        "img": { "classes": "h-9 w-9 shrink-0 object-contain rounded-md" },
        "text": { "classes": "text-lg font-bold tracking-tight text-neutral-900 whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Stacked Footer Lockup',
    thumbnail: '',
    content: {
      "id": "lg-stacked",
      "type": "logo",
      "options": {
        "logoType": "both",
        "logoText": "Everything for your little one",
        "src": "https://placehold.co/240x64?text=Logo",
        "altText": "Kidobazar"
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "link": { "classes": "inline-flex flex-col items-start gap-2" },
        "img": { "classes": "h-9 w-auto max-w-[160px] object-contain" },
        "text": { "classes": "text-xs text-neutral-400" }
      }
    },
  },

];

export default layouts;
