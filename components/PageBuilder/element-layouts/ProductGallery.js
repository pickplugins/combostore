/**
 * Element layouts for the `productGallery` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productGallery` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "productGallery"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * productGallery is a leaf: a main Splide of the product's gallery images plus
 * an optional thumbnail strip. A preset is `options.sliderOptions`,
 * `options.thumbnails` and the nine selector keys.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. This is the one slider element where the arrow and pagination keys really
 *    work. ProductGallery.jsx:62-68 interpolates `arrows`, `prev`, `next`,
 *    `pagination` and `dot` into Splide's own `classes` option, so those classes
 *    reach the DOM -- unlike PostSlider.jsx, which hands Splide literal class
 *    names and leaves its matching keys inert. Two consequences: all five keys
 *    must be present in every preset, because a missing one interpolates the
 *    literal string "undefined" into Splide's class list; and because
 *    @splidejs/react-splide/css is imported by the component, its own
 *    `.splide__arrow` / `.splide__pagination__page` rules compete at equal
 *    specificity, where the winner depends on stylesheet order rather than class
 *    order. So anything that overrides a property Splide already sets --
 *    background, size, opacity, border-radius, svg fill, the active dot's
 *    transform -- carries the Tailwind v4 important suffix (`bg-white!`), and
 *    the active dot is reached with `[&.is-active]:...`. Every utility of that
 *    shape in this file was compiled against the project's own Tailwind before
 *    being used.
 *
 * 2. `sliderOptions` defaults to `{}` (:40), so unlike PostSlider.jsx:39 a
 *    missing one does not crash -- but Splide would then fall back to its own
 *    defaults, so each preset sets it explicitly. It goes straight to Splide,
 *    so `type: "fade"` needs `perPage: 1`.
 *
 * 3. Do not size the image through the `image` key. The renderer appends
 *    `w-full h-auto` after those classes (:116, :120), and a competing width or
 *    height utility would be settled by stylesheet order. For uniform slides,
 *    set the shape on the img from the `item` key instead --
 *    `[&_img]:aspect-square [&_img]:object-cover` -- which adds aspect-ratio and
 *    object-fit without touching the properties the renderer hardcodes.
 *
 * 4. The thumbnail strip is on/off only. `options.thumbnails` (:129) is a real,
 *    declared option, but the strip's Splide config is hardcoded (:134-151:
 *    fixedWidth 90, fixedHeight 70, gap 10, cover, isNavigation, a 640
 *    breakpoint) and so are its classNames (`mt-4`, `w-full h-auto`). No
 *    selector key reaches it, so its size and spacing cannot be changed from a
 *    preset.
 *
 * 5. Splide positions the pagination absolutely inside the slider. Dots below
 *    the image need `static!` on the `pagination` key, which is what Dots Below
 *    does; the other dot presets leave them overlaid.
 *
 * 6. Gallery images fall back to two placeholders when there is no product
 *    context (:45) and both render /thumb.png, so the canvas shows two
 *    placeholder slides and the thumbnail strip mirrors them. The mock entries
 *    are named "Category Name", copied from the categories element, but names
 *    are never rendered here.
 *
 * 7. Undeclared extras to be aware of: the renderer reads `options.label` and
 *    renders it through a `label` selector key (:96-98), and neither the option
 *    nor the key is declared in the definition -- using the option without
 *    adding the key would put "undefined" in that div's class list. These
 *    presets leave `label` unset, so the div never renders. `tag`, `readmore`
 *    and `maxWord` are also read (:36-39) and unused.
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
