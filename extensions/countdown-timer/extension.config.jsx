import React from "react";
import { IconClock, IconClockBolt } from "@tabler/icons-react";

import Countdowns from "./pages/Countdowns";
import CountdownRuntime from "./lib/CountdownRuntime";

import Countdown from "./elements/Countdown";
import CountdownOptions from "./elements/CountdownOptions";
import countdownLayouts from "./elements/countdownLayouts";

import CountdownBar from "./elements/CountdownBar";
import CountdownBarOptions from "./elements/CountdownBarOptions";
import countdownBarLayouts from "./elements/countdownBarLayouts";

/**
 * Countdown Timer.
 *
 * Campaigns are defined once on a dashboard screen and pointed at from as
 * many blocks as a merchant likes, so a sale shown in four places has one
 * end date rather than four that drift apart.
 *
 * Every date is read in the store's timezone rather than the shopper's,
 * which is what makes "ends at midnight" one moment instead of twenty-four.
 *
 * The file is .jsx because `nav[].icon` and `elements[].definition.icon`
 * are rendered elements, matching how core writes them in Sidebar.jsx's
 * NAVS and in ElementsDefinition.js.
 */
const manifest = {

	id: "countdown-timer",
	name: "Countdown Timer",
	version: "1.0.0",
	description: "Sale countdowns, daily dispatch cutoffs and first-visit offer windows, defined once and placed anywhere.",

	enabled: false,

	/*
		`parent` names a core group from Sidebar.jsx's NAVS; an entry whose
		parent is not found is dropped, because ToggleNavs only pushes a
		child when `map[item.parent]` exists.

		Under `appearance`: a countdown decides how an offer is presented,
		not what the offer is. What is actually discounted lives in
		Discount Rules.
	*/
	nav: [
		{
			label: "Countdowns",
			value: "countdowns",
			icon: <IconClock />,
			parent: "appearance",
			roles: ["administrator", "store_manager"],
		},
	],

	routes: {
		"countdowns": Countdowns,
	},

	/*
		Mounted once per page by components/ExtensionsRuntime.jsx and
		renders nothing. It adopts the campaigns and reads this browser's
		first-seen stamps, both of which have to be done before any block
		draws and on every page one might be placed on.
	*/
	runtime: CountdownRuntime,

	elements: [

		{
			definition: {
				type: "countdown",
				label: "Countdown",
				icon: <IconClock />,
				description: "Counts down to a campaign's deadline, in boxes, inline or as one line of text.",
				ai: {
					purpose: "Show how long is left on an offer.",
					useFor: ["Hero", "Product page", "Banner", "Category page"],
					keywords: ["countdown", "timer", "sale ends", "urgency", "deadline", "offer"],
					rules: [
						"It needs a campaign chosen in its options, and shows nothing until one is.",
						"It renders nothing once the campaign is over, unless the campaign says otherwise, so it is safe to leave in place.",
						"Put the deadline on the campaign, not the block - several blocks can share one.",
					],
				},
				options: {
					campaignId: "",
					layout: "boxes",
					prefix: "",
					showDays: true,
					showSeconds: true,
					showLabels: true,
					icon: "",
					iconSize: 15,
				},
				/* Declaring every selector the renderer reads is what makes
					 them editable: the options panel lists these keys. */
				cssSelectors: {
					'*': { classes: 'flex flex-wrap items-center gap-3' },
					'prefix': { classes: 'inline-flex items-center gap-1.5 text-sm font-medium text-gray-600' },
					'units': { classes: 'flex items-center gap-2' },
					'unit': { classes: 'flex min-w-14 flex-col items-center gap-0.5 rounded-xl bg-gray-900 px-3 py-2' },
					/* `tabular-nums` throughout: proportional digits change
						 width as they count, and the timer jiggles sideways
						 once a second. */
					'value': { classes: 'text-xl font-bold tabular-nums leading-none text-white' },
					'label': { classes: 'text-[10px] uppercase tracking-wide text-gray-400' },
					'separator': { classes: 'text-xl font-bold text-gray-300' },
					'compact': { classes: 'text-base font-semibold tabular-nums text-gray-900' },
					'expired': { classes: 'text-sm text-gray-500' },
				},
				group: ['content'],
			},
			render: Countdown,
			options: CountdownOptions,
			layouts: countdownLayouts,
		},

		{
			definition: {
				type: "countdownBar",
				label: "Countdown Bar",
				icon: <IconClockBolt />,
				description: "An announcement strip with a message, the time left and a way through to the offer.",
				ai: {
					purpose: "Announce a timed offer across the whole site.",
					useFor: ["Header", "Site-wide banner", "Announcement"],
					keywords: ["announcement bar", "promo bar", "sale banner", "countdown", "sticky"],
					rules: [
						"Put it at the very top of the page body, outside the content column - a sticky bar only sticks within its own scrolling ancestor.",
						"One per page. Two bars counting different campaigns is noise.",
						"It needs a campaign chosen in its options, and shows nothing until one is.",
					],
				},
				options: {
					campaignId: "",
					message: "Sale ends in",
					linkLabel: "Shop the sale",
					linkUrl: "/shop",
					dismissible: true,
					showSeconds: true,
				},
				cssSelectors: {
					'*': { classes: 'relative flex w-full items-center justify-center gap-3 bg-gray-900 px-4 py-2.5 text-white' },
					'inner': { classes: 'flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm' },
					'message': { classes: 'font-medium' },
					'time': { classes: 'font-bold tabular-nums text-amber-300' },
					'link': { classes: 'rounded-full bg-white/15 px-3 py-1 text-xs font-semibold transition-colors hover:bg-white/25' },
					'expired': { classes: 'text-sm text-gray-300' },
					'dismiss': { classes: 'absolute right-3 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white' },
				},
				group: ['content'],
			},
			render: CountdownBar,
			options: CountdownBarOptions,
			layouts: countdownBarLayouts,
		},

	],
};

export default manifest;
