/**
 * Element layouts for the `video` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `video` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "video"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * The video is the block's own link (`options.url`), which a preset cannot
 * know, so every preset carries an empty one: after Add or Replace, paste the
 * link into the new block (until then the shop shows nothing). `*` wraps the player and `frame` is
 * the iframe or <video>: the shape comes from an `aspect-*` class on `frame`
 * (an iframe has no size of its own), rounding needs `overflow-hidden` on `*`.
 */

var video = (id, options, classes) => ({
  "id": id,
  "type": "video",
  "options": { "url": "", "title": "", "autoplay": false, "muted": false, "loop": false, "controls": true, ...options },
  "cssSelectors": {
    "*": { "classes": classes['*'] ?? '' },
    "frame": { "classes": classes.frame ?? 'aspect-video w-full' },
  }
});

var layouts = [

  { title: 'Widescreen 16:9', thumbnail: '', content: video('vd-wide', {}, {}) },

  { title: 'Rounded Card', thumbnail: '', content: video('vd-card', {}, { '*': 'overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5', frame: 'aspect-video w-full' }) },

  { title: 'Vertical (Shorts)', thumbnail: '', content: video('vd-shorts', {}, { '*': 'mx-auto w-full max-w-sm overflow-hidden rounded-2xl', frame: 'aspect-[9/16] w-full' }) },

  { title: 'Square', thumbnail: '', content: video('vd-square', {}, { '*': 'overflow-hidden rounded-xl', frame: 'aspect-square w-full' }) },

  { title: 'Centered, Max Width', thumbnail: '', content: video('vd-centered', {}, { '*': 'mx-auto w-full max-w-3xl overflow-hidden rounded-xl', frame: 'aspect-video w-full' }) },

  { title: 'Background Loop (Muted)', thumbnail: '', content: video('vd-loop', { autoplay: true, muted: true, loop: true, controls: false }, { '*': 'overflow-hidden rounded-xl', frame: 'aspect-video w-full pointer-events-none' }) },

];

export default layouts;
