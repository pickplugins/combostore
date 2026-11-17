import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const labelClass = "text-xs font-medium text-gray-600";

/* The editor's timezone, named, for the note under the date field. */
function browserTimeZone() {
	try {
		return Intl.DateTimeFormat().resolvedOptions().timeZone || 'your timezone';
	} catch (e) {
		return 'your timezone';
	}
}

/*
	Settings panel for the `countdownTimer` block: what it counts to (a fixed
	date, or a per-visitor window), how it looks, what happens at zero, the
	prefix, then its cssSelectors keys.

	The date field is a wall-clock time in the editor's own timezone. Picking
	one also saves `endsAt`, the exact UTC moment, which is what the shop
	counts to - so a shopper elsewhere sees the same end, not the same clock
	time in their zone.
*/
const CountdownTimerOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('countdownTimer', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	const setOptions = (patch) => updateBlock('options', { ...options, ...patch });

	const field = (key, label, placeholder) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className={labelClass}>{label}</label>
			<input type="text" placeholder={placeholder} className={inputClass} value={options?.[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
		</div>
	);

	const check = (key, label) => (
		<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" checked={options?.[key] !== false} onChange={ev => setOption(key, ev.target.checked)} />
			{label}
		</label>
	);

	var evergreen = options?.mode === 'evergreen';
	var endsAt = Date.parse(options?.endsAt || '');
	var ended = Number.isFinite(endsAt) && endsAt <= Date.now();

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>Counts down to</label>
					<select className={inputClass} value={evergreen ? 'evergreen' : 'date'} onChange={ev => setOption('mode', ev.target.value)}>
						<option value="date">A fixed date and time</option>
						<option value="evergreen">A time window from each visitor's first view</option>
					</select>
				</div>

				{!evergreen && (
					<div className="flex flex-col gap-2">
						<label htmlFor="" className={labelClass}>Ends at</label>
						<input type="datetime-local" className={inputClass} value={options?.endDate ?? ''}
							onChange={ev => {
								var value = ev.target.value;
								var moment = value ? new Date(value) : null;
								setOptions({ endDate: value, endsAt: moment && Number.isFinite(moment.getTime()) ? moment.toISOString() : '' });
							}} />
						<p className="text-xs text-gray-500">In {browserTimeZone()}. Every shopper counts to this same moment, wherever they are.</p>
						{!options?.endsAt && <p className="text-xs text-amber-700">Pick an end - until then the shop shows nothing and the builder a sample.</p>}
						{ended && <p className="text-xs text-amber-700">This date has passed, so the timer has ended.</p>}
					</div>
				)}

				{evergreen && (
					<div className="flex flex-col gap-2">
						<label htmlFor="" className={labelClass}>Window length (minutes)</label>
						<input type="number" min="1" step="1" placeholder="60" className={inputClass} value={options?.durationMinutes ?? ''} onChange={ev => setOption('durationMinutes', ev.target.value === '' ? undefined : Number(ev.target.value))} />
						<p className="text-xs text-gray-500">Starts when a visitor first sees this block and is remembered in their browser. 1440 is one day. Changing the length starts everyone's window again.</p>
					</div>
				)}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>Layout</label>
					<select className={inputClass} value={options?.layout === 'inline' ? 'inline' : 'boxes'} onChange={ev => setOption('layout', ev.target.value)}>
						<option value="boxes">Boxes (a unit each)</option>
						<option value="inline">Inline (2d 05:14:09)</option>
					</select>
				</div>

				{check('showDays', 'Show days (off: hours count past 24)')}
				{check('showSeconds', 'Show seconds')}
				{options?.layout !== 'inline' && check('showLabels', 'Show unit labels')}

				{options?.layout !== 'inline' && (
					<>
						{field('separator', 'Separator between units', ':')}
						<div className="grid grid-cols-2 gap-3">
							{field('daysLabel', 'Days label', 'Days')}
							{field('hoursLabel', 'Hours label', 'Hours')}
							{field('minutesLabel', 'Minutes label', 'Minutes')}
							{field('secondsLabel', 'Seconds label', 'Seconds')}
						</div>
					</>
				)}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>When it reaches zero</label>
					<select className={inputClass} value={options?.expired ?? 'hide'} onChange={ev => setOption('expired', ev.target.value)}>
						<option value="hide">Hide the block</option>
						<option value="message">Show a message</option>
						<option value="zero">Stay at 00</option>
					</select>
				</div>
				{options?.expired === 'message' && field('expiredText', 'Message', 'This offer has ended.')}

				{field('prefix', 'Text before the timer', 'Sale ends in')}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>Icon</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>Icon size</label>
					<input type="number" placeholder="18" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default CountdownTimerOptions;
