/**
 * Element layouts for the `button` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `button` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "button"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * The file this replaced was a verbatim copy of AddToCart.js -- six
 * `"type": "addToCart"` presets with quantity-stepper selectors, which Replace
 * would have spliced in as the wrong element. `Cart.js` had the same problem.
 *
 * button is the simplest element in the set: an optional icon and a label,
 * inside either a Next `<Link>` or a plain `<div>`. Three selector keys, and
 * all three are live.
 *
 * Notes that shaped these presets:
 *
 * 1. ButtonView (the shop) and the builder's Button.jsx render the same
 *    ButtonMarkup, so a preset looks the same in both. A key a preset leaves
 *    out falls back to its default in ElementsDefinition.js.
 *
 * 2. The icon always renders before the label, so an icon that should trail
 *    the text needs `flex-row-reverse` on `*`. Arrow Link and Hero CTA use
 *    that; everything else keeps the icon leading.
 *
 * 3. Set `iconSize` on a preset with an icon; unset, it falls back to 24,
 *    which is large next to `text-sm`. `icon` must be an exact
 *    @tabler/icons-react export name; an unknown one drops the icon div
 *    rather than leaving an empty box. Every name below was checked against
 *    the installed package.
 *
 * 4. There is no option to hide the label. Icon Only Square gives `label`
 *    the `sr-only` class, which keeps the text for screen readers while
 *    taking it out of the layout.
 *
 * 5. `linkTo: "custom"` with a `url` makes the root a `<Link>`; without a
 *    url it stays a `<div>`. `scheme` (tel, mailto...; saved with or
 *    without its colon) is put in front of the url, and `target: "_blank"`
 *    opens it in a new tab. These presets use `url: "#"` with no scheme so
 *    they drop in as working placeholders.
 *
 * 6. Styling does not depend on the link: the `<Link>` and `<div>` roots
 *    carry the same three selectors.
 *
 * 7. The root is block-level unless told otherwise, so every preset sets
 *    `inline-flex` plus `w-fit` to make the button shrink-wrap its content.
 *    Drop `w-fit` for a full-width button inside a narrow column; Hero CTA
 *    keeps it so it can sit beside a secondary action.
 */

var layouts = [

  {
    title: 'Solid Primary',
    thumbnail: '',
    content: {
      "id": "btn-solid-primary",
      "type": "button",
      "options": { "text": "Shop now", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg bg-brand text-white cursor-pointer hover:bg-brand-600 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold" }
      }
    },
  },

  {
    title: 'Solid Dark',
    thumbnail: '',
    content: {
      "id": "btn-solid-dark",
      "type": "button",
      "options": { "text": "Add to bag", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconShoppingBag", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white cursor-pointer hover:bg-neutral-700 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold" }
      }
    },
  },

  {
    title: 'Outline Ghost',
    thumbnail: '',
    content: {
      "id": "btn-outline",
      "type": "button",
      "options": { "text": "View details", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 text-neutral-800 cursor-pointer hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-medium" }
      }
    },
  },

  {
    title: 'Soft Tint',
    thumbnail: '',
    content: {
      "id": "btn-soft-tint",
      "type": "button",
      "options": { "text": "Learn more", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconSparkles", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-4 py-2 rounded-lg bg-brand/10 text-brand-700 cursor-pointer hover:bg-brand/20 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold" }
      }
    },
  },

  {
    title: 'Pill Gradient',
    thumbnail: '',
    content: {
      "id": "btn-pill-gradient",
      "type": "button",
      "options": { "text": "Get started", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconBolt", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-violet-500/25 cursor-pointer hover:from-indigo-600 hover:to-violet-600 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold tracking-tight" }
      }
    },
  },

  {
    title: 'Arrow Link',
    thumbnail: '',
    content: {
      "id": "btn-arrow-link",
      "type": "button",
      "options": { "text": "Browse the collection", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconArrowNarrowRight", "iconSize": 18 },
      "cssSelectors": {
        "*": { "classes": "group inline-flex w-fit flex-row-reverse items-center gap-1.5 text-neutral-900 cursor-pointer hover:text-brand transition-colors" },
        "icon": { "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5" },
        "label": { "classes": "text-sm font-semibold underline-offset-4 group-hover:underline" }
      }
    },
  },

  {
    title: 'Icon Only Square',
    thumbnail: '',
    content: {
      "id": "btn-icon-only",
      "type": "button",
      "options": { "text": "Search", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconSearch", "iconSize": 18 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center justify-center size-10 rounded-xl border border-neutral-200 bg-white text-neutral-700 cursor-pointer hover:border-neutral-400 hover:text-neutral-900 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "sr-only" }
      }
    },
  },

  {
    title: 'Hero CTA',
    thumbnail: '',
    content: {
      "id": "btn-hero-cta",
      "type": "button",
      "options": { "text": "Start shopping", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconArrowRight", "iconSize": 20 },
      "cssSelectors": {
        "*": { "classes": "group inline-flex w-fit flex-row-reverse items-center gap-3 px-8 py-4 rounded-xl bg-brand text-white shadow-xl shadow-brand/30 cursor-pointer hover:bg-brand-600 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5" },
        "label": { "classes": "text-base font-bold tracking-tight" }
      }
    },
  },

  {
    title: 'Glass Button',
    thumbnail: '',
    content: {
      "id": "btn-glass",
      "type": "button",
      "options": { "text": "Watch the film", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconPlayerPlayFilled", "iconSize": 14 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-xl bg-white/70 backdrop-blur-xl ring-1 ring-black/5 text-neutral-900 cursor-pointer hover:bg-white transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-semibold" }
      }
    },
  },

  {
    title: 'Hard Shadow',
    thumbnail: '',
    content: {
      "id": "btn-hard-shadow",
      "type": "button",
      "options": { "text": "Grab the deal", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconBolt", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-neutral-900 bg-amber-300 text-neutral-900 shadow-[4px_4px_0_0_#000] cursor-pointer hover:bg-amber-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-bold" }
      }
    },
  },

  {
    title: 'Uppercase Underline',
    thumbnail: '',
    content: {
      "id": "btn-uppercase-underline",
      "type": "button",
      "options": { "text": "Shop all", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconArrowNarrowRight", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "group inline-flex w-fit flex-row-reverse items-center gap-2 pb-1 border-b-2 border-neutral-900 text-neutral-900 cursor-pointer hover:border-brand hover:text-brand transition-colors" },
        "icon": { "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5" },
        "label": { "classes": "text-[11px] font-semibold uppercase tracking-[0.18em]" }
      }
    },
  },

  {
    title: 'Danger Solid',
    thumbnail: '',
    content: {
      "id": "btn-danger",
      "type": "button",
      "options": { "text": "Remove item", "linkTo": "custom", "scheme": "", "url": "#", "target": "", "icon": "IconX", "iconSize": 16 },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-700 border border-red-200 cursor-pointer hover:bg-red-100 hover:border-red-300 transition-colors" },
        "icon": { "classes": "flex items-center shrink-0" },
        "label": { "classes": "text-sm font-medium" }
      }
    },
  },

];

export default layouts;
