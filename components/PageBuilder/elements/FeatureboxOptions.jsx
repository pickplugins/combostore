import React from "react";
import { IconX, IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import ToggleContent from '../../../components/ToggleContent';
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const smallButton = 'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit';

/*
	Settings panel for the `featurebox` block: the features (title,
	description, icon and icon size; add, remove, reorder), the wrapper tag,
	then its cssSelectors keys. Every change builds a new items array:
	editing or removing an item used to write into the saved one
	(items[index].title = ..., splice). Its Classes field saved
	options.classes, which nothing reads. (It was named ListOptions.)
*/
const FeatureboxOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var items = Array.isArray(options?.items) ? options.items : [];

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('featurebox', props?.cssSelectors);

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

				<div className="flex items-center justify-between">
					<label className="text-xs font-medium text-gray-600">Features</label>
					<button type="button" className={smallButton} onClick={() => setItems([...items, { title: 'Feature title', description: 'A short description.', icon: '', iconSize: '' }])}>Add</button>
				</div>

				<div className="flex flex-col gap-1.5">
					{items.map((item, i) => (
						<ToggleContent key={i} iconPosition='left' contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}
							title={(
								<div className="flex w-full items-center justify-between gap-2">
									<span className="truncate text-xs">{item?.title || '(no title)'}</span>
									<span className="flex items-center gap-1 text-gray-400" onClick={ev => ev.stopPropagation()}>
										<button type="button" className="cursor-pointer hover:text-gray-700 disabled:opacity-30" disabled={i === 0} onClick={() => move(i, -1)} aria-label="Move up"><IconChevronUp size={14} /></button>
										<button type="button" className="cursor-pointer hover:text-gray-700 disabled:opacity-30" disabled={i === items.length - 1} onClick={() => move(i, 1)} aria-label="Move down"><IconChevronDown size={14} /></button>
										<button type="button" className="cursor-pointer hover:text-red-600" onClick={() => setItems(items.filter((_, j) => j !== i))} aria-label="Remove"><IconX size={14} /></button>
									</span>
								</div>
							)}>
							<div className="flex flex-col gap-3">
								<div className="flex flex-col gap-1">
									<label className="text-xs font-medium text-gray-600">Title</label>
									<input type="text" className={inputClass} value={item?.title ?? ''} onChange={ev => setItem(i, 'title', ev.target.value)} />
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-xs font-medium text-gray-600">Description</label>
									<textarea rows={3} className={inputClass} value={item?.description ?? ''} onChange={ev => setItem(i, 'description', ev.target.value)} />
								</div>
								<div className="flex items-center justify-between gap-2">
									<label className="text-xs font-medium text-gray-600">Icon{item?.icon ? `: ${item.icon}` : ''}</label>
									<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={smallButton} onOptionsChoose={(args) => setItem(i, 'icon', args)} />
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-xs font-medium text-gray-600">Icon size (empty: the Icon block's)</label>
									<input type="number" className={inputClass} value={item?.iconSize ?? ''} onChange={ev => setItem(i, 'iconSize', ev.target.value === '' ? '' : Number(ev.target.value))} />
								</div>
							</div>
						</ToggleContent>
					))}
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Wrapper</label>
					<select className={inputClass} value={['div', 'section', 'ul', 'ol'].includes(options?.tag) ? options.tag : 'div'} onChange={ev => setOption('tag', ev.target.value)}>
						<option value="div">DIV</option>
						<option value="section">SECTION</option>
						<option value="ul">List (ul, each feature an li)</option>
						<option value="ol">Numbered list (ol)</option>
					</select>
				</div>

				<p className="text-xs text-gray-500">The blocks inside (an Icon, a Featurebox Title, a Featurebox Details…) are laid out once and repeated for every feature, each showing that feature's values. <code>loop-item</code> styles each feature; <code>title</code>, <code>description</code> and <code>icon</code> are added to those blocks.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default FeatureboxOptions;
