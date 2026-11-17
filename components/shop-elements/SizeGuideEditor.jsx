'use client'
import React from 'react'
import { IconPlus, IconTrash, IconX, IconRulerMeasure, IconPhoto } from "@tabler/icons-react";
import GalleryPicker from "./GalleryPicker";

/*
	Size guide for a product (the "Size Guide" addon), saved in
	cstore_products.size_guide:
	{ title, unit, columns: [string], rows: [[string]], note, image: { id, title, src } | null }

	Every row has one cell per column. The server pads/cuts rows the same way
	and caps the table at 12 columns and 60 rows
	(ComboStoreProduct::sanitize_size_guide).
*/

export const SIZE_GUIDE_UNITS = [
	{ value: 'cm', label: 'Centimetres (cm)' },
	{ value: 'in', label: 'Inches (in)' },
	{ value: 'mm', label: 'Millimetres (mm)' },
	{ value: 'eu', label: 'EU sizes' },
	{ value: 'us', label: 'US sizes' },
	{ value: 'uk', label: 'UK sizes' },
	{ value: '', label: 'No unit' },
];

export const SIZE_GUIDE_PRESETS = [
	{
		key: 'tops', label: 'Tops & shirts', unit: 'cm',
		columns: ['Size', 'Chest', 'Waist', 'Length', 'Sleeve'],
		rows: [['S', '86-91', '71-76', '69', '61'], ['M', '96-101', '81-86', '71', '62'], ['L', '106-111', '91-96', '74', '63'], ['XL', '116-121', '101-106', '76', '64']],
	},
	{
		key: 'bottoms', label: 'Trousers & jeans', unit: 'cm',
		columns: ['Size', 'Waist', 'Hip', 'Inseam'],
		rows: [['28', '71', '89', '76'], ['30', '76', '94', '78'], ['32', '81', '99', '80'], ['34', '86', '104', '81'], ['36', '91', '109', '82']],
	},
	{
		key: 'shoes', label: 'Shoes', unit: 'eu',
		columns: ['EU', 'UK', 'US', 'Foot length (cm)'],
		rows: [['39', '6', '7', '24.5'], ['40', '6.5', '7.5', '25'], ['41', '7.5', '8.5', '26'], ['42', '8', '9', '26.5'], ['43', '9', '10', '27.5'], ['44', '9.5', '10.5', '28']],
	},
	{
		key: 'blank', label: 'Blank table', unit: 'cm',
		columns: ['Size', 'Measurement'],
		rows: [['', '']],
	},
];

const MAX_COLUMNS = 12;
const MAX_ROWS = 60;

const INPUT_CLASS = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm";
const CELL_CLASS = "!shadow-none !border !border-transparent hover:!border-gray-200 focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full min-w-[80px] rounded-md bg-transparent px-2 py-1.5 text-sm";
const ICON_BUTTON = "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer";
const SECONDARY_BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50";

/* Whatever was saved (or nothing) as a well-formed guide. */
export function normalizeSizeGuide(value) {
	var guide = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
	var columns = Array.isArray(guide.columns) ? guide.columns.map(c => (c ?? '') + '') : [];
	var rows = Array.isArray(guide.rows) ? guide.rows.map(row => columns.map((_, i) => ((Array.isArray(row) ? row[i] : '') ?? '') + '')) : [];

	return {
		title: guide.title ?? '',
		unit: typeof guide.unit === 'string' ? guide.unit : 'cm',
		columns,
		rows,
		note: guide.note ?? '',
		image: guide.image?.src ? guide.image : null,
	};
}

const SizeGuideEditor = ({ value, onChange }) => {
	var guide = normalizeSizeGuide(value);
	var hasTable = guide.columns.length > 0;

	function update(patch) {
		onChange({ ...guide, ...patch });
	}

	function applyPreset(preset) {
		update({
			unit: preset.unit,
			columns: [...preset.columns],
			rows: preset.rows.map(row => [...row]),
		});
	}

	function setColumn(index, text) {
		update({ columns: guide.columns.map((c, i) => i === index ? text : c) });
	}

	function addColumn() {
		if (guide.columns.length >= MAX_COLUMNS) return;
		update({
			columns: [...guide.columns, ''],
			rows: guide.rows.map(row => [...row, '']),
		});
	}

	function removeColumn(index) {
		var columns = guide.columns.filter((_, i) => i !== index);
		update({
			columns,
			/* No columns left means no table at all. */
			rows: columns.length ? guide.rows.map(row => row.filter((_, i) => i !== index)) : [],
		});
	}

	function setCell(rowIndex, colIndex, text) {
		update({
			rows: guide.rows.map((row, r) => r === rowIndex ? row.map((cell, c) => c === colIndex ? text : cell) : row),
		});
	}

	function addRow() {
		if (guide.rows.length >= MAX_ROWS) return;
		update({ rows: [...guide.rows, guide.columns.map(() => '')] });
	}

	function removeRow(index) {
		update({ rows: guide.rows.filter((_, i) => i !== index) });
	}

	function clearTable() {
		update({ columns: [], rows: [] });
	}

	return (
		<div className="flex flex-col gap-5 p-4">

			<div className="grid gap-4 sm:grid-cols-[1fr_220px]">
				<div className="flex flex-col gap-1.5">
					<label htmlFor="size-guide-title" className="block text-sm font-medium text-gray-700">Title</label>
					<input
						id="size-guide-title"
						type="text"
						className={INPUT_CLASS}
						placeholder="Size guide"
						value={guide.title}
						onChange={ev => update({ title: ev.target.value })}
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="size-guide-unit" className="block text-sm font-medium text-gray-700">Measured in</label>
					<select
						id="size-guide-unit"
						className={INPUT_CLASS}
						value={guide.unit}
						onChange={ev => update({ unit: ev.target.value })}
					>
						{SIZE_GUIDE_UNITS.map(unit => (
							<option key={unit.value || 'none'} value={unit.value}>{unit.label}</option>
						))}
					</select>
				</div>
			</div>

			{!hasTable && (
				<div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center">
					<div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 ring-1 ring-gray-200">
						<IconRulerMeasure size={20} />
					</div>
					<div className="text-sm font-medium text-gray-900">Start the size chart</div>
					<p className="mt-1 text-xs text-gray-500">Pick a starting point. Every size, column and measurement can be edited afterwards.</p>
					<div className="mt-4 flex flex-wrap justify-center gap-2">
						{SIZE_GUIDE_PRESETS.map(preset => (
							<button key={preset.key} type="button" className={SECONDARY_BUTTON} onClick={() => applyPreset(preset)}>
								{preset.label}
							</button>
						))}
					</div>
				</div>
			)}

			{hasTable && (
				<div className="flex flex-col gap-3">
					<div className="flex items-center justify-between gap-3">
						<div className="text-sm font-medium text-gray-700">
							Size chart
							<span className="ml-2 text-xs font-normal text-gray-500">
								{guide.rows.length} {guide.rows.length === 1 ? 'size' : 'sizes'} · {guide.columns.length} {guide.columns.length === 1 ? 'column' : 'columns'}
							</span>
						</div>
						<button type="button" className="text-xs font-medium text-gray-500 hover:text-red-600" onClick={clearTable}>
							Clear table
						</button>
					</div>

					<div className="overflow-x-auto rounded-lg border border-gray-200">
						<table className="w-full border-collapse text-sm">
							<thead className="bg-gray-50">
								<tr>
									{guide.columns.map((column, c) => (
										<th key={c} className="border-b border-gray-200 px-1 py-1 text-left font-semibold">
											<div className="flex items-center gap-0.5">
												<input
													type="text"
													aria-label={`Column ${c + 1} name`}
													className={CELL_CLASS + " font-semibold text-gray-900"}
													placeholder={c === 0 ? 'Size' : 'Column name'}
													value={column}
													onChange={ev => setColumn(c, ev.target.value)}
												/>
												<button type="button" title="Remove column" className={ICON_BUTTON + " !h-6 !w-6"} onClick={() => removeColumn(c)}>
													<IconX size={14} />
												</button>
											</div>
										</th>
									))}
									<th className="w-10 border-b border-gray-200" />
								</tr>
							</thead>
							<tbody>
								{guide.rows.map((row, r) => (
									<tr key={r} className="border-b border-gray-100 last:border-0">
										{row.map((cell, c) => (
											<td key={c} className="px-1 py-0.5">
												<input
													type="text"
													aria-label={`${guide.columns[c] || `Column ${c + 1}`}, row ${r + 1}`}
													className={CELL_CLASS + (c === 0 ? " font-medium text-gray-900" : " text-gray-700")}
													value={cell}
													onChange={ev => setCell(r, c, ev.target.value)}
												/>
											</td>
										))}
										<td className="px-1 text-right">
											<button type="button" title="Remove row" className={ICON_BUTTON} onClick={() => removeRow(r)}>
												<IconTrash size={16} />
											</button>
										</td>
									</tr>
								))}
								{guide.rows.length === 0 && (
									<tr>
										<td colSpan={guide.columns.length + 1} className="px-3 py-4 text-center text-xs text-gray-500">No sizes yet. Add a row.</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					<div className="flex flex-wrap gap-2">
						<button type="button" className={SECONDARY_BUTTON} onClick={addRow} disabled={guide.rows.length >= MAX_ROWS}>
							<IconPlus size={16} /> Add size
						</button>
						<button type="button" className={SECONDARY_BUTTON} onClick={addColumn} disabled={guide.columns.length >= MAX_COLUMNS}>
							<IconPlus size={16} /> Add column
						</button>
					</div>
				</div>
			)}

			<div className="flex flex-col gap-1.5">
				<label htmlFor="size-guide-note" className="block text-sm font-medium text-gray-700">How to measure</label>
				<textarea
					id="size-guide-note"
					rows={3}
					className={INPUT_CLASS}
					placeholder="e.g. Measure around the fullest part of your chest, keeping the tape level. Between sizes? Choose the larger one."
					value={guide.note}
					onChange={ev => update({ note: ev.target.value })}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium text-gray-700">Measuring diagram <span className="font-normal text-gray-500">(optional)</span></div>
				{guide.image ? (
					<div className="flex items-center gap-3 rounded-lg border border-gray-200 p-2">
						<img src={guide.image.src} alt={guide.image.title || 'Measuring diagram'} className="h-16 w-16 rounded-md object-cover" />
						<div className="min-w-0 flex-1 truncate text-sm text-gray-700">{guide.image.title || 'Image'}</div>
						<button type="button" title="Remove image" className={ICON_BUTTON} onClick={() => update({ image: null })}>
							<IconTrash size={16} />
						</button>
					</div>
				) : (
					<div className="flex items-center gap-3">
						<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-400 ring-1 ring-gray-200"><IconPhoto size={18} /></span>
						<GalleryPicker
							title="Choose a measuring diagram"
							buttonLabel="Choose image"
							onPick={item => update({ image: { id: item.id, title: item.title, src: item.src } })}
						/>
					</div>
				)}
			</div>

		</div>
	);
};

export default SizeGuideEditor;
