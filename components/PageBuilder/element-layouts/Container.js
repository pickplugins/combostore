/**
 * Element layouts for the `container` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `container` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "container"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * container is a plain wrapper with one key, `*`: its width, padding and how
 * its children are laid out. A preset is that one class string, with no
 * children -- Replace keeps nothing of the old block, so the container comes
 * in empty, ready for elements to be dropped in.
 *
 * The widths below are the ones the store templates already use most
 * (max-w-6xl centred with px-4), so a container from a preset lines up with
 * the rest of a template page.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

/* A container preset: one class string on `*`, no children yet. */
var container = (id, classes) => ({
  "id": id,
  "type": "container",
  "options": {},
  "cssSelectors": withElementCssDefaults('container', { "*": { "classes": classes } }),
  "children": []
});

var layouts = [

  { title: 'Page Width', thumbnail: '', content: container('ct-page', 'w-full max-w-6xl mx-auto px-4 py-10') },

  { title: 'Page Width, Stacked', thumbnail: '', content: container('ct-stack', 'w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6') },

  { title: 'Narrow Reading Width', thumbnail: '', content: container('ct-narrow', 'w-full max-w-3xl mx-auto px-4 py-12 flex flex-col gap-4') },

  { title: 'Full Bleed Band', thumbnail: '', content: container('ct-band', 'w-full bg-gray-50 px-4 py-16') },

  { title: 'Centered Content', thumbnail: '', content: container('ct-center', 'w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center gap-4 text-center') },

  { title: 'Soft Card', thumbnail: '', content: container('ct-card', 'w-full max-w-6xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-xs flex flex-col gap-4') },

  { title: 'Dark Band', thumbnail: '', content: container('ct-dark', 'w-full bg-gray-900 px-4 py-16 text-white') },

];

export default layouts;
