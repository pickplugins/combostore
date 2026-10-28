import React from "react";
import { IconFileInvoice, IconMessage2Question, IconClipboardList } from "@tabler/icons-react";

import Quotes from "./pages/Quotes";
import QuoteRuntime from "./lib/QuoteRuntime";

import QuoteButton from "./elements/QuoteButton";
import QuoteButtonOptions from "./elements/QuoteButtonOptions";
import quoteButtonLayouts from "./elements/quoteButtonLayouts";

import QuoteList from "./elements/QuoteList";
import QuoteListOptions from "./elements/QuoteListOptions";
import quoteListLayouts from "./elements/quoteListLayouts";

import QuoteCount from "./elements/QuoteCount";
import QuoteCountOptions from "./elements/QuoteCountOptions";

/**
 * Request a Quote.
 *
 * For the products a store cannot put a price on: made to order, priced by
 * volume, or negotiated. The shopper collects what they want and asks; the
 * merchant answers with real figures; accepting turns the request into an
 * ordinary order rather than a second thing to track.
 *
 * The file is .jsx because `nav[].icon` and `elements[].definition.icon` are
 * rendered elements, matching how core writes them in Sidebar.jsx's NAVS and
 * in ElementsDefinition.js.
 */
const manifest = {

	id: "request-quote",
	name: "Request a Quote",
	version: "1.0.0",
	description: "Let shoppers ask for a price instead of buying - per product, category, tag or missing price - and answer them from a quote inbox.",

	enabled: false,

	/*
		`parent` names a core group from Sidebar.jsx's NAVS; an entry whose
		parent is not found is dropped, because ToggleNavs only pushes a child
		when `map[item.parent]` exists.

		`value` has to be unique across core and every other extension, since
		the nav tree is keyed on it, and `roles` is required - ToggleNavs
		calls `.includes` on it with no guard.
	*/
	nav: [
		{
			label: "Quotes",
			value: "quotes",
			icon: <IconFileInvoice />,
			parent: "sell",
			roles: ["administrator", "store_manager"],
		},
	],

	/*
		`/dashboard/quotes`, and anything below it - the screen reads
		`segments` so /dashboard/quotes/41 opens request 41.

		A file under app/dashboard/quotes/ would win over this, because Next
		matches a static route before the catch-all.
	*/
	routes: {
		"quotes": Quotes,
	},

	/*
		Mounted once per page by components/ExtensionsRuntime.jsx and renders
		nothing. It installs core's `purchaseGate`, which is what actually
		takes the Add to Cart button off a quote-only product - a block the
		merchant may not have placed on a given template could not.
	*/
	runtime: QuoteRuntime,

	/*
		Three blocks: ask on the product, collect on the quote page, and a
		badge so the list is findable from anywhere.

		All under `shop`, which is where the cart and checkout blocks live and
		the only group a merchant would think to look in. `group` has to be
		one of ElementsList's six or the tile renders nowhere.
	*/
	elements: [

		{
			definition: {
				type: "quoteButton",
				label: "Quote Button",
				icon: <IconMessage2Question />,
				description: "Asks for a price instead of selling, on products a rule marks as quote-only.",
				ai: {
					purpose: "Let a shopper request a price for a product that is not sold at a listed price.",
					useFor: ["Product page", "Product template", "Enquiry"],
					keywords: ["quote", "enquiry", "request price", "price on request", "RFQ", "bulk order"],
					rules: [
						"Place on the product template, next to or in place of Add to Cart.",
						"It renders nothing on products no quote rule matches, so it is safe to leave in place.",
						"It needs the product context, so it only works inside a product page or a product loop.",
					],
				},
				options: {
					label: "",
					afterAdd: "stay",
					addedText: "Added to your quote list",
					showQuantity: false,
					icon: "IconFileInvoice",
					iconSize: 16,
				},
				/* Declaring every selector the renderer reads is what makes
					 them editable: the options panel lists these keys. */
				cssSelectors: {
					'*': { classes: 'flex flex-col gap-2' },
					'quantity': { classes: 'flex items-center gap-1 w-fit rounded-lg border border-gray-300' },
					'quantityButton': { classes: 'px-3 py-1.5 text-gray-500 hover:text-gray-900' },
					'quantityInput': { classes: 'w-12 border-0 bg-transparent text-center text-sm text-gray-800 outline-none' },
					'button': { classes: 'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#634FE5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5540d4]' },
					'added': { classes: 'text-xs font-medium text-green-600' },
					'listed': { classes: 'text-xs text-gray-500 underline underline-offset-2 hover:text-[#634FE5]' },
				},
				group: ['shop'],
			},
			render: QuoteButton,
			options: QuoteButtonOptions,
			layouts: quoteButtonLayouts,
		},

		{
			definition: {
				type: "quoteList",
				label: "Quote List",
				icon: <IconClipboardList />,
				description: "The products a shopper is collecting a quote for, with the form that sends the request.",
				ai: {
					purpose: "Show the quote basket and take the shopper's details so the request can be sent.",
					useFor: ["Quote page", "Request a quote", "Enquiry basket"],
					keywords: ["quote", "basket", "enquiry", "request", "RFQ", "contact"],
					rules: [
						"One per site, on the page the quote buttons link to.",
						"It is a whole page section - give it the width of the content column.",
						"It handles the empty state itself, so it does not need hiding.",
					],
				},
				options: {
					heading: "Your quote request",
					submitLabel: "Send request",
					emptyText: "You have not added anything to quote yet.",
					emptyLinkLabel: "Browse products",
					emptyLinkUrl: "/",
					showNotes: true,
					showPrices: false,
				},
				cssSelectors: {
					'*': { classes: 'mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm' },
					'heading': { classes: 'text-xl font-semibold text-gray-900' },
					'empty': { classes: 'text-sm text-gray-500' },
					'emptyLink': { classes: 'w-fit text-sm font-medium text-[#634FE5] underline underline-offset-4' },
					'items': { classes: 'flex flex-col divide-y divide-gray-100' },
					'item': { classes: 'flex items-start gap-4 py-4' },
					'itemImage': { classes: 'h-16 w-16 shrink-0 rounded-lg object-cover' },
					'itemBody': { classes: 'flex min-w-0 flex-1 flex-col gap-1.5' },
					'itemTitle': { classes: 'text-sm font-medium text-gray-900' },
					'itemPrice': { classes: 'text-xs text-gray-500' },
					'itemNote': { classes: 'w-full rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 outline-none focus:border-[#634FE5]' },
					'itemControls': { classes: 'flex shrink-0 items-center gap-2' },
					'itemQuantity': { classes: 'w-14 rounded-lg border border-gray-300 px-2 py-1.5 text-center text-sm text-gray-800 outline-none focus:border-[#634FE5]' },
					'itemRemove': { classes: 'rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500' },
					'form': { classes: 'flex flex-col gap-4 border-t border-gray-100 pt-5' },
					'field': { classes: 'flex flex-col gap-1.5' },
					'label': { classes: 'text-xs font-medium text-gray-600' },
					'input': { classes: 'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-[#634FE5]' },
					'error': { classes: 'text-xs text-red-500' },
					'submit': { classes: 'mt-1 inline-flex w-full items-center justify-center rounded-xl bg-[#634FE5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5540d4] disabled:opacity-50' },
					'replyTime': { classes: 'text-center text-xs text-gray-400' },
					'successTitle': { classes: 'text-xl font-semibold text-green-700' },
					'successText': { classes: 'text-sm text-gray-600' },
					'reference': { classes: 'w-fit rounded-lg bg-gray-50 px-3 py-1.5 font-mono text-sm text-gray-700' },
				},
				group: ['shop'],
			},
			render: QuoteList,
			options: QuoteListOptions,
			layouts: quoteListLayouts,
		},

		{
			definition: {
				type: "quoteCount",
				label: "Quote Badge",
				icon: <IconFileInvoice />,
				description: "How many products are waiting to be quoted, linking to the quote list.",
				ai: {
					purpose: "Give the quote list a way back from anywhere on the site.",
					useFor: ["Header", "Navigation", "Toolbar"],
					keywords: ["quote", "badge", "counter", "header", "basket"],
					rules: [
						"Place in the header, beside the cart icon.",
						"It counts a different basket from the cart - they are not interchangeable.",
						"It can hide itself while the list is empty.",
					],
				},
				options: {
					label: "Quote list",
					showLabel: true,
					hideWhenEmpty: false,
					icon: "IconFileInvoice",
					iconSize: 20,
				},
				cssSelectors: {
					'*': { classes: 'inline-flex' },
					'link': { classes: 'relative inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-[#634FE5]' },
					'label': { classes: 'hidden sm:inline' },
					'badge': { classes: 'inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#634FE5] px-1.5 text-[11px] font-semibold text-white' },
				},
				group: ['shop'],
			},
			render: QuoteCount,
			options: QuoteCountOptions,
		},

	],
};

export default manifest;
