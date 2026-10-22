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
 * Renderer notes that shaped these presets:
 *
 * 1. The icon always renders before the label. Button.jsx:67-75 emits the icon
 *    div then the label div, with no option to reorder, so an icon that should
 *    trail the text needs `flex-row-reverse` on `*`. Arrow Link and Hero CTA
 *    use that; everything else keeps the icon leading.
 *
 * 2. Always set `iconSize` explicitly. :69 passes it straight through as
 *    `<IconX size={iconSize} />` with no fallback of any kind, so an unset
 *    value reaches the icon as `size={undefined}` and tabler falls back to 24 --
 *    too big next to `text-sm`. Note ButtonOptions.jsx:142 writes this from a
 *    number input, so it arrives as a *string* ("16") when edited by hand;
 *    tabler accepts that, which is why it still works.
 *
 * 3. `icon` must be an exact @tabler/icons-react export name (:38 looks it up
 *    as `TablerIcons[icon]`). An unknown name makes `IconX` undefined, and
 *    because :67 guards with `{IconX && ...}` the whole icon div disappears
 *    rather than leaving an empty box. Every name used below was checked
 *    against the installed package.
 *
 * 4. There is no option to hide the label -- `text` always renders into the
 *    label div. Icon Only Square gets there by giving `label` the `sr-only`
 *    class, which keeps the text for screen readers while taking it out of the
 *    layout. Setting `hidden` instead would drop it for everyone, so `sr-only`
 *    is the better of the two.
 *
 * 5. `linkTo: "custom"` switches the root from a `<div>` to a `<Link>`, and
 *    then `scheme` matters: :49 builds `href={`${scheme}${url}`}`, and
 *    ButtonOptions.jsx has the Scheme control commented out (:85-112), so the
 *    panel can never set it. Left undefined it stringifies into the href --
 *    `href="undefined/shop"`. Every preset therefore ships `"scheme": ""`
 *    explicitly, which is also what the templates do. Keep it that way: it
 *    means a user who types a full `https://...` into the panel's Custom URL
 *    field gets a correct href rather than a doubled scheme.
 *
 * 6. Styling does not depend on `linkTo`. Both branches (:47 and :80) carry the
 *    same three selectors, so the `<Link>` and `<div>` roots look identical.
 *    These presets all use the link branch with `url: "#"` so they drop in as
 *    working placeholders.
 *
 * 7. The root is a `<div>` or a `<Link>` -- never a real `<button>`, despite
 *    the element declaring `tag: "button"`. That matters because globals.css
 *    styles `button` in *unlayered* rules (border, shadow, radius, padding,
 *    text colour) that outrank utilities, and they simply do not reach this
 *    element. Nothing here needs an important modifier, unlike the cart's
 *    coupon input.
 *
 * 8. `tag` and `target` are dead. `tag` is read into `Tag` at :36 and never
 *    rendered; `target` is read at :31 and never applied to the Link, so an
 *    external link cannot be made to open in a new tab from here. The
 *    templates carry `"target": ""` anyway and these follow, so the key is
 *    already in place if the renderer ever starts honouring it.
 *
 * 9. The root is block-level by default, so every preset sets `inline-flex`
 *    plus `w-fit` to make the button shrink-wrap its content instead of
 *    spanning the row. Drop `w-fit` for a full-width button inside a narrow
 *    column; Hero CTA keeps it so it can sit beside a secondary action.
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
