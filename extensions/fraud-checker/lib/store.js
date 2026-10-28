/**
 * Where the fraud-check configuration lives.
 *
 * Under `fraudCheck` in the store settings blob - the same key, with the same
 * per-check shape, that SettingsGlobal.jsx wrote before this extension existed.
 * A store configured under the old screen is read back here unchanged, and a
 * store configured here is written where anything server-side would already
 * look for it.
 *
 * Saving posts only `fraudCheck`. `update_settings` merges what it is given,
 * so a one-key post leaves every other setting alone - and, more to the point,
 * cannot race the settings screen for keys this extension does not own. The
 * settings screen no longer posts `fraudCheck` at all, which is what makes
 * this the single writer.
 *
 * localStorage is a mirror, not the source: it keeps the screen usable while
 * the settings round-trip is in flight or has failed. It is never the store of
 * record, because a merchant configures in one browser and the rules would
 * have to apply from another.
 */

"use client";

import { create } from "zustand";
import { PROVIDERS } from "./providers";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const SETTINGS_KEY = "fraudCheck";
const STORAGE_KEY = "combostore_fraud_checker";

/**
 * Config arrives as an object, as a JSON string, or as nothing.
 *
 * The string case is not hypothetical - WordPress options round-trip a nested
 * array as a JSON string often enough that assuming the object shape means a
 * merchant sees an empty screen against a store that has settings. The same
 * guard discount-rules needed.
 */
export function parseConfig(raw) {
	let value = raw;

	if (typeof value === "string") {
		try {
			value = JSON.parse(value);
		} catch {
			return {};
		}
	}

	if (!value || typeof value !== "object" || Array.isArray(value)) return {};

	/* Keep only known checks, and only object values. A stray key from an older
	   build would otherwise be posted back forever, and a non-object would
	   crash the screen reading `.enabled` off it. */
	const known = new Set(PROVIDERS.map(p => p.id));

	return Object.fromEntries(
		Object.entries(value).filter(([key, entry]) =>
			known.has(key) && entry && typeof entry === "object" && !Array.isArray(entry))
	);
}

function readLocal() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);

		return raw ? parseConfig(JSON.parse(raw)) : null;
	} catch {
		/* Private windows, blocked site data and the server all land here. */
		return null;
	}
}

function writeLocal(config) {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
	} catch {
		/* Losing the mirror is not worth failing a save over. */
	}
}

export const useFraudCheckerStore = create((set, get) => ({

	/* Seeded empty rather than from storage: this store is read during render
	   and that render happens on the server too, so seeding from localStorage
	   would make the server markup and the first client render disagree. */
	config: {},

	hydrated: false,
	saving: false,
	dirty: false,
	error: null,
	/* Where what is on screen came from, so the merchant is told rather than
	   left guessing whether a save reached the server. */
	source: "none",

	/**
	 * Adopt config out of the store settings blob.
	 *
	 * Settings win over the local mirror whenever the key is present at all,
	 * including present and empty - a merchant who turned everything off must
	 * not have it resurrected from their own browser.
	 */
	hydrateFromSettings: (settings) => {
		/*
			Once, not on every settings change. `settings` gets a new identity
			whenever anything else in the dashboard is saved, and re-reading it
			then would discard edits in progress - a save elsewhere silently
			reverting the checkbox being set here.
		*/
		if (get().source === "settings") return;

		const hasKey = settings && Object.prototype.hasOwnProperty.call(settings, SETTINGS_KEY);

		if (hasKey) {
			set({
				config: parseConfig(settings[SETTINGS_KEY]),
				hydrated: true,
				dirty: false,
				source: "settings",
			});
			return;
		}

		if (get().hydrated) return;

		const local = readLocal();

		set({ config: local ?? {}, hydrated: true, source: local ? "local" : "none" });
	},

	/** Hydrate from the local mirror alone, for a load where settings never arrive. */
	hydrateLocal: () => {
		if (get().hydrated) return;

		const local = readLocal();

		set({ config: local ?? {}, hydrated: true, source: local ? "local" : "none" });
	},

	/* --- editing. Local only; nothing reaches the store until save(). --- */

	setField: (providerId, key, value) =>
		set((state) => ({
			dirty: true,
			config: {
				...state.config,
				[providerId]: { ...(state.config[providerId] ?? {}), [key]: value },
			},
		})),

	toggleProvider: (providerId) =>
		set((state) => ({
			dirty: true,
			config: {
				...state.config,
				[providerId]: {
					...(state.config[providerId] ?? {}),
					enabled: !state.config[providerId]?.enabled,
				},
			},
		})),

	/** Switch everything off without losing the numbers beside each switch. */
	disableAll: () =>
		set((state) => ({
			dirty: true,
			config: Object.fromEntries(
				Object.entries(state.config).map(([id, entry]) => [id, { ...entry, enabled: false }])
			),
		})),

	/* --- persistence --- */

	save: async (token) => {
		const { config } = get();

		writeLocal(config);

		if (!token) {
			const message = "Not signed in - settings were kept in this browser only.";

			set({ source: "local", error: message });

			return { ok: false, message };
		}

		set({ saving: true, error: null });

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/update_settings`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ [SETTINGS_KEY]: config }),
			});

			if (!response.ok) throw new Error(`Save failed (${response.status})`);

			const result = await response.json();

			if (result?.status === "failed") throw new Error(result?.message || "Save failed");

			set({ saving: false, dirty: false, source: "settings", error: null });

			return { ok: true, message: result?.message || "Fraud check settings saved." };
		} catch (e) {
			const message = e?.message ?? String(e);

			set({ saving: false, source: "local", error: message });

			return { ok: false, message };
		}
	},
}));
