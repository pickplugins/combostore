/**
 * Element layouts for the `imageLightbox` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `imageLightbox` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "imageLightbox"`. Replace keeps the block's own
 * images (and dialog label); Add brings the placeholder images below.
 * (PageBuilder.jsx regenerates all ids on paste/replace, so the readable ids
 * below are safe.)
 *
 * The grid is `*` (grid-cols-* for a grid, columns-* for masonry), a tile is
 * `figure` > `item` > `image`. Keys a preset leaves out fall back to the
 * definition's defaults (the lightbox's own look among them).
 */

var placeholders = (sizes) => sizes.map((size, at) => ({
  "id": `lb-${at + 1}`,
  "src": `https://placehold.co/${size}?text=${at + 1}`,
  "alt": "",
  "caption": ""
}));

var square = placeholders(['1200x900', '900x1200', '1200x1200', '1200x800', '1000x1200', '1200x900']);

var lightbox = (id, options, classes) => ({
  "id": id,
  "type": "imageLightbox",
  "options": {
    "images": square,
    "visibleCount": 0,
    "showGridCaptions": false,
    "showFullscreen": true,
    "openFullscreen": false,
    "showThumbnails": true,
    "showCaptions": true,
    "showCounter": true,
    "loop": true,
    "closeOnBackdrop": true,
    "label": "",
    ...options
  },
  "cssSelectors": Object.fromEntries(Object.entries(classes).map(([key, value]) => [key, { "classes": value }]))
});

var layouts = [

  {
    title: 'Square Grid', thumbnail: '', content: lightbox('lb-grid', {}, {
      '*': 'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4',
      'image': 'aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105',
    })
  },

  {
    title: 'Masonry', thumbnail: '', content: lightbox('lb-masonry', {}, {
      '*': 'columns-2 gap-3 sm:columns-3',
      'figure': 'm-0 mb-3 break-inside-avoid',
      'image': 'h-auto w-full transition-transform duration-300 group-hover:scale-105',
    })
  },

  {
    title: 'Featured + "+N" Tiles', thumbnail: '', content: lightbox('lb-featured', { visibleCount: 5 }, {
      '*': 'grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2',
      'figure': 'm-0 first:col-span-2 first:row-span-2',
      'image': 'aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
    })
  },

  {
    title: 'Single Cover (opens all)', thumbnail: '', content: lightbox('lb-cover', { visibleCount: 1 }, {
      '*': 'block',
      'item': 'group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100 p-0',
      'image': 'aspect-[16/9] w-full object-cover',
      'more': 'absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white',
    })
  },

  {
    title: 'Captioned Cards', thumbnail: '', content: lightbox('lb-captioned', { showGridCaptions: true }, {
      '*': 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3',
      'figure': 'm-0 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5',
      'item': 'group relative block w-full cursor-zoom-in overflow-hidden bg-gray-100 p-0',
      'image': 'aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105',
      'caption': 'px-3 py-2.5 text-sm text-gray-700',
    })
  },

  {
    title: 'Light Lightbox', thumbnail: '', content: lightbox('lb-light', {}, {
      '*': 'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4',
      'overlay': 'fixed inset-0 z-[1000] flex flex-col bg-white/95 text-gray-900 backdrop-blur',
      'counter': 'tabular-nums text-gray-500',
      'button': 'inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-900/5 text-gray-900 transition-colors hover:bg-gray-900/10',
      'arrow': 'absolute top-1/2 inline-flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-colors hover:bg-gray-50',
      'lightbox-caption': 'shrink-0 px-4 pt-3 text-center text-sm text-gray-600',
      'thumbnail-active': 'opacity-100 ring-2 ring-gray-900',
    })
  },

];

export default layouts;
