import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `productDeal` block: its wording, whether the
	countdown shows, whether an ended deal stays on the page, then its
	cssSelectors keys. What the deal is (dates, waitlist, what guests give)
	is set per product in the product editor's Deals addon.
*/
const TEXTS = [
	['title', 'Title', "The deal's label from the product"],
	['buttonText', 'Button', 'Join the waitlist'],
	['joinedText', 'After joining', "You're on the waitlist. We'll let you know when the deal starts."],
	['countText', 'Waitlist count ({count} = number)', '{count} people on the waitlist'],
	['emptyText', 'When nobody has joined', 'Be the first to join the waitlist'],
	['startsInText', 'Countdown before the deal', 'Starts in'],
	['endsInText', 'Countdown during the deal', 'Ends in'],
	['upcomingText', 'Status: upcoming', 'Coming soon'],
	['liveText', 'Status: live', 'Live now'],
	['endedText', 'Status: ended', 'This deal has ended'],
];

const ProductDealOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	var cssSelectors = withElementCssDefaults('productDeal', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				{TEXTS.map(([key, label, placeholder]) => (
					<div key={key} className="flex flex-col gap-2">
						<label className="text-xs font-medium text-gray-600">{label}</label>
						<input type="text" placeholder={placeholder} className={inputClass} value={options?.[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
					</div>
				))}

				<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={options?.showCountdown !== false} onChange={ev => setOption('showCountdown', ev.target.checked)} />
					Show the countdown
				</label>

				<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={options?.hideWhenEnded !== false} onChange={ev => setOption('hideWhenEnded', ev.target.checked)} />
					Hide once the deal has ended
				</label>

				<p className="text-xs text-gray-500">Shows only on products with the Deals addon on. The dates, the waitlist and what guests are asked for are set on each product. The builder shows a sample deal.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductDealOptions;
