import React from "react";
import { IconCoin, IconInfoCircle } from "@tabler/icons-react";

import Currencies from "./pages/Currencies";
import CurrencyRuntime from "./lib/CurrencyRuntime";

import CurrencySwitcher from "./elements/CurrencySwitcher";
import CurrencySwitcherOptions from "./elements/CurrencySwitcherOptions";
import currencySwitcherLayouts from "./elements/currencySwitcherLayouts";

import CurrencyNote from "./elements/CurrencyNote";
import CurrencyNoteOptions from "./elements/CurrencyNoteOptions";

/**
 * Currency Switcher.
 *
 * Shows prices in the currency a shopper picks. It is display only - carts,
 * orders and payments stay in the store's own currency, and the extension
 * says so on screen rather than leaving it to be discovered on a bank
 * statement. Converting what is actually charged needs the payment gateway
 * and the WordPress side to agree on a rate, which is a different piece of
 * work.
 *
 * The file is .jsx because `nav[].icon` and `elements[].definition.icon` are
 * rendered elements, matching how core writes them in Sidebar.jsx's NAVS and
 * in ElementsDefinition.js.
 */
const manifest = {

	id: "currency-switcher",
	name: "Currency Switcher",
	version: "1.0.0",
	description: "Let shoppers see prices in their own currency, with the rates you set and a clear note about what they will be charged.",

	enabled: false,

	/*
		`parent` names a core group from Sidebar.jsx's NAVS; an entry whose
		parent is not found is dropped, because ToggleNavs only pushes a
		child when `map[item.parent]` exists.

		`value` has to be unique across core and every other extension, since
		the nav tree is keyed on it, and `roles` is required - ToggleNavs
		calls `.includes` on it with no guard.
	*/
	nav: [
		{
			label: "Currencies",
			value: "currencies",
			icon: <IconCoin />,
			parent: "store",
			roles: ["administrator", "store_manager"],
		},
	],

	routes: {
		"currencies": Currencies,
	},

	/*
		Mounted once per page by components/ExtensionsRuntime.jsx and renders
		nothing. It installs the price formatter, which has to be in effect
		wherever a price is printed - that is every page, and a block the
		merchant may not have placed could not do it.

		It is also what keeps the dashboard out: the formatter is installed
		on storefront paths only, so a merchant reading their own takings
		never sees them converted.
	*/
	runtime: CurrencyRuntime,

	elements: [

		{
			definition: {
				type: "currencySwitcher",
				label: "Currency Switcher",
				icon: <IconCoin />,
				description: "Lets a shopper choose the currency prices are shown in.",
				ai: {
					purpose: "Let a shopper read prices in a currency they know.",
					useFor: ["Header", "Navigation", "Footer", "Toolbar"],
					keywords: ["currency", "exchange", "switcher", "international", "USD", "EUR"],
					rules: [
						"Place in the header, where a shopper expects to find it.",
						"It hides itself when the merchant has added no other currencies.",
						"The dropdown presets position a list absolutely, so the root needs `relative`.",
					],
				},
				options: {
					variant: "dropdown",
					showSymbol: true,
					showNote: false,
				},
				/* Declaring every selector the renderer reads is what makes
					 them editable: the options panel lists these keys. */
				cssSelectors: {
					'*': { classes: 'relative inline-flex flex-col' },
					'dropdown': { classes: 'relative' },
					'trigger': { classes: 'inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100' },
					'list': { classes: 'absolute right-0 z-50 mt-1 flex min-w-36 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg' },
					'item': { classes: 'flex items-center justify-between gap-3 px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50' },
					'itemSelected': { classes: '!font-semibold !text-[#634FE5]' },
					'inline': { classes: 'flex items-center gap-1' },
					'inlineItem': { classes: 'rounded-lg px-2 py-1 text-sm text-gray-600' },
					'inlineSelected': { classes: '!bg-gray-900 !text-white' },
					'note': { classes: 'mt-1 text-[11px] text-gray-400' },
				},
				group: ['shop'],
			},
			render: CurrencySwitcher,
			options: CurrencySwitcherOptions,
			layouts: currencySwitcherLayouts,
		},

		{
			definition: {
				type: "currencyNote",
				label: "Currency Note",
				icon: <IconInfoCircle />,
				description: "Says which currency the shopper will actually be charged in.",
				ai: {
					purpose: "Warn a shopper reading converted prices what their bank will charge.",
					useFor: ["Cart", "Checkout", "Product page"],
					keywords: ["currency", "charged in", "approximate", "exchange rate", "disclaimer"],
					rules: [
						"Place on the cart and the checkout, near the total.",
						"It renders nothing for shoppers in the store's own currency, so it is safe to leave in place.",
						"Leave its wording empty to follow the store-wide note.",
					],
				},
				options: {
					text: "",
					showIcon: true,
					iconSize: 14,
				},
				cssSelectors: {
					'*': { classes: 'inline-flex items-start gap-1.5 rounded-lg bg-amber-50 px-3 py-2 text-amber-800' },
					'icon': { classes: 'mt-0.5 shrink-0' },
					'text': { classes: 'text-xs leading-relaxed' },
				},
				group: ['shop'],
			},
			render: CurrencyNote,
			options: CurrencyNoteOptions,
		},

	],
};

export default manifest;
