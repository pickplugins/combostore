/**
 * Element layouts for the `postContent` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `postContent` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "postContent"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * postContent is an <article> holding the post's HTML, with one key, `*`. The
 * HTML comes from the editor, so its elements carry no classes of their own:
 * everything is styled from `*` with arbitrary descendant variants
 * ([&_p]:mb-4, [&_h2]:text-xl ...). Tailwind's base styles strip list bullets,
 * heading sizes and link colours, so each preset restores the ones it wants.
 */

var content = (id, classes) => ({
  "id": id,
  "type": "postContent",
  "options": {},
  "cssSelectors": { "*": { "classes": classes } }
});

var layouts = [

  {
    title: 'Readable Article', thumbnail: '', content: content('pc-article',
      'max-w-3xl text-base leading-relaxed text-gray-800 [&_p]:mb-4 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_ul]:mb-4 [&_ul]:ml-5 [&_ul]:list-disc [&_ol]:mb-4 [&_ol]:ml-5 [&_ol]:list-decimal [&_li]:mb-1 [&_a]:text-[#1b0e9f] [&_a]:underline [&_img]:my-6 [&_img]:rounded-xl [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic')
  },

  {
    title: 'Product Description', thumbnail: '', content: content('pc-product',
      'text-sm leading-6 text-gray-700 [&_p]:mb-3 [&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-gray-900 [&_ul]:mb-3 [&_ul]:ml-5 [&_ul]:list-disc [&_ol]:mb-3 [&_ol]:ml-5 [&_ol]:list-decimal [&_a]:text-[#1b0e9f] [&_a]:underline [&_img]:my-4 [&_img]:rounded-lg [&_table]:w-full [&_td]:border [&_td]:border-gray-200 [&_td]:p-2 [&_th]:border [&_th]:border-gray-200 [&_th]:bg-gray-50 [&_th]:p-2 [&_th]:text-left')
  },

  {
    title: 'Bordered Section', thumbnail: '', content: content('pc-bordered',
      'mt-2 border-t border-gray-200 pt-5 text-base leading-relaxed text-gray-800 [&_p]:mb-4 [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_ul]:mb-4 [&_ul]:ml-5 [&_ul]:list-disc [&_a]:underline [&_img]:my-5 [&_img]:rounded-lg')
  },

  {
    title: 'Large Editorial', thumbnail: '', content: content('pc-editorial',
      'mx-auto max-w-2xl text-lg leading-8 text-gray-800 [&_p]:mb-6 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-gray-900 [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:list-disc [&_a]:text-gray-900 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_img]:my-8 [&_img]:rounded-2xl [&_blockquote]:my-8 [&_blockquote]:text-2xl [&_blockquote]:font-medium [&_blockquote]:text-gray-900')
  },

  {
    title: 'Dark Background', thumbnail: '', content: content('pc-dark',
      'text-base leading-relaxed text-gray-300 [&_p]:mb-4 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_ul]:mb-4 [&_ul]:ml-5 [&_ul]:list-disc [&_a]:text-amber-300 [&_a]:underline [&_img]:my-6 [&_img]:rounded-xl')
  },

];

export default layouts;
