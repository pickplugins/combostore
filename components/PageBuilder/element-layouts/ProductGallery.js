/**
 * Element layouts for the `productGallery` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productGallery` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "productGallery"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * productGallery is a leaf: a main Splide of the product's images plus an
 * optional thumbnail strip. ProductGalleryView (the shop) and the builder's
 * ProductGallery.jsx render the same ProductGalleryMarkup with the same
 * images, so a preset looks the same in both. A preset is
 * `options.sliderOptions`, `options.thumbnails` and the selector keys; a key
 * it leaves out falls back to its default in ElementsDefinition.js.
 *
 * Notes that shaped these presets:
 *
 * 1. The arrow and pagination keys (`arrows`, `prev`, `next`, `pagination`,
 *    `dot`) are added next to Splide's own class names through its `classes`
 *    option. @splidejs/react-splide/css is imported by the component, so its
 *    `.splide__arrow` / `.splide__pagination__page` rules compete at equal
 *    specificity; anything overriding a property Splide already sets --
 *    background, size, opacity, border-radius, svg fill, the active dot's
 *    transform -- carries the Tailwind v4 important suffix (`bg-white!`), and
 *    the active dot is reached with `[&.is-active]:...`.
 *
 * 2. `sliderOptions` goes straight to Splide (with `isNavigation` and the
 *    classes added), so each preset sets it explicitly; `type: "fade"` needs
 *    `perPage: 1`.
 *
 * 3. Do not size the main image through the `image` key: `w-full h-auto` is
 *    always added after it. For uniform slides, shape the img from `item`
 *    instead -- `[&_img]:aspect-square [&_img]:object-cover`.
 *
 * 4. The thumbnail strip (`options.thumbnails`, shown when there is more than
 *    one image) has its own keys: `thumbnails` (default `mt-4`), `thumbnail`
 *    and `thumbnail-image` (default `w-full h-auto`). Its Splide sizes are
 *    fixed: 90x70, 65x55 below 640px.
 *
 * 5. Splide positions the pagination absolutely inside the slider. Dots below
 *    the image need `static!` on the `pagination` key, which is what Dots Below
 *    does; the other dot presets leave them overlaid.
 *
 * 6. Outside a product loop the builder shows three placeholder images, so
 *    the arrows, dots and thumbnail strip are all visible to style.
 */

var layouts = [

  {
    title: 'Classic With Thumbnails',
    thumbnail: '',
    content: {
      "id": "pg-classic",
      "type": "productGallery",
      "options": {
        "thumbnails": true,
        "sliderOptions": {
          "type": "slide",
          "perPage": 1,
          "perMove": 1,
          "rewind": true,
          "arrows": 1,
          "pagination": 0,
          "speed": 400,
          "drag": 1
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "items": { "classes": "" },
        "item": { "classes": "rounded-xl overflow-hidden bg-neutral-100 [&_img]:aspect-square [&_img]:object-cover" },
        "image": { "classes": "" },
        "arrows": { "classes": "" },
        "prev": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-neutral-700!" },
        "next": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-neutral-700!" },
        "pagination": { "classes": "" },
        "dot": { "classes": "" }
      }
    },
  },

  {
    title: 'Dots Below',
    thumbnail: '',
    content: {
      "id": "pg-dots",
      "type": "productGallery",
      "options": {
        "thumbnails": false,
        "sliderOptions": {
          "type": "slide",
          "perPage": 1,
          "perMove": 1,
          "rewind": true,
          "arrows": 0,
          "pagination": 1,
          "speed": 400,
          "drag": 1
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "items": { "classes": "" },
        "item": { "classes": "rounded-xl overflow-hidden bg-neutral-100 [&_img]:aspect-square [&_img]:object-cover" },
        "image": { "classes": "" },
        "arrows": { "classes": "" },
        "prev": { "classes": "" },
        "next": { "classes": "" },
        "pagination": { "classes": "static! mt-3 gap-1.5" },
        "dot": { "classes": "size-2! bg-neutral-300! opacity-100! rounded-full! [&.is-active]:bg-neutral-900! [&.is-active]:scale-100!" }
      }
    },
  },

  {
    title: 'Fade Hero',
    thumbnail: '',
    content: {
      "id": "pg-fade",
      "type": "productGallery",
      "options": {
        "thumbnails": true,
        "sliderOptions": {
          "type": "fade",
          "perPage": 1,
          "perMove": 1,
          "rewind": true,
          "arrows": 1,
          "pagination": 0,
          "speed": 600,
          "drag": 0
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "items": { "classes": "" },
        "item": { "classes": "rounded-2xl overflow-hidden bg-neutral-100 [&_img]:aspect-[4/5] [&_img]:object-cover" },
        "image": { "classes": "" },
        "arrows": { "classes": "" },
        "prev": { "classes": "bg-black/40! opacity-100! size-10! rounded-full! hover:bg-black/60! [&>svg]:fill-white!" },
        "next": { "classes": "bg-black/40! opacity-100! size-10! rounded-full! hover:bg-black/60! [&>svg]:fill-white!" },
        "pagination": { "classes": "" },
        "dot": { "classes": "" }
      }
    },
  },

  {
    title: 'Framed Gallery',
    thumbnail: '',
    content: {
      "id": "pg-framed",
      "type": "productGallery",
      "options": {
        "thumbnails": true,
        "sliderOptions": {
          "type": "slide",
          "perPage": 1,
          "perMove": 1,
          "rewind": true,
          "arrows": 1,
          "pagination": 0,
          "speed": 350,
          "drag": 1
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "items": { "classes": "" },
        "item": { "classes": "border border-neutral-200 rounded-lg overflow-hidden bg-white p-2 [&_img]:rounded [&_img]:aspect-square [&_img]:object-contain" },
        "image": { "classes": "" },
        "arrows": { "classes": "" },
        "prev": { "classes": "bg-neutral-900! opacity-100! size-8! rounded-md! hover:bg-neutral-700! [&>svg]:fill-white!" },
        "next": { "classes": "bg-neutral-900! opacity-100! size-8! rounded-md! hover:bg-neutral-700! [&>svg]:fill-white!" },
        "pagination": { "classes": "" },
        "dot": { "classes": "" }
      }
    },
  },

  {
    title: 'Dark Gallery',
    thumbnail: '',
    content: {
      "id": "pg-dark",
      "type": "productGallery",
      "options": {
        "thumbnails": true,
        "sliderOptions": {
          "type": "slide",
          "perPage": 1,
          "perMove": 1,
          "rewind": true,
          "arrows": 1,
          "pagination": 1,
          "speed": 400,
          "drag": 1
        }
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-950 rounded-2xl p-4" },
        "items": { "classes": "" },
        "item": { "classes": "rounded-xl overflow-hidden bg-neutral-900 [&_img]:aspect-square [&_img]:object-cover" },
        "image": { "classes": "" },
        "arrows": { "classes": "" },
        "prev": { "classes": "bg-white/10! opacity-100! size-9! rounded-full! hover:bg-white/20! [&>svg]:fill-white!" },
        "next": { "classes": "bg-white/10! opacity-100! size-9! rounded-full! hover:bg-white/20! [&>svg]:fill-white!" },
        "pagination": { "classes": "gap-1.5" },
        "dot": { "classes": "size-2! bg-white/30! opacity-100! rounded-full! [&.is-active]:bg-amber-400! [&.is-active]:scale-100!" }
      }
    },
  },

  {
    title: 'Compact Square',
    thumbnail: '',
    content: {
      "id": "pg-compact",
      "type": "productGallery",
      "options": {
        "thumbnails": false,
        "sliderOptions": {
          "type": "loop",
          "perPage": 1,
          "perMove": 1,
          "arrows": 0,
          "pagination": 1,
          "speed": 300,
          "drag": 1
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "items": { "classes": "" },
        "item": { "classes": "rounded-lg overflow-hidden bg-neutral-100 [&_img]:aspect-square [&_img]:object-cover" },
        "image": { "classes": "" },
        "arrows": { "classes": "" },
        "prev": { "classes": "" },
        "next": { "classes": "" },
        "pagination": { "classes": "gap-1" },
        "dot": { "classes": "size-1.5! bg-white/70! opacity-100! rounded-full! [&.is-active]:bg-white! [&.is-active]:scale-100!" }
      }
    },
  },

];

export default layouts;
