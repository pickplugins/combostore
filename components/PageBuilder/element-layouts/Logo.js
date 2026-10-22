/**
 * Element layouts for the `logo` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `logo` block and its Replace
 * action splices the preset in place of that block, so every root here MUST be
 * `"type": "logo"`. (PageBuilder.jsx regenerates all ids on paste/replace, so
 * the readable ids below are safe.)
 *
 * logo is three elements in one: `options.logoType` picks between a text
 * wordmark, an image mark, or both, and each branch emits different markup
 * (Logo.jsx:36, :49, :77). All three declared options are read and all four
 * selector keys are applied -- but not in every branch, which is the thing to
 * get right here.
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
 * Renderer notes that shaped these presets:
 *
 * 1. `logoType` must be one of the three exact strings. The `?? 'text'` default
 *    at :29 only covers undefined, so the panel's own "Choose" option -- which
 *    writes `''` -- matches no branch and renders an empty logo. Every preset
 *    sets it explicitly.
 *
 * 2. An image preset must ship a non-empty `src`. Unlike Image.jsx:34, Logo.jsx
 *    has no `{src && ...}` guard, so `image` or `both` with a blank src hands
 *    next/image an empty src instead of rendering nothing.
 *
 * 3. Size the mark with classes on `img`. `width={500} height={500}` is
 *    hardcoded at :58 and :86, so `h-* w-auto object-contain` on the `img` key
 *    is the only control -- and `object-contain` matters, since a logo file's
 *    real ratio rarely matches the square those attributes imply.
 *
 * 4. The href is not yours to set. `options.link` is read into a variable at
 *    :27 and then never used: the text branch hardcodes `href="/"` and the
 *    image and both branches hardcode `href="#"`. The panel's "Image Link"
 *    field writes a value nothing consumes, so presets leave it alone rather
 *    than imply it works.
 *
 * 5. There is no alt text -- `alt={``}` at :58 and :86 -- though the panel
 *    writes `options.altText`. The image presets set it anyway, for the day the
 *    renderer reads it.
 *
 * `src` values use placehold.co, which is allowlisted in next.config.mjs
 * (`images.remotePatterns`).
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
