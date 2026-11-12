import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";
import { withElementCssDefaults } from "../ElementsDefinition";
import { withLegacyStepperKeys } from "./AddToCartView";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `addToCart` block: button text, icon and size, the
	two hide switches, then every part through its cssSelectors keys, declared
	with their defaults in ElementsDefinition.js.
*/
const AddToCartOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	/* Older blocks saved the misspelled hideQuanity; either one being true means hidden. */
	var hideQuantity = options?.hideQuantity === true || options?.hideQuanity === true;
	var hideButton = options?.hideButton;
	var iconSize = options?.iconSize;
	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing.
	   The old, swapped quantity-plus / quantity-minus keys are carried over to the new keys first, then dropped. */
	var cssSelectors = withElementCssDefaults('addToCart', withLegacyStepperKeys(props?.cssSelectors));

	const setOption = (key, value) => {
		var optionsX = { ...options }
		optionsX[key] = value
		updateBlock('options', optionsX)
	};

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Button Text</label>
					<div>
						<input type="text" className={inputClass} value={options?.buttonText ?? ''} onChange={ev => setOption('buttonText', ev.target.value)} />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
					<div>
						<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
					<div>
						<input type="number" className={inputClass} placeholder="20" value={iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
					</div>
				</div>

				<div className="flex justify-between gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hide Quantity</label>
					<div className="cursor-pointer " onClick={() => {
						var optionsX = { ...options }
						optionsX.hideQuantity = !hideQuantity
						delete optionsX.hideQuanity
						updateBlock('options', optionsX)
					}}>
						{hideQuantity ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<div className="flex justify-between gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hide Button</label>
					<div className="cursor-pointer " onClick={() => setOption('hideButton', !hideButton)}>
						{hideButton ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Source</label>
					<div>
						<select className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.source || 'fixedMiddle'} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.source = value
							updateBlock('options', optionsX)

						}} >
							<option value="">Choose</option>
							<option value="product">Product</option>
							<option value="archive">Archive</option>

						</select>
					</div>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default AddToCartOptions;
