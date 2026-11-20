import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `productWarranty` block: summary line only or the
	full details, the icon, which details to show and their labels, then its
	cssSelectors keys.
*/
const ProductWarrantyOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productWarranty', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	const field = (key, label, placeholder) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
			<input type="text" placeholder={placeholder} className={inputClass} value={options?.[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
		</div>
	);

	const toggle = (key, label) => (
		<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" checked={options?.[key] !== false} onChange={ev => setOption(key, ev.target.checked)} />
			{label}
		</label>
	);

	var isFull = options?.display === 'full';

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Display</label>
					<select className={inputClass} value={isFull ? 'full' : 'summary'} onChange={ev => setOption('display', ev.target.value)}>
						<option value="summary">Summary line (e.g. “12 months brand warranty”)</option>
						<option value="full">Summary and details</option>
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="18" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				{toggle('showProvider', 'Show who provides it')}
				{options?.showProvider !== false && field('providerPrefix', 'Provider text', 'by')}

				{isFull && (
					<>
						{toggle('showCoverage', 'Show what is covered')}
						{options?.showCoverage !== false && field('coverageLabel', 'Label', 'What is covered')}
						{toggle('showExclusions', 'Show what is not covered')}
						{options?.showExclusions !== false && field('exclusionsLabel', 'Label', 'Not covered')}
						{toggle('showClaim', 'Show how to claim')}
						{options?.showClaim !== false && field('claimLabel', 'Label', 'How to claim')}
						{toggle('showContact', 'Show claim contact')}
						{options?.showContact !== false && field('contactLabel', 'Label', 'Claim contact')}
					</>
				)}

				<p className="text-xs text-gray-500">The warranty comes from the product's Warranty addon. Products without one show nothing (the builder shows a dimmed sample). Details left empty on the product are skipped.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductWarrantyOptions;
