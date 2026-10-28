/**
 * Layout presets for the `cartDiscounts` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*: a list of
 * `{ title, thumbnail, content }` whose every `content` root is
 * `"type": "cartDiscounts"`, because ElementLayouts' Replace splices the
 * preset in place of the selected block. PageBuilder regenerates ids on paste
 * and replace, so the readable ids here are safe.
 *
 * Every preset sets `iconSize`: the renderer passes it straight to the tabler
 * icon, and an unset value arrives as `size={undefined}`, falls back to 24,
 * and towers over the `text-xs` beside it.
 */

var layouts = [

	{
		title: 'Green Savings Panel',
		thumbnail: '',
		content: {
			"id": "cd-green",
			"type": "cartDiscounts",
			"options": {
				"heading": "Discounts applied",
				"totalLabel": "Total savings",
				"freeShippingText": "Free delivery",
				"emptyText": "",
				"showTotal": true,
				"icon": "IconRosetteDiscount",
				"iconSize": 14
			},
			"cssSelectors": {
				"*": { "classes": "flex flex-col gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3" },
				"heading": { "classes": "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-green-700" },
				"empty": { "classes": "text-xs text-green-700" },
				"line": { "classes": "flex items-center justify-between gap-3" },
				"lineLabel": { "classes": "text-sm text-green-900" },
				"lineAmount": { "classes": "text-sm font-semibold text-green-700 tabular-nums" },
				"total": { "classes": "flex items-center justify-between gap-3 border-t border-green-200 pt-2" },
				"totalLabel": { "classes": "text-sm font-semibold text-green-900" },
				"totalAmount": { "classes": "text-sm font-bold text-green-700 tabular-nums" }
			}
		},
	},

	{
		title: 'Plain Cart Rows',
		thumbnail: '',
		content: {
			"id": "cd-plain",
			"type": "cartDiscounts",
			"options": {
				"heading": "",
				"totalLabel": "You save",
				"freeShippingText": "Free",
				"emptyText": "",
				"showTotal": false,
				"icon": "",
				"iconSize": 14
			},
			"cssSelectors": {
				"*": { "classes": "flex flex-col gap-1 px-4 py-2" },
				"heading": { "classes": "flex items-center gap-1.5 text-sm text-gray-500" },
				"empty": { "classes": "text-sm text-gray-400" },
				"line": { "classes": "flex items-center justify-between gap-3" },
				"lineLabel": { "classes": "text-sm text-gray-600" },
				"lineAmount": { "classes": "text-sm font-medium text-red-500 tabular-nums" },
				"total": { "classes": "flex items-center justify-between gap-3 pt-1" },
				"totalLabel": { "classes": "text-sm font-medium text-gray-700" },
				"totalAmount": { "classes": "text-sm font-bold text-red-500 tabular-nums" }
			}
		},
	},

	{
		title: 'Dashed Coupon Card',
		thumbnail: '',
		content: {
			"id": "cd-dashed",
			"type": "cartDiscounts",
			"options": {
				"heading": "Your offers",
				"totalLabel": "Total savings",
				"freeShippingText": "Shipping on us",
				"emptyText": "Add more to unlock an offer.",
				"showTotal": true,
				"icon": "IconTag",
				"iconSize": 14
			},
			"cssSelectors": {
				"*": { "classes": "flex flex-col gap-2 rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/60 px-4 py-3" },
				"heading": { "classes": "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-700" },
				"empty": { "classes": "text-xs text-amber-700" },
				"line": { "classes": "flex items-center justify-between gap-3" },
				"lineLabel": { "classes": "text-sm text-amber-900" },
				"lineAmount": { "classes": "text-sm font-semibold text-amber-700 tabular-nums" },
				"total": { "classes": "flex items-center justify-between gap-3 border-t border-dashed border-amber-300 pt-2" },
				"totalLabel": { "classes": "text-sm font-semibold text-amber-900" },
				"totalAmount": { "classes": "text-sm font-bold text-amber-700 tabular-nums" }
			}
		},
	},

];

export default layouts;
