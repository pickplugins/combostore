/**
 * Element layouts for the `icon` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `icon` block and its Replace
 * action splices the preset in place of that block, so every root here MUST be
 * `"type": "icon"`. (PageBuilder.jsx regenerates all ids on paste/replace, so
 * the readable ids below are safe.)
 *
 * icon is the second simplest element here: two options (`iconName`, `size`),
 * one `*` selector key, and a wrapper <div> holding one @tabler/icons-react
 * component. Both options are declared and read (Icon.jsx:31-32) and the
 * selector key is applied (:44), so the variety comes from the wrapper -- the
 * SVG itself takes no classes at all.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. `size` is the only way to size the glyph; the `*` classes only size the
 *    box around it. `size` is forwarded as `<IconX size={size} />` (:60), which
 *    tabler turns into width/height attributes on the SVG, so `text-2xl`,
 *    `w-6 h-6` or `size-6` on the wrapper move the box and leave the glyph
 *    where it was. The badge presets below pair a wrapper size with a smaller
 *    `size` on purpose -- that difference is the padding ring.
 *
 * 2. Color, however, does come from the wrapper. Tabler strokes with
 *    `currentColor`, so a `text-*` utility on `*` recolors the glyph even
 *    though no color option exists. Stroke width is not exposed at all.
 *
 * 3. `iconName` must be an exact @tabler/icons-react export. The lookup is a
 *    plain `TablerIcons[iconName]` (:40) and an unknown name resolves to
 *    `undefined`, which renders as an empty wrapper -- no fallback glyph, no
 *    warning, just a box that still has padding and a hover outline. Every name
 *    used below was checked against the installed package.
 *
 * 4. Inside a loop, the preset's icon can be overridden. Icon.jsx:36 does
 *    `iconName = loopIcon ?? iconName`, so an icon dropped in a featurebox or
 *    post loop whose item supplies `icon` shows the item's glyph instead. The
 *    preset's `size` always wins though: `loopIconSize` is read at :11 and then
 *    never used. So in a loop these presets are wrapper-and-size styling, and
 *    the glyph belongs to the item.
 *
 * 5. Inside a featurebox the wrapper gets a second class string. :44
 *    interpolates `FeatuerboxCssSelectors['icon']?.classes` right after the
 *    preset's own, so the featurebox's `icon` key stacks on top of whatever is
 *    set here. Both strings end up on one element and Tailwind resolves the
 *    conflict by stylesheet order, not list order, so when a preset looks
 *    ignored inside a featurebox, that key is where to look.
 *
 * `size` is kept as a string to match the definition's `'18'` and what the
 * number input in IconOptions.jsx writes back.
 */

var layouts = [

  {
    title: 'Inline Meta Icon',
    thumbnail: '',
    content: {
      "id": "ic-inline",
      "type": "icon",
      "options": {
        "iconName": "IconTruck",
        "size": "16"
      },
      "cssSelectors": {
        "*": { "classes": "w-fit shrink-0 flex items-center text-neutral-400" }
      }
    },
  },

  {
    title: 'Accent Circle Badge',
    thumbnail: '',
    content: {
      "id": "ic-badge",
      "type": "icon",
      "options": {
        "iconName": "IconShieldCheck",
        "size": "20"
      },
      "cssSelectors": {
        "*": { "classes": "w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-orange-50 text-orange-600" }
      }
    },
  },

  {
    title: 'Large Feature Icon',
    thumbnail: '',
    content: {
      "id": "ic-feature",
      "type": "icon",
      "options": {
        "iconName": "IconHeadset",
        "size": "32"
      },
      "cssSelectors": {
        "*": { "classes": "w-fit flex items-center justify-center text-orange-500" }
      }
    },
  },

  {
    title: 'Square Tile Icon',
    thumbnail: '',
    content: {
      "id": "ic-tile",
      "type": "icon",
      "options": {
        "iconName": "IconCreditCard",
        "size": "22"
      },
      "cssSelectors": {
        "*": { "classes": "w-12 h-12 shrink-0 flex items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 shadow-sm" }
      }
    },
  },

  {
    title: 'Social Round Button',
    thumbnail: '',
    content: {
      "id": "ic-social",
      "type": "icon",
      "options": {
        "iconName": "IconBrandFacebook",
        "size": "18"
      },
      "cssSelectors": {
        "*": { "classes": "w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-neutral-800 text-white cursor-pointer hover:bg-orange-500 transition-colors" }
      }
    },
  },

  {
    title: 'Status Tick',
    thumbnail: '',
    content: {
      "id": "ic-status",
      "type": "icon",
      "options": {
        "iconName": "IconCircleCheckFilled",
        "size": "18"
      },
      "cssSelectors": {
        "*": { "classes": "w-fit shrink-0 flex items-center text-emerald-600" }
      }
    },
  },

];

export default layouts;
