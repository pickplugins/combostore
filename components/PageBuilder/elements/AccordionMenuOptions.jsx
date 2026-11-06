import React from "react";
import { IconCheckbox, IconSquare, IconX } from "@tabler/icons-react";
import ToggleContent from '../../../components/ToggleContent';
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";
import TermsQueryPrams from "../TermsQueryPrams";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const addButtonClass = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit";
const iconPickerLabelClass = 'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit';

/*
	Settings panel for the `accordionMenu` block: where the links point
	(root, hierarchical), where the terms come from (manual items, or a terms
	query), the default icon, then every part through its cssSelectors keys,
	declared with their defaults in ElementsDefinition.js.

	Every write builds new objects rather than changing the saved ones in
	place, which would also have changed the builder's undo history.
*/
const AccordionMenuOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	var source = options?.source ?? 'manual';
	var items = Array.isArray(options?.items) ? options.items : [];
	var hierarchical = options?.hierarchical;
	/* An object, as TermsQueryPrams edits it; older blocks may have saved []. */
	var queryPrams = options?.queryPrams && !Array.isArray(options.queryPrams) ? options.queryPrams : {};

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing.
	   The never-used li / icon / text keys are dropped. */
	var cssSelectors = withElementCssDefaults('accordionMenu', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	const setItem = (itemIndex, changes) => setOption('items', items.map((item, i) => i === itemIndex ? { ...item, ...changes } : item));

	const Title = ({ item, itemIndex }) => (
		<div className="flex flex-1 justify-between items-center">
			<div className="text-xs">{item.name || '(no text)'}</div>
			<div title="Remove" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {
				ev.stopPropagation();
				setOption('items', items.filter((_, i) => i !== itemIndex));
			}}><IconX size={14} /></div>
		</div>
	);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Root</label>
					<div>
						<input type="text" placeholder="categories" className={inputClass} value={options?.root ?? ''} onChange={ev => setOption('root', ev.target.value)} />
					</div>
				</div>

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hierarchical links (root/parent/child/)</label>
					<div className="cursor-pointer" onClick={() => setOption('hierarchical', !hierarchical)}>
						{hierarchical ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Source</label>
					<div>
						<select className={inputClass} value={source} onChange={ev => setOption('source', ev.target.value)} >
							<option value="manual">Manual items</option>
							<option value="terms">Terms (fetched from the shop)</option>
						</select>
					</div>
				</div>

				{source == 'terms' && (
					<TermsQueryPrams queryPrams={queryPrams} onChangeQuery={queryPramsX => setOption('queryPrams', queryPramsX)} />
				)}

				{source == 'manual' && (
					<>
						<div className={addButtonClass} onClick={() => setOption('items', [...items, { name: 'Custom Item', slug: '', count: '' }])}>Add</div>

						<div className="flex flex-col gap-1">
							{items.map((item, itemIndex) => (
								<ToggleContent key={itemIndex} iconPosition='left' title={<Title item={item} itemIndex={itemIndex} />} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>
									<div className="flex flex-col gap-2">
										<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
										<input type="text" className={inputClass} value={item.name ?? ''} onChange={ev => setItem(itemIndex, { name: ev.target.value })} />
									</div>
									<div className="flex flex-col gap-2">
										<label htmlFor="" className="text-xs font-medium text-gray-600">Slug</label>
										<input type="text" className={inputClass} value={item.slug ?? ''} onChange={ev => setItem(itemIndex, { slug: ev.target.value })} />
									</div>
									<div className="flex flex-col gap-2">
										<label htmlFor="" className="text-xs font-medium text-gray-600">Count</label>
										<input type="text" inputMode="numeric" className={inputClass} value={item.count ?? ''} onChange={ev => setItem(itemIndex, { count: ev.target.value })} />
									</div>
									<div className="flex flex-col gap-2">
										<label htmlFor="" className="text-xs font-medium text-gray-600">Icon (overrides the default icon)</label>
										<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={iconPickerLabelClass} onOptionsChoose={(args) => setItem(itemIndex, { icon: args })} />
									</div>
									<div className="flex flex-col gap-2">
										<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
										<input type="number" className={inputClass} value={item.iconSize ?? ''} onChange={ev => setItem(itemIndex, { iconSize: ev.target.value === '' ? undefined : Number(ev.target.value) })} />
									</div>
								</ToggleContent>
							))}
						</div>
					</>
				)}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Default icon (every item)</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={iconPickerLabelClass} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Default icon size</label>
					<input type="number" placeholder="20" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default AccordionMenuOptions;
