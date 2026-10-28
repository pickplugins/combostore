/**
 * Layout presets for the `countdown` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*: a list of
 * `{ title, thumbnail, content }` whose `content` root is
 * `"type": "countdown"`, because ElementLayouts' Replace splices the preset
 * in place of the selected block. PageBuilder regenerates ids on paste and
 * replace, so the readable ids here are safe.
 *
 * `campaignId` is left empty in every preset: a preset carrying one would
 * silently point a new timer at whichever campaign happened to exist when
 * the preset was written. The block says nothing until one is chosen, and
 * the options panel says why.
 *
 * The digits are set in `tabular-nums` throughout. Without it the numbers
 * are proportionally spaced and the whole timer jiggles sideways once a
 * second as the glyphs change width.
 */

var layouts = [

	{
		title: 'Dark Boxes',
		thumbnail: '',
		content: {
			"id": "cd-boxes",
			"type": "countdown",
			"options": {
				"campaignId": "",
				"layout": "boxes",
				"prefix": "",
				"showDays": true,
				"showSeconds": true,
				"showLabels": true,
				"icon": "",
				"iconSize": 15
			},
			"cssSelectors": {
				"*": { "classes": "flex flex-wrap items-center gap-3" },
				"prefix": { "classes": "inline-flex items-center gap-1.5 text-sm font-medium text-gray-600" },
				"units": { "classes": "flex items-center gap-2" },
				"unit": { "classes": "flex min-w-14 flex-col items-center gap-0.5 rounded-xl bg-gray-900 px-3 py-2" },
				"value": { "classes": "text-xl font-bold tabular-nums leading-none text-white" },
				"label": { "classes": "text-[10px] uppercase tracking-wide text-gray-400" },
				"separator": { "classes": "text-xl font-bold text-gray-300" },
				"compact": { "classes": "text-base font-semibold tabular-nums text-gray-900" },
				"expired": { "classes": "text-sm text-gray-500" }
			}
		},
	},

	{
		title: 'Inline Clock',
		thumbnail: '',
		content: {
			"id": "cd-inline",
			"type": "countdown",
			"options": {
				"campaignId": "",
				"layout": "inline",
				"prefix": "Ends in",
				"showDays": false,
				"showSeconds": true,
				"showLabels": false,
				"icon": "IconClock",
				"iconSize": 15
			},
			"cssSelectors": {
				"*": { "classes": "inline-flex items-center gap-2" },
				"prefix": { "classes": "inline-flex items-center gap-1.5 text-sm text-gray-500" },
				"units": { "classes": "inline-flex items-baseline gap-1" },
				"unit": { "classes": "inline-flex items-baseline" },
				"value": { "classes": "text-base font-semibold tabular-nums text-gray-900" },
				"label": { "classes": "ml-0.5 text-[10px] uppercase text-gray-400" },
				"separator": { "classes": "text-base font-semibold text-gray-300" },
				"compact": { "classes": "text-base font-semibold tabular-nums text-gray-900" },
				"expired": { "classes": "text-sm text-gray-400" }
			}
		},
	},

	{
		title: 'Urgent Red Pill',
		thumbnail: '',
		content: {
			"id": "cd-urgent",
			"type": "countdown",
			"options": {
				"campaignId": "",
				"layout": "compact",
				"prefix": "Hurry,",
				"showDays": true,
				"showSeconds": true,
				"showLabels": false,
				"icon": "IconFlame",
				"iconSize": 14
			},
			"cssSelectors": {
				"*": { "classes": "inline-flex w-fit items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5" },
				"prefix": { "classes": "inline-flex items-center gap-1 text-xs font-medium text-red-600" },
				"units": { "classes": "inline-flex items-center gap-1" },
				"unit": { "classes": "inline-flex items-baseline gap-0.5" },
				"value": { "classes": "text-xs font-bold tabular-nums text-red-700" },
				"label": { "classes": "text-[10px] text-red-400" },
				"separator": { "classes": "text-xs text-red-300" },
				"compact": { "classes": "text-xs font-bold tabular-nums text-red-700" },
				"expired": { "classes": "text-xs text-red-400" }
			}
		},
	},

	{
		title: 'Big Hero Digits',
		thumbnail: '',
		content: {
			"id": "cd-hero",
			"type": "countdown",
			"options": {
				"campaignId": "",
				"layout": "boxes",
				"prefix": "",
				"showDays": true,
				"showSeconds": true,
				"showLabels": true,
				"icon": "",
				"iconSize": 15
			},
			"cssSelectors": {
				"*": { "classes": "flex w-full flex-col items-center gap-3" },
				"prefix": { "classes": "inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gray-400" },
				"units": { "classes": "flex items-start gap-4 sm:gap-8" },
				"unit": { "classes": "flex min-w-16 flex-col items-center gap-1" },
				"value": { "classes": "text-4xl font-black tabular-nums leading-none text-gray-900 sm:text-6xl" },
				"label": { "classes": "text-[10px] uppercase tracking-widest text-gray-400 sm:text-xs" },
				"separator": { "classes": "text-4xl font-black text-gray-200 sm:text-6xl" },
				"compact": { "classes": "text-4xl font-black tabular-nums text-gray-900" },
				"expired": { "classes": "text-base text-gray-500" }
			}
		},
	},

];

export default layouts;
