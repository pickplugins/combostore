/**
 * Layout presets for the `quoteButton` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*: a list of
 * `{ title, thumbnail, content }` whose `content` root is
 * `"type": "quoteButton"`, because ElementLayouts' Replace splices the preset
 * in place of the selected block. PageBuilder regenerates ids on paste and
 * replace, so the readable ids here are safe.
 *
 * Every preset sets `iconSize`: the renderer hands it to the tabler icon, and
 * an unset value arrives as `size={undefined}`, falls back to 24, and towers
 * over the text beside it.
 */

var layouts = [

	{
		title: 'Solid Primary Button',
		thumbnail: '',
		content: {
			"id": "qb-solid",
			"type": "quoteButton",
			"options": {
				"label": "",
				"afterAdd": "stay",
				"addedText": "Added to your quote list",
				"showQuantity": false,
				"icon": "IconFileInvoice",
				"iconSize": 16
			},
			"cssSelectors": {
				"*": { "classes": "flex flex-col gap-2" },
				"quantity": { "classes": "flex items-center gap-1 w-fit rounded-lg border border-gray-300" },
				"quantityButton": { "classes": "px-3 py-1.5 text-gray-500 hover:text-gray-900" },
				"quantityInput": { "classes": "w-12 border-0 bg-transparent text-center text-sm text-gray-800 outline-none" },
				"button": { "classes": "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#634FE5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5540d4]" },
				"added": { "classes": "text-xs font-medium text-green-600" },
				"listed": { "classes": "text-xs text-gray-500 underline underline-offset-2 hover:text-[#634FE5]" }
			}
		},
	},

	{
		title: 'Outlined, With Quantity',
		thumbnail: '',
		content: {
			"id": "qb-outline",
			"type": "quoteButton",
			"options": {
				"label": "",
				"afterAdd": "stay",
				"addedText": "Added - add more or send your request",
				"showQuantity": true,
				"icon": "IconMessage2Question",
				"iconSize": 16
			},
			"cssSelectors": {
				"*": { "classes": "flex flex-col gap-3" },
				"quantity": { "classes": "flex items-center gap-1 w-fit rounded-lg border border-gray-300 bg-white" },
				"quantityButton": { "classes": "px-3 py-1.5 text-lg leading-none text-gray-400 hover:text-gray-900" },
				"quantityInput": { "classes": "w-12 border-0 bg-transparent text-center text-sm text-gray-800 outline-none" },
				"button": { "classes": "inline-flex w-fit items-center gap-2 rounded-xl border-2 border-[#634FE5] px-5 py-2.5 text-sm font-semibold text-[#634FE5] transition-colors hover:bg-[#634FE5] hover:text-white" },
				"added": { "classes": "text-xs font-medium text-green-600" },
				"listed": { "classes": "text-xs text-gray-500 underline underline-offset-2 hover:text-[#634FE5]" }
			}
		},
	},

	{
		title: 'Quiet Text Link',
		thumbnail: '',
		content: {
			"id": "qb-quiet",
			"type": "quoteButton",
			"options": {
				"label": "",
				"afterAdd": "redirect",
				"addedText": "",
				"showQuantity": false,
				"icon": "",
				"iconSize": 14
			},
			"cssSelectors": {
				"*": { "classes": "flex flex-col gap-1" },
				"quantity": { "classes": "hidden" },
				"quantityButton": { "classes": "" },
				"quantityInput": { "classes": "" },
				"button": { "classes": "inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-[#634FE5]" },
				"added": { "classes": "text-xs text-green-600" },
				"listed": { "classes": "text-xs text-gray-400" }
			}
		},
	},

];

export default layouts;
