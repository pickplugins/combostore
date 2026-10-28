/**
 * Defaults, and the catalogue a merchant adds currencies from.
 */

/**
 * The store's own currency.
 *
 * Hardcoded in store/useCounterStore.js rather than read from settings, so
 * it is read from there at runtime rather than copied here - if it ever
 * does become configurable, this extension follows without being edited.
 * Every `rate` below is "how many of this currency one unit of the base
 * buys", so the base is always rate 1 and is never in the list.
 */

/* Enough to fill the picker without the merchant typing symbols from
   memory. Rates are left at 0 on purpose: a made-up rate that looks
   plausible is the one mistake that would go unnoticed. */
export const CURRENCY_CATALOGUE = [
	{ code: "USD", symbol: "$", decimals: 2 },
	{ code: "EUR", symbol: "€", decimals: 2 },
	{ code: "GBP", symbol: "£", decimals: 2 },
	{ code: "INR", symbol: "₹", decimals: 2 },
	{ code: "AUD", symbol: "A$", decimals: 2 },
	{ code: "CAD", symbol: "C$", decimals: 2 },
	{ code: "SGD", symbol: "S$", decimals: 2 },
	{ code: "AED", symbol: "AED", decimals: 2 },
	{ code: "SAR", symbol: "SAR", decimals: 2 },
	{ code: "MYR", symbol: "RM", decimals: 2 },
	{ code: "JPY", symbol: "¥", decimals: 0 },
	{ code: "CNY", symbol: "¥", decimals: 2 },
	{ code: "PKR", symbol: "Rs", decimals: 0 },
	{ code: "LKR", symbol: "Rs", decimals: 0 },
	{ code: "NPR", symbol: "Rs", decimals: 0 },
	{ code: "BDT", symbol: "Tk", decimals: 0 },
	{ code: "TRY", symbol: "₺", decimals: 2 },
	{ code: "ZAR", symbol: "R", decimals: 2 },
	{ code: "BRL", symbol: "R$", decimals: 2 },
	{ code: "CHF", symbol: "CHF", decimals: 2 },
];

export function blankCurrency(code) {
	const known = CURRENCY_CATALOGUE.find((c) => c.code === code);
	return {
		code: code ?? "",
		label: "",
		symbol: known?.symbol ?? code ?? "",
		position: "before",
		space: false,
		decimals: known?.decimals ?? 2,
		thousands: ",",
		decimal: ".",
		/* Zero, not one. One would mean "same as the base currency", which
		   silently prints base prices under a foreign symbol - the worst
		   possible default. Zero is refused by the converter instead. */
		rate: 0,
		roundTo: 0,
		enabled: true,
	};
}

export const DEFAULT_SETTINGS = {

	/* Nothing until the merchant adds something. The base currency keeps
	   working on its own, so an installed-but-unconfigured extension
	   changes nothing a shopper sees. */
	currencies: [],

	/* Guessing from the browser's locale, on a first visit only. Off by
	   default: a shopper shown the wrong currency may not notice. */
	autoDetect: false,

	showNote: true,
	noteTemplate: "Prices shown in {display}. You will be charged in {base}.",

	/* The rate source the dashboard button calls. The storefront never
	   touches it - see the extension README. */
	ratesEndpoint: "https://open.er-api.com/v6/latest/{base}",

	/* Stamped when rates were last filled in, so the screen can say how old
	   they are rather than letting a year-old rate look current. */
	ratesUpdatedAt: "",
};

export function noteText(template, baseCode, displayCurrency) {
	return String(template ?? "")
		.replace(/\{base\}/g, baseCode ?? "")
		.replace(/\{display\}/g, displayCurrency?.code ?? "");
}
