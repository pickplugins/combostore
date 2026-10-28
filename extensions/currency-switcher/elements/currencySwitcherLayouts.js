/**
 * Layout presets for the `currencySwitcher` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*: a list of
 * `{ title, thumbnail, content }` whose `content` root is
 * `"type": "currencySwitcher"`, because ElementLayouts' Replace splices the
 * preset in place of the selected block. PageBuilder regenerates ids on
 * paste and replace, so the readable ids here are safe.
 *
 * Each dropdown preset positions its list absolutely, so `*` carries
 * `relative` - without it the list anchors to whatever ancestor happens to
 * be positioned, usually the header, and lands across the page.
 */

var layouts = [

	{
		title: 'Header Dropdown',
		thumbnail: '',
		content: {
			"id": "cs-header",
			"type": "currencySwitcher",
			"options": {
				"variant": "dropdown",
				"showSymbol": true,
				"showNote": false
			},
			"cssSelectors": {
				"*": { "classes": "relative inline-flex flex-col" },
				"dropdown": { "classes": "relative" },
				"trigger": { "classes": "inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100" },
				"list": { "classes": "absolute right-0 z-50 mt-1 flex min-w-36 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg" },
				"item": { "classes": "flex items-center justify-between gap-3 px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50" },
				"itemSelected": { "classes": "!font-semibold !text-[#634FE5]" },
				"inline": { "classes": "flex items-center gap-1" },
				"inlineItem": { "classes": "rounded-lg px-2 py-1 text-sm text-gray-600" },
				"inlineSelected": { "classes": "!bg-gray-900 !text-white" },
				"note": { "classes": "mt-1 text-[11px] text-gray-400" }
			}
		},
	},

	{
		title: 'Inline Row',
		thumbnail: '',
		content: {
			"id": "cs-inline",
			"type": "currencySwitcher",
			"options": {
				"variant": "inline",
				"showSymbol": false,
				"showNote": false
			},
			"cssSelectors": {
				"*": { "classes": "relative inline-flex flex-col gap-1" },
				"dropdown": { "classes": "relative" },
				"trigger": { "classes": "inline-flex items-center gap-1.5 text-sm text-gray-700" },
				"list": { "classes": "absolute right-0 z-50 mt-1 flex min-w-32 flex-col rounded-xl border border-gray-200 bg-white py-1 shadow-lg" },
				"item": { "classes": "flex items-center justify-between gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" },
				"itemSelected": { "classes": "!font-semibold" },
				"inline": { "classes": "inline-flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5" },
				"inlineItem": { "classes": "rounded-md px-2.5 py-1 text-xs font-medium text-gray-500 transition-colors hover:text-gray-900" },
				"inlineSelected": { "classes": "!bg-white !text-gray-900 shadow-sm" },
				"note": { "classes": "text-[11px] text-gray-400" }
			}
		},
	},

	{
		title: 'Bordered, With Note',
		thumbnail: '',
		content: {
			"id": "cs-bordered",
			"type": "currencySwitcher",
			"options": {
				"variant": "dropdown",
				"showSymbol": true,
				"showNote": true
			},
			"cssSelectors": {
				"*": { "classes": "relative flex w-fit flex-col gap-1.5" },
				"dropdown": { "classes": "relative" },
				"trigger": { "classes": "inline-flex w-full items-center justify-between gap-3 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-gray-900" },
				"list": { "classes": "absolute left-0 right-0 z-50 mt-1 flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg" },
				"item": { "classes": "flex items-center justify-between gap-3 px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50" },
				"itemSelected": { "classes": "!font-semibold !text-[#634FE5]" },
				"inline": { "classes": "flex flex-wrap items-center gap-1.5" },
				"inlineItem": { "classes": "rounded-lg border border-gray-300 px-2.5 py-1 text-sm text-gray-600" },
				"inlineSelected": { "classes": "!border-gray-900 !bg-gray-900 !text-white" },
				"note": { "classes": "max-w-64 text-[11px] leading-relaxed text-gray-400" }
			}
		},
	},

];

export default layouts;
