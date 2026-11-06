import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const iconPickerLabelClass = 'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit';

/*
	Settings panel for the `productStockStatus` block: the texts and icons for
	each state, an optional label, the builder's preview state, then every
	part through its cssSelectors keys. (The status select used to fix the
	status for every product; the In stock / Out of stock texts had no field.)
*/
const ProductStockStatusOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productStockStatus', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	const field = (key, label, placeholder) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
			<input type="text" placeholder={placeholder} className={inputClass} value={options?.[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
		</div>
	);

	const icon = (key, label) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
			<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={iconPickerLabelClass} onOptionsChoose={(args) => setOption(key, args)} />
		</div>
	);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Preview as (builder only)</label>
					<select className={inputClass} value={options?.stock_status === 'outofstock' ? 'outofstock' : 'instock'} onChange={ev => setOption('stock_status', ev.target.value)} >
						<option value="instock">In stock</option>
						<option value="outofstock">Out of stock</option>
					</select>
					<p className="text-xs text-gray-500">On the shop each product shows its own status. This only picks which state the builder shows outside a product loop.</p>
				</div>

				{field('inStockText', 'In stock text', 'In stock')}
				{icon('inStockIcon', 'In stock icon')}
				{field('outOfStockText', 'Out of stock text', 'Out of stock')}
				{icon('outOfStockIcon', 'Out of stock icon')}
				{field('label', 'Label (before the status)', 'Availability:')}
				{icon('labelIcon', 'Label icon')}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="24" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductStockStatusOptions;
