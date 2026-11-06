import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const smallButton = 'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit';

const rows = [
	{ key: 'phone', title: 'Phone', placeholder: '+1 (555) 123-4567' },
	{ key: 'email', title: 'Email', placeholder: 'hello@example.com' },
	{ key: 'location', title: 'Location', placeholder: '123 Main St, City' },
];

/*
	Settings panel for the `address` block: the phone, email and location
	(value, label, icon; the map link for the location), whether labels show,
	the icon size, then its cssSelectors keys. Leave a value empty to hide
	that row.

	Every change builds new objects: the old panel wrote straight into the
	saved ones (options.phone.value = ...). A block saved as { text, icon }
	is moved to a location on its first edit.
*/
const AddressOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var raw = props?.options ?? {};

	/* The old one-line shape, read as a location (see addressItems). */
	var legacy = !raw.phone && !raw.email && !raw.location && raw.text !== undefined;
	var options = legacy ? { location: { value: raw.text, icon: raw.icon, label: 'Location' }, iconSize: raw.iconSize } : raw;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('address', props?.cssSelectors);

	const save = (next) => updateBlock('options', next);
	const setOption = (key, value) => save({ ...options, [key]: value });
	const setRow = (row, key, value) => save({ ...options, [row]: { ...(options?.[row] ?? {}), [key]: value } });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-4">

				{rows.map(row => (
					<div key={row.key} className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
						<div className="text-xs font-semibold text-gray-700">{row.title}</div>
						<input type="text" placeholder={row.placeholder} className={inputClass} value={options?.[row.key]?.value ?? ''} onChange={ev => setRow(row.key, 'value', ev.target.value)} />
						<input type="text" placeholder={`Label (e.g. ${row.title})`} className={inputClass} value={options?.[row.key]?.label ?? ''} onChange={ev => setRow(row.key, 'label', ev.target.value)} />
						<div className="flex items-center justify-between gap-2">
							<span className="text-xs text-gray-600">Icon{options?.[row.key]?.icon ? `: ${options[row.key].icon}` : ''}</span>
							<IconPicker allowReset={true} allowSearch={true} value={''} position={`right`} label={`Choose`} labelClass={smallButton} onOptionsChoose={(args) => setRow(row.key, 'icon', args)} />
						</div>
						{row.key === 'location' && (
							<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
								<input type="checkbox" checked={!!options?.location?.mapLink} onChange={ev => setRow('location', 'mapLink', ev.target.checked)} />
								Link to Google Maps (new tab)
							</label>
						)}
					</div>
				))}

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={!!options?.showLabels} onChange={ev => setOption('showLabels', ev.target.checked)} />
					Show the labels before the values
				</label>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="20" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<p className="text-xs text-gray-500">An empty value hides its row. Phone numbers dial and emails open the mail app; in the builder, links do nothing.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default AddressOptions;
