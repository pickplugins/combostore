import React from "react";
import CssSelectors from "../CssSelectors";
import { menuVisibilityClasses } from "./MenuView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `menu` block: add a menu item, from which screen
	width the menu shows, its name for screen readers, then its cssSelectors
	keys. The width was hard-coded to extra-large screens and up.
*/
const MenuOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;
	var options = props?.options ?? {};
	var id = props?.id;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('menu', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	/* What a menu without the option does, so the select shows it. */
	var current = options?.showFrom ?? (menuVisibilityClasses(options, props?.cssSelectors?.['*']?.classes) ? 'xl' : 'custom');

	return (
		<div className="p-3" >
			<div className="flex flex-col gap-3">
				<button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"
					onClick={() => handleMoveBlock?.({ paletteType: 'menuItem' }, id, 'inside')}>Add Item</button>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Show from</label>
					<select className={inputClass} value={current} onChange={ev => setOption('showFrom', ev.target.value === 'custom' ? undefined : ev.target.value)}>
						<option value="all">Every screen</option>
						<option value="md">Medium screens and up (768px)</option>
						<option value="lg">Large screens and up (1024px)</option>
						<option value="xl">Extra-large screens and up (1280px)</option>
						<option value="custom">Set by the * classes</option>
					</select>
					<p className="text-xs text-gray-500">Below that width the menu is hidden; show an Accordion Menu there for phones. In the builder it always shows.</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Name for screen readers</label>
					<input type="text" placeholder="Menu" className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default MenuOptions;
