/**
 * Element layouts for the `postDate` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `postDate` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "postDate"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * postDate is the publish date of the post or product it sits in, with one
 * key, `*` -- a link to the post (linkTo 'postUrl') or a div, holding a
 * <time>. `dateFormat` takes moment-style tokens (YYYY MMM DD ...) or PHP ones
 * (Y M d ...); see formatPostDate in PostDateView.jsx.
 */

var date = (id, dateFormat, classes, linkTo = '') => ({
  "id": id,
  "type": "postDate",
  "options": { "dateFormat": dateFormat, "linkTo": linkTo },
  "cssSelectors": { "*": { "classes": classes } }
});

var layouts = [

  { title: 'Muted Card Date', thumbnail: '', content: date('pd-muted', 'MMM DD, YYYY', 'text-xs text-gray-500') },

  { title: 'Uppercase Meta', thumbnail: '', content: date('pd-upper', 'DD MMM YYYY', 'text-[11px] font-semibold uppercase tracking-wider text-gray-500') },

  { title: 'Long Article Date', thumbnail: '', content: date('pd-long', 'dddd, MMMM D, YYYY', 'text-sm text-gray-600') },

  { title: 'Pill Badge', thumbnail: '', content: date('pd-pill', 'MMM D, YYYY', 'inline-flex w-fit items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700') },

  { title: 'Linked Date', thumbnail: '', content: date('pd-linked', 'MMMM DD, YYYY', 'w-fit text-sm text-gray-500 transition-colors hover:text-gray-900 hover:underline', 'postUrl') },

  { title: 'Light on Dark', thumbnail: '', content: date('pd-dark', 'MMM DD, YYYY', 'text-xs text-gray-300') },

];

export default layouts;
