"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

/*
	A date range filter for list pages (Purchases, Deliveries): a dropdown of
	quick ranges, plus "Custom range…" with From → To pickers. The page keeps
	only from / to as "yyyy-MM-dd" strings ("" = open); the dropdown shows the
	quick range they match, or Custom.

	Quick ranges are in the browser's time zone and include today.
*/

export const DATE_RANGES = [
	{ value: "today", label: "Today" },
	{ value: "yesterday", label: "Yesterday" },
	{ value: "last_7", label: "Last 7 days" },
	{ value: "last_30", label: "Last 30 days" },
	{ value: "this_month", label: "This month" },
	{ value: "last_month", label: "Last month" },
	{ value: "last_90", label: "Last 90 days" },
	{ value: "this_year", label: "This year" },
	{ value: "last_year", label: "Last year" },
];

/* A quick range as [from, to]. */
export function dateRange(value, now = new Date()) {
	var ymd = (d) => format(d, "yyyy-MM-dd");
	var day = (offset) => { var d = new Date(now); d.setDate(d.getDate() + offset); return d; };
	var y = now.getFullYear(), m = now.getMonth();
	switch (value) {
		case "today": return [ymd(now), ymd(now)];
		case "yesterday": return [ymd(day(-1)), ymd(day(-1))];
		case "last_7": return [ymd(day(-6)), ymd(now)];
		case "last_30": return [ymd(day(-29)), ymd(now)];
		case "last_90": return [ymd(day(-89)), ymd(now)];
		case "this_month": return [ymd(new Date(y, m, 1)), ymd(now)];
		case "last_month": return [ymd(new Date(y, m - 1, 1)), ymd(new Date(y, m, 0))];
		case "this_year": return [ymd(new Date(y, 0, 1)), ymd(now)];
		case "last_year": return [ymd(new Date(y - 1, 0, 1)), ymd(new Date(y - 1, 11, 31))];
		default: return ["", ""];
	}
}

const day10 = (value) => (value ? String(value).slice(0, 10) : "");

/* Which quick range from / to are: "" for none, else a value or "custom". */
export function matchDateRange(from, to) {
	from = day10(from);
	to = day10(to);
	if (!from && !to) return "";
	var hit = DATE_RANGES.find((r) => { var [f, t] = dateRange(r.value); return f === from && t === to; });
	return hit ? hit.value : "custom";
}

/* For a filter chip: "Last 30 days", "2026-02-01 → 2026-02-24", "from 2026-02-01"... */
export function dateRangeLabel(from, to) {
	var range = matchDateRange(from, to);
	if (range && range !== "custom") return DATE_RANGES.find((r) => r.value === range).label;
	from = day10(from);
	to = day10(to);
	if (from && to) return from === to ? from : `${from} → ${to}`;
	return from ? `from ${from}` : `until ${to}`;
}

/* "yyyy-MM-dd[ HH:mm:ss]" -> Date for react-datepicker, or null. */
export function toPickerDate(value) {
	if (!value) return null;
	var date = new Date(String(value).replace(" ", "T"));
	return isNaN(date) ? null : date;
}

const DEFAULT_INPUT =
	"w-36 !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 focus:!border-[#634FE5] focus:!outline-none";

/*
	from, to: "yyyy-MM-dd" or "". onChange(from, to) is called with both.
	Bump `resetKey` when the page clears the dates itself (a chip, "Clear
	all"), so the dropdown leaves Custom too.
*/
export default function DateRangeFilter({ from, to, onChange, resetKey = 0, selectClass = "", inputClass = DEFAULT_INPUT, anyLabel = "Any date" }) {

	/* "Custom range…" picked: keep the pickers showing, even before a date is set. */
	var [custom, setcustom] = useState(false);

	useEffect(() => { setcustom(false); }, [resetKey]);

	var value = custom ? "custom" : matchDateRange(from, to);

	return (
		<>
			<select className={selectClass} value={value} onChange={(ev) => {
				var picked = ev.target.value;
				if (picked === "custom") {
					setcustom(true);
					return;
				}
				setcustom(false);
				var [f, t] = dateRange(picked);
				onChange(f, t);
			}}>
				<option value="">{anyLabel}</option>
				{DATE_RANGES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
				<option value="custom">{("Custom range…")}</option>
			</select>

			{value === "custom" && (
				<div className="flex items-center gap-1.5">
					<DatePicker
						isClearable
						placeholderText="From"
						dateFormat="yyyy-MM-dd"
						className={inputClass}
						selected={toPickerDate(from)}
						maxDate={toPickerDate(to)}
						onChange={(date) => onChange(date ? format(date, "yyyy-MM-dd") : "", day10(to))}
					/>
					<span className="text-xs text-gray-400">→</span>
					<DatePicker
						isClearable
						placeholderText="To"
						dateFormat="yyyy-MM-dd"
						className={inputClass}
						selected={toPickerDate(to)}
						minDate={toPickerDate(from)}
						onChange={(date) => onChange(day10(from), date ? format(date, "yyyy-MM-dd") : "")}
					/>
				</div>
			)}
		</>
	);
}
