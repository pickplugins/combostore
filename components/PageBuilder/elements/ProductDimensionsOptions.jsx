import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const weightUnits = ['kg', 'g', 'mg', 'lb', 'oz', 't'];
const dimensionUnits = ['cm', 'mm', 'm', 'in', 'ft', 'yd'];

/*
	Settings panel for the `productDimensions` block: the layout, the units the
	product editor's plain numbers are in, the row labels, an optional heading
	and icon, then its cssSelectors keys.
*/
const ProductDimensionsOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productDimensions', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	const field = (key, label, placeholder) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
			<input type="text" placeholder={placeholder} className={inputClass} value={options?.[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
		</div>
	);

	const unitSelect = (key, label, units, fallback) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
			<select className={inputClass} value={options?.[key] ?? fallback} onChange={ev => setOption(key, ev.target.value)}>
				{units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
			</select>
		</div>
	);

	var inline = options?.format === 'inline';

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Format</label>
					<select className={inputClass} value={inline ? 'inline' : 'list'} onChange={ev => setOption('format', ev.target.value)}>
						<option value="list">List (a row per dimension)</option>
						<option value="inline">Inline size (L × W × H)</option>
					</select>
				</div>

				<div className="grid grid-cols-2 gap-3">
					{unitSelect('weightUnit', 'Weight unit', weightUnits, 'kg')}
					{unitSelect('dimensionUnit', 'Size unit', dimensionUnits, 'cm')}
				</div>

				<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={options?.showWeight !== false} onChange={ev => setOption('showWeight', ev.target.checked)} />
					Show weight
				</label>

				{field('label', 'Heading', 'Dimensions')}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Heading icon</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="20" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				{field('weightLabel', 'Weight label', 'Weight')}
				{inline ? field('sizeLabel', 'Size label', 'Dimensions') : (
					<>
						{field('lengthLabel', 'Length label', 'Length')}
						{field('widthLabel', 'Width label', 'Width')}
						{field('heightLabel', 'Height label', 'Height')}
					</>
				)}

				<p className="text-xs text-gray-500">Shows the picked variation's value where it has one, otherwise the product's. Values left at 0 are skipped, and a product with none shows nothing (the builder shows dimmed samples). An empty label leaves just the value.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductDimensionsOptions;
