import React from "react";
import { IconX, IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import ToggleContent from '../../../components/ToggleContent';
import IconPicker from "../../IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const smallButton = 'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit';

/*
	Settings panel for the `linkList` block: the heading, the links (text,
	URL, icon, new tab; add, remove, reorder), the list tag, a default icon
	and its size, then its cssSelectors keys.

	Every change builds a new items array: editing or removing an item used
	to write into the saved one (items[index].text = ..., splice), which
	changed the block behind the undo history's back. Its Classes field
	saved options.classes, which nothing reads.
*/
const LinkListOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var items = Array.isArray(options?.items) ? options.items : [];

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('linkList', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	const setItems = (next) => setOption('items', next);
	const setItem = (i, key, value) => setItems(items.map((item, j) => j === i ? { ...item, [key]: value } : item));
	const move = (i, by) => {
		var j = i + by;
		if (j < 0 || j >= items.length) return;
		var next = [...items];
		[next[i], next[j]] = [next[j], next[i]];
		setItems(next);
	};

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Heading (optional)</label>
					<input type="text" placeholder="Quick links" className={inputClass} value={options?.headerText ?? ''} onChange={ev => setOption('headerText', ev.target.value)} />
				</div>

				<div className="flex items-center justify-between">
					<label className="text-xs font-medium text-gray-600">Links</label>
					<button type="button" className={smallButton} onClick={() => setItems([...items, { text: 'Link text', icon: '', slug: '/' }])}>Add</button>
				</div>

				<div className="flex flex-col gap-1.5">
					{items.map((item, i) => (
						<ToggleContent key={i} iconPosition='left' contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}
							title={(
								<div className="flex w-full items-center justify-between gap-2">
									<span className="truncate text-xs">{item?.text || '(no text)'}</span>
									<span className="flex items-center gap-1 text-gray-400" onClick={ev => ev.stopPropagation()}>
										<button type="button" className="cursor-pointer hover:text-gray-700 disabled:opacity-30" disabled={i === 0} onClick={() => move(i, -1)} aria-label="Move up"><IconChevronUp size={14} /></button>
										<button type="button" className="cursor-pointer hover:text-gray-700 disabled:opacity-30" disabled={i === items.length - 1} onClick={() => move(i, 1)} aria-label="Move down"><IconChevronDown size={14} /></button>
										<button type="button" className="cursor-pointer hover:text-red-600" onClick={() => setItems(items.filter((_, j) => j !== i))} aria-label="Remove"><IconX size={14} /></button>
									</span>
								</div>
							)}>
							<div className="flex flex-col gap-3">
								<div className="flex flex-col gap-1">
									<label className="text-xs font-medium text-gray-600">Text</label>
									<input type="text" className={inputClass} value={item?.text ?? ''} onChange={ev => setItem(i, 'text', ev.target.value)} />
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-xs font-medium text-gray-600">URL</label>
									<input type="text" placeholder="/shop or https://…" className={inputClass} value={item?.slug ?? ''} onChange={ev => setItem(i, 'slug', ev.target.value)} />
								</div>
								<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
									<input type="checkbox" checked={!!item?.newTab} onChange={ev => setItem(i, 'newTab', ev.target.checked)} />
									Open in a new tab
								</label>
								<div className="flex items-center justify-between gap-2">
									<label className="text-xs font-medium text-gray-600">Icon{item?.icon ? `: ${item.icon}` : ''}</label>
									<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={smallButton} onOptionsChoose={(args) => setItem(i, 'icon', args)} />
								</div>
							</div>
						</ToggleContent>
					))}
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">List type</label>
					<select className={inputClass} value={options?.tag === 'ol' ? 'ol' : 'ul'} onChange={ev => setOption('tag', ev.target.value)}>
						<option value="ul">Unordered (ul)</option>
						<option value="ol">Numbered (ol)</option>
					</select>
				</div>

				<div className="flex items-center justify-between gap-2">
					<label className="text-xs font-medium text-gray-600">Default icon{options?.icon ? `: ${options.icon}` : ''}</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={smallButton} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="24" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<p className="text-xs text-gray-500">The default icon shows on links without their own. An item with no URL is plain text.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default LinkListOptions;
