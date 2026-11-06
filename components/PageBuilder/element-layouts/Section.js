/**
 * Element layouts for the `section` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `section` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "section"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * section is a full-width band (rendered as <section>) with one key, `*`: its
 * background, padding and layout. The store templates almost always pair it
 * with a container inside -- the section paints edge to edge, the container
 * keeps the content at page width (max-w-6xl mx-auto px-4) -- so each preset
 * here is that pair, with the container left empty for elements to be dropped
 * in. Replace keeps nothing of the old block, so the section comes in with
 * just that empty container.
 *
 * Both blocks are built with withElementCssDefaults(), so each carries its
 * element's full key set.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

/* A section band with one empty, page-width container inside it. */
var section = (id, sectionClasses, containerClasses) => ({
  "id": id,
  "type": "section",
  "options": {},
  "cssSelectors": withElementCssDefaults('section', { "*": { "classes": sectionClasses } }),
  "children": [
    {
      "id": `${id}-inner`,
      "type": "container",
      "options": {},
      "cssSelectors": withElementCssDefaults('container', { "*": { "classes": containerClasses } }),
      "children": []
    }
  ]
});

var pageWidth = 'w-full max-w-6xl mx-auto px-4';

var layouts = [

  { title: 'Plain Band', thumbnail: '', content: section('sc-plain', 'w-full', `${pageWidth} py-10 flex flex-col gap-6`) },

  { title: 'Soft Gray Band', thumbnail: '', content: section('sc-gray', 'w-full bg-gray-50 border-y border-gray-100', `${pageWidth} py-12 flex flex-col gap-6`) },

  { title: 'Brand Tint Band', thumbnail: '', content: section('sc-tint', 'w-full bg-[#1b0e9f]/5', `${pageWidth} py-12 flex flex-col gap-6`) },

  { title: 'Dark Band', thumbnail: '', content: section('sc-dark', 'w-full bg-gray-900 text-white', `${pageWidth} py-16 flex flex-col gap-6`) },

  { title: 'Gradient Hero', thumbnail: '', content: section('sc-hero', 'w-full bg-[linear-gradient(180deg,#f5f3ff_0%,#ffffff_100%)]', `${pageWidth} py-20 flex flex-col items-center gap-6 text-center`) },

  { title: 'Compact Strip', thumbnail: '', content: section('sc-strip', 'w-full border-b border-gray-200 bg-white', `${pageWidth} py-3 flex items-center justify-between gap-4`) },

];

export default layouts;
