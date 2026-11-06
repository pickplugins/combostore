import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const smallButton = 'inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit';

/*
	Settings panel for the `menuItem` block: add an item to its sub-menu, the
	label and URL, an icon and its size, then its cssSelectors keys. (Its
	Classes field saved options.classes, which nothing reads; it was named
	ListOptions.)
*/
const MenuItemOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;
	var options = props?.options ?? {};
	var id = props?.id;
	var hasChildren = Array.isArray(props?.children) && props.children.length > 0;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('menuItem', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<button type="button" className={smallButton} onClick={() => handleMoveBlock?.({ paletteType: 'menuItem' }, id, 'inside')}>Add a sub-menu item</button>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<input type="text" className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">URL</label>
					<input type="text" placeholder="/shop or https://…" className={inputClass} value={options?.url ?? ''} onChange={ev => setOption('url', ev.target.value)} />
					<p className="text-xs text-gray-500">
						{hasChildren
							? 'With a URL the label goes to that page and the arrow opens the sub-menu; leave it empty (or #) for a label that only opens the sub-menu.'
							: 'Leave it empty for plain text.'}
					</p>
				</div>

				<div className="flex items-center justify-between gap-2">
					<label className="text-xs font-medium text-gray-600">Icon{options?.icon ? `: ${options.icon}` : ''}</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={smallButton} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="24" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<p className="text-xs text-gray-500">Sub-menus open on hover and keyboard focus, and from the arrow on touch screens. The menu's own menu-item, menu-link, link-label, icon and sub-menu classes apply too.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default MenuItemOptions;
