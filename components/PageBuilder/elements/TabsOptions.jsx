import React from "react";
import { IconX } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import ToggleContent from '../../../components/ToggleContent';
import IconPicker from "../../../components/IconPicker";
import { tabsItemsFor } from "./TabsView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const addButtonClass = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit";

/*
	Settings panel for the `tabs` block: orientation, the tab labels (each
	with an icon and icon size), then every part through its cssSelectors
	keys, declared with their defaults in ElementsDefinition.js.

	Labels and panels are joined by index: label n opens the n-th Tabs Item.
	Every write builds new objects rather than changing the saved ones in
	place, which would also have changed the builder's undo history.
*/
const TabsOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;
	var id = props?.id;

	var options = props?.options ?? {};
	var children = props?.children ?? [];
	/* Same list the tabs render, so a block saved without one still shows its tabs here. */
	var tabsItems = tabsItemsFor(options, children);

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('tabs', props?.cssSelectors);

	const saveItems = (items) => updateBlock('options', { ...options, tabsItems: items });
	const setItem = (itemIndex, changes) => saveItems(tabsItems.map((item, i) => i === itemIndex ? { ...item, ...changes } : item));

	const Title = ({ item, itemIndex }) => (
		<div className="flex flex-1 justify-between items-center">
			<div className="text-xs">{item.label}</div>
			<div title="Remove this label" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {
				ev.stopPropagation();
				saveItems(tabsItems.filter((_, i) => i !== itemIndex));
			}}><IconX size={14} /></div>
		</div>
	);

	return (
		<div className="p-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Orientation</label>
					<select className={inputClass} value={options?.orientation === 'vertical' ? 'vertical' : ''} onChange={ev => updateBlock('options', { ...options, orientation: ev.target.value })}>
						<option value="">Horizontal</option>
						<option value="vertical">Vertical (from large screens)</option>
					</select>
				</div>

				<div className={addButtonClass} onClick={() => {
					saveItems([...tabsItems, { label: `Tab ${tabsItems.length + 1}` }]);
					handleMoveBlock({ paletteType: 'tabsItem' }, id, 'inside');
				}}>Add Item</div>

				<p className="text-xs text-gray-500">
					Label 1 opens the first Tabs Item, label 2 the second, and so on. Removing a label here leaves its Tabs Item; delete that block too to remove the content.
				</p>

				<div className="flex flex-col gap-1">
					{tabsItems.map((item, itemIndex) => (
						<ToggleContent key={itemIndex} iconPosition='left' title={<Title item={item} itemIndex={itemIndex} />} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
								<div>
									<input type="text" className={inputClass} value={item.label ?? ''} onChange={ev => setItem(itemIndex, { label: ev.target.value })} />
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
								<div>
									<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setItem(itemIndex, { icon: args })} />
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
								<div>
									<input type="number" min="8" className={inputClass} placeholder="18" value={item.iconSize ?? ''} onChange={ev => setItem(itemIndex, { iconSize: ev.target.value === '' ? undefined : Number(ev.target.value) })} />
								</div>
							</div>
						</ToggleContent>
					))}
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default TabsOptions;
