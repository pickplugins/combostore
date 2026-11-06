import React from "react";
import { IconX, IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import CssClassPicker from "../CssClassPicker";
import ToggleContent from '../../../components/ToggleContent';
import { accordionItemsFor } from "./AccordionView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const addButtonClass = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit";

/*
	Settings panel for the `accordion` block: whether several items can be
	open at once, the header labels (each with classes of its own), then every
	part through its cssSelectors keys, declared with their defaults in
	ElementsDefinition.js.

	Labels and panels are joined by index: label n heads the n-th Accordion
	Item. Every write builds new objects rather than changing the saved ones
	in place, which would also have changed the builder's undo history.
*/
const AccordionOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;
	var id = props?.id;

	var options = props?.options ?? {};
	var children = props?.children ?? [];
	/* Same list the accordion renders: one entry per item, falling back to the item's own label. */
	var items = accordionItemsFor(options, children);
	/* A label saved beyond the last item is kept, so removing an item block does not lose it. */
	var savedItems = Array.isArray(options?.items) ? options.items : [];
	if (savedItems.length > items.length) items = [...items, ...savedItems.slice(items.length)];

	var multiple = options?.multiple !== false;

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('accordion', props?.cssSelectors);

	const saveItems = (list) => updateBlock('options', { ...options, items: list });
	const setItem = (itemIndex, changes) => saveItems(items.map((item, i) => i === itemIndex ? { ...item, ...changes } : item));

	const Title = ({ item, itemIndex }) => (
		<div className="flex flex-1 justify-between items-center">
			<div className="text-xs">{item.label}</div>
			<div title="Remove this label" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {
				ev.stopPropagation();
				saveItems(items.filter((_, i) => i !== itemIndex));
			}}><IconX size={14} /></div>
		</div>
	);

	return (
		<div className="p-3" >
			<div className="flex flex-col gap-3">

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Allow several open at once</label>
					<div className="cursor-pointer" onClick={() => updateBlock('options', { ...options, multiple: !multiple })}>
						{multiple ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<div className={addButtonClass} onClick={() => {
					saveItems([...items, { label: `Item ${items.length + 1}`, classes: "" }]);
					handleMoveBlock({ paletteType: 'accordionItem' }, id, 'inside');
				}}>Add Item</div>

				<p className="text-xs text-gray-500">
					Label 1 heads the first Accordion Item, label 2 the second, and so on. Removing a label here leaves its Accordion Item; delete that block too to remove the content.
				</p>

				<div className="flex flex-col gap-1">
					{items.map((item, itemIndex) => (
						<ToggleContent key={itemIndex} iconPosition='left' title={<Title item={item} itemIndex={itemIndex} />} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
								<div>
									<input type="text" className={inputClass} value={item.label ?? ''} onChange={ev => setItem(itemIndex, { label: ev.target.value })} />
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="text-xs font-medium text-gray-600">Header classes (this item only)</label>
								<div>
									{/* Read this item's classes; it used to read `items.classes`, so the field always looked empty. */}
									<CssClassPicker type="text" className={inputClass} value={item.classes ?? ''} onChange={(value) => setItem(itemIndex, { classes: value })} />
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

export default AccordionOptions;
