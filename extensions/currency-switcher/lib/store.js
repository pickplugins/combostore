/**
 * The merchant's currencies, and the one this shopper picked.
 *
 * The currencies and their rates belong to the merchant and ride the store
 * settings blob under `currencySettings`, written with the dashboard's JWT
 * through `update_settings` and read back on the storefront from
 * `get_settings_public` via `/api/settings` - the same path every other
 * setting takes, so there is no new endpoint.
 *
 * The chosen currency belongs to the shopper and lives in localStorage. It
 * is the right place for it: it is a preference, it is per browser, and it
 * decides nothing but what text a price is printed as. Rates are never read
 * from there - a shopper's own browser must not be able to set an exchange
 * rate.
 */

"use client";

import { create } from "zustand";
import { DEFAULT_SETTINGS } from "./defaults";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const SETTINGS_KEY = "currencySettings";
const STORAGE_KEY = "combostore_currency";

export function parseSettings(raw) {
	let value = raw;
	if (typeof value === "string") {
		try {
			value = JSON.parse(value);
		} catch (e) {
			value = null;
		}
	}
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		return { ...DEFAULT_SETTINGS };
	}
	return {
		...DEFAULT_SETTINGS,
		...value,
		currencies: Array.isArray(value.currencies)
			? value.currencies.filter((c) => c && typeof c === "object" && c.code)
			: [],
	};
}

function readLocal() {
	try {
		return window.localStorage.getItem(STORAGE_KEY) || null;
	} catch (e) {
		/* Private windows, blocked site data and the server all land here. */
		return null;
	}
}

function writeLocal(code) {
	try {
		if (code) window.localStorage.setItem(STORAGE_KEY, code);
		else window.localStorage.removeItem(STORAGE_KEY);
	} catch (e) {
		/* The choice still holds for this page view. */
	}
}

export const useCurrencyStore = create((set, get) => ({

	settings: { ...DEFAULT_SETTINGS },
	source: "none",
	saving: false,
	error: null,

	/*
		Null means the store's own currency, which is also what every render
		starts with - including the server's. The shopper's choice is read
		out of localStorage from an effect after mount, never during render,
		because seeding it during render would make the server markup and the
		first client render disagree on every price on the page.
	*/
	code: null,
	hydrated: false,

	fetchingRates: false,

	/* --- settings --- */

	hydrateFromSettings: (storeSettings) => {
		/* Once. `settings` gets a new identity whenever anything else in the
		   dashboard is saved, and re-reading it then would throw away a rate
		   the merchant is part-way through typing. */
		if (get().source === "settings") return;

		const hasKey = storeSettings
			&& Object.prototype.hasOwnProperty.call(storeSettings, SETTINGS_KEY);
		if (!hasKey) return;

		set({ settings: parseSettings(storeSettings[SETTINGS_KEY]), source: "settings" });
	},

	setSettings: (patch) => set((state) => ({ settings: { ...state.settings, ...patch } })),

	addCurrency: (currency) =>
		set((state) => (
			state.settings.currencies.some((c) => c.code === currency.code)
				? {}
				: { settings: { ...state.settings, currencies: [...state.settings.currencies, currency] } }
		)),

	updateCurrency: (code, patch) =>
		set((state) => ({
			settings: {
				...state.settings,
				currencies: state.settings.currencies.map((c) => (c.code === code ? { ...c, ...patch } : c)),
			},
		})),

	removeCurrency: (code) =>
		set((state) => ({
			settings: {
				...state.settings,
				currencies: state.settings.currencies.filter((c) => c.code !== code),
			},
		})),

	saveSettings: async (token) => {
		if (!token) {
			set({ error: "Not signed in." });
			return { ok: false, message: "Not signed in." };
		}

		set({ saving: true, error: null });

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/update_settings`, {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				/* Only the key this extension owns. `update_settings` merges
				   what it is given, so posting a whole blob would mean racing
				   the settings screen for everything else. */
				body: JSON.stringify({ [SETTINGS_KEY]: get().settings }),
			});

			if (!response.ok) throw new Error(`Save failed (${response.status})`);

			const res = await response.json();
			if (res?.status === "failed") throw new Error(res?.message || "Save failed");

			set({ saving: false, source: "settings", error: null });
			return { ok: true, message: res?.message || "Currencies saved." };

		} catch (e) {
			const message = e?.message ?? String(e);
			set({ saving: false, error: message });
			return { ok: false, message };
		}
	},

	/**
	 * Fill the rates in from a public exchange-rate service.
	 *
	 * Called from the dashboard by a merchant pressing a button, never from
	 * the storefront - a shopper's browser does not contact the service, and
	 * what they see is whatever number was saved here.
	 *
	 * The fetched rates are written into the form, not saved: a rate that
	 * looks wrong should be correctable before it reaches the shop.
	 */
	fetchRates: async (baseCode) => {
		const { settings } = get();
		const url = String(settings.ratesEndpoint ?? "").replace(/\{base\}/g, baseCode ?? "");

		if (!url) return { ok: false, message: "No rate source is set." };

		set({ fetchingRates: true, error: null });

		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(`The rate service answered ${response.status}.`);

			const res = await response.json();
			const rates = res?.rates ?? res?.conversion_rates ?? res?.data;
			if (!rates || typeof rates !== "object") {
				throw new Error("That response has no rates in it.");
			}

			const missing = [];
			const currencies = settings.currencies.map((currency) => {
				const rate = parseFloat(rates[currency.code]);
				if (!Number.isFinite(rate) || rate <= 0) {
					missing.push(currency.code);
					return currency;
				}
				return { ...currency, rate };
			});

			set((state) => ({
				fetchingRates: false,
				settings: {
					...state.settings,
					currencies,
					ratesUpdatedAt: new Date().toISOString(),
				},
			}));

			return {
				ok: true,
				missing,
				message: missing.length
					? `Rates filled in. The service had none for ${missing.join(", ")}.`
					: "Rates filled in. Check them, then save.",
			};

		} catch (e) {
			const message = e?.message ?? String(e);
			set({ fetchingRates: false, error: message });
			return { ok: false, message };
		}
	},

	/* --- the shopper's choice --- */

	/**
	 * Adopt the stored choice, or guess one on a first visit.
	 *
	 * `guess` is passed in rather than worked out here, so this stays a
	 * store action and the locale reading stays in the runtime where the
	 * browser is.
	 */
	hydrateChoice: (guess) => {
		if (get().hydrated) return;

		const stored = readLocal();
		const usable = get().settings.currencies
			.filter((c) => c.enabled !== false)
			.map((c) => c.code);

		/* A stored code for a currency the merchant has since removed or
		   switched off falls back to the base, rather than pricing in
		   something that is no longer offered. */
		if (stored && usable.includes(stored)) {
			set({ code: stored, hydrated: true });
			return;
		}

		set({ code: guess && usable.includes(guess) ? guess : null, hydrated: true });
	},

	choose: (code) => {
		writeLocal(code);
		set({ code: code || null });
	},
}));

/** The chosen currency object, or null for the store's own. */
export function activeCurrency(state) {
	if (!state?.code) return null;
	const found = (state.settings?.currencies ?? []).find((c) => c.code === state.code);
	return found && found.enabled !== false ? found : null;
}
