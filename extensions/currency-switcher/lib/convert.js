/**
 * Converting and formatting an amount.
 *
 * Pure: no React, no stores, no fetch. The same functions format a price on
 * the storefront, fill the preview table on the settings screen, and are
 * what a test asserts against - a rounding rule that can only be checked by
 * loading a shop page is a rounding rule nobody checks.
 *
 * Everything here is display only. Nothing in this file is ever written to a
 * cart, an order or a payment: those stay in the store's own currency, and
 * the extension's README says why.
 */

export function toNumber(value, fallback = NaN) {
	if (typeof value === "number") return Number.isFinite(value) ? value : fallback;
	if (value === null || value === undefined || value === "") return fallback;
	/* Amounts reach wrapCurrency as "1,250.00" as often as 1250 - a thousands
	   separator left in place makes parseFloat stop at the comma and quietly
	   price a product at 1. */
	const cleaned = String(value).replace(/,/g, "").trim();
	const n = parseFloat(cleaned);
	return Number.isFinite(n) ? n : fallback;
}

/**
 * The rounding a merchant actually asks for.
 *
 * `roundTo` is a step, not a precision: 1 gives whole units, 0.5 gives
 * halves, 5 rounds to the nearest five. Zero or missing means leave the
 * converted figure where it landed and let `decimals` do the trimming.
 */
export function applyRounding(amount, currency) {
	const step = toNumber(currency?.roundTo, 0);
	if (!(step > 0)) return amount;
	return Math.round(amount / step) * step;
}

export function convert(amount, currency) {
	const rate = toNumber(currency?.rate, NaN);
	if (!Number.isFinite(rate) || rate <= 0) return NaN;
	return applyRounding(amount * rate, currency);
}

/**
 * Group the integer part in threes.
 *
 * Done by hand rather than with `toLocaleString`, because the grouping would
 * then follow the shopper's browser locale rather than the currency, and the
 * server and the client can disagree about what that locale is - which is a
 * hydration mismatch on every price on the page.
 */
function group(integerText, separator) {
	if (!separator) return integerText;
	return integerText.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function formatNumber(amount, currency) {
	const decimals = Math.max(0, Math.min(4, parseInt(currency?.decimals, 10) || 0));
	const thousands = currency?.thousands ?? ",";
	const decimalPoint = currency?.decimal ?? ".";

	const negative = amount < 0;
	const fixed = Math.abs(amount).toFixed(decimals);
	const parts = fixed.split(".");

	const text = group(parts[0], thousands) + (parts[1] ? decimalPoint + parts[1] : "");
	return negative ? `-${text}` : text;
}

export function withSymbol(text, currency) {
	const symbol = currency?.symbol ?? "";
	const space = currency?.space === true ? " " : "";

	if (currency?.position !== "before") return `${text}${space}${symbol}`;

	/* A leading symbol goes inside the minus sign, not after it: a refund
	   line reads "-$12.00" everywhere, and "$-12.00" looks like a typo. */
	const negative = text.startsWith("-");
	const digits = negative ? text.slice(1) : text;
	return `${negative ? "-" : ""}${symbol}${space}${digits}`;
}

/**
 * The whole job: a raw amount in the store's currency to display text.
 *
 * Returns null when the value is not a number it can convert - a caller
 * passing an empty string, a dash, or already-formatted text. Core reads
 * null as "not mine" and formats the value the way it always has, which
 * means an odd input degrades to the old behaviour instead of printing
 * "NaN" on a product page.
 */
export function formatPrice(value, currency) {
	if (!currency) return null;

	const amount = toNumber(value, NaN);
	if (!Number.isFinite(amount)) return null;

	const converted = convert(amount, currency);
	if (!Number.isFinite(converted)) return null;

	return withSymbol(formatNumber(converted, currency), currency);
}

/**
 * Pick a currency from the browser's locale, for a first-time visitor.
 *
 * Deliberately conservative: it matches on the region at the end of a locale
 * tag and only ever returns a currency the merchant has already enabled.
 * Guessing wrong is worse than not guessing - a shopper shown the wrong
 * currency may not notice it is wrong.
 */
export const REGION_CURRENCY = {
	US: "USD", GB: "GBP", AU: "AUD", CA: "CAD", NZ: "NZD", SG: "SGD",
	IN: "INR", BD: "BDT", PK: "PKR", LK: "LKR", NP: "NPR",
	AE: "AED", SA: "SAR", QA: "QAR", KW: "KWD", OM: "OMR", BH: "BHD",
	MY: "MYR", ID: "IDR", TH: "THB", PH: "PHP", VN: "VND", CN: "CNY",
	JP: "JPY", KR: "KRW", ZA: "ZAR", NG: "NGN", KE: "KES", EG: "EGP",
	TR: "TRY", RU: "RUB", BR: "BRL", MX: "MXN", CH: "CHF", SE: "SEK",
	NO: "NOK", DK: "DKK", PL: "PLN",
	DE: "EUR", FR: "EUR", ES: "EUR", IT: "EUR", NL: "EUR", BE: "EUR",
	AT: "EUR", IE: "EUR", PT: "EUR", FI: "EUR", GR: "EUR",
};

export function guessCurrency(locales, enabledCodes) {
	const available = new Set(enabledCodes ?? []);
	for (const locale of locales ?? []) {
		const region = String(locale).split("-").pop();
		if (!region || region.length !== 2) continue;
		const code = REGION_CURRENCY[region.toUpperCase()];
		if (code && available.has(code)) return code;
	}
	return null;
}
