import React from "react";
import { IconGift } from "@tabler/icons-react";

import LoyaltyOverview from "./pages/LoyaltyOverview";
import PointsBadge from "./elements/PointsBadge";
import PointsBadgeOptions from "./elements/PointsBadgeOptions";
import pointsBadgeLayouts from "./elements/pointsBadgeLayouts";

/**
 * Example extension manifest.
 *
 * Kept as a worked reference for extensions/README.md: it exercises every
 * contribution point there is - a nav entry, a dashboard screen, and a page
 * builder block with its own options panel and layout presets.
 *
 * The file is .jsx because `nav[].icon` and `elements[].definition.icon` are
 * rendered elements, matching how core writes them in Sidebar.jsx's NAVS and in
 * ElementsDefinition.js.
 */
const manifest = {

	id: "loyalty-points",
	name: "Loyalty Points",
	version: "1.0.0",
	description: "Shows customers the points an order will earn, and adds a Points Badge block to the page builder.",

	/* `false` would ship it installed but switched off. The Extensions screen
		 can toggle it either way at runtime. */
	enabled: false,

	/*
		Sidebar entries.

		`parent` has to name a group that exists - here "store", from
		Sidebar.jsx's NAVS - or the entry is dropped: ToggleNavs only pushes a
		child when `map[item.parent]` is found, and a top-level entry links to
		`/<value>` rather than `/dashboard/<value>`.

		`value` must be unique across core and every other extension, because it
		is the key of the tree lookup. `roles` is required - ToggleNavs calls
		`.includes` on it without a guard.
	*/
	nav: [
		// {
		// 	label: "Loyalty",
		// 	value: "loyalty-points",
		// 	icon: <IconGift />,
		// 	parent: "store",
		// 	roles: ["administrator", "store_manager"],
		// },
	],

	/*
		Dashboard screens, keyed by the slug under /dashboard/.

		A file under app/dashboard/ always wins over an extension claiming the
		same slug, because Next matches the static route first and the catch-all
		never sees it. Pick something unlikely to collide.
	*/
	routes: {
		// "loyalty-points": LoyaltyOverview,
	},

	/*
		Page builder blocks. `definition` is the same shape as an entry in
		ElementsDefinition.js, including the `ai` block the layout prompt reads
		and the `cssSelectors` the options panel exposes.
	*/
	elements: [
		{
			definition: {
				type: "pointsBadge",
				label: "Points Badge",
				icon: <IconGift />,
				description: "Shows how many loyalty points a product or order will earn.",
				ai: {
					purpose: "Tell the customer what they earn by buying this product.",
					useFor: ["Loyalty messaging", "Reward points", "Product incentives"],
					keywords: ["loyalty", "points", "reward", "cashback", "earn"],
					rules: [
						"Place near the price or the add to cart action.",
						"Keep it short - a label, a number and a unit.",
					],
				},
				options: {
					label: "Earn",
					suffix: "points",
					rate: 1,
					icon: "IconGift",
					iconSize: 14,
				},
				/* Declaring every selector the renderer reads is what makes them
					 editable: the options panel lists these keys. */
				cssSelectors: {
					'*': { classes: 'inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 ring-1 ring-amber-200' },
					'icon': { classes: 'flex items-center shrink-0' },
					'label': { classes: 'text-xs font-medium' },
					'points': { classes: 'text-xs font-bold tabular-nums' },
					'suffix': { classes: 'text-xs' },
				},
				/* Must be one of ElementsList's groups or the tile never renders. */
				group: ['product'],
			},
			render: PointsBadge,
			options: PointsBadgeOptions,
			layouts: pointsBadgeLayouts,
		},
	],
};

export default manifest;
