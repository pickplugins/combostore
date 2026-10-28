/**
 * Layout presets for the `countdownBar` block.
 *
 * Same shape as components/PageBuilder/element-layouts/*. `campaignId` is
 * empty in each for the same reason as the timer's presets: a preset that
 * carried one would point every new bar at whichever campaign existed when
 * the preset was written.
 *
 * The sticky presets set `top-0` and a `z-` above the header's. A sticky
 * element only sticks within its own scrolling ancestor, so a bar dropped
 * inside a container that scrolls will scroll away with it - it belongs at
 * the top of the page body, outside the content column.
 */

var layouts = [

	{
		title: 'Sticky Dark Bar',
		thumbnail: '',
		content: {
			"id": "cb-dark",
			"type": "countdownBar",
			"options": {
				"campaignId": "",
				"message": "Sale ends in",
				"linkLabel": "Shop the sale",
				"linkUrl": "/shop",
				"dismissible": true,
				"showSeconds": true
			},
			"cssSelectors": {
				"*": { "classes": "sticky top-0 z-50 flex w-full items-center justify-center gap-3 bg-gray-900 px-4 py-2.5 text-white" },
				"inner": { "classes": "flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm" },
				"message": { "classes": "font-medium" },
				"time": { "classes": "font-bold tabular-nums text-amber-300" },
				"link": { "classes": "rounded-full bg-white/15 px-3 py-1 text-xs font-semibold transition-colors hover:bg-white/25" },
				"expired": { "classes": "text-sm text-gray-300" },
				"dismiss": { "classes": "absolute right-3 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white" }
			}
		},
	},

	{
		title: 'Bright Promo Strip',
		thumbnail: '',
		content: {
			"id": "cb-bright",
			"type": "countdownBar",
			"options": {
				"campaignId": "",
				"message": "Free delivery this weekend — ends in",
				"linkLabel": "",
				"linkUrl": "/shop",
				"dismissible": true,
				"showSeconds": false
			},
			"cssSelectors": {
				"*": { "classes": "relative flex w-full items-center justify-center gap-3 bg-[#634FE5] px-4 py-2 text-white" },
				"inner": { "classes": "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm" },
				"message": { "classes": "" },
				"time": { "classes": "font-bold tabular-nums" },
				"link": { "classes": "underline underline-offset-4" },
				"expired": { "classes": "text-xs text-white/80" },
				"dismiss": { "classes": "absolute right-3 rounded-full p-1 text-white/70 transition-colors hover:bg-white/15 hover:text-white" }
			}
		},
	},

	{
		title: 'Quiet Notice',
		thumbnail: '',
		content: {
			"id": "cb-quiet",
			"type": "countdownBar",
			"options": {
				"campaignId": "",
				"message": "Order within",
				"linkLabel": "",
				"linkUrl": "/shop",
				"dismissible": false,
				"showSeconds": true
			},
			"cssSelectors": {
				"*": { "classes": "flex w-full items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5" },
				"inner": { "classes": "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-amber-900" },
				"message": { "classes": "" },
				"time": { "classes": "font-semibold tabular-nums text-amber-700" },
				"link": { "classes": "font-medium text-amber-800 underline underline-offset-4" },
				"expired": { "classes": "text-sm text-amber-700" },
				"dismiss": { "classes": "ml-auto rounded-full p-1 text-amber-400 transition-colors hover:bg-amber-100 hover:text-amber-700" }
			}
		},
	},

];

export default layouts;
