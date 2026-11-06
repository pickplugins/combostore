import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";
import { defaultCartCrossSellsTitle, defaultCartCrossSellsLimit } from "./CartCrossSellsView";

const selectClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Missing keys mean "on", the same defaults CartView passes to the checkout,
	so an older block's switches show what the shop actually does.
*/
const toggleDefaults = {
	editMode: true,
	deliveryLocation: true,
	shippingAddress: true,
	shippingMethods: true,
	orderNotes: true,
	orderSubscription: true,
	countryCity: true,
};

const toggles = [
	['editMode', 'Edit Mode (keep the drawer open in the builder)'],
	['deliveryLocation', 'Enable Location Picker?'],
	['shippingAddress', 'Enable Shipping?'],
	['shippingMethods', 'Enable Shipping Methods?'],
	['orderNotes', 'Enable Order Notes?'],
	['orderSubscription', 'Enable Order Subscription?'],
	['countryCity', 'Enable Country & City?'],
];

/*
	Settings panel for the `cart` block: the trigger style, the builder's
	Edit Mode, the checkout switches, then every part of the trigger and
	drawer through its cssSelectors keys, declared with their defaults in
	ElementsDefinition.js.
*/
const CartOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing.
	   The old cart's keys (popover, cart-header...) are dropped. */
	var cssSelectors = withElementCssDefaults('cart', props?.cssSelectors);

	const isOn = (key) => options?.[key] ?? toggleDefaults[key];
	/* On for blocks saved before the option existed, as in CartView. */
	const crossSellsOn = options?.crossSells ?? true;

	return (
		<div className="p-3" >

			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Trigger</label>
					<select className={selectClass} value={options?.triggerStyle === 'icon' ? 'icon' : 'total'} onChange={ev => {
						var optionsX = { ...options }
						optionsX.triggerStyle = ev.target.value
						updateBlock('options', optionsX)
					}}>
						<option value="total">Cart total (shown once the cart has items)</option>
						<option value="icon">Cart icon with count (always shown)</option>
					</select>
				</div>

				{toggles.map(([key, label]) => (
					<div key={key} className="flex justify-between items-center text-sm">
						<div>{label}</div>
						<div className="cursor-pointer " onClick={() => {
							var optionsX = { ...options }
							optionsX[key] = !isOn(key)
							updateBlock('options', optionsX)
						}}>
							{isOn(key) ? <IconCheckbox /> : <IconSquare />}
						</div>
					</div>
				))}

				{/* Frequently bought together: the cart products' cross-sells, under the items (CartCrossSellsView). */}
				<div className="flex flex-col gap-2 border-t border-gray-200 pt-3">
					<div className="flex justify-between items-center text-sm">
						<div>Show &ldquo;Frequently bought together&rdquo;?</div>
						<div className="cursor-pointer" onClick={() => updateBlock('options', { ...options, crossSells: !crossSellsOn })}>
							{crossSellsOn ? <IconCheckbox /> : <IconSquare />}
						</div>
					</div>
					{crossSellsOn && (
						<>
							<div className="flex flex-col gap-1">
								<label htmlFor="cart-xs-title" className="text-xs font-medium text-gray-600">Section title</label>
								<input id="cart-xs-title" type="text" className={selectClass} placeholder={defaultCartCrossSellsTitle} value={options?.crossSellsTitle ?? defaultCartCrossSellsTitle} onChange={ev => updateBlock('options', { ...options, crossSellsTitle: ev.target.value })} />
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="cart-xs-limit" className="text-xs font-medium text-gray-600">Most products shown</label>
								<input id="cart-xs-limit" type="number" min={1} max={12} className={selectClass} placeholder={String(defaultCartCrossSellsLimit)} value={options?.crossSellsLimit ?? ''} onChange={ev => updateBlock('options', { ...options, crossSellsLimit: ev.target.value })} />
							</div>
							<p className="text-xs text-gray-500">
								Shows the <em>Cross-sells</em> picked on each product in the cart (product editor, Upsells &amp; Cross-sells), without products already in the cart. Hidden when there are none. Style it with <code>cross-sells</code>, <code>cross-sells-title</code>, <code>cross-sells-items</code> and <code>cross-sells-item</code>.
							</p>
						</>
					)}
				</div>

				<p className="text-xs text-gray-500">
					The selectors below style the trigger and the drawer. The checkout step inside <code>checkout-body</code> is the checkout form and is not styled here.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default CartOptions;
