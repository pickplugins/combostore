import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `productSku` block: the label before the SKU, an
	optional icon and its size, then its cssSelectors keys. (Its "Classes"
	field saved options.classes, which nothing reads.)
*/
const ProductSkuOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productSku', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<input type="text" placeholder="SKU:" className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="24" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<p className="text-xs text-gray-500">Shows the picked variation's SKU when it has one, otherwise the product's; nothing for a product without one. The builder shows a dimmed sample then.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductSkuOptions;
