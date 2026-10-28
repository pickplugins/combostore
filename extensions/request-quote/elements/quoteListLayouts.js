/**
 * Layout presets for the `quoteList` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*. Every selector the
 * renderer reads is present in each preset, including the ones for the
 * success panel - a preset that leaves those out styles the form beautifully
 * and then shows an unstyled thank-you, which is the one screen every
 * shopper who completes the flow sees.
 */

var layouts = [

	{
		title: 'Card With Form',
		thumbnail: '',
		content: {
			"id": "ql-card",
			"type": "quoteList",
			"options": {
				"heading": "Your quote request",
				"submitLabel": "Send request",
				"emptyText": "You have not added anything to quote yet.",
				"emptyLinkLabel": "Browse products",
				"emptyLinkUrl": "/",
				"showNotes": true,
				"showPrices": false
			},
			"cssSelectors": {
				"*": { "classes": "mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm" },
				"heading": { "classes": "text-xl font-semibold text-gray-900" },
				"empty": { "classes": "text-sm text-gray-500" },
				"emptyLink": { "classes": "w-fit text-sm font-medium text-[#634FE5] underline underline-offset-4" },
				"items": { "classes": "flex flex-col divide-y divide-gray-100" },
				"item": { "classes": "flex items-start gap-4 py-4" },
				"itemImage": { "classes": "h-16 w-16 shrink-0 rounded-lg object-cover" },
				"itemBody": { "classes": "flex min-w-0 flex-1 flex-col gap-1.5" },
				"itemTitle": { "classes": "text-sm font-medium text-gray-900" },
				"itemPrice": { "classes": "text-xs text-gray-500" },
				"itemNote": { "classes": "w-full rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 outline-none focus:border-[#634FE5]" },
				"itemControls": { "classes": "flex shrink-0 items-center gap-2" },
				"itemQuantity": { "classes": "w-14 rounded-lg border border-gray-300 px-2 py-1.5 text-center text-sm text-gray-800 outline-none focus:border-[#634FE5]" },
				"itemRemove": { "classes": "rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500" },
				"form": { "classes": "flex flex-col gap-4 border-t border-gray-100 pt-5" },
				"field": { "classes": "flex flex-col gap-1.5" },
				"label": { "classes": "text-xs font-medium text-gray-600" },
				"input": { "classes": "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-[#634FE5]" },
				"error": { "classes": "text-xs text-red-500" },
				"submit": { "classes": "mt-1 inline-flex w-full items-center justify-center rounded-xl bg-[#634FE5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5540d4] disabled:opacity-50" },
				"replyTime": { "classes": "text-center text-xs text-gray-400" },
				"successTitle": { "classes": "text-xl font-semibold text-green-700" },
				"successText": { "classes": "text-sm text-gray-600" },
				"reference": { "classes": "w-fit rounded-lg bg-gray-50 px-3 py-1.5 font-mono text-sm text-gray-700" }
			}
		},
	},

	{
		title: 'Two Column, Wide',
		thumbnail: '',
		content: {
			"id": "ql-wide",
			"type": "quoteList",
			"options": {
				"heading": "Request a price",
				"submitLabel": "Get my quote",
				"emptyText": "Add a product and it will show up here.",
				"emptyLinkLabel": "See the catalogue",
				"emptyLinkUrl": "/",
				"showNotes": true,
				"showPrices": true
			},
			"cssSelectors": {
				"*": { "classes": "mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 p-6 md:grid-cols-2" },
				"heading": { "classes": "text-2xl font-bold text-gray-900 md:col-span-2" },
				"empty": { "classes": "text-sm text-gray-500" },
				"emptyLink": { "classes": "w-fit text-sm font-medium text-[#634FE5] underline underline-offset-4" },
				"items": { "classes": "flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-gray-50/50 p-4" },
				"item": { "classes": "flex items-start gap-3 py-3" },
				"itemImage": { "classes": "h-14 w-14 shrink-0 rounded-lg object-cover" },
				"itemBody": { "classes": "flex min-w-0 flex-1 flex-col gap-1" },
				"itemTitle": { "classes": "text-sm font-medium text-gray-900" },
				"itemPrice": { "classes": "text-xs font-medium text-gray-500" },
				"itemNote": { "classes": "w-full rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 outline-none focus:border-[#634FE5]" },
				"itemControls": { "classes": "flex shrink-0 items-center gap-1.5" },
				"itemQuantity": { "classes": "w-12 rounded-md border border-gray-300 bg-white px-1.5 py-1 text-center text-sm text-gray-800 outline-none focus:border-[#634FE5]" },
				"itemRemove": { "classes": "rounded-md p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500" },
				"form": { "classes": "flex flex-col gap-4" },
				"field": { "classes": "flex flex-col gap-1.5" },
				"label": { "classes": "text-xs font-semibold uppercase tracking-wide text-gray-500" },
				"input": { "classes": "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-[#634FE5]" },
				"error": { "classes": "text-xs text-red-500" },
				"submit": { "classes": "inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black disabled:opacity-50" },
				"replyTime": { "classes": "text-xs text-gray-400" },
				"successTitle": { "classes": "text-2xl font-bold text-gray-900 md:col-span-2" },
				"successText": { "classes": "text-sm text-gray-600 md:col-span-2" },
				"reference": { "classes": "w-fit rounded-lg bg-green-50 px-3 py-1.5 font-mono text-sm text-green-700 md:col-span-2" }
			}
		},
	},

];

export default layouts;
