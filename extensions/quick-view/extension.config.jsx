import React from "react";
import { IconEye } from "@tabler/icons-react";

import QuickView from "./pages/QuickView";
import QuickViewRuntime from "./lib/QuickViewRuntime";

import QuickViewButton from "./elements/QuickViewButton";
import QuickViewButtonOptions from "./elements/QuickViewButtonOptions";
import quickViewButtonLayouts from "./elements/quickViewButtonLayouts";

/**
 * Product Quick View.
 *
 * A look at a product without leaving the grid: images, price, variations
 * and Add to Cart in a modal, with the full page one click away for
 * everything it does not show.
 *
 * What is inside the modal is core's own product blocks, wrapped in the same
 * `PostProvider` the product page uses. Nothing about buying a product is
 * reimplemented here, so nothing about it can drift.
 *
 * The file is .jsx because `nav[].icon` and `elements[].definition.icon` are
 * rendered elements, matching how core writes them in Sidebar.jsx's NAVS and
 * in ElementsDefinition.js.
 */
const manifest = {

	id: "quick-view",
	name: "Product Quick View",
	version: "1.0.0",
	description: "Open a product in a modal straight from a grid - gallery, price, variations and Add to Cart, without losing the shopper's place.",

	enabled: false,

	/*
		`parent` names a core group from Sidebar.jsx's NAVS; an entry whose
		parent is not found is dropped, because ToggleNavs only pushes a
		child when `map[item.parent]` exists.

		Under `appearance`, not `store`: this decides how the catalogue is
		presented, not what is sold or on what terms.
	*/
	nav: [
		{
			label: "Quick View",
			value: "quick-view",
			icon: <IconEye />,
			parent: "appearance",
			roles: ["administrator", "store_manager"],
		},
	],

	routes: {
		"quick-view": QuickView,
	},

	/*
		Mounted once per page by components/ExtensionsRuntime.jsx.

		This runtime is the exception to "a runtime renders nothing": it
		renders the modal, through a portal into document.body. There is one
		modal for the whole site and it can be opened from any card on any
		page, so it cannot belong to a block - that would mean one modal per
		placement and none at all where the merchant forgot.
	*/
	runtime: QuickViewRuntime,

	/*
		One block, and it is only a trigger. It reads the card's product from
		the `PostProvider` a product loop puts around each item, so it needs
		no configuration to know what it opens.

		Grouped under `product`, where the other blocks that belong inside a
		product card live. `group` has to be one of ElementsList's six or the
		tile renders nowhere.
	*/
	elements: [
		{
			definition: {
				type: "quickViewButton",
				label: "Quick View Button",
				icon: <IconEye />,
				description: "Opens the product in a modal, without leaving the grid.",
				ai: {
					purpose: "Let a shopper look at a product without losing their place in the listing.",
					useFor: ["Product card", "Product grid", "Product slider", "Category page"],
					keywords: ["quick view", "preview", "modal", "popup", "product card", "peek"],
					rules: [
						"Place inside a product grid, slider or loop - it needs the card's product and does nothing outside one.",
						"One per card. It is a trigger, not the modal, so extra copies only add buttons.",
						"For an overlay preset, the card around it needs `relative`, and the hover preset needs `group` on the card.",
					],
				},
				options: {
					label: "",
					showLabel: true,
					icon: "IconEye",
					iconSize: 16,
				},
				/* Declaring every selector the renderer reads is what makes
					 them editable: the options panel lists these keys. */
				cssSelectors: {
					'*': { classes: 'w-full' },
					'button': { classes: 'inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900' },
					'label': { classes: '' },
				},
				group: ['product'],
			},
			render: QuickViewButton,
			options: QuickViewButtonOptions,
			layouts: quickViewButtonLayouts,
		},
	],
};

export default manifest;
