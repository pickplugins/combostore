'use client'
import React from 'react'
import { IconShieldCheck } from "@tabler/icons-react";

/*
	Warranty for a product (the "Warranty" addon), saved in
	cstore_products.warranty:
	{ type, duration, period, provider, coverage, exclusions, claim, contact }

	The server checks the same values (ComboStoreProduct::sanitize_warranty):
	a lifetime warranty saves duration 0.
*/

export const WARRANTY_TYPES = [
	{ value: 'brand', label: 'Brand / manufacturer warranty' },
	{ value: 'seller', label: 'Seller warranty' },
	{ value: 'international', label: 'International warranty' },
	{ value: 'service', label: 'Service warranty' },
];

export const WARRANTY_PERIODS = [
	{ value: 'days', label: 'Days' },
	{ value: 'months', label: 'Months' },
	{ value: 'years', label: 'Years' },
	{ value: 'lifetime', label: 'Lifetime' },
];

const INPUT_CLASS = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm";

/* Whatever was saved (or nothing) as a well-formed warranty. */
export function normalizeWarranty(value) {
	var w = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
	var period = WARRANTY_PERIODS.some(p => p.value === w.period) ? w.period : 'months';
	return {
		type: WARRANTY_TYPES.some(t => t.value === w.type) ? w.type : 'brand',
		duration: period === 'lifetime' ? 0 : (parseInt(w.duration, 10) || 0),
		period,
		provider: w.provider ?? '',
		coverage: w.coverage ?? '',
		exclusions: w.exclusions ?? '',
		claim: w.claim ?? '',
		contact: w.contact ?? '',
	};
}

/* "12 months brand warranty", "Lifetime seller warranty", or '' with no length set. */
export function warrantySummary(w) {
	var type = (WARRANTY_TYPES.find(t => t.value === w.type)?.label ?? 'Warranty')
		.replace(' / manufacturer', '').toLowerCase();
	if (w.period === 'lifetime') return `Lifetime ${type}`;
	if (!w.duration) return '';
	var unit = w.period.replace(/s$/, '');
	return `${w.duration} ${w.duration === 1 ? unit : unit + 's'} ${type}`;
}

const WarrantyEditor = ({ value, onChange }) => {
	var warranty = normalizeWarranty(value);
	var summary = warrantySummary(warranty);

	function update(patch) {
		onChange({ ...warranty, ...patch });
	}

	const textarea = (key, label, placeholder) => (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={`warranty-${key}`} className="block text-sm font-medium text-gray-700">{label}</label>
			<textarea
				id={`warranty-${key}`}
				rows={3}
				className={INPUT_CLASS}
				placeholder={placeholder}
				value={warranty[key]}
				onChange={ev => update({ [key]: ev.target.value })}
			/>
		</div>
	);

	return (
		<div className="flex flex-col gap-5 p-4">

			<div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
				<span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#634FE5] ring-1 ring-gray-200">
					<IconShieldCheck size={18} />
				</span>
				<div className="min-w-0 text-sm">
					<div className="font-medium text-gray-900">{summary || 'No warranty length set'}</div>
					<div className="text-xs text-gray-500">{summary ? (warranty.provider ? `By ${warranty.provider}` : 'How shoppers will see it') : 'Set a length below, or choose Lifetime.'}</div>
				</div>
			</div>

			<div className="flex flex-col gap-1.5">
				<label htmlFor="warranty-type" className="block text-sm font-medium text-gray-700">Warranty type</label>
				<select id="warranty-type" className={INPUT_CLASS} value={warranty.type} onChange={ev => update({ type: ev.target.value })}>
					{WARRANTY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
				</select>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<div className="flex flex-col gap-1.5">
					<label htmlFor="warranty-duration" className="block text-sm font-medium text-gray-700">Length</label>
					<input
						id="warranty-duration"
						type="number"
						min={0}
						max={1200}
						className={INPUT_CLASS}
						placeholder="12"
						disabled={warranty.period === 'lifetime'}
						value={warranty.period === 'lifetime' ? '' : (warranty.duration || '')}
						onChange={ev => update({ duration: Math.max(0, parseInt(ev.target.value, 10) || 0) })}
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="warranty-period" className="block text-sm font-medium text-gray-700">Period</label>
					<select
						id="warranty-period"
						className={INPUT_CLASS}
						value={warranty.period}
						onChange={ev => update({ period: ev.target.value, ...(ev.target.value === 'lifetime' ? { duration: 0 } : {}) })}
					>
						{WARRANTY_PERIODS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
					</select>
				</div>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<div className="flex flex-col gap-1.5">
					<label htmlFor="warranty-provider" className="block text-sm font-medium text-gray-700">Provided by <span className="font-normal text-gray-500">(optional)</span></label>
					<input
						id="warranty-provider"
						type="text"
						className={INPUT_CLASS}
						placeholder="e.g. Samsung service centre"
						value={warranty.provider}
						onChange={ev => update({ provider: ev.target.value })}
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="warranty-contact" className="block text-sm font-medium text-gray-700">Claim contact <span className="font-normal text-gray-500">(optional)</span></label>
					<input
						id="warranty-contact"
						type="text"
						className={INPUT_CLASS}
						placeholder="Phone, email or website"
						value={warranty.contact}
						onChange={ev => update({ contact: ev.target.value })}
					/>
				</div>
			</div>

			{textarea('coverage', 'What is covered', 'e.g. Manufacturing defects and hardware faults under normal use.')}
			{textarea('exclusions', 'Not covered', 'e.g. Physical or liquid damage, burn marks, and repairs by unauthorised technicians.')}
			{textarea('claim', 'How to claim', 'e.g. Bring the product with its invoice and warranty card to any service centre.')}

		</div>
	);
};

export default WarrantyEditor;
