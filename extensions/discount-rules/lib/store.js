/**
 * Where the rules live.
 *
 * Rules are written by a merchant in one browser and have to apply to a
 * shopper in another, so the store of record is the WordPress side: they ride
 * in the store settings blob under `discountRules`, saved with the dashboard's
 * JWT through `update_settings` and read back on the storefront from
 * `get_settings_public` via `/api/settings` - the same path every other
 * setting takes, which is why no new endpoint is needed.
 *
 * localStorage is a mirror, not the source. It keeps the dashboard list
 * usable while the settings round-trip is in flight or has failed, and it is
 * what the editor falls back to offline. It is never trusted on the
 * storefront: a shopper's own browser must not be able to invent a discount.
 */

"use client";

import { create } from "zustand";
import { blankRule, STARTER_RULES } from "./defaults";
import { emptyResult } from "./engine";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const SETTINGS_KEY = "discountRules";
export const SETTINGS_OPTIONS_KEY = "discountRuleOptions";
const STORAGE_KEY = "combostore_discount_rules";

export const DEFAULT_OPTIONS = {
	/* Off by default: a merchant reading a list of offers expects two 10%
	   rules to take 20%, and compounding quietly makes the result depend on
	   the order the rules happen to sit in. */
	compound: false,
	maxTotalDiscount: 0,
	showBreakdown: true,
};

/* ------------------------------------------------------------------ */
/* parsing                                                             */
/* ------------------------------------------------------------------ */

/**
 * Rules arrive as an array, as a JSON string, or as nothing.
 *
 * The string case is not hypothetical: WordPress options round-trip a nested
 * array as a JSON string often enough that assuming the array shape means the
 * dashboard shows an empty list against a store that has rules.
 */
export function parseRules(raw) {
	if (!raw) return [];
	let value = raw;
	if (typeof value === "string") {
		try {
			value = JSON.parse(value);
		} catch (e) {
			return [];
		}
	}
	if (!Array.isArray(value)) return [];
	return value.filter((r) => r && typeof r === "object" && typeof r.id === "string");
}

export function parseOptions(raw) {
	let value = raw;
	if (typeof value === "string") {
		try {
			value = JSON.parse(value);
		} catch (e) {
			value = null;
		}
	}
	if (!value || typeof value !== "object" || Array.isArray(value)) return { ...DEFAULT_OPTIONS };
	return { ...DEFAULT_OPTIONS, ...value };
}

function readLocal() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		return {
			rules: parseRules(parsed?.rules),
			options: parseOptions(parsed?.options),
		};
	} catch (e) {
		/* Private windows, blocked site data and the server all land here. */
		return null;
	}
}

function writeLocal(rules, options) {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ rules, options }));
	} catch (e) {
		/* Losing the mirror is not worth failing a save over - the settings
		   round-trip is the one that matters. */
	}
}

/* ------------------------------------------------------------------ */
/* store                                                               */
/* ------------------------------------------------------------------ */

export const useDiscountRulesStore = create((set, get) => ({

	/*
		Seeded empty rather than from storage.

		The cart block reads this while rendering, and that render happens on
		the server too. Seeding from localStorage during render would make the
		server markup and the first client render disagree, which React does
		not patch up - the same trap extensions/README.md documents for the
		activation store.
	*/
	rules: [],
	options: { ...DEFAULT_OPTIONS },

	/*
		The latest engine run, published by the runtime component so anything
		that wants the breakdown can read it without evaluating again. Seeded
		with an empty result rather than null, so a reader that mounts before
		the runtime does gets the same shape instead of having to guard.
	*/
	result: emptyResult(0, 0),

	hydrated: false,
	loading: false,
	saving: false,
	error: null,
	/* Where the rules on screen came from, so the editor can say so instead of
	   leaving a merchant guessing whether a save reached the server. */
	source: "none",

	/**
	 * Adopt rules out of the store settings blob.
	 *
	 * Called from an effect once `settings` has been fetched. Settings win
	 * over the local mirror whenever the key is present at all, including when
	 * it is present and empty - a merchant who deleted every rule must not see
	 * them resurrected from their own browser.
	 */
	hydrateFromSettings: (settings) => {
		/*
			Once, not on every settings change.

			The editor and the runtime share this store, and `settings` gets a
			new identity whenever anything else on the settings screen is
			saved. Re-reading it then would throw away whatever rules the
			merchant had in progress - a save elsewhere in the dashboard
			silently discarding the rule being written.
		*/
		if (get().source === "settings") return;

		const hasKey = settings && Object.prototype.hasOwnProperty.call(settings, SETTINGS_KEY);

		if (hasKey) {
			set({
				rules: parseRules(settings[SETTINGS_KEY]),
				options: parseOptions(settings[SETTINGS_OPTIONS_KEY]),
				hydrated: true,
				source: "settings",
			});
			return;
		}

		if (get().hydrated) return;

		const local = readLocal();
		set({
			rules: local?.rules ?? [],
			options: local?.options ?? { ...DEFAULT_OPTIONS },
			hydrated: true,
			source: local ? "local" : "none",
		});
	},

	/** Hydrate from the local mirror alone, for a screen with no settings yet. */
	hydrateLocal: () => {
		if (get().hydrated) return;
		const local = readLocal();
		set({
			rules: local?.rules ?? [],
			options: local?.options ?? { ...DEFAULT_OPTIONS },
			hydrated: true,
			source: local ? "local" : "none",
		});
	},

	/* --- editing. Local only; nothing reaches the store until save(). --- */

	addRule: (preset) => {
		const rule = preset ? { ...preset, id: blankRule().id } : blankRule();
		set((state) => ({ rules: [...state.rules, rule] }));
		return rule;
	},

	updateRule: (id, patch) =>
		set((state) => ({
			rules: state.rules.map((r) => (r.id === id ? { ...r, ...patch } : r)),
		})),

	removeRule: (id) =>
		set((state) => ({ rules: state.rules.filter((r) => r.id !== id) })),

	duplicateRule: (id) =>
		set((state) => {
			const found = state.rules.find((r) => r.id === id);
			if (!found) return {};
			const copy = { ...structuredClone(found), id: blankRule().id, title: `${found.title} (copy)` };
			const at = state.rules.findIndex((r) => r.id === id);
			const next = state.rules.slice();
			next.splice(at + 1, 0, copy);
			return { rules: next };
		}),

	moveRule: (id, direction) =>
		set((state) => {
			const at = state.rules.findIndex((r) => r.id === id);
			const to = at + direction;
			if (at < 0 || to < 0 || to >= state.rules.length) return {};
			const next = state.rules.slice();
			[next[at], next[to]] = [next[to], next[at]];
			/* Priorities are renumbered to match the new order. Leaving them
			   alone would move the row and change nothing, because the engine
			   sorts on priority, not on position. */
			return { rules: next.map((r, i) => ({ ...r, priority: (i + 1) * 10 })) };
		}),

	setOptions: (patch) =>
		set((state) => ({ options: { ...state.options, ...patch } })),

	loadStarterRules: () =>
		set((state) => ({ rules: [...state.rules, ...structuredClone(STARTER_RULES)] })),

	replaceAll: (rules, options) =>
		set({ rules: parseRules(rules), options: parseOptions(options) }),

	/* --- persistence --- */

	/**
	 * Save to the store settings, mirroring locally either way.
	 *
	 * `update_settings` takes the whole settings blob on the settings screen,
	 * but it merges what it is given, so posting the two keys this extension
	 * owns leaves everything else alone. Posting a full blob from here would
	 * mean reading settings first and racing the settings screen for the keys
	 * in between.
	 */
	save: async (token) => {
		const { rules, options } = get();

		writeLocal(rules, options);

		if (!token) {
			set({ source: "local", error: "Not signed in - rules were kept in this browser only." });
			return { ok: false, message: "Not signed in - rules were kept in this browser only." };
		}

		set({ saving: true, error: null });

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/update_settings`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					[SETTINGS_KEY]: rules,
					[SETTINGS_OPTIONS_KEY]: options,
				}),
			});

			if (!response.ok) throw new Error(`Save failed (${response.status})`);

			const res = await response.json();

			if (res?.status === "failed") throw new Error(res?.message || "Save failed");

			set({ saving: false, source: "settings", error: null });
			return { ok: true, message: res?.message || "Discount rules saved." };

		} catch (e) {
			const message = e?.message ?? String(e);
			set({ saving: false, source: "local", error: message });
			return { ok: false, message };
		}
	},
}));
