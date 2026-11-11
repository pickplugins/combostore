import React, { useState, useEffect } from "react";
import { IconCheckbox, IconSquare, IconX } from "@tabler/icons-react";
import DropDown from "../../components/DropDown";

const inputClass = "!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	The Splide settings a slider can set, each with how it is edited and the
	value it starts at when added. Any Splide option works on the shop; these
	are the ones offered here.
*/
export const splideSettings = {
	type: { label: "Slider type", kind: 'select', choices: { slide: 'Slide', loop: 'Loop', fade: 'Fade' }, value: 'slide' },
	perPage: { label: "Per page", kind: 'number', value: 3 },
	perMove: { label: "Per move", kind: 'number', value: 1 },
	gap: { label: "Gap (e.g. 1em, 16px)", kind: 'text', value: '1em' },
	padding: { label: "Padding (e.g. 2rem)", kind: 'text', value: '' },
	focus: { label: "Focus", kind: 'select', choices: { '': 'None', center: 'Center', 0: 'First' }, value: 'center' },
	start: { label: "Start slide", kind: 'number', value: 0 },
	arrows: { label: "Arrows", kind: 'bool', value: true },
	pagination: { label: "Pagination dots", kind: 'bool', value: true },
	autoplay: { label: "Autoplay", kind: 'bool', value: true },
	interval: { label: "Autoplay interval (ms)", kind: 'number', value: 5000 },
	pauseOnHover: { label: "Pause on hover", kind: 'bool', value: true },
	pauseOnFocus: { label: "Pause on focus", kind: 'bool', value: true },
	speed: { label: "Speed (ms)", kind: 'number', value: 400 },
	rewind: { label: "Rewind", kind: 'bool', value: false },
	rewindSpeed: { label: "Rewind speed (ms)", kind: 'number', value: 400 },
	rewindByDrag: { label: "Rewind by drag", kind: 'bool', value: false },
	drag: { label: "Drag", kind: 'bool', value: true },
	snap: { label: "Snap", kind: 'bool', value: true },
	keyboard: { label: "Keyboard", kind: 'bool', value: true },
	wheel: { label: "Mouse wheel", kind: 'bool', value: false },
	releaseWheel: { label: "Release wheel", kind: 'bool', value: false },
	paginationKeyboard: { label: "Pagination keyboard", kind: 'bool', value: true },
	direction: { label: "Direction", kind: 'select', choices: { ltr: 'Left to right', rtl: 'Right to left', ttb: 'Top to bottom' }, value: 'ltr' },
	paginationDirection: { label: "Pagination direction", kind: 'select', choices: { ltr: 'Left to right', rtl: 'Right to left', ttb: 'Top to bottom' }, value: 'ltr' },
	lazyLoad: { label: "Lazy load", kind: 'select', choices: { nearby: 'Nearby', sequential: 'Sequential' }, value: 'nearby' },
	preloadPages: { label: "Preload pages", kind: 'number', value: 1 },
	cover: { label: "Cover", kind: 'bool', value: false },
	width: { label: "Width", kind: 'text', value: '' },
	height: { label: "Height", kind: 'text', value: '' },
	fixedWidth: { label: "Fixed width", kind: 'text', value: '' },
	fixedHeight: { label: "Fixed height", kind: 'text', value: '' },
	heightRatio: { label: "Height ratio", kind: 'number', value: 0.5 },
	autoWidth: { label: "Auto width", kind: 'bool', value: false },
	autoHeight: { label: "Auto height", kind: 'bool', value: false },
	noDrag: { label: "No drag (selector)", kind: 'text', value: 'input, textarea, .rich-text' },
	mediaQuery: { label: "Breakpoints are", kind: 'select', choices: { max: 'Max widths', min: 'Min widths' }, value: 'max' },
	breakpoints: { label: "Breakpoints (JSON)", kind: 'json', value: { 768: { perPage: 2 }, 480: { perPage: 1 } } },
};

/* An object setting (breakpoints) as JSON, saved once it parses. */
function JsonField({ value, onChange }) {
	var [text, setText] = useState(() => JSON.stringify(value ?? {}, null, 2));
	var [error, setError] = useState('');
	useEffect(() => { setText(JSON.stringify(value ?? {}, null, 2)); }, [JSON.stringify(value ?? {})]);
	return (
		<div className="flex flex-col gap-1">
			<textarea rows={5} className={`${inputClass} w-full font-mono`} value={text} onChange={ev => setText(ev.target.value)}
				onBlur={() => { try { var parsed = JSON.parse(text || '{}'); setError(''); onChange(parsed); } catch (e) { setError('Not valid JSON; not saved.'); } }} />
			{error && <p className="text-xs text-red-600">{error}</p>}
		</div>
	);
}

/*
	Edits a slider's Splide settings (options.sliderOptions): add a setting
	from the list, change it with the field its kind needs, or remove it.
	Every change builds a new object - the old panels wrote into the saved
	one - and numbers are saved as numbers. Settings it does not list are
	still shown, as text, so nothing saved is hidden.
*/
export default function SliderOptionsFields({ sliderOptions, onChange }) {

	var current = sliderOptions ?? {};
	var set = (key, value) => onChange({ ...current, [key]: value });
	var remove = (key) => { var next = { ...current }; delete next[key]; onChange(next); };

	var addable = Object.fromEntries(Object.entries(splideSettings).filter(([key]) => !(key in current)).map(([key, s]) => [key, { id: key, label: s.label, value: s.value }]));

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center justify-between gap-2">
				<label className="text-md font-medium text-gray-600">Slider settings</label>
				<DropDown allowReset={true} multiple={false} value={''} position="right" options={addable} label={`Add`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => args?.id && set(args.id, splideSettings[args.id]?.value ?? '')} />
			</div>

			{Object.entries(current).filter(([key]) => key !== 'classes').map(([key, value]) => {
				/* An object value (breakpoints, or padding as { left, right }) is always edited as JSON. */
				var known = splideSettings[key] ?? { label: key, kind: 'text' };
				var s = value && typeof value === 'object' ? { ...known, kind: 'json' } : known;
				return (
					<div key={key} className="flex flex-col gap-1 text-xs">
						<div className="flex items-center justify-between gap-2">
							<span className="text-gray-600">{s.label}</span>
							<span className="flex items-center gap-2">
								{s.kind === 'bool' && (
									<button type="button" className="cursor-pointer" onClick={() => set(key, !value)} aria-label={s.label}>
										{value ? <IconCheckbox size={18} /> : <IconSquare size={18} />}
									</button>
								)}
								{s.kind === 'number' && (
									<input type="number" className={`${inputClass} w-20`} value={value ?? ''} onChange={ev => set(key, ev.target.value === '' ? '' : Number(ev.target.value))} />
								)}
								{s.kind === 'text' && (
									<input type="text" className={`${inputClass} w-28`} value={value ?? ''} onChange={ev => set(key, ev.target.value)} />
								)}
								{s.kind === 'select' && (
									<select className={`${inputClass} w-32`} value={String(value ?? '')} onChange={ev => set(key, ev.target.value === '0' && key === 'focus' ? 0 : ev.target.value)}>
										{!(String(value ?? '') in s.choices) && <option value={String(value ?? '')}>{String(value)}</option>}
										{Object.entries(s.choices).map(([v, label]) => <option key={v} value={v}>{label}</option>)}
									</select>
								)}
								<button type="button" className="cursor-pointer text-gray-400 hover:text-red-600" onClick={() => remove(key)} aria-label={`Remove ${s.label}`}><IconX size={14} /></button>
							</span>
						</div>
						{s.kind === 'json' && <JsonField value={value} onChange={v => set(key, v)} />}
					</div>
				);
			})}
		</div>
	);
}
