import React from "react";
import CssSelectors from "../CssSelectors";
import { notifyDefaults, notifyPositions } from "./NotifyView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `notify` block: where the toasts show, for how
	long, how many at once, then its cssSelectors keys. It used to be a copy
	of the button panel (label, link, icon), none of which the block read.
*/
const NotifyOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it; the old input/button keys are dropped. */
	var cssSelectors = withElementCssDefaults('notify', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					Shows the shop&apos;s messages (added to cart, coupon applied, errors) as toasts. Put one on every page that needs them, e.g. in the site footer.
				</p>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Position</label>
					<select className={inputClass} value={options?.position ?? notifyDefaults.position} onChange={ev => setOption('position', ev.target.value)}>
						{Object.entries(notifyPositions).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
					</select>
					<p className="text-xs text-gray-500">On the right, toasts move to the left while the cart drawer is open.</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Show each for (seconds)</label>
					<input type="number" min={1} placeholder={String(notifyDefaults.duration)} className={inputClass} value={options?.duration ?? ''} onChange={ev => setOption('duration', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Most shown at once</label>
					<input type="number" min={1} placeholder={String(notifyDefaults.max)} className={inputClass} value={options?.max ?? ''} onChange={ev => setOption('max', ev.target.value)} />
				</div>

				<p className="text-xs text-gray-500">
					<code>*</code> is the stack, <code>item</code> each toast; <code>success</code>, <code>error</code>, <code>warning</code> and <code>info</code> are added to an item of that kind.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default NotifyOptions;
