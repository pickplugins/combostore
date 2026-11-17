import React, { useState } from "react";
import { IconTrash, IconPlus } from "@tabler/icons-react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";
import { OPEN_TRIGGERS, CLOSE_TRIGGERS, ENTRANCE_ANIMATIONS, CLOSE_ANIMATIONS, newTrigger } from "./popupTriggers";
import { POPUP_POSITIONS } from "./PopupView";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const labelClass = "text-xs font-medium text-gray-600";
const sectionClass = "flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-2.5";
const sectionTitle = "text-[11px] font-semibold uppercase tracking-wide text-gray-400";

const POSITION_LABELS = {
	center: 'Center', top: 'Top', bottom: 'Bottom', 'top-left': 'Top left', 'top-right': 'Top right',
	'bottom-left': 'Bottom left', 'bottom-right': 'Bottom right', left: 'Left side (drawer)', right: 'Right side (drawer)',
};

/*
	One list of triggers - open or close - with an "add" picker. Each row
	shows the trigger's description and its fields (popupTriggers.js).
*/
function TriggerList({ title, help, catalogue, value, onChange }) {
	var list = Array.isArray(value) ? value : [];
	var [adding, setadding] = useState('');
	var update = (i, patch) => onChange(list.map((t, idx) => idx === i ? { ...t, ...patch } : t));

	return (
		<div className={sectionClass}>
			<span className={sectionTitle}>{title}</span>
			{help && <p className="text-xs text-gray-500">{help}</p>}

			{list.map((trigger, i) => {
				var def = catalogue[trigger?.id];
				return (
					<div key={i} className="flex flex-col gap-1.5 rounded-md bg-gray-50 p-2">
						<div className="flex items-center justify-between gap-2">
							<span className="text-xs font-semibold text-gray-800">{def?.label ?? trigger?.id}</span>
							<button type="button" aria-label="Remove trigger" className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600" onClick={() => onChange(list.filter((_, idx) => idx !== i))}>
								<IconTrash size={14} />
							</button>
						</div>
						{def?.description && <p className="text-[11px] leading-snug text-gray-500">{def.description}</p>}
						{!def && <p className="text-[11px] text-amber-700">Unknown trigger - it does nothing. Remove it.</p>}
						{def?.fields?.length > 0 && (
							<div className={`grid gap-2 ${def.fields.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
								{def.fields.map(field => (
									<label key={field.key} className="flex flex-col gap-1">
										<span className="text-[11px] text-gray-600">{field.label}{field.unit ? ` (${field.unit})` : ''}</span>
										<input type={field.type === 'number' ? 'number' : 'text'} placeholder={field.placeholder} className={inputClass}
											value={trigger?.[field.key] ?? ''}
											onChange={ev => update(i, { [field.key]: field.type === 'number' && ev.target.value !== '' ? Number(ev.target.value) : ev.target.value })} />
									</label>
								))}
							</div>
						)}
					</div>
				);
			})}

			<div className="flex items-center gap-2">
				<select className={inputClass} value={adding} onChange={ev => setadding(ev.target.value)}>
					<option value="">Add a trigger...</option>
					{Object.entries(catalogue).map(([key, def]) => <option key={key} value={key}>{def.label}</option>)}
				</select>
				<button type="button" disabled={!adding} className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs font-medium text-gray-700 hover:border-brand/40 hover:text-brand-700 disabled:opacity-40"
					onClick={() => { if (!adding) return; onChange([...list, newTrigger(catalogue, adding)]); setadding(''); }}>
					<IconPlus size={14} /> Add
				</button>
			</div>
		</div>
	);
}

/*
	Settings panel for the `popup` block: edit mode (builder only), what
	opens and closes it, how often it may show, where and how it appears,
	the close button, then its cssSelectors keys.
*/
const PopupOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('popup', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	const check = (key, label, help) => (
		<label className="flex cursor-pointer items-start gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" className="mt-0.5" checked={options?.[key] !== false} onChange={ev => setOption(key, ev.target.checked)} />
			<span>{label}{help && <span className="block font-normal text-gray-500">{help}</span>}</span>
		</label>
	);

	const select = (key, label, values, fallback, labels) => (
		<div className="flex flex-col gap-1.5">
			<label htmlFor="" className={labelClass}>{label}</label>
			<select className={inputClass} value={options?.[key] ?? fallback} onChange={ev => setOption(key, ev.target.value)}>
				{values.map(v => <option key={v} value={v}>{labels?.[v] ?? v}</option>)}
			</select>
		</div>
	);

	var showAgain = options?.showAgain ?? 'always';

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				{check('editMode', 'Edit mode (builder only)', 'Shows the popup open on the canvas so its blocks can be edited. Off, it folds into one bar. The shop is not affected.')}

				<TriggerList title="Open when" help="Any one of these opens it. Without any, it never shows." catalogue={OPEN_TRIGGERS}
					value={options?.triggers} onChange={list => setOption('triggers', list)} />

				<TriggerList title="Close when" help="Besides the close button and Escape. Inside the popup, any element with the class popup-close also closes it." catalogue={CLOSE_TRIGGERS}
					value={options?.closeTriggers} onChange={list => setOption('closeTriggers', list)} />

				<div className={sectionClass}>
					<span className={sectionTitle}>Show again</span>
					<select className={inputClass} value={showAgain} onChange={ev => setOption('showAgain', ev.target.value)}>
						<option value="always">On every page view</option>
						<option value="session">Once per visit (browser session)</option>
						<option value="days">Once every few days</option>
						<option value="never">Only once, ever</option>
					</select>
					{showAgain === 'days' && (
						<label className="flex flex-col gap-1">
							<span className="text-[11px] text-gray-600">Days between showings</span>
							<input type="number" min="0" placeholder="7" className={inputClass} value={options?.showAgainDays ?? ''} onChange={ev => setOption('showAgainDays', ev.target.value === '' ? undefined : Number(ev.target.value))} />
						</label>
					)}
					<p className="text-[11px] text-gray-500">Counted per browser. Applies to the page's own triggers; a click or key trigger opens it whenever the visitor asks.</p>
				</div>

				<div className={sectionClass}>
					<span className={sectionTitle}>Appearance</span>
					{select('position', 'Position', Object.keys(POPUP_POSITIONS), 'center', POSITION_LABELS)}
					<div className="grid grid-cols-2 gap-2">
						{select('entranceAnimation', 'Entrance', ENTRANCE_ANIMATIONS, 'fadeIn')}
						{select('closeAnimation', 'Close', CLOSE_ANIMATIONS, 'fadeOut')}
					</div>
					{check('overlay', 'Dim the page behind it', 'Off, the page stays usable around it - for a corner notice.')}
					{options?.overlay !== false && check('lockScroll', 'Stop the page scrolling while open')}
					<label className="flex flex-col gap-1">
						<span className={labelClass}>Name for screen readers</span>
						<input type="text" placeholder="Popup" className={inputClass} value={options?.ariaLabel ?? ''} onChange={ev => setOption('ariaLabel', ev.target.value)} />
					</label>
				</div>

				<div className={sectionClass}>
					<span className={sectionTitle}>Close button</span>
					{check('closeButton', 'Show a close button')}
					{options?.closeButton !== false && (
						<>
							<div className="flex flex-col gap-1.5">
								<label htmlFor="" className={labelClass}>Icon</label>
								<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('closeIcon', args)} />
							</div>
							<label className="flex flex-col gap-1">
								<span className={labelClass}>Icon size</span>
								<input type="number" placeholder="20" className={inputClass} value={options?.closeIconSize ?? ''} onChange={ev => setOption('closeIconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
							</label>
						</>
					)}
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PopupOptions;
