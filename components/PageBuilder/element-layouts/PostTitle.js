/**
 * Element layouts for the `postTitle` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `postTitle` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "postTitle"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * postTitle is the title of the post or product it sits in, linking to that
 * post's page. It has one key, `*`. With `options.tag` set, the title is
 * wrapped in that tag, the tag takes the `*` classes and the link sits inside
 * it -- so hover utilities on `*` (hover:text-*, hover:underline) still reach
 * the link, which inherits colour. Without a tag, `*` is on the link itself.
 */

var title = (id, tag, classes, linkTo = 'postUrl') => ({
  "id": id,
  "type": "postTitle",
  "options": { "tag": tag, "linkTo": linkTo },
  "cssSelectors": { "*": { "classes": classes } }
});

var layouts = [

  { title: 'Card Title', thumbnail: '', content: title('pt-card', 'h3', 'line-clamp-2 text-sm font-semibold text-gray-900 transition-colors hover:text-[#1b0e9f]') },

  { title: 'Product Page Title', thumbnail: '', content: title('pt-page', 'h1', 'text-2xl font-bold leading-tight text-gray-900 md:text-3xl', '') },

  { title: 'Blog Card Title', thumbnail: '', content: title('pt-blog', 'h3', 'text-lg font-semibold leading-snug text-gray-900 hover:underline decoration-2 underline-offset-4') },

  { title: 'Compact Muted', thumbnail: '', content: title('pt-compact', 'h4', 'line-clamp-1 text-xs font-medium text-gray-600 hover:text-gray-900') },

  { title: 'Dark Card Title', thumbnail: '', content: title('pt-dark', 'h3', 'line-clamp-2 text-sm font-semibold text-white hover:text-amber-300') },

];

export default layouts;
