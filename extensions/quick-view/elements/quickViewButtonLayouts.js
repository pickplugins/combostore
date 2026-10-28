/**
 * Layout presets for the `quickViewButton` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*: a list of
 * `{ title, thumbnail, content }` whose `content` root is
 * `"type": "quickViewButton"`, because ElementLayouts' Replace splices the
 * preset in place of the selected block. PageBuilder regenerates ids on
 * paste and replace, so the readable ids here are safe.
 *
 * The overlay presets rely on the card being a positioning context. Core's
 * product cards are, but a hand-built one may not be - if an overlay button
 * lands in the page corner, the card it sits in needs `relative`.
 *
 * Every preset sets `iconSize`: the renderer hands it to the tabler icon,
 * and an unset value arrives as `size={undefined}` and falls back to 24.
 */

var layouts = [

	{
		title: 'Full Width Under Card',
		thumbnail: '',
		content: {
			"id": "qv-block",
			"type": "quickViewButton",
			"options": {
				"label": "",
				"showLabel": true,
				"icon": "IconEye",
				"iconSize": 16
			},
			"cssSelectors": {
				"*": { "classes": "w-full" },
				"button": { "classes": "inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900" },
				"label": { "classes": "" }
			}
		},
	},

	{
		title: 'Icon Over The Image',
		thumbnail: '',
		content: {
			"id": "qv-overlay",
			"type": "quickViewButton",
			"options": {
				"label": "Quick view",
				"showLabel": false,
				"icon": "IconEye",
				"iconSize": 17
			},
			"cssSelectors": {
				"*": { "classes": "absolute right-2 top-2 z-10" },
				"button": { "classes": "grid h-9 w-9 place-items-center rounded-full bg-white/95 text-gray-600 shadow-sm transition-colors hover:bg-white hover:text-gray-900" },
				"label": { "classes": "sr-only" }
			}
		},
	},

	{
		title: 'Reveal On Hover',
		thumbnail: '',
		content: {
			"id": "qv-hover",
			"type": "quickViewButton",
			"options": {
				"label": "",
				"showLabel": true,
				"icon": "IconEye",
				"iconSize": 15
			},
			/* `group-hover` needs `group` on the card above it. Without it the
			   button stays invisible, which looks like a broken block rather
			   than a missing class - said here because there is nowhere else
			   a merchant would find it. */
			"cssSelectors": {
				"*": { "classes": "pointer-events-none absolute inset-x-2 bottom-2 z-10 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100" },
				"button": { "classes": "inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-gray-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-gray-900" },
				"label": { "classes": "" }
			}
		},
	},

];

export default layouts;
