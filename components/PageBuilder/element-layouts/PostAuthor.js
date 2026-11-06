/**
 * Element layouts for the `postAuthor` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `postAuthor` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "postAuthor"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * postAuthor is the author of the post it sits in. `*` is the root (a link to
 * the post when linkTo is 'postUrl', else a div); inside it `avatar` (only
 * with showAvatar and an avatar URL), `label` (only with options.label) and
 * `name`. With an avatar or label, `*` needs a flex to line them up -- the
 * presets below use `inline-flex items-center`. The avatar is an <img> with
 * 24x24 attributes, so size it with classes on `avatar`.
 */

var author = (id, options, classes) => ({
  "id": id,
  "type": "postAuthor",
  "options": { "linkTo": '', "label": '', "showAvatar": false, ...options },
  "cssSelectors": {
    "*": { "classes": classes['*'] ?? '' },
    "avatar": { "classes": classes.avatar ?? 'h-6 w-6 rounded-full object-cover' },
    "label": { "classes": classes.label ?? '' },
    "name": { "classes": classes.name ?? '' },
  }
});

var layouts = [

  { title: 'Plain Name', thumbnail: '', content: author('pa-plain', {}, { '*': 'text-sm text-gray-600', name: 'font-medium text-gray-900' }) },

  { title: 'By Line', thumbnail: '', content: author('pa-by', { label: 'By' }, { '*': 'inline-flex items-center gap-1 text-sm text-gray-500', name: 'font-semibold text-gray-900' }) },

  { title: 'Avatar + Name', thumbnail: '', content: author('pa-avatar', { showAvatar: true }, { '*': 'inline-flex items-center gap-2 text-sm', name: 'font-medium text-gray-900' }) },

  { title: 'Large Avatar Byline', thumbnail: '', content: author('pa-large', { showAvatar: true, label: 'Written by' }, { '*': 'inline-flex items-center gap-3 text-sm text-gray-500', avatar: 'h-10 w-10 rounded-full object-cover ring-2 ring-white shadow', label: 'block text-xs uppercase tracking-wider', name: 'font-semibold text-gray-900' }) },

  { title: 'Compact Meta', thumbnail: '', content: author('pa-compact', { showAvatar: true }, { '*': 'inline-flex items-center gap-1.5 text-xs text-gray-500', avatar: 'h-5 w-5 rounded-full object-cover' }) },

  { title: 'Light on Dark', thumbnail: '', content: author('pa-dark', { showAvatar: true, label: 'By' }, { '*': 'inline-flex items-center gap-2 text-sm text-gray-300', name: 'font-semibold text-white' }) },

];

export default layouts;
