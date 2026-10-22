/**
 * Layout presets for the `pointsBadge` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*: a list of
 * `{ title, thumbnail, content }`, where every `content` root is
 * `"type": "pointsBadge"` because ElementLayouts' Replace splices the preset in
 * place of the selected block. PageBuilder regenerates ids on paste and
 * replace, so the readable ids here are safe.
 *
 * `iconSize` is set on every preset: PointsBadge passes it straight to the
 * tabler icon, and an unset value arrives as `size={undefined}`, which falls
 * back to 24 and sits badly next to `text-xs`.
 */

var layouts = [

	{
		title: 'Soft Amber Pill',
		thumbnail: '',
		content: {
			"id": "pb-amber",
			"type": "pointsBadge",
			"options": { "label": "Earn", "suffix": "points", "rate": 1, "icon": "IconGift", "iconSize": 14 },
			"cssSelectors": {
				"*": { "classes": "inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 ring-1 ring-amber-200" },
				"icon": { "classes": "flex items-center shrink-0" },
				"label": { "classes": "text-xs font-medium" },
				"points": { "classes": "text-xs font-bold tabular-nums" },
				"suffix": { "classes": "text-xs" }
			}
		},
	},

	{
		title: 'Dark Reward Chip',
		thumbnail: '',
		content: {
			"id": "pb-dark",
			"type": "pointsBadge",
			"options": { "label": "Earn", "suffix": "pts", "rate": 1, "icon": "IconSparkles", "iconSize": 14 },
			"cssSelectors": {
				"*": { "classes": "inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 text-amber-300" },
				"icon": { "classes": "flex items-center shrink-0" },
				"label": { "classes": "text-[11px] uppercase tracking-wide text-neutral-400" },
				"points": { "classes": "text-xs font-bold tabular-nums" },
				"suffix": { "classes": "text-[11px] text-neutral-400" }
			}
		},
	},

	{
		title: 'Inline Minimal',
		thumbnail: '',
		content: {
			"id": "pb-inline",
			"type": "pointsBadge",
			"options": { "label": "Earn", "suffix": "points with this order", "rate": 1, "icon": "", "iconSize": 14 },
			"cssSelectors": {
				"*": { "classes": "inline-flex w-fit items-center gap-1 text-neutral-600" },
				"icon": { "classes": "" },
				"label": { "classes": "text-xs" },
				"points": { "classes": "text-xs font-semibold text-neutral-900 tabular-nums" },
				"suffix": { "classes": "text-xs" }
			}
		},
	},

];

export default layouts;
