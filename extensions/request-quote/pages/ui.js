/**
 * The handful of class strings the quote screens share.
 *
 * Collected here rather than repeated so the three screens cannot drift into
 * three slightly different buttons.
 *
 * The `!` prefixes are not decoration: globals.css styles `input`, `select`
 * and `button` in unlayered rules that otherwise win over a utility class,
 * which is why the core dashboard screens mark these the same way.
 */

export const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:!opacity-50";

export const GHOST_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand disabled:!opacity-50";

export const FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-sm !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

export const SMALL_FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2 !py-1 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

export const CARD =
	"rounded-2xl border border-gray-200 bg-white p-5 shadow-sm";

export const TONES = {
	amber: "bg-amber-50 text-amber-700 border-amber-200",
	blue: "bg-blue-50 text-blue-700 border-blue-200",
	green: "bg-green-50 text-green-700 border-green-200",
	gray: "bg-gray-100 text-gray-600 border-gray-200",
};
